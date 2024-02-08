"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4705],{8095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var s=n(5893),a=n(1151);const c={title:"DOM - Document Object Model"},r="DOM - Document Object Model",o={id:"tech-blogs/javascript-ramp-up/dom",title:"DOM - Document Object Model",description:"- The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content &rarr; The DOM represents the documents as nodes and objects; that way, programming languages can interact with the page.",source:"@site/docs/tech-blogs/javascript-ramp-up/dom.md",sourceDirName:"tech-blogs/javascript-ramp-up",slug:"/tech-blogs/javascript-ramp-up/dom",permalink:"/docs/tech-blogs/javascript-ramp-up/dom",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"DOM - Document Object Model"},sidebar:"tutorialSidebar",previous:{title:"JavaScript Ramp Up",permalink:"/docs/category/javascript-ramp-up"},next:{title:"ES6 Features, Async, and Promise",permalink:"/docs/tech-blogs/javascript-ramp-up/es6"}},l={},i=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"dom---document-object-model",children:"DOM - Document Object Model"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content \u2192 ",(0,s.jsx)("b",{children:"The DOM represents the documents as nodes and objects; that way, programming languages can interact with the page."})]}),"\n",(0,s.jsxs)(t.li,{children:["Manipulating the DOM: JavaScript can be used to manipulated the DOM, allowing dynamic changes to the content, structure, and style of a document:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Accessing elements:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"document.getElementById('id'); // Access an element by its ID\ndocument.getElementsByTagName('tag'); // Access elements by their tag name\ndocument.getElementsByClassName('class'); // Access elements by their class name\ndocument.querySelector('.class'); // Access the first element that matches a CSS selector\ndocument.querySelectorAll('.class'); // Access all elements that match a CSS selector\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Changing elements: Once you have access to an element, you can modify its properties, attributes, and content:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"let element = document.getElementById('id');\nelement.innerHTML = 'New content'; // Change the inner HTML of an element\nelement.setAttribute('attr', 'value'); // Set an attribute value\nelement.style.color = 'red'; // Change the style directly\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Creating and removing elements: JavaScript allows you to dynamically create new elements and remove existing ones:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"// Create a new element\nlet newElement = document.createElement('div');\nnewElement.innerHTML = 'Hello, World!';\ndocument.body.appendChild(newElement); // Add the new element to the body\n\n// Remove an element\nlet oldElement = document.getElementById('id');\noldElement.parentNode.removeChild(oldElement);\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Event handling: You can respond to user actions by adding events listeners to elements:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"let button = document.getElementById('myButton');\nbutton.addEventListener('click', function() {\n    alert('Button clicked!');\n});\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(7294);const a={},c=s.createContext(a);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);