---
title: What's so special about self?
---

# What's so special about self?

## 1. What is self? 
- ```self``` is often described as "a reference to the current instance of the class"
- A class is a blueprint for making objects. If you use one blueprint to make three different houses, the front door on the blueprint would represent three different front doors in the real world.
- Take a look at this example:
```python
class Robot:
    def __init__(self, name: str = ""):
        self.name = name
        print(self)
    
    def say_hello(self):
        print(f"Hi, I'm {self.name}!")


my_arrmy = [Robot() for _ in range(3)]
```
```
Output:
<__main__.Robot object at 0x100970e50>
<__main__.Robot object at 0x100970f50>
<__main__.Robot object at 0x100970f90>
```
- The ```self``` point to the object created from class Robot at the specific memory address. Three different objects created from class Robot have three different places in memory. 

## 2. Why is self so important?
- While it's helpful to think of a class as a blueprint for making objects, it's also helpful to think of it as a container for information and actions.
- It's really helpful to have a way to access any information associated with an object from anywhere in the class.
- It's just as helpful to have access to any action (method) associated with an object, from anywhere in the class.
- Expand the demo Robot class with more information:
```python
class Robot:
    def __init__(self, name: str = ""):
        self.name = name
        self.type = "drone"
        self.mass_grams = 249
    
    def say_hello(self):
        print(f"Hi, I'm {self.name}!")
        print(f"I'm a {self.type}.")
        print(f"I have a mass of {self.mass_grams}.")
my_robot = Robot("William")
my_robot.say_hello()
```

```
Output:
>>> Hi, I'm William!
>>> I'm a drone.
>>> I have a mass of 249g.
```

Here's what without ```self``` looks like:

```python
def make_robot(name=""):
    """Make a robot."""
    robot_dict = {
        "name": name,
        "type": "drone",
        "mass_grams": 249,
    }

    return robot_dict

def say_hello(robot_dict):
    """Make a robot say hello."""
    print(f"Hi, I'm {robot_dict['name']}.")
    print(f"I'm a {robot_dict['type']}.")
    print(f"I have a mass of {robot_dict['mass_grams']}g.")

my_robot = make_robot("William")
say_hello(my_robot)
```
- For this version of the program, ```make_robot()``` returns a dictionary containing all the information relating to a robot. 
- The function ```say_hello()``` accepts a robot dictionary and prints the information it contains

### Notes: 
* As you can see, in the OOP version of the code there's a connection between the information and the associated actions. The varibles that refer to the robot's information are connected to the methods that define the robot's behavior.
* In the non-OOP version, there's no connection between the information and the related actions. The function ```say_hello()``` works for a dictionary about a robot, but there's nothing that ties it specifically to that dictionary.

---

- When you call a method, Python automatically inserts the self argument when it makes the actual call. 
- You can see what's in self because every instance of self has a dictionary associated with it:
```python
class Robot:
    """A class representing simple robots."""

    def __init__(self, name=""):
        self.name = name
        self.type = "drone"
        self.mass_grams = 249
        print(self.__dict__)

    def say_hello(self):
        ...

my_robot = Robot("William")
``` 
```
>>> {'name': 'William', 'type': 'drone', 'mass_grams': 249}
```

---

You can read the full article [here](https://www.mostlypython.com/p/oop-in-python-part-2-whats-so-special)