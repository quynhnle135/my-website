---
title: Why is object-oriented programming so important?
---

# Why is object-oriented programming is so important?

## 1. What is "object-oriented programming"?

- OOP was first described as "a way of sorting information and actions in one place". Most OOP critics usually try to discuss subtle aspects of how we store information and actions together.
- What does it mean to "store information and actions in one place"?. Here's a tiny example:

```python
class Robot:
    def __init__(self, name: str = ""):
        self.name = name
    
    def say_hello(self):
        print(f"Hello, I'm {self.name}!")

```
- There's one piece of information here, the robot's name. There's also one action; it can say hello.
- Both the information associated with a robot, and its functionality are contained in the class Robot. 

## 2. Why is OOP so important?
- Once you've defined a class, using objects from the class turns out to be a really powerful way to get work done. For example:
```python
my_robot_army = [Robot() for _ in range(1000)]
```
- With no aditional code, we can build 1000 virtual robots in one line of code. 
- Using OOP is still one of the most practical ways to structure code so you solve the problems you care about reasonably efficiently and effectively.

## 3. But I never write classes...
- Even if you rarely write classes, a solid understanding of OOP will still go a long way towards helping you become a better Python programmer.
- Everything in Python is an object, so even if you don't write your own classes, you're still using OOP.
- One of the main points of structuring code as a class is so others can just with objects of the class.
- The more you understand about OOP, the better you'll be able to work with the objects that are created from other people's classes.

---

You can read the full article [here](https://www.mostlypython.com/p/oop-in-python-why-is-object-oriented)

