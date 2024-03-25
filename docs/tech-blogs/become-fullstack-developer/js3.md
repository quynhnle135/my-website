---
title: Hoisting in JavaScript
---

# Hoisting in JavaScript
- Hoisting in JavaScript is the process where the JavaScript interpreter moves all variable and function declarations to the top of their containing scope before the cope has actually executed. For examples:

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
- For variables declared with <b>var</b>, hoisting moves their declarations to the top of their scope, but not their initializations &rarr; Until they are initialized, their value is <b>undefined</b>
- However, with variables declared with <b>let</b> and <b>const</b>, although their declarations are technically hoisted but if you access them before declaration, it will result in ReferenceError. 
- With function, hoisting works differently: 
    + <b>Function declarations</b>: are fully hoisted, which means both declaration and the definition are moved to the top of their contating scope &rarr; Allow you to call the function before it's declared and still return the expected output. 
    + <b> Function expression</b>: if a function is assigned to a varibale, the variable declaration is hoisted but the assissment of the function is not hoisted &rarr; If you try to call it before it's defined, it'll result in errors.

    ```javascript
    notHoistedFunction(); // TypeError: notHoistedFunction is not a function

    var notHoistedFunction = function() {
    console.log("This function expression is not hoisted.");
    };
    ```
- Why do we need hoisting?
    + Hoisting is not a feature that developers explicitly "need".
    + Simplify code structure and support function declarations &rarr; Allow you to call functions before they are defined, improve the readability and maintainability. 

### What is the difference between DECLARE and INITIALIZE?
- Declaration introduces the variables into the program without assigning any value to them. 
- Initialization assigns a value to the variables, making them ready to use. 

