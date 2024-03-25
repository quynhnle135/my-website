---
title: Node.js Introduction and Fundamental (2)
---

# Node.js Introduction and Fundamental (2)

## Events in Javascript and Node.js
- In JavaScript and Node.js, <b>events</b> are things that happen while you're programming, like clicking a button or getting an error. They let your program know so you can decide what to do when these things happen &rarr;<i>This is a big part of making websites or server programs that react to what users do or what happens in the system.</i>
- What does it mean by <i>listening to an event</i> in JavaScript? 
    - In JavaScript, <i>listening to an event</i> means setting up a function that will be called automatically whenever a specific event occurs.
    - <mark>When you <i>listen to an event</i>, you're telling the program to watch for a particular action or occurrence (like button click, a key press, or a page loading), and to execute a piece of code in response.</mark>
    - To handle events, Node.js uses ```events``` module and ```EventEmitter``` object.


<b>(*) Handling events in Vanilla JavaScript: </b>

```javascript
document.getElementById("open").addEventListener("click", function() {
    alert("Button clicked!")
})

```
&rarr; <mark>When an element with ID <i>open</i> is <i>clicked</i>, a function will be called to alert <i>Button clicked!</i></mark>


<b>(*) Handing or emitting events in Node.js</b>

```javascript
const EventEmitter = require("events");

const myEmitter = new EventEmitter();
myEmitter.on("event one", function () {
  console.log("This is function to handle event one!");
});

myEmitter.on("event two", function () {
  console.log("This is function to handle event two!");
});

myEmitter.emit("event one");
myEmitter.emit("event two");

```

- Explanation:
    - ```myEmitter.on(event, callback/function)```: this is used to set up <i>event listener</i>. It attaches callback/function to that specific event, so when that event is listened, the attached function will be called automatically.
    - ```myEmitter.emit(event)```: this is used to trigger/emit an event. 

### Order Food Coding Challenge

```javascript
const EventEmitter = require("events");
const { emit } = require("process");

const myEmitter = new EventEmitter();

myEmitter.on("order", function (food) {
  console.log("Order placed for", food);
});

myEmitter.on("doorbell", function () {
  console.log("DING DONG...");
});

myEmitter.on("deliver", function () {
  console.log("Food is delivered!");
});

myEmitter.on("payment", function (food) {
  console.log("Payment is made. Please enjoy your food.");
});

myEmitter.emit("order", "Popeyes");
myEmitter.emit("doorbell");
myEmitter.emit("deliver");
myEmitter.emit("payment", "Popeyes");

```

- We are taking care of 4 events: 
    - ```order``` will be fired when we place an order for some ```food```.
    - ```doorbell``` will be fired when our food is at the door.
    - ```deliver``` will be fired when shiper confirm the delivery to customer. 
    - ```payment``` for ```food``` will be fired when payment is made.

---

## Process object in Node.js
- The ```process``` object is a global that allows us to control the current process.
- Being an instance of the ```EventEmitter``` class, it has a few important events that we should know: <mark>exit and beforeExit</mark>
    - If you wish to save your program progress to the cloud once it's done processing. <mark>The ```beforeExit``` event is perfect for this job. It is fired when the event loop is empty, which means that Node.js has done all its work and is about exit.</mark> You can register ```beforeExit``` event to make a network call to your cloud drive and upload your data. 
    - Once your data has been uploaded, you want the program to notify you with an output on the console. The ```exit``` event is fired when ```process.exit()``` is called. The ```exit``` event executes <mark>synchronously, so asynchronous calls may not return properly</mark>
    - If we explicitly call ```process.exit()```, the ```beforeExit()``` event is not fired.

```javascript
console.log("This is the first message");

process.on("beforeExit", function (code) {
  console.log("Process beforeExit event with code", code);
});

process.on("exit", function (code) {
  setTimeout(() => {
    console.log("This will not work");
  }, 0);
  console.log("Process exit event with code", code);
});

console.log("This is the second message");
// process.exit();
```

## Creating simple server with Node.js
- Websites don't use a command-line terminal to serve all those beautiful web pages. However, Node.js allows us to serve web pages using ```http``` module by creating a simple server. 

```javascript title="ModuleOne/Practice/practice_http.js"
const http = require("http");  // import http module

const hostname = "0.0.0.0";  // set up hostname 
const port = 3500;  // set up port number

const server = http.createServer((request, response) => {
  response.statusCode = 200;  // set status code to successful HTTP request
  response.setHeader("Content-Type", "text/html");  
  response.end("Hello, world!"); // send the response back to the client and ends the response process
});

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

- Explanation: 
     - Starting the server: By running the script ```node ModuleOne/Practice/practice_http.js```, the server starts listening and the callback function inside ```listen``` method is called. It takes the ```port``` variable which was initialzied above and so is hostname. On terminal, you will see the output ```Server running at http://0.0.0.0:3500/```
     - When you click on that URL, you're sending a request to the server so that you can see a website with "Hello, word!" sentence displayed in the browser. 

---
- Added on Mar 25, 2024.

