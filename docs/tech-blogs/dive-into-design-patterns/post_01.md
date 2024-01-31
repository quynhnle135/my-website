---
title: Introduction to OOP
---

# Dive Into Design Patterns: Introduction to OOP

- Object-oriented programming is a paradigm based on the concept of wrapping pieces of data, and behavior related to that data, into special bundle called <b>objects</b>, which are constructed from a set of "blueprints" called <b>classess</b>

## Object, classes
- A class is like a <b>blueprint</b> that defines the structure for objects, which are concrete <b>instances</b> of that class
- For example: I have a cat named Oscar. Oscar is an object, an instance of the ```Cat``` class. Every cat has a lot of standard attributes: name, sex, age, weight, color, etc. These are the class's fields
- All cats also behave similarly: breathe, run, eat, sleept, etc. These are the class's methods
- <b>Data stored inside the object's fields in often referenced as state, and all the object's methods define its behavior</b>

```python
class Cat:
    def __init__(self, name: str, sex: str, age: int, weight: int, color: str):
        self.name = name
        self.sex = sex
        self.age = age
        self.weight = weight
        self.color = color
    
    def breathe(self):
        print("I'm breathing")
    
    def eat(self, food: str):
        print(f"I'm eating {food}")


oscar = Cat("Oscar", "male", 2, 5, "white")
oscar.breathe()
oscar.eat("sardine")
```

```
>>> I'm breathing
>>> I'm eating sardine
```

## Class hierarchies
- A real program contains more than one single class. Some of these classes might be organized into class hierarchies.
- Just like cats, dogs also have a lot in common: name, sex, age, and color, etc. Dogs can also sleep and eat. Therefore, we can define the base class Animal that would list the common attributes and behaviors
- A parent class is called a superclass. Its children are subclasses.
- Subclasses inherit state and behavior from their parents, defining only attributes or behaviors that differ. For example, the ```Cat``` class would have the ```meow``` method, and the Dog class has the ```bark``` method
- Subclasses can override the behavior of methods that they inherit from parent classes.
- A subclass can either completely replace the default behavior or just enhance it with some extra stuff.


## Pillars of OOP
- Object-oriented programming is based on four pillars: <b>Abstraction, Encapsulation, Inheritance, Polymorphism</b>

### Abstraction
- Abstraction is a model of a real-world object limited to a specific context, which represents all details relevant to this context with high accuracy and omits all the rest.


``` python
class Airplane:
    # Create private attributes by prefixing the attribute name with double underscores
    def __init__(self, speed: int, altitude: int, rollAngle: int, pitchAngle: int, yawAngle: int, type: str):
        self.speed = speed
        self.altitude = altitude
        self.rollAngle = rollAngle
        self.pitchAngle = pitchAngle
        self.yawAngle = yawAngle
        self.type = type


def main():
    airplane = Airplane(1, 2, 3, 4, 5, "Aircraft")
    print(airplane.speed)
    print(airplane.altitude)
    print(airplane.type)


if __name__ == "__main__":
    main()
```
```
Output:
>>> 1
>>> 2
>>> Aircarft
```

## Encapsulation
- Encapsulation is the ability of an object to hide parts of its states and behaviors from other objects, exposing only a limited interface to the rest of the program
- To encapsulate something means to make it <b>private</b>, and thus accessible only from within the methods of its own class.
- For an example: In the class Airplane below, I only want the ```type``` state of an Airplane object accessible. The other states like speed, altitude, etc are makred private with leading double underscores

```python
class Airplane:
    # Create private attributes by prefixing the attribute name with double underscores
    def __init__(self, speed: int, altitude: int, rollAngle: int, pitchAngle: int, yawAngle: int, type: str):
        self.__speed = speed
        self.__altitude = altitude
        self.__rollAngle = rollAngle
        self.__pitchAngle = pitchAngle
        self.__yawAngle = yawAngle
        self.type = type


def main():
    airplane = Airplane(1, 2, 3, 4, 5, "Aircraft")
    print(airplane.type)


if __name__ == "__main__":
    main()
```
```
Output
>>> Aircraft
```
## Inheritance
- Inheritance is the ability to build new classes on top of existing one. 
- The main benefit of inheritance is <b>code reuse</b>. If you want to create a class that's slightly different from an existing one, there's no need to duplicate code.
- You cannot hide a method in a subclass if it was declared in the superclass.

```python
class Animal:
    def __init__(self, name: str, sex: str, age: int, weight: int, color: str):
        self.name = name
        self.sex = sex
        self.age = age
        self.weight = weight
        self.color = color

    def breath(self):
        print("Breathing...")

    def eat(self, food: str):
        print(f"I'm eating {food}")

    def run(self, destination: str):
        print(f"I'm running to {destination}")

    def sleep(self, hours: int):
        print(f"I've slept for {hours} hours")


class Cat(Animal):
    def __init__(self, name: str, sex: str, age: int, weight: int, color: str, texture: str, isNasty: bool):
        self.texture = texture
        self.isNasty = isNasty
        Animal.__init__(self, name, sex, age, weight, color)

    @staticmethod
    def meow():
        print("Meow, meow")

class Dog(Animal):
    def __init__(self, name: str, sex: str, age: int, weight: int, color: str, bestFriend: Human):
        self.bestFriend = bestFriend
        Animal.__init__(self, name, sex, age, weight, color)

    @staticmethod
    def bark():
        print("Woof, Woof")
```

## Polymorphism
- Most ```Animals``` can make sounds. We can anticipate that all subclasses will need to overide the base ```make_sound``` method so each subclass can emit the correct sound
- Polymorphism lets us omit any default implementation of the method in the superclass, but force all subclasses to come up with their own

```python
class Animal:
    def __init__(self, name: str, sex: str, age: int, weight: int, color: str):
        self.name = name
        self.sex = sex
        self.age = age
        self.weight = weight
        self.color = color

    def breath(self):
        print("Breathing...")

    def eat(self, food: str):
        print(f"I'm eating {food}")

    def run(self, destination: str):
        print(f"I'm running to {destination}")

    def sleep(self, hours: int):
        print(f"I've slept for {hours} hours")

    def make_sound(self):
        pass


class Cat(Animal):
    def __init__(self, name: str, sex: str, age: int, weight: int, color: str, texture: str, isNasty: bool):
        self.texture = texture
        self.isNasty = isNasty
        Animal.__init__(self, name, sex, age, weight, color)

    def make_sound(self):
        print("MEOW MEOW MEOW")


class Dog(Animal):
    def __init__(self, name: str, sex: str, age: int, weight: int, color: str, breed: str):
        self.breed = breed
        Animal.__init__(self, name, sex, age, weight, color)

    def make_sound(self):
        print("WOOF WOOF WOOF")


def main():
    oscar = Cat(name="Oscar", sex="male", age=3, weight=7, color="brown", texture="striped", isNasty=False)
    lucy = Dog(name="Lucy", sex="female", age=2, weight=15, color="white",breed="Corgi")

    oscar.make_sound()
    lucy.make_sound()


if __name__ == "__main__":
    main()
```
```
>>> MEOW MEOW MEOW
>>> WOOF WOOF WOOF  
```

## Relations between Objects
- <b>Dependency</b>: This is the most basic and the weakest type of relations between classes. There is a dependency between two classes if some changes to the definition of one class might result in modifications to another class.
- <b>Association</b>: This is a relationship in which one object uses or interacts with another. In general, you use an association to represent a field that contains some other objects. This field serves as a link between two objects.
- <b>Aggregation</b>: This a specialized type of association that represents "one-to-many", "many-to-many", or "whole part" relations between multiple objects
- <b>Composition</b>: This is a specific kind of aggregation, where one object is composed of one or more instances of the other.

## The big picture
* Dependency: Class A can be affected by changes in class B
* Association: Object A knows about object B. Class A depends on B
* Aggregation: Object A knows about object B, and consists of B. Class A depends on B
* Composition: Object A knows about object B, consists of B, and manages B's life cycle. Class A depends B
* Implementation: Class A defines methods declared in interface B. Object A can be treated as B. Class A depends on B
* Inheritance:s Class A inherits interface and implementation of class B but can extend it. Objects A can be treated as B. Class A depends on B


