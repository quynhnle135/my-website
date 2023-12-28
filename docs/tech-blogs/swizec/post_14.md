---
title: Two types of complexity and their impact
---

# Two types of complexity and their impact

- <b>Complicated vs Complex</b>:
    - Every engineer recognizes complexity when they see it, but the thing is hard to measure
    - There two types of complexity to make it easier for you to measure: McCabe complexity and Architectural complexity
    - The complicated and complex distinction is important:
        - <b>Complicated</b> means that there are a lot of inter-connected moving pieces, but you can tease them apart by carefully following the execution flow.
        - <b>Complex</b> means that your system is ruled by emergent effects that are hard or impossible to trace.
&rarr; Most mordern systems are both complicated and complex

- <b>McCabe Complexity</b>:
    - This is known as cyclomatic complexity, measures how complicated a piece of code is to understand &rarr; The more control flows exist, the higher the score.
    - In theory, <b>you measure the complicatedness of your code by turning it into a control flow diagram</b>. Nodes are actions, arrows are control flow
    - The McCabe complexity score measures how many linear paths through the graph exist. You can count those by counting decision points and each point add 1 to the score
    &rarr; Code with lest than 10 score is considered easy, while code with 50+ score is considered as untestable.

- <b>Architectural complexity</b>:
    - This measures the complexity of a system of its parts. The more connections or dependencies, the higher the score.
    - This use network diagram to show how visible different parts of a system are to one another &rarr; <b>Visible</b> means that there's a dependency of some sort like function call, shared variable, and imported class. 

- <b>The impact of tough code vs tough systems</b>: What do you think is worse? Complicated code or complex systems? &rarr; The answer seems to depend on your years of experience.
    - More junior developers struggle with making changes to complicated code, which slow them down a lot.
    - Senior developers see code as a network diagram and are able to work at a higher level of abstraction &rarr; They think in algorithms and systems
    - Thoe more experienced you are, the more time you spend in highly complex parts of the system.

&rarr; <b>Don't worry about complicated code. As long as its encapsulated and has no spooky side-effects, you're good</b>

---

You can read the full article [here](https://swizec.com/blog/two-types-of-complexity-and-their-impact/)