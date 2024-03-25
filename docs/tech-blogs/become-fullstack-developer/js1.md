---
title: DOM - Document Object Model (JS)
---

# DOM - Document Object Model (JS)

- The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content &rarr; <mark>The DOM represents the documents as nodes and objects; that way, programming languages can interact with the page.</mark>
- Manipulating the DOM: JavaScript can be used to manipulate the DOM, allowing dynamic changes to the content, structure, and style of a document:
    + Accessing elements:

        ``` javascript
        document.getElementById('id'); // Access an element by its ID
        document.getElementsByTagName('tag'); // Access elements by their tag name
        document.getElementsByClassName('class'); // Access elements by their class name
        document.querySelector('.class'); // Access the first element that matches a CSS selector
        document.querySelectorAll('.class'); // Access all elements that match a CSS selector
        ```
    
    + Changing elements: Once you have access to an element, you can modify its properties, attributes, and content:

        ```javascript
        let element = document.getElementById('id');
        element.innerHTML = 'New content'; // Change the inner HTML of an element
        element.setAttribute('attr', 'value'); // Set an attribute value
        element.style.color = 'red'; // Change the style directly
        ```
    
    + Creating and removing elements: JavaScript allows you to dynamically create new elements and remove existing ones:

        ```javascript
        // Create a new element
        let newElement = document.createElement('div');
        newElement.innerHTML = 'Hello, World!';
        document.body.appendChild(newElement); // Add the new element to the body

        // Remove an element
        let oldElement = document.getElementById('id');
        oldElement.parentNode.removeChild(oldElement);
        ```
    
    + Event handling: You can respond to user actions by adding events listeners to elements:
        
        ```javascript
        let button = document.getElementById('myButton');
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
        ```
