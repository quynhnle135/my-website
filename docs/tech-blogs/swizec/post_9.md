---
title: You can't stop the business, or why rewrites fail
---

# You can't stop the business, or why rewrites fail

- In Things You Should Never Do essay, Joel Spolsky says never to attempt a write. It cannot succeed and you're throwing away lessons learned. Lessons you'll need to re-learn again.
- Joel is talking about the types of rewrites engineers first think of when they hear "rewrite":
    - Stop the world and rewrite
    - Build a new system next to the old
&rarr; Although these sound clean and tidy, they almost never work. The culprit is <b>opportunity cost</b>

## You can't stop the word and rewrite
- When rewriting the system, there are the challenges like big system, lots of code, decades old, etc.
- But the business side was not ready, they couldn't work in a half new half old way either. 

## Stopping creates risk
- Swizec gave an example when he was once asked to fix a company's billing system: 5 years of legacy business models started to stack up and bad code as slowing them down. Nobody understood how the system works &rarr; They only roughly knew where the code was, which tables held the data, and that was it.
- His charge was to:
    - Make the code support the new business model
    - Kill old business models
    - Support some not too old models
    - Allow everyone to migrate to the new model during a grace period where old models keep working

## You can't estimate accurately
- After two weeks, the system was even worse than they feared. Spaghetti code barely begins to describe it. Control flow bounced from function to fucntion, module to module, with zero rhyme or reason.
&rarr; There are now way to know what you'll find without doing an extensive roadmapping project ahead of time, but it may take longer than the business is willing to spend &rarr; <b>Making a guess and adjusting as you learn more is usually the best you can do</b>
- They were stuck past the point of no return. Couldn't make changes to the old code because they'll be gone soon, couldn't use the new code because it wasn't ready.

## You can't build a new system next to the old
- Split the team: One team works on the fresh rewrite, the other maintains existing code:
    - bugs keep getting fixed
    - product keeps adding features and running experiments
    - the rewrite team can focus
- However, the target is running away because it would take a lot of time to catch up with the moving target &rarr; The biggest challenge with chasing the moving target is that the old code continues to kick the can (avoid or delay dealing with a problem), while other teams find new use-cases and uncover bugs, you have to build those twice - once in the old code, once in the new code. 

&rarr; In conclusion, based on the example provided by Swizec, its' difficult, complicated, costly, and taking a lot of time to rewrite a big system. Therefore, try your best to avoid rewriting. 
---

You can read the full article [here](https://swizec.com/blog/you-can-t-stop-the-business-or-why-rewrites-fail/)