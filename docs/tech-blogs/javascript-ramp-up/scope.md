---
title: Scope and Variables in JavaScript
---

# Scope and Variables in JavaScript

- There are three keywords for declaring variables in JavaScript: <b>var</b>, <b>let</b>, and <b>const</b>
    + <b>>var</b>: 
        + Before ES6 (JavaScript's latest version), var was the primary way to declare variables.
        + Variables declared with <b>var</b> are function-scoped or globally scoped.
        + These <b>var</b> variables can be re-declared and udpated.

        ```javascript
        var name = "John Doe";
        // console.log(name);
        var name = "Quinn Le"; // Re-declaring is allowed
        console.log(name);
        name = "Another name"; // Updating is allowed
        console.log(name);
        ```
    
    + <b>let</b>: 
        + <b>let</b> allows you to declare block-level variables.
        + Variables declared with <b>let</b> can be updated but not re-declared.

        ```javascript
        let myName = "Quinn Le";
        console.log(myName);
        myName = "Jane Doe"; // Updating is allowed
        console.log(myName);
        // let myName = "Another name"; // Re-declaring is not allowed
        console.log(myName);
        ```

    + <b>const</b>:
        + Variables declared with <b>const</b> remain constant, which mean they cannot be updated or re-declared. 
        + Variables declared with <b>const</b> are block-scoped.

        ```javascript
        const PI = 3.14;
        console.log(PI);
        // PI = 3.14159; // Updating is not allowed
        // console.log(PI)
        ```

- There are three main types of scopes in JavaScript:
     + Global scope: A variable declared outside any function or block becomes globally accessbile from any part of the code. 
     
     ```javascript
    var globalVar = "This is global variable";

    function printing(name) {
        console.log("Global var: " + globalVar);
        console.log("Greeting " + name);
    }

    printing(name="Quinn");
     ```

     + Function/Local Scope: Variables declared within a function are local to that function and cannot be accessed from outside. 
        ```javascript
        // function-scoped variable
        function myFunction() {
            let vocalVar = "I am local";
            console.log(vocalVar);
        }

        myFunction();
        ```

     + Block scope: Block scope restricts the visbility of a variable to the block in which it's declared such as as if-else conditions, loops, etc.

     ```javascript
     // block-scoped variable
        for (let i = 0; i <= 5; i++)  {
            console.log("Block scope variable: " + i);
        }
     ```

---

- [JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)
