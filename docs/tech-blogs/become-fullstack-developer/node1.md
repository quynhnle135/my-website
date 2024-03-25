---
title: Node.js Introduction and Fundamental (1)
---

# Node.js Introduction and Fundamental (1)

## What is Node.js and what is it used for? 
- Node.js is an <b>open-source, cross-platform</b> JavaScript <b>runtime environment</b> that executes JavaScript code outside of a web browser:
    - Open-source: Node.js has a healthy community of collaborators who work on keeping Node.js feature-rich and up-to-date
    - Cross-platform: Node.js applications can be run on Windows, Linux, or MacOS.
    - Runtime environment: Node.js is built on Google Chrome's V8 engine and provides everything you need to run JavaScript outside the browser.
- What is Node.js used for? 
    - Web development: Building server-side logic for web applications, handling HTTP requests, and generating content dynamically.
    - API services: Creating RESTful APIs that can be consumed by web clients, mobile applications, or other services.
    - Real-time applications: Powering real-time features such as live chat, instant messaging, or collaborative editing tools, due to its event-driven, non-block nature.

<mark>&rarr; Node.js's non-blocking, event-drivent architecture makes it particularly well-suited for applications that require high concurrency but don't have intensive CPU computation, allowing for efficient handling of simultaneous connections with minimal overhead.</mark>

#### Follow-up questions
<b><i>As the definition of Node.js, what does "outside of a web browser" mean?</i></b>
    - Traditionally, JavaScript was designed to run only within web browser to create interactive web pages and handle user interactions. 
    - Node.js extends the capabilities of JavaScript beyond browsers, making it possible to write server-side scripts, command-line tools, and even desk applications, etc. 

<b><i>What does concurrency mean?</i></b>
    - Concurrency: refers to the ability of a system to handle multiple tasks or operations at the same time

---

## Buffer
- <b>Buffer</b> in the context of computers refer to a temporary data storage that is used when moving data. 
- For example: Moving data in video streaming. Depending on how fast your internet is, your video quality can change and so can your viewing experience. Video data is fetched from the server, <b>stored in the buffer</b>, processed, and sent to your display &rarr; This is why when you click on a video, you do not wait for it to download completely; instead, it starts playing right away. 

<mark>&rarr;As soon as some data arrives, the program can start processing it or move on to process more code.</mark>


### Buffer in Node.js

```javascript

const buff1 = Buffer.alloc(10); // Create 10 zero-filled buffers
console.log(buff1);

const buff2 = Buffer.alloc(5, 15); // Create 5 buffers filled with 15
console.log(buff2);

const buff3 = Buffer.from([1, 2, 3]); // Create 3 buffers whose values are from the list [1, 2, 3]
console.log(buff3);

const buff4 = Buffer.allocUnsafe(10);
console.log(buff4);

const buff5 = Buffer.from("hello world");
console.log(buff5); // Create buffers having hexadecimal values from 'hello world' string
console.log(buff5.toString());

```

- ```Buffer.allocUnsafe()``` is faster than ```Buffer.alloc()``` but the buffers it returns may or may not be empty.

---

## Readline
- <b><i>readline</i></b> module provides an interface for reading data from a Readable stream (such as <i>process.stdin</i>) one line at a time. 

```javascript
const readline = require("readline");

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let query = "What's your name?\n";

rl.question(query, (input) => {
  console.log(`Hi, ${input}! Nice to meet you.`);
  rl.close();
});

```

#### What does this code snippet do?
- Import ```readline``` module and assign it to a constant variable which is used to access to all functionalities that ```readline``` module offers.
- Create a ```rl``` readline interface to get input from the console and return/display outpu in the console.
- ```rl.question``` set prompts with query as the first argument, and the second argument is a function that handles user's input from console.
- ```rl.close()```: close the interface when the program is done.

### Guess Number Coding Challenge

```javascript
const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  let randomNumber = Math.round(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// Get a random number in range 1-10
let randomNumber = generateRandomNumber(1, 10);

// Player has 3 trials
let tries = 3;

rl.setPrompt("Guess a number from 1 to 10:\n");
rl.prompt();
rl.on("line", function (guess) {
  tries--;
  game(tries, randomNumber, guess);
  rl.prompt();
});

function game(tries, randomNumber, guess) {
  if (tries > 0) {
    if (randomNumber == guess) {
      console.log("YOU WON!");
      process.exit();
    } else if (guess < randomNumber) {
      console.log("TOO LOW");
      console.log(`You have ${tries} trial(s) left.`);
    } else {
      console.log("TOO HIGH");
      console.log(`You have ${tries} trials left.`);
    }
  } else {
    if (randomNumber == guess) {
      console.log("YOU WON");
    } else {
      console.log("YOU LOSE. THE NUMBER IS:", randomNumber);
    }
    process.exit();
  }
}

```

#### What does this code snippet do?
- This is a simple guessing game that player can play in the console.
- The game here is straight-forward: user has 3 trials to guess a number generated by ```generateRandomNumber()``` and ```game()``` function is used to display game info. 
- ```rl.setPrompt(prompt)```: this sets the prompt that will be prompted ```output``` whenever ```rl.prompt()``` is called
- ```rl.prompt()```: this function displays the prompt that is set by ```rl.setPrompt()```
- ```rl.on(eventName, callback)```: this is used to attach an event listener. When an event is emitted, the callback function will be called:
    - ```rl.on("line", (name) => {console.log("hello,", name)};)```: Emitted whenver the input stream receives an end-of-line input (\n or Enter)
    - ```rl.on("close", () => {console.log("good bye)};)```: Emitted when the readline interface is closed using ```rl.close()```

#### Follow-up questions
<b><i>What's the difference between ```rl.close()``` and ```process.exit()```</i></b>
    - ```rl.close()``` is used to close the command-line interface and want to clean up nicely, while ```process.exit() is used to end your program, regardless of what else might be happening in your application.

---

## Summary 
- Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript outside of a web browser.
- Node.js can be used for many purpose such as web development, API services, and real-time applications.
- Synchronous programming is where tasks are executed one after another, while asynchornous programming allows the program to move on to another tasks without waiting for the first operation to complete. 
- Buffer is a temporary data storage that is used when moving data. 
- ```readline``` module provides an interface for reading data from a Reader stream 

---
- Written and updated on Mar 25, 2024.
- [Official Node.js documentation](https://nodejs.org/en)