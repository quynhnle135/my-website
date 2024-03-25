---
title: Basic and Fundamental JavaScript Overview
position: 2
---

# Basic and Fundamental JavaScript Overview

## Scope and Variables in JavaScript

### Variables
- There are three keywords for declaring variables in JavaScript: <mark>const, let, and var</mark>:
    - <mark>var</mark>:
        - Before ES6 (JavaScript latest version), ```var``` was the primary way to declare variables.
        - Variables declared with ```var``` are <mark><b>function-scoped or global-scoped.</b></mark>
        - These ```var``` variables can be re-declared and updated.

        ```javascript
            var name = "John Doe";
            // console.log(name);
            var name = "Quinn Le"; // Re-declaring is allowed
            console.log(name);
            name = "Another name"; // Updating is allowed
            console.log(name);
        ```
    
    - <mark>let</mark>:
        - ```let``` allows you to declare block-scoped or block-level variables.
        - <mark>Variables declared with ```let``` can be updated but not re-declared.</mark>

        ```javascript
            let myName = "Quinn Le";
            console.log(myName);
            myName = "Jane Doe"; // Updating is allowed
            console.log(myName);
            // let myName = "Another name"; // Re-declaring is not allowed
            console.log(myName);
        ```
    
    - <mark>const</mark>:
        - Variables declared with ```const``` remain <mark>constant</mark>, which means they cannot be updated or re-declared.
        - Variables declared with ```const``` are <mark>block-scoped</mark>

        ```javascript
            const PI = 3.14;
            console.log(PI);
            // PI = 3.14159; // Updating is not allowed
            // console.log(PI)
        ```
### Scope
- There are three main scopes in JavaScript: <mark>global scope, functional/local scope, and block scope</mark>:
    - <mark>Global scope</mark>: Variables declared outside any function or block become globally accessible from any part of the code.
    - <mark>Function/local scope</mark>: Variables declared within a function are local to that function and cannot be accessed from outside. 
    - <mark>Block scope</mark>: Block scope restricts the visibility of a variable to the block in which it's declared such as if-else conditions, loops, etc.

<b>(*) What is the difference between DECLARE and INITIALIZE?</b>
- Declaration <mark>introduce</mark> the variable into the program <mark>without assigning any value to them</mark>
- Initialization <mark>assigns</mark> values to the variables, making them ready to use. 

---

## Hoisting
- Hoisting in JavaScript is the process where <mark>the JavaScript interpreter moves all variables and function declarations to the top of their containing scope before the scope has actually executed</mark>. For example:
    ```javascript
        console.log(myVar); // undefined
        var myVar = "This is my variable";
        console.log(myVar); // This is my variable

        console.log("Before defining myFunction")
        myFunction();
        function myFunction() {
            console.log("This is my function.")
        }

        myFunction()

        >>> undefined
        >>> This is my variable
        >>> Before defining myFunction
        >>> This is my function.    
        >>> This is my function.
    ```

- For variables declared with ```var```, hoisting moves their declarations to the top of their scope, but not their initialization &rarr; <mark>Until they are initialized, their value is <b>undefined</b>
- Variables declared with ```let``` and ```const```, although their declarations are technically hoisted but if you access them before declaration, it will result in ```ReferenceError```.
- With functions, hoisting works differently:
    - Function declarations: <mark>are fully hoisted</mark>, which means both declaration and the definition are moved to the top of their containing scope &rarr; <mark>Allow you to call the function before it's declared and still return the expected output.</mark>
    - Function expression: if a function is assigned to a variable, the variable declaration is hoisted but the assignment of the function is not hoisted &rarr; <mark>If you try to call it before it's defined, it'll result in errors.</mark>. For example:
        ```javascript
            notHoistedFunction(); // TypeError: notHoistedFunction is not a function

            var notHoistedFunction = function() {
            console.log("This function expression is not hoisted.");
            };
        ```

---

## ES6 Features
- ES6 is the newest version of JavaScript which was introduced in 2015, offering more powerful and easier features:
    - ```let``` and ```const```
    - Arrow functions: They are especially used for short functions. For example:
        ```javascript
            // arrow function
            const adding = (a, b) => a + b;

            console.log(adding(10, 20)) // 30

            const doubling = (a) => a * 2;
            console.log(doubling(10)) // 20
        ```
    
    - Template literals: Allow easier string concatenaton.
        ```javascript
            // template literals
            const greeting = (name) => console.log(`hello, ${name}`);
            greeting("Quinn")
        ```
    
    - Default parameter: Functions can have default values for parameters that aren't passed when the function is called. 
    - Destructing assignment.
    - Rest parameters and spread operations.
    - Classes.
    - Modules.
    - Promises: Promise is a way to handle asynchronous operations, providing a cleaner and more flexible way to organize callback-based code. 
    - Enhance object literals.


### Synchronous programming vs Asynchronous programming
- In <b>synchronous programming</b>, tasks are executed one after another. If a task is waiting for some I/O operation to complete, the program execution <b>blocks or waits</b> until that task is finished.
- <b>Asynchronous programming in Node.js</b> allows the program to initiate the I/O operation and then move on to another task without waiting for the first operation to complete &rarr; Once the operation is finished, a callback function, promise, or an async/await pattern is used to handle the result, allowing the program to continue its workflow.

---

## DOM - Document Object Model
- DOM is a programming interface for web documents. It represents the page so that programs can change the document's structure, style, and content &rarr; <mark>DOM represents the documents as nodes and objects; that way, programming languages can interact with the page.</mark>
- <b>Manipulating DOM</b>: JavaScript can be used to manipulate DOM, allowing dynamical changes to the content, structure, and style of a document:
    - <b><i>Accessing elements</i></b>: 
    
    ```javascript
        document.getElementById('id'); // Access an element by its ID
        document.getElementsByTagName('tag'); // Access elements by their tag name
        document.getElementsByClassName('class'); // Access elements by their class name
        document.querySelector('.class'); // Access the first element that matches a CSS selector
        document.querySelectorAll('.class'); // Access all elements that match a CSS selector
    ```

    - <b><i>Changing elements</i></b>: Once you have access to elements, you can modify their properties, attributes, and content:
    ```javascript
        let element = document.getElementById('id');
        element.innerHTML = 'New content'; // Change the inner HTML of an element
        element.setAttribute('attr', 'value'); // Set an attribute value
        element.style.color = 'red'; // Change the style directly
    ```
    
    - <b><i>Creating and removing elements</i></b>: JavaScript allows you to dynamically create new elements and remove existing ones:

    ```javascript
        // Create a new element
        let newElement = document.createElement('div');
        newElement.innerHTML = 'Hello, World!';
        document.body.appendChild(newElement); // Add the new element to the body

        // Remove an element
        let oldElement = document.getElementById('id');
        oldElement.parentNode.removeChild(oldElement);
    ```

    - <b><i>Event handling</i></b>: You can respond to user actions by adding event listeners to elements:

    ```javascript
        let button = document.getElementById('myButton');
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    ```

---
- Added and updated on Mar 25, 2024.
- Some resources I used:
    - [What is HTML, CSS, and JavaScript?](https://www.youtube.com/watch?v=DHGhFJZLKMs&t=193s)
    - [JavaScript scope](https://www.w3schools.com/js/js_scope.asp)