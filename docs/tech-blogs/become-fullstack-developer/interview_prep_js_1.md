---
title: Interview Preparation - JavaScript (1)
---

# Interview Preparation - JavaScript (1)

#### What is JavaScript? 
- JavaScript is a high-level progrmaming language that ECMAScript (whic is a standardized specification for scripting language like language syntaxes and semantics)
- Some features of JavaScript we should know: 
    - Just-in-time compilation
    - Dynamic typing
    - First-class functions
    - Multi-paradigm programming like imperative, declarative, functional, and OOP. 

---

#### What is JavaScript engine?
- JavaScript engine is a software component that executes JavaScript code. For example: V8, Spider Monkey, JavaScriptCore, and Chakra, etc.
- <i>Example: Chrome V8 is a JavaScript engine, which means that it executes JavaScript code. Originally, JavaScript was written to be executed by web browsers. V8 can execute JavaScript code either within or outside a browser, which makes server-side scripting possible.</i>

---

#### What is Just-In-Time compilation? What's the difference between JIT compilation and interpretation?
- Just-in-time compilation: during runtime, entire code is converted to machine code, then executed immedately, which allows for runtime opitmizations. 
- Interpretation: during runtime, interpreter parses the source code and executes instructions line by line. 
<mark> &rarr; Interpretation translates and executes code on the fly without producing a standablone executable, leading to slower execution. JIT compilation compiles code to machine-level instructions during execution to speed up the process.</mark>

---

#### What is REPL?
- Read-Evaluate-Print-Loop is a programming language environment that accepts user input and output the result to the console after execution. 
- REPL is used to test basic syntax and operations.
- For example: Terminal (typing node to start coding in JS) or Browser (right click inspect and move to Console).

---

#### When is the biggest JavaScript release? What are some new features of ES6?
- In 2015, ES6 is the biggest JavaScript release with many new featurs and updates. 
- Some new features of ES6:
    - ```let``` and ```const``` variables
    - Arrow functions
    - Template literals
    - Map, Set, and Array
    - Spread and Rest operators (...)
    - Default function paramters
    - Promises, Async/Await
    - Classes
    - Modules

---

#### What is dynamic typing? What's the difference bewteen dynamic typing and static typing?
- Dynamic typing: When declaring new varaibles, users don't need specify data type. Variable's data type will be assigned based on the value at runtime (using <b>typeof</b> in JS to know variable's data type)
- In statically typed language, data types are defined during compile time and cannot change during runtime, which means that it's required to specify data type when declaring a new variable. 

---

#### What are primitive data types in JavaScript?
- There are 7 primitive data types in JavaScript: string, number, boolean, null, undefined, symbol, and bigint. 
<mark>- All primitive data types are immutable.</mark>

---

#### What are reference data types in JavaScript?
- There is only one reference data type which is Object. 
- Object is <mark>mutable</mark> keyed collection of properties; they store a collection of data instead of single value.
- For example: ```let myObject = { myAge: 22, myName: "Quinn", myHomeTown: "Sai Gon" };```
- To declare an object variable, you can either use ```{}``` or ```new Object()```

---

#### What are the differences between Object and Map in JavaScript?
- Object has default key but Map doesn't (Map has to set key-value manually)
- Object's key type can only be string or symbol while Map's key can be any data type. 
- Object's key-value pairs aren't ordered, while Map's order is based on insertion. 
- To find Object's size, you need to iterate through it, but  you can find Map's size easily with ```.size```
- Object is not iterable (using for...of to get pairs) while Map is.

---

#### What is coercion? What is conversion? What is the difference between coercion and conversion?
- Coercion: when a variable's data type is <mark>IMPLICITLY</mark> chaned to another data type.
- Conversion: which is also known as type casting, is when a variable's data type is <mark>EXPLICITLY</mark> changed to another data type. For example: ```String()```, ```Boolean()```, and ```Number()```, etc.
<mark>&rarr; The difference between coercion and conversion is that coercion changes a variable's data type IMPLICITLY while conversion does it EXPLICITLY.</mark>

---

#### What is short circuting in JavaScript?
- In JS, short circuiting is a feature of the logical operators OR (||) and AND (&&), which allows them to return a value without evaluating the whole expression. 

---

#### What are 3 ways to declare a function? 
- There are three ways to declare a function: 
    - Function declaration
    - Function expression
    - Arrow function

- For example:

```js
// Function declaration
function myFunc() {
  console.log("This is my function");
}

// Function expression
let anotherFunc = function () {
  console.log("This is another function");
};

// Arrow function
let arrowFunc = () => {
  console.log("This is arrow function");
};

myFunc();
anotherFunc();
arrowFunc();
```

#### What are 3 ways to iterate an array?
- For example: 

```js
// Iterate arrays
let myArr = [1, 2, 3, 4, 5];
console.log("Using for loop:");
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}
console.log();
// Using for...of
console.log("Using for..of");
for (let num of myArr) {
  console.log(num);
}

// Using forEach()
console.log();
console.log("Using forEach()");
myArr.forEach((element) => {
  console.log(element);
});
```

---

#### What are the differences between Set and Array?
- Array is ordered based each element's index while set is not ordered.
- <mark>Array can have duplicated values while set can only unique values. </mark>

---

#### What is the difference between == and ===?
- "==" is used to compare the value of the variables and it doesn't care about variables' data types. For example: ``` console.log("5" == 5); // true```
- "===" is used to strictly compare both values and types of variables. For examples: ```console.log("5" === 5); // false```

----

#### What is the DOM? How do you select an HTML element using JS?
- DOM -<mark> Document Object Model</mark>, is a programming interface for web documents. It represents the page with a tree structure as nodes so that programming languages like JavaScript can change/manipulate the document's structure, style, and content.
- JavaScript can select HTML elements by:
    - Query Selector: using CSS selector. For example: ```let el = document.querySelector(".myclass");```
    - Get element by ID, class name, tag name, etc.


#### What is DOM Event?
- DOM events are actions or occurences on the webpage that your code listens for and responds to by using event handlers (```.addEventListener(eventName, function)```)
- Some event types: <b><i>click, focus, blur, keypress, submit, etc.</i></b>

---

### What is event propagation? What is event delegation?
- <b>Event propagation</b> is how events travel throughout the DOM and trigger event handlers, which consists three phrases: <mark>capturing, target, bubbling</mark>
- <b>Event delegation</b> is an optimization technique for when you have multiple event handlers that do the same things. 





