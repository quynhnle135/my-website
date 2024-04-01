---
title: Interview Preparation - HTML and CSS
---

# Interview Preparation - HTML and CSS

### What is HTML?
- HTML (Hyper Text Markup Language) is the standard markup language for creating web pages. It is used to describe the structure of a website.
- HTML uses different tags like headings, text, images, etc. to tell the browser how to display content.

<mark><b><i>(*) Notes:</i></b></mark>
- Element's name inside a tag is case-sensitve so you should be careful.
- HTML5 is the most updated version and is the current W3C recommendation. 
- <i>HTML and CSS are not programming languages because they cannot perform logic or algorithms.</i>

---

### What is CSS?
- CSS (Cascading Style Sheet) is a style sheet language used to add style to a website. 

---

### By what standards a website should follow? 
- The <mark>World Wide Web Consortium (W3C)</mark> sets the international standards for web technologies. 

---

### What is the importance of the meta tag?
- The ```<meta>``` tag defines information about data and it's very <mark>important in SEO</mark> (Search Engine Optimization) because <mark>they impact how your site appears in the SERPs (Search Engine Results Page) and how many people will be inclined to click through your website</mark>. 
- The meta tags include different other crucial tags like title tags, meta description, viewport, or content type, etc.

---

### What is block element in HTML? How is this different from inline elements?
- Every HTML element has a default display value and there are two most common display values which are <b>block and inline</b>
- <b>Block element</b>: always starts on a new line and takes full width available, which means that it streches out to the left and right as far as possible (for examples: div, p, h1-h6, etc.)
- <b>Inline element</b>: doesn't start on a new line and it only takes space it needs (for examples: a, i, img, button, etc.) 

---

### What is iframe tag in HTML?
- The ```<iframe>``` tag specifies an inline frame, which can be used to display a web page or other documents within a webpage. 

---

### How to import or insert CSS in an HTML file?
- There are <b>three ways</b> to insert CSS in an HTML file:
    - External CSS: add ```<link rel="stylesheet" href="style.css">``` in the head of a HTML file.
    - Internal CSS: by using ```<style type="text/css">``` in the head of a HTML file.
    - In-line CSS: add syle element right inside a HTML tag. For example: ```<h1 style="color: red;">Hello, world</h1>```

---

### What is CSS syntax?
- CSS syntax consists two parts which are <b>selector</b> and <b>declaration</b>:
- Inside declaration: there are <b>property and value</b> that you can define.

---

### How many CSS Selectors are there?
- Ther are <b>five CSS selectors</b>:
    - Simple selectors: You can select elements <b>based on tag name, id, or class name etc.</b>
    - Combinator selectors: You can use combinators to select elements <b>based on relationship</b> <i>(for examples: child or descendant elements).</i>
    - Pseudo-class selectors: You can select elements <b>based on their states</b> (for examples: hover, visited).
    - Pseudo-element selectors: You can select <b>part of an element</b> (for exmaples: first letter, first line).
    - Attribute selectors: You can select elements based on attributes or their values. 

---

### What are combinator selectors?
- Combinator selectors allow you to select elements based on their relationship:
    - Child (s1 > s2): look for all elements that matches s1 then select all children elements that match s2.
    - Descendant (s1 s2): look for all elements that mathces s1 then select all descendants that match s2.
    - Adjacent sibling (s1 + s2): look for all elements that match s1, select the first following sibling that matches s2.
    - General sibling (s1 ~ s2): look for all elements that match s1, select all following that s2. 

---

### What are the differences between pseudo-class selectors and pseudo-element selectors?
- Pseudo-class selectors are used to select elements <mark>based on their states</mark> like <i>hover, focus, visited. </i>It uses single colon (for example: ```a:hover {background-color: red;}```)
- Pseudo-element selectors are used to select elements based on <mark>a specific part</mark> of the select elements <i>like first line, or first letter. </i>It uses double colons (for example: ```p::first-letter {font-size: 50px;}```)

---

### What are the different types of attribute selectors?
- Attribute selectors are used to <mark>select elements based on attributes or their values</mark>. Apply styles to all elements that have this attribute or attribute value.
- There are five different types of attribute selectors:
    - [attr]: select all elements that have an attribute named <i><b>attr</b></i>
    - [attr=val]: select all elements that have attributes <i><b>attr</b></i> with value <i><b>val</b></i>
    - [attr^=val]: select all elements that have attributes <i><b>attr</b></i> whose values <mark>START WITH</mark> <i><b>val</b></i> 
    - [att$*=val]: select all elements that have attributes <i><b>attr</b></i> whose values <mark>END WITH</mark> <i><b>val</b></i>
    - [attr*=val]: select all elements that have attributes <i><b>attr</b></i> whose values <mark>CONTAIN</mark> <i><b>val</b></i>

---

### What are some ways to make an element invisible?
- There are three ways to make an element: 
    - ```visibility: hidden;```
    - ```display: none;```
    - ```opacity: 0;```
- Both <b><i>visbility and opacity</i></b> <mark>take up space</mark> on the page while <b><i>display</i></b> doesn't. 

---

### What is SVG and why do we use it?
- SVG defined vector-based graphic in XML, which can be directly embedded in HTML pages. 
- <mark><b><i> We use SVG because it's scalable so the quality isn't affected when it's zoomed or resized.</i></b></mark>

---

- Written on Mar 31, 2024.