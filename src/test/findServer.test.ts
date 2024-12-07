import axios from 'axios';
import { findServer } from '../findServer'; // Your function to test

jest.mock('axios'); // Mock axios
const mockedAxios = axios as jest.Mocked<typeof axios>;
// console.log(jest.isMockFunction(mockedAxios.get)); 
const servers = [
  { url: "https://does-not-work.perfume.new", priority: 1 },
  { url: "https://gitlab.com", priority: 4 },
  { url: "http://app.scnt.me", priority: 3 },
  { url: "https://offline.scentronix.com", priority: 2 },
];

describe('findServer', () => {
  it('should return the online server with the lowest priority', async () => {
    mockedAxios.get.mockImplementation((url) => {
      if (url === "https://gitlab.com") {
        return Promise.resolve({ status: 200 });
      } else {
        return Promise.reject(new Error('Network Error'));
      }
    });

    const result = await findServer(servers);
    expect(result).toEqual({ url: "https://gitlab.com", priority: 4,online: true, });
  });

  it('should throw an error if no servers are online', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    await expect(findServer(servers)).rejects.toThrow('No servers are online');
  });
});
