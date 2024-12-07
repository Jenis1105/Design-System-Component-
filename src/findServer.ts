
import axios from 'axios';

export const findServer = async (servers: { url: string; priority: number }[]) => {
  const onlineServers = await Promise.allSettled(
    servers.map((server) =>
      axios.get(server.url, { timeout: 5000 }).then((response) => ({
        ...server,
        online: response.status >= 200 && response.status < 300,
      }))
    )
  );

  const filteredServers = onlineServers
    .filter((result) => result.status === 'fulfilled' && result.value.online)
    .map((result) => (result as PromiseFulfilledResult<any>).value);

  if (filteredServers.length === 0) {
    throw new Error('No servers are online');
  }

  return filteredServers.reduce((prev, curr) =>
    prev.priority < curr.priority ? prev : curr
  );
};
