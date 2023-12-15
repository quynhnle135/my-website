---
title: How to plan a large and complex project
---

# How to plan a large and complex project

## Technical speccing
- Technical speccing is also known as technical specification, which referse to the process of defining the technical requirements and design of a software system, component, or process.
- After gaining a deeper understanding of the project, you should taking your product requirements doc and start fleshing out a technical spec doc
- Technical specs are awesome because they help you:
    * Identify design issues before coding starts
    * Give other devs a chance to catch missing scope
    * Provide knowledge sharing and documentation
    * Achieve design consensus around the technical plan

## Creating a detailed project plan
- Ater working through technical specs, you should start creating a detail project plan by asking yourself a lot of questions:
    * What existing frameworks, systems, and in-house existing technologies can I reuse to build this?
    * Are there any new major technologies / libraries we’ll need to use to pull off this feature? (Eg. A new library with a vendor contract, or a document database instead of a relational db?)
    * What kind of APIs will I need to pull this off? Will they all be internal, or also external?
    * What kind of auth will we use for the APIs?
    * Do I need any new databases or db tables for this feature?
    * What kind of tech debt will we need to tackle in order to work on this project?
- On the frontend, there are different questions and requirements we need to think through.
    * Will the designs require us to create any new components?
    * What kind of pages / tools will we be making?
    * Is there anything with complex state management we’ll need to tackle?
    * Are we clear on what APIs we’ll be using, and aligned on their interface?
    * Is this any internal tool, or external public facing tool?
    * What kind of load should we expect? Will we need a CDN to host our app and/or assets?

- You’ll want to document the answers to these questions in your technical spec.
    * List out all the APIs and the agreed up structure
    * List out new databases or tables you’ll be adding
    * List out a new components you’ll be building
    * List out any new frameworks or technologies you’ll be using

## Developing systems design and code flow diagrams
- Creating diagrams that show how all different parts of your system connect together help other engineers understand your project better
- You should show the code flow of a system you're working on
- Start from high-level of detail, continue to flesh out the diagram

## Organizing around milestones and tickets
- You should break down the complex project into smaller milestones and tasks because it helps you:
    * Make sense of a complex problem
    * Develop accurate estimates
    * Gain momentum while building
    * Rally the team around priorities
- Break down each of those user storeis into tasks for frontend and backend
- Finally, you put these tasks into your project management software with a clear summary and acceptance criteria
&rarr; <i>Each task should be fleshed out throughly enough so that anyone could pick up the task and have enough context to complete it.</i>

## What does this look like in practice?
- Start by writing a technical spec
- Divide the larger project into smaller projects
- Break down each of those smaller projects into features
- Create stories for those features
- Add a rough estimate on each of those stories

---

You can read the full article [here](https://levelupsoftwareengineering.substack.com/p/how-to-plan-a-complex-project?utm_source=profile&utm_medium=reader2)

