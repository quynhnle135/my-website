---
title: Things You Should Never Do
---

# Things You Should Never Do

- Joel started the article with giving some examples of Big Companies failing with their products by makeing the single worst strategic mistake: <b>They decided to write the code from scratch</b>
- There's a subtle reason that programmers always want to throw away the code and start over &rarr; The reason is that they think the old code is a mess
&rarr; The reason that they think the old code is a mess is because of a cardinal, fundemental law of programming: <b><i>It's harder to read code than to write it</i></b>
- Old code has been <i>used</i>. It has been <i>tested</i>. Lost of bugs have been found, and they've been <i>fixed</i> &rarr; When you throw away code and start from scratch, you are throwing away all that knowledge. All those collected bug fixes. Years of programming work.

---

When programmers say that their code is a holy mess, there are three kinds of things that are wrong with it:
- First, <b>there are architectural problems</b>:
    - The code is not factored correctly. The networking code is popping up its own dialog boxes from the middle of nowhere; this should have been handled in the UI code.
    - These problems can be solved by <b>carefully moving code, refactoring, changing interfaces.</b>
- A second reason programmers think that their code is a mess is that it is inefficient &rarr; which you can opitmize or even rewrite.
- Third, the code may be doggone ugly. 

---

&rarr; It's important to remember that when you start from scratch there is <b> absolutely no reason</b> to believe that you are going to do a better job than you did the first time.

--- 

You can read the full article [here](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/)

    