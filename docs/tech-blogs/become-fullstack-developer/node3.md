---
title: Node.js Introduction and Fundamental (3)
---

# Node.js Introduction and Fundamental (3)

## Different patterns in Node.js

### Blocking and non-blocking code in Node.js
- Blocking methods execute synchronously, which means that tasks will be executed one after another and it can only continue if the previous task is completed. Meanwhile, non-blocking methods execute asynchrously.
- <mark>Non-blocking paradigms allow Node.js to process other code or make other requests while waiting for a response from some long-running operations</mark>, such as network request &rarr; Non-blocking code can also make a network application <mark>scalable</mark>.
- Examples of blocking and non-blocking code in Node.js:

```javascript title="ModuleTwo/blocking_code.js"
// Import file system
const fs = require("fs");
const EventEmitter = require("events");

const myEmitter = new EventEmitter();
myEmitter.on("hello", function (name) {
  console.log("Hello,", name);
});

/// While waiting for the file to be read, the program cannot do anything else
const data = fs.readFileSync(
  "/Users/quinnle/become-node-js-developer/ModuleTwo/file.md",
  "utf-8"
);

console.log(data);
myEmitter.emit("hello", "quinn le");  // only run when the file is done being read
```


```javascript title="ModuleTwo/nonblocking_code.js"
// Import file system module
const fs = require("fs");

// Import events module
const EventEmitter = require("events");

const myEmitter = new EventEmitter();
myEmitter.on("function one", function () {
  console.log("Funtion one!");
});

const data = fs.readFile(
  "/Users/quinnle/become-node-js-developer/ModuleTwo/file.md",
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

console.log(data);
myEmitter.emit("function one"); // this function still runs while file is being read
```

---

## The fs module & Promises, Async, and Await:
- The ```fs``` module is a built-in global Node.js module that exposes an API for accessing, manipulating, and interacting with the file system. 
- All ```fs``` operations are available either in synchronous or asynchronous forms.
- In Node.js, promises, async, and await are concepts and features used to handle asynchronous operations, which are operations where you don't get result immediately and don't want to block your program while waiting for those results
- <b>Promises</b>: 
    - A promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
    - It's a way to handle asynchronous tasks that allows you to attach callbacks instead of using complex nested callbacks.
- <b>Async/Await</b>: 
    - Are extensions of promises that simplify working with asynchronous operations even futher.
    - They allow you to write asynchronous code that looks and behaves a bit more like synchronous code, which is easier to understand and maintain.
    - ```async```: You put ```async``` before a function declaration to turn it into an asynchronous function &rarr; <mark>This means the function will return a promise.</mark> 
    - ```await```: You use ```await``` inside ```async``` function <mark>to pause your code on that line until the promise fulfills, and then return the resulting value</mark>. ```await``` only works inside ```async``` function. 

- For example: 

```javascript
const fs = require("fs").promises;

const filePath =
  "/Users/quinnle/become-node-js-developer/ModuleTwo/NodeAPI/test.txt";

const getStats = async (path) => {
  try {
    const stats = await fs.stat(path);
    console.log(`isFile: ${stats.isFile()}`);
    console.log(`isDirectory: ${stats.isDirectory()}`);
  } catch (error) {
    console.log(error);
  }
};

console.log("This is the first message");
console.log("Getting stats...");
getStats(filePath);
console.log("This is the second message");

```

- Explanation: 
    - For the code snippet above, three messages using ```console.log()``` will be printed out first then data from ```getStats()``` because this is asynchronous programming. 
    - ```const stats = await fs.stat(path);```: the ```await``` keyword cause the async function to wait until it finished retrieved given path's stats &rarr; So the ```getStats()```is paused, while other tasks are continued executed in the program.
    - Why it's ```const fs = require("fs").promises;"``` but not ```const fs = require("fs")```?
        - Both can work but the way they handle asynchronous programming is different. 
        - Traditional ```fs``` module uses callback-based functions for asynchronous operations. This means that to perform an operation like reading a file, you would provide a function (a callback) that gets called when the operation completes. 
        ```javascript
            const fs = require("fs");

            fs.readFile('/path/to/file', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data);
            });
        ``` 
        - ```fs.promises``` API: provides a way to work with file system operations using promises instead of callbacks. This allows you to use async/await syntax, which can make your code cleaner and easier to read.
        ```javascript
            const fs = require("fs").promises;
            async function readFile() {
                try {
                    const data = await fs.readFile('/path/to/file/', 'utf-8');
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            }
        ```

### Write To File Coding Challenge

```javascript
const { write } = require("fs");

const fs = require("fs").promises;

const writeToFile = async (path, newContent) => {
  try {
    await fs.writeFile(path, newContent);
    console.log("New content was written successfully.");
  } catch (error) {
    console.log(error);
  }
};

const readFromFile = async (path) => {
  try {
    const data = await fs.readFile(path, "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const filePath = "/Users/quinnle/become-node-js-developer/ModuleTwo/CodeChallenge/test.txt";

writeToFile(filePath, "this is a new content");
readFromFile(filePath);

```

---

## Process in Node.js
- The ```process``` object provides information about the current Node.js process and allows the program to interact with it.
- The ```process``` is a <mark>global object</mark>, so it can be accessed anywhere inside our Node.js applications without using ```require()```. Furthermore, it provides information about and control over the current Node.js process.
- What does ```process.argv``` do in Node.js?
    - The ```process.argv``` property allows you to access the values passed into the application from the command line.
    - ```process.argv``` is an array containing the command-line arguments passed when the Node.js process was launched.
    - The first element (process.argv[0]) is the path to the Node.js executable that is running the script.
    - The second element (process.argv[1]) is the path to the JavaScript file that is being executed.
    - Any additional elements (process.argv[2], process.argv[3], ...) are any command-line arguments provided when the script was run.
        ```javascript
        
        const name = process.argv[2];
        const location = process.argv[3];
        console.log("process.argv[0]", process.argv[0]);
        console.log("process.argv[1]", process.argv[1]);
        console.log(`hi, ${name}`);
        console.log(`Hi, I am ${name} and I live in ${location}`);
        ```

    Result after entering this in terminal ```node ModuleTwo/NodeAPI/process.js quinn newjersey```

    ```
    >>> process.argv[0] /usr/local/bin/node
    >>> process.argv[1] /Users/quinnle/become-node-js-developer/ModuleTwo/NodeAPI/process.js
    >>> hi, quinn
    >>> Hi, I am quinn and I live in newjersey
    ```

---
- Written on Mar 25, 2024.