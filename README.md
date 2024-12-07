Here’s a **README.md** file template for your GitHub project based on the Node.js backend task:

---

# Node.js Back-end Server Assessment

## **Overview**
This project demonstrates a function to assess a list of web servers and determine the online server with the lowest priority. The solution includes:  
- A `findServer()` function that handles asynchronous requests and checks server statuses.  
- Mocked unit tests for validating functionality.  
- Adherence to production-level standards using **Node.js** and **TypeScript**.

---

## **Features**
1. **Server Assessment:**  
   - Runs HTTP GET requests in parallel to assess server statuses.
   - Considers servers with response status codes between **200-299** as online.  
   - Identifies the online server with the lowest priority.

2. **Timeout Handling:**  
   - Requests timeout after 5 seconds if no response is received.

3. **Error Handling:**  
   - Returns a promise rejection if no servers are online.

4. **Unit Testing:**  
   - Comprehensive unit tests written with mocked server responses.  

---

## **Technologies Used**
- **Node.js**: Backend runtime environment.  
- **TypeScript**: For static typing and code maintainability.  
- **Jest**: Unit testing framework with mocking capabilities.  
- **Axios**: HTTP client for API requests.  

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/Jenis1105/Design-System-Component-.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Design-System-Component-
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## **Usage**

1. **Run the Application:**  
   ```bash
   npm start
   ```
   The `findServer()` function will be called to assess the JSON array and return the online server with the lowest priority.

2. **Run Tests:**  
   ```bash
   npm test
   ```
   Executes the unit tests with mocked server responses.

---

## **Project Structure**

```plaintext
.
├── src
│   ├── findServer.ts         # Core function implementation
│   └── test
│       ├── findServer.test.ts # Unit tests with mocks
├── package.json
├── tsconfig.json             # TypeScript configuration
├── jest.config.js            # Jest configuration
└── README.md                 # Project documentation
```

---

## **Example JSON Input**
```json
[
  {
    "url": "https://does-not-work.perfume.new",
    "priority": 1
  },
  {
    "url": "https://gitlab.com",
    "priority": 4
  },
  {
    "url": "http://app.scnt.me",
    "priority": 3
  },
  {
    "url": "https://offline.scentronix.com",
    "priority": 2
  }
]
```

---

## **Expected Output**
- Returns the online server with the lowest priority.
- Rejects the promise if all servers are offline.

---

## **Contributing**
Contributions are welcome!  
Feel free to open issues or submit pull requests.

---

## **License**
This project is licensed under the MIT License.  

--- 

