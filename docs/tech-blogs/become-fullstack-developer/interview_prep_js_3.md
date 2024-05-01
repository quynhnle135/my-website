---
title: Interview Preparation - JavaScript (3)
---

# Interview Preparation - JavaScript (3)

### Synchronous vs Asynchronous Programming
- Synchronous code: executed line-by-line in the order that it is written, and one line of code must finish execution before the next line is executed &rarr;<mark> Long-running operations will block code execution.</mark>
- Asynchronous code: a line of code doesn't need to finish execution before the next line is executed &rarr;<mark> Prevents long-running operations from blocking execution</mark>

---

### What is Execution Context (EC)?
- When you run a JavaScript program, the JavaScript engine (like V8) creates execution contexts manage and execute the code.
- When the JavaScript code is run:
    - The JavaScript engine creates the Global Execution Context first for any code that isn't inside a function
    - When a function is called, the engine creates a new Execution Context for that function call. This new context is where the function's variables and inner functions live. 
    - Each function call gets its own Execution Context, allowing JavaScript to handle nested functions and recursive functions call effectively. 
    - Once a function finishes executing, its Execution Context is removed, and the engine returns to the context of calling function, until all code execution is complete. 
&rarr; <mark>JavaScript Execution Context is the environment in which JavaScript code is executed.</mark>

---

### What is Event Loop in JavaScript?
- Event loop is a runtime model that handles execution of synchronous and asynchronous code using these data structures:
    - Call stack
    - Task queue (aka Callback Queue, Message Queue):
        - Macrotask queue (event listener, timeout, interval)
        - Microtask queue (promises)
- Order: synchronous > promises > other callbacks

---

### What is REST?
- Representational State Transfer (REST): a software architecture for managing internet communications between applications.
- Uniform interface: servers should transfer information
- Representation: data that is sent in a standard format (can differ from the actual structure)
- Server responses should have enough information that describes how the clien should process & manipulate it.
- Stateless: server sucessfully completes each request independently (doesn't store anything related to previous requests)

---

### What is HTTP? 
- Hypertext Transfer Protocol (HTTP): a network communication protocol for exchanging information (HTML files, JSON data...) between devices. 
- HTTP Request: what web clients (browsers) send to a server to retrieve or submit data. 
- HTTP Repsonse: what web clients (browsers) receive from a server to confirm that their request was received (may contain the requested data).
- Status code: 3-digit codes that indicate whether the request was successfully completed. 
- HTTP version, destination url, HTTP method:
    - Headers: contains core information (browser, data type) in key-value pairs
    - Body (optional): the part of the request or response that contains the data

---

### HTTP Request Methods
- GET: request data from a specifc resource (should not have a body)
- POST: send data to a server to create a resource.
    - Can be used to send a data body that identifies resources that you want to retrieve
- PUT: send data to a server to replace a resource (for updating)
    - Idempotent: sending the same PUT request multiple times always has the same result (no side effects)
- DELETE: send data to a server, telling it what resource(s) to delete

---

### HTTP Status Code:
- 100 - 199: Informational responses
- 200 - 299: Successful responses
- 300 - 399: Redirection message
- 400 - 499: Client error responses
- 500 - 599: Server error repsonses

---

### AJAX
- Asynchronous JavaScript and XML (AJAX): using XMLHttpRequest objects to asynchronously communicate with 