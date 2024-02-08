---
title: ES6 Features, Async, and Promise
---

# ES6 Featurs, Async, and Promise in JavaScript

## ES6 Features

- ES6 is the newest version of JavaScript which was introduced in 2015, offering more powerful and easier features
    1. <b>let</b> and <b>const</b>
    2. Arrow functions: They are especially used for short functions   
        ```javascript
        // arrow function

        const adding = (a, b) => a + b;

        console.log(adding(10, 20)) // 30

        const doubling = (a) => a * 2;
        console.log(doubling(10)) // 20
        ```
    3. Template literals: Allow easier string concatenation
        ```javascript
        // template literals
        const greeting = (name) => console.log(`hello, ${name}`);
        greeting("Quinn")
        ```
    4. Default parameter: Functions can have defialt values for parameters that aren't passed when the function is called.
    5. Destructing assignment
    6. Rest parameters and spread operators
    7. Classes
    8. Modules
    9. Promises: Promises are a way to handle asynchronous operations, providing a cleaner and more flexible way to organize callback-based code.
    10. Enhance object literals

## Synchronous programming
- <b>Synchronous programming</b>, where each operation must complete before the next one starts.
- However, in the context of web development, epsecially dealing with API calls, file operations, or any operation that involve waiting for an external resource, synchronous programming can lead to some disadvantages:
    + In synchronous model, the JavaScript engine must wait for an operation to complete before moving on to the next line of code &rarr; This waiting period can freeze the user interface, making the application unresponsive until the operation sluggish and unresponsive, degrading the user experience
&rarr; <b> Synchronous programming is suitable for tasks that are quick, must be done in order and where simplicity is valued over performance.</b> 

## Asynchronous programming
- In JavaScript, asynchronous programming <b>allows for functions to run in parallel with other functions</b>, without blocking the execution of subsequent operations. 
- This is particularly useful for tasks that take some time to complete such as network requests, file operations, or timers.
- <b>Promises</b> are integral part of working with asynchronous operations in JavaScript, providing a cleaner, more manageable way to handle asynchronous tasks compared to older methods like callbacks. 
