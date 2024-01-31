---
title: Creational Design Patterns (5) - Singleton
---

# Creational Design Pattern (5) - Singleton

- Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance

## Solution
All implementations of the Singleton have these two steps in common:
- Make the default constructor private, to prevent other objects from using the ```new``` operator with the Singleton class
- Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cahced object.

## Aplicability
- Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.
- Use the Singleton pattern when you need stricter control over global varaibles

## Pros and Cons
### Pros
- You can be sure that a class has only one single instance
- You gain a global access point to that instance
- The singleton object is intialized only when it's requested for the first time

### Cons
- Violates the Single Responsibility Principle. The pattern solves two problems at the time.
- The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.
- The pattern requires special treatment in a multithreaded environment so that multiple threads won't create a singleton object several times.
- It may be difficult to unit test the client code of the Single- ton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.

## Example

```python
class Singleton:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            print("Creating the instance")
            cls._instance = super(Singleton, cls).__new__(cls)
        return cls._instance

    def some_business_logic(self):
        pass


singleton1 = Singleton()
print(f"ID of Singleton1: {id(singleton1)}")

singleton2 = Singleton()
print(f"ID of Singleton2: {id(singleton2)}")
```

```
Output:
Creating the instance
ID of Singleton1: 4375190800
ID of Singleton2: 4375190800
```

In this example:
- ```Singleton``` class uses the ```__new__``` method to control the object creation process. This is a special method in Python used for creating new instances.
- The first time Singleton is instantiated, ```_instance``` is None, so a new instance is created and stored in ```_instance```.
- Subsequent attempts to instantiate ```Singleton``` will return the already created instance.
- The ```some_business_logic``` method is a placeholder for any method that you would typically have in your class.
- When you create ```singleton1``` and ```singleton2```, you'll see that they both have the same ID, which confirms that only one instance of the class is created.