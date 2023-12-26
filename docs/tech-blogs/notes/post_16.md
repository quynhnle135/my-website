---
title: 7 Simple Habits of The Top 1% of Engineers
---

# 7 Simple Habits of The Top 1% of Engineers

## 1. Code for the human, not the computer

> <i>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler</i>

- The best engineers I know are producted-minded: thinking about solving a problem for humans first
- The best engineers I knew always evaluated the value of their code, for all audiences

## 2. Detach from the code itself
- Amazing engineers stay unattached to the code itself, which means that they were unafraid to delete and start over on code as long as the end result would be better overall.
- The best way to teach yourself to be unattach from your code is to realize that in 20 years, there's a high chance that much of your code will either be technical debt, deprecated, or rewritten.

## 3. Use consistent standards
- When writing code, stick to a consistent standard and style of coding. Consistency makes code easier to read and understand by both future you and your teammates.
- Every outperformer I knew had the team's code standards internalized and followed it as closely as possible, knowing its benefits

## 4. Write simple code
- Every elite engineer I knew produced code that may have been complex to produce but was simple to both read and understand at the end. Their code was clean, organized, and logical. Each decision made in their code made sense, and when something didn't, it was documented well within the code.
- A good way to write clean is to follow principles, like the SOLID principles:
    - Single Responsbility: A class should only have one responsibility.
    - Open-Closed: Software objects (classes, modules, etc.) should be open for extension but closed for modification, allowing predictable, maintainable code.
    - Liskov Substitution: Subtypes must be subsuitable for their base types without affecting the correctness of the program.
    - Interface Segregation: Code shouldn't be dependent on giant interfaces in which they don't use all of it. Instead, packages should both contain and allow smaller, specific interfaces to be importable.
    - Dependency Inversion: High-level modules should not depend on low-level modules; both should depend on abstractions, fostering a more flexible and decoupled system design.

## 5. Don't allow surprise
- Code shouldn't produce surprises, which is done by following code principles and writing proper test cases.
- Tests force code clarity and predictability. They provide confidence. Good automated testing allows teams to make changes to code without worrying about breaking something unseen.
- Some types of tests include: 
    - Unit tests for individual components and isolated functions.
    - Integration tests for interaction between multiple components.
    - End-to-end tests that assess the entire system's functionality from a user's perspective.
- Tests should be simple. It should be easy to identify what went wrong when reading a failing test. It's also important to know what not to test.

## 6. Communicate often
- The best engineers were both communicative and collaborative - not afraid to take the time to work together for the chance at a better end result.
- This can be as simple as pinging a teammate for a quick review over a document or adding extra code reviewers to an important pull request

## 7. Code fast and slow & Don't follow the rule blindly
- By taking the time to use standards, test properly, use principles, and communicate often, they save themselves more time in the long run
- Make sure to document why your code is written in a certain way.
- The reality of software development is that not all code can be clean or follow the rules perfectly. What it can be is consistent, clean, understandable, testable, and valuebale.

---

You can read the full article [here](https://engineercodex.substack.com/p/7-simple-habits-of-the-top-1-of-engineers)