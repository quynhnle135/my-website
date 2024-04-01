---
title: Interview Preparation - JavaScript (2)
---

# Interview Preparation - JavaScript (2)

### What is "use strict"? What are the major effects that it has?
- "use strict" is a directive or literal expression that makes JS execute in strict node, mostly for writing secure code. 
- Used at the beginning of the script for globally scope strict mode 
- However, there are some effects when using "use strict":
    - cannot used undeclared variables, objects, and function (hoisting)
    - cannot delete variables or objects
    - cannot have duplicate function argument names

---

### What are the different type of scopes?
- There are three different scopes:
    - Global scope
    - Function scope
    - Block scope

---

### What is hoisting? 
- <mark>Hoisting in JS is the process where JS interpreter moves all variables and function declarations to the top of their containing scope before the scope has actually executed. </mark>
- Function declaration can be fully hoisted.
- Var variable when being hoisted, its value is undefined. 
- Other functions (expression functions or arrow functions), let and const variables <b><i>will return ReferenceError. </i></b>

---

### Explain the difference between var, let, and const?
- Var has global scope, can be re-declared and updated.
- Let and const has function scope and block scope and cannot be re-declared. However, let variables can be updated after being assigned. 

---

### What is scope chain? What is lexical scoping? 
- Scope chain: the cycle of looking for a variable's value within the current scope, then outer scope, and so on until finding the value or reaching the global scope. 
- Lexical scoping: code inside a function may access variables defined outside, but not the reverse. For example:

```js
function outerFunction() {
  let outer = 'I am outside!';

  function innerFunction() {
    let inner = 'I am inside!';
    console.log(outer); // innerFunction can access outer because of lexical scoping.
    console.log(inner); // innerFunction can access its own variable.
  }

  console.log(outer); // outerFunction can access its own variable.
  // console.log(inner); This would cause an error because inner is not defined in this scope.
  innerFunction();
}

outerFunction();
```

---

### What is a closure and what are some closure use cases?
- Closure: an inner function with references to outer function scope and its variable. Closure goes with lexical scoping very well. 
- Closure can be used for data encapsulation, currying, event handlers and callbacks.
- For example:

```js
function myFunction () {
    let counter = 1;
    return function() {
        counter++;
        return counter;
    }
} 
```

---

### What is currying and its use case?
- Currying is breaking down a function that takes multiple arguments into a sequence of functions that each take a single argument. 

---

### What is IIFE? 
- IIFE - Immediate Invoked Function Expression: a function that is called/invoked immediately after being defined. 
