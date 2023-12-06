---
title: Static methods
---

# Static Methods

- Static methods can do their work without access to any of the information stored in an instance's attributes.
- Static methods are simpler than regular methods because Python doesn't need to provide them with all the information associated with the instances.

## 1. A method that doesn't need self
- Methods that don't use any information associated with a specific instance are called static methods
- The ```@staticmethod``` decorator tells Python not to pass the self arugment to a method

```python
class Mountain:
    def __init__(self, name: str = "", elev_meters: int = 0):
        self.name = name
        self.elev_meters = elev_meters

    def describe_mountain(self):
        msg = f"{self.name} is {self.elev_meters} meters tall."
        print(msg)

    @staticmethod
    def show_disclaimer():
        msg = "\nClimbing steep mountains can bee dangerous."
        msg += " If you are new to climbing"
        msg += " please seek out instruction from"
        msg += " a qualified guide or an"
        msg += " experienced mentor."
        print(msg)


my_mountain = Mountain("Mt. Verstovia", 1022)
my_mountain.describe_mountain()
my_mountain.show_disclaimer()
```

```
Output
>>> Mt. Verstovia is 1022 meters tall.

>> Climbing steep mountains can bee dangerous. If you are new to climbing please seek out instruction from a qualified guide or an experienced mentor.
```
- Notice that the ```show_disclaimer()``` doesn't have any argument, even the ```self``` argument, because it's a static method.

## 2. Why use static methods?
- Classes that use static methods where appropriate are clearer.
- When you decorate a method with ```@staticmethod```, you're just not telling Python how to handle the method. You're also communicating with other developers that this method doesn't modify any instance, and that they can call the method without first creating an instance
- Classes that use static methods are more efficient. 
- In a large class with many attributes and many instances have been created, and those instances are all calling a certain method many times. Adding the ```@staticmethod``` decorator eliminates a significant amount of work that Python would have been doing unnecessarily
- Static methods are used for helper methods since they don't need information associated with an instance.

---

You can read the full article [here](https://www.mostlypython.com/p/oop-in-python-part-4-static-methods)