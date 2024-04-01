---
tile: Interview Prepartion - CSS
---

# Interview Prepartion - CSS

### What is Box Model? Describe each part.
- Box Model is usually used when it comes to design and layout. 
- You can imagine that there's a box wrapped around every HTML element. Each box consists of content, padding, border, and margin:
    - Content: is the content of the box, where text and images appear (overflow, visible, hidden, scroll, and auto)
    - Padding: is the transparent space surrounding the content. 
    - Border: is the border that goes around the padding and content.
    - Margin: is the transparent space outside the border. 

<b><i>Notes:</i></b>
- Inline elements don't have padding-top and padding-bottom. 
- <mark>Margin can have positive or negative lengths</mark>. Positive lengths are like adding space to that side outside of the element, negative lengths are like removing space from that side. 

---

### What is the difference between margin and padding?
- <b>Padding</b> is the transparent <mark>space around the content</mark>, while the <b>margin</b> is the transparent <mark>space around the border</mark>. 
- <b>Padding</b> is used to <mark>adjust the space around the content itself</mark>, while <b>margin</b> is used to adjust the <mark>space between the current element and other HTML elements</mark>. 

---

### What is box-sizing? What is the difference between content-box and border-box?
- Box-sizing property in CSS allows us to include padding and border in an element's width and height.
- When using <i>content-box</i>, the content size r<mark>emain the same</mark>, while <i>border-box</i> <mark>grows as padding and border grow</mark>. 

---

### What is position in CSS? What is the difference between position: fixed and position: absolute?
- The position property in CSS specfies the type of positioning method used for an elementl. There are five types of positions: <b><i>static (default), relative, absolute, fixed, and sticky</i></b>
- Position <b><i>absolute</i></b> is relative to the nearest positioned ancestor or viewport. If user scrolls the web page, the element doesn't stay. 
- Position <b><i>fixed</i></b> is relative to the viewport and stays when scrolling. 

---

### What is Z-index?
- Z-index <i>specifies stack order</i> of an element, which means that <mark>it places which element is in front of or behind others</mark>. 

---

### What is Flex Box? What is Grid? What is the difference between them?
- Flex Box makes it easier to design a flexible and responsive layout because <mark>it focuses on a 1-D layout (which is dimension of items, or spacing between them).</mark> (align-item, justify-content, flex-direction)
- Grid offers a grid-based layout system with rows and columns, which <mark>focuses on 2D layout (dimension of rows and columns and gaps between them)</mark>
- <mark>Flex Box uses a content-first approach while Grid layout uses layout-first approach. </mark>

---

### What are the major differences between CSS transition and animation?
- Both CSS transition and animation create a smooth change in CSS property values over a given duration from one point to another.
- For CSS transition:
    - It's the best to create a simple transition from one state to antoher (move from the initial to final state with no step in between).
    - Require a trigger to run (hover or mouseclick)
    - Run forward when triggered and in reverse when trigger is removed. 
- For CSS animation:
    - It's the best for creating complicated movements like moving from initial to final state with some steps in between.
    - Can be triggered or run automatically.
    - Can run forwards, in, reverse, or alternate direction. 

---

### What is responsive web design? What are some examples of responsive web design on a website? How do we achieve this?
- Responsive web design: is a design approach where you use HTML & CSS to <mark>make website UI look great on all devices and screen sizes.</mark>
- Some examples: move navigation bar from the left to middle or make it as a hamburger menu. 
- How do we achieve? 
    - Update width or height of HTML elements to fit certain screen sizes or devices
    - Use media queries and break points to respond and adapt to different screen sizes.

---

### What is the usage of !important? What are some use cases?
- The <b><i>!important</i></b> rule in CSS is used to prioritize a particular style. <mark>It will override ALL previous styling rules for that specific property on that element</mark>
- It can be used for:
    - Override styles from external libraries (Tailwind or Bootstrap)
    - Temporary fixes
    - Testing

---

### Explain accessibility, usability, and inclusion in web design? 
- Accessbility: make sure that people with disabilites have the same user experience wihtout any discrimination.
    - For example: captions for loud places or deaf users, screen readers for blind users, and clear text contrasts for those with vision impairments. 
- Usability: Your website should be effectve, efficient, and satisfying for users. 
- Inclusion: Your website should be able to use for all diversity and every in the world wihtout any differences in demographic, languages, or ages. 

---
- Written on Mar 31, 2024.