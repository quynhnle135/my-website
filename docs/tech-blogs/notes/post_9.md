---
title: 20 Practical productivity tips that you can start doing today as a developer 
---

# 20 Practical productivity tips that you can start doing today as a developer (no Pomodoro)

For these productivity tips, there are four themes for an easy reference: 
- Level up your working environment
- Optimize your coding workflow
- Make your debugging resourceful
- Work on your soft skills

---

# Level up your working environment

## 1. Choose the right theme
- Many developers default to ddark themese for their favorite IDEs, ofthen arguing they're easier on the eyes. However, to some people like the author, they find dark themes uncomfortable, causing text to appear blurry. 
- Choose themese that you find comfortable with, either light theme, dimmed themese, or dark theme. Prioritize your eye comfort for a better coding experience and overall well-being

## 2. Master shortcuts
- Explore the available shortcuts in your IDE's settings, typically found under the Keymap option.
- Here are somethings you might consider looking into:
    * Utilize caret manipulation shortcuts for tasks like selection, deletion, and navigation between words and lines, applicable not just in your IDE but also in all text inputs, including the terminal.
    * Swap and duplicate lines
    * Access clipboard history
    * Jump to a line, jump to a file, and jumpt to a line in a file
    * Access the refactoring options
    * Toggle the file tree display

## 3. Upgrade your hardware
- You may consider switching to an external keyboard and mouse, which will unlock greater flexibility and precision when navigating your codebase.s
- Here are some mouse recommendations:
    * Prioritize an ergonomic design that fits your hand comfortably
    * Opt for a mouse with at least the navigation buttons, which greatly aids code navigation.

## 4. Consider focusing your view
- Unless you're dealing with an exceptionally complex scenario that requires aggregating multiple information sources, it may be more productive to narrow down your focus.

---

# Optimize your coding workflow
## 5. Learn Regex
- Regular expression (regex) are an incredibly potent tool for refactoring and searching.
- You don't need to remember everything by heart, but what's crucial is understanding concepts, like grouping, lookahead, and lookbehind. After that, it's perfecly fine to search for syntax whenever you need it

## 6. Probably you don't need a browser
- For back-end developers, you can efficiently develop features without the need to interact with your browser. You can accomplish this by relying solely on automated tests.
- With a well-tested backend, you can confidently make modifications without the tedious process of manual testing to ensure nothing is accidentally broken.

## 7. Have faith in your tests and your QA engineer
- Consider incorporating Mutation Testing into your workflow if you haven’t already. This practice helps pinpoint inconclusive tests and enhances your ability to identify additional scenarios that might require testing in your code.

## 8. Prioritize results first, refactor later
- The idea is that it’s way faster to achieve results first and then refactor the code later. 
- Don’t make it perfect on the first try. Once you have the full picture of your code and it is thoroughly tested, you can readily optimize it by removing redundancy (DRY-ing it up) and making it more modular and maintainable.

## 9. You might not need the documentation
- This approach offers two significant advantages in my experience:
    * It allows for a deep understanding of how that piece of code functions.
    * It can lead to the discovery of low-level helpers and techniques that are typically undocumented.

## 10. Take breaks
- It can become frustrating when we have to stare at the screen too long. You can divert your attention to tasks like PR reviews or spec writing, or even step away for a walk, prepare a coffee, etc.
- The key is to return to your problem with a fresh mindset, which may provide a different perspective and help smooth the process

## 11. Leverage Github's online editor
- For those hosting their repositories on GitHub, then you can take advantage of the online VSCode editor at github.dev. This can help with PR reviews (including leaving comments, suggestions, etc.) and small commits without switching branches locally.
- You can simply modify the PR’s URL from github.com to github.dev, or press . while on the PR to access the online IDE directly.

---

# Make your debugging resourceful
## 12. Debug your queries sooner
- When working with an ORM, handling complex SQL queries may not always be straightforward. 
- When you encounter issues such as test failures or unexpected behavior while working on a feature, begin by examining what the ORM is generating behind the scenes.
- Verify that the generated query aligns with what should be executed.

## 13. Master your error messages
- Sadly, not all errors come with clear explanations, especially those originating in low-level vendor code. Therefore, it’s crucial to invest extra effort in comprehending the error and its underlying cause.
- The next time you encounter a similar error, you should promptly recognize the root cause or what might help understand it. This proactive approach can save you valuable time in troubleshooting and resolving issues.

## 14. Tranform each debug session into a learning opotunity
- Stay vigilant about anything that slows down your progress, and be sure to transform your debugging experiences into valuable learning opportunities. So you can adapt your debugging strategies to what you missed the last time.

---

# Work on your soft-skills
## 15. Never forget what you did and what you have to do again
- Have you ever found yourself struggling to recall what you accomplished yesterday or right before heading off on a vacation during a standup meeting? Or perhaps you’ve forgotten to complete essential tasks like speccing a card or responding to questions? If so, there’s a remedy, which is establishing a robust to-do workflow.

## 16. Leverage your calendar
- Your Google Calendar or similar tools are invaluable for efficient day organization. Ensure you use them effectively to schedule your daily tasks.
- Consider blocking 15 minutes at the end of each working day to plan your agenda for the next day. This practice can greatly enhance your productivity by providing a structured plan for your tasks and priorities.

## 17. Schedule time for small tasks
- To boost your productivity, allocate recurring time slots in your calendar for tasks such as PR reviews, card refinement (speccing), etc.
- Also, schedule on-demand time slots to handle small, ad-hoc requests like reviewing a RFC or babysitting a PR.
- This strategy will enable you to accomplish more, unblock your colleagues, and sustain a clear mindset.

## 18. Have dedicated focus time
- Allocate specific periods for focus time, where you enter your “zen mode.” This is the time to eliminate distractions and concentrate on creating or accomplishing tasks without interruptions.
- Remember to snooze your notifications and update your status, signaling to others that you’re in a focused state, making it less likely for them to interrupt you.

## 19. Save time by asking questions
- While exploring and learning new things is valuable, it’s not always the most time-efficient approach. 
- When faced with a challenge or unfamiliar task, consider seeking shortcuts by asking your colleagues for guidance and brainstorming on how to accomplish it. 
- This can save you significant time and prevent unnecessary frustration.

## 20. Nudge people to unblock you
- Delays caused by blockers can harm both your productivity and team efficiency. 
- When waiting on others, gently nudge them to take action. Ensuring that tasks requiring their input are completed promptly benefits everyone involved and helps prevent a sudden pile-up of tasks, which can disrupt your workflow and make context-switching challenging.

---

You can read the full article [here](https://medium.com/studocu-techblog/20-practical-productivity-tips-that-you-can-start-doing-today-as-a-developer-no-pomodoro-b45766724f51)