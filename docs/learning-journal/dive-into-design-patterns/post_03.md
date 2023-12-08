---
title: Software Design Principles
---

# Dive Into Design Patterns: Software Design Principles

## Features of Good Design
- Code reuse: 
    * This is one of the most common ways to reduce development costs
    * However, making existing code work in a new contest usually takes extra effort
    * Tight coupling between components, dependencies on concrete classes instead of interfaces, hardcoded operations - all of this reduces flexibility of the code and makes it harder to reuse it
    * The level of reusue increases when you move from classes to patterns and finally frameworks
    * Patterns let you reuse design ideas and concepts independently of concrete code
- Extensility:
    * Change is the only constant thing in a programmer's life
    * We understand the problem better once we start to solve it
    * All seasoned developers try to provide for possible future changes when designing an application's architecture

---
## Design Principles
- These principles are used to answer questions like: What is a good software design? How would you measure it? What practices would you need to follow to achieve it? How can you make your architecture flexible, statble and easy to understand?

### Encapsulate What Varies
- Identify the aspects of your application that vary and separate them from what stays the same.
- The main goal of <b>"Encapsulate What Varies"</b> principle is to minimize the effect caused by changes
- You can isolate the parts of the program that vary in independent modules, protecting the rest of the code from adverse effects. as a result, you spend less time getting the program back into working shape, implementing and testing the changes
- There are several ways to encapsulate:
    * Encapsulation on a method level
    * Encapsulation on a class level

An example of a program calculating total of an order before encapsulating what varies:

``` python
class Item:
    def __init__(self, price: float, quantity: int):
        self.price = price
        self.quantity = quantity


class Order:
    def __init__(self, country: str):
        self.lineItems = []
        self.country = country

    def getOrderTotal(self):
        total = 0
        for item in self.lineItems:
            total += item.price * item.quantity

        if self.country == "US":
            total += total * 0.07
        else:
            total += total * 0.20
        return total


def main():
    item1 = Item(price=10, quantity=10)
    item2 = Item(price=2, quantity=15)
    item3 = Item(price=5, quantity=7)

    my_order = Order(country="US")
    my_order.lineItems.append(item1)
    my_order.lineItems.append(item2)
    my_order.lineItems.append(item3)

    print(my_order.getOrderTotal())


if __name__ == "__main__":
    main()
``` 

Because tax rate is not constant and may chane every time a new input is enter, it should be seperated

``` python
class Item:
    def __init__(self, price: float, quantity: int):
        self.price = price
        self.quantity = quantity


class Order:
    def __init__(self, country: str):
        self.lineItems = []
        self.country = country

    def getOrderTotal(self):
        total = 0
        for item in self.lineItems:
            total += item.price * item.quantity

        total += total * self.getTaxRate()
        return total

    def getTaxRate(self):
        if self.country == "US":
            return 0.07
        else:
            return 0.20


def main():
    item1 = Item(price=10, quantity=10)
    item2 = Item(price=2, quantity=15)
    item3 = Item(price=5, quantity=7)

    my_order = Order(country="US")
    my_order.lineItems.append(item1)
    my_order.lineItems.append(item2)
    my_order.lineItems.append(item3)

    print(my_order.getOrderTotal())


if __name__ == "__main__":
    main()
```

### Program to an Interface, not an Implementation
- Program to an interface, not an implementation. Depend on abstractions, not on concrete classes
- For example: A ```Cat``` that can eat any food is more flexible than once that can eat just sausages. You can extend that cat's menu with any other food.
- When you want to make two classes collaborate, you can start by making one of them dependent on the other. However, there's another, more flexible way to set up collaboration between objects:
    * Determine what exactly one object needs from the other: which methods does it execute?
    * Describe these methods in a new interface or abstract class
    * Make the class that is a dependency implement this interface
    * Now make the second class dependent on this interface rather than on the concrete class.

Example:
```python title="employee.py"
class Employee:
    def __init__(self, id: int, first_name: str, last_name: str, department: str):
        self.__id = id
        self.first_name = first_name
        self.last_name = last_name
        self.department = department

    def greeting(self):
        print(f"Hello, I'm {self.first_name} {self.last_name} from {self.department} department")


class Designer(Employee):
    def designArchitecture(self):
        print("I am designing architecture")


class Programmer(Employee):
    def writeCode(self):
        print("I'm writing code")


class Tester(Employee):
    def testSofware(self):
        print("I'm writing tests")
```

```python title="company.py"
from employee import Designer, Programmer, Tester


class Company:
    def __init__(self, name: str, address: str, field: str):
        self.name = name
        self.address = address
        self.field = field
        self.employees = []


def main():
    d = Designer(id=1, first_name="John", last_name="Doe", department="design")
    p = Programmer(id=1, first_name="Jane", last_name="Smiths", department="programming")
    t = Tester(id=1, first_name="Joe", last_name="Kim", department="testing")
    my_company = Company(name="NumberOne", address="1 main street", field="fintech")
    my_company.employees.append(d)
    my_company.employees.append(p)
    my_company.employees.append(t)

    for employee in my_company.employees:
        employee.greeting()


if __name__ == "__main__":
    main()
```
```
Output:
Hello, I'm John Doe from design department
Hello, I'm Jane Smiths from programming department
Hello, I'm Joe Kim from testing department
```

Improve the ```company``` program by applying Polymorphism

```python title="employee.py"
class Employee:
    def __init__(self, id: int, first_name: str, last_name: str, department: str):
        self.__id = id
        self.first_name = first_name
        self.last_name = last_name
        self.department = department

    def greeting(self):
        print(f"Hello, I'm {self.first_name} {self.last_name} from {self.department} department")

    # Applying Polymorphism
    def do_work(self):
        pass


class Designer(Employee):
    def do_work(self):
        print("I am designing architecture")


class Programmer(Employee):
    def do_work(self):
        print("I'm writing code")


class Tester(Employee):
    def do_work(self):
        print("I'm writing tests")
```

```python title="company.py"
from employee import Designer, Programmer, Tester


class Company:
    def __init__(self, name: str, address: str, field: str):
        self.name = name
        self.address = address
        self.field = field
        self.employees = []


def main():
    d = Designer(id=1, first_name="John", last_name="Doe", department="design")
    p = Programmer(id=1, first_name="Jane", last_name="Smiths", department="programming")
    t = Tester(id=1, first_name="Joe", last_name="Kim", department="testing")
    my_company = Company(name="NumberOne", address="1 main street", field="fintech")
    my_company.employees.append(d)
    my_company.employees.append(p)
    my_company.employees.append(t)

    for employee in my_company.employees:
        employee.greeting()
        employee.do_work()


if __name__ == "__main__":
    main()
```
```
Output:

Hello, I'm John Doe from design department
I am designing architecture
Hello, I'm Jane Smiths from programming department
I'm writing code
Hello, I'm Joe Kim from testing department
I'm writing tests
```

### Favor Composition Over Inheritance
- Inheritance is probably the most obvious and easy way of reusing code between classes. However, there are some disadvantages when using Inheritance:
    * A subclass cannot reduce the interface of the superclass. You have to implement all abstract methods of the parent class even if you won't be using them
    * When overriding methods you need to make sure that the new behavior is compatible with the base one. It's important because objects of the subclass may be passed to any code that expects objects of the superclass and you don't want that code to break
    * Inheritance breaks encapsulation of the superclass
    * Subclasses are tightly coupled to superclasses
    * Trying to reuse code through inheritance can lead to creating parallel inheritance hierarchies 

---

## SOLID Principles
- SOLID are five design principles intended to make software designs more understandable, flexible, and maintainable

### Single Responsibility Principle
- A class should have just one reason to change
- The main goal of this principle is to reducing complexity
- If a class does too many things, you have to change it every time one of these things changes. While doing that, you are risking breaking other parts of the class which you didn't even intend to change


### Open/Closed Principle
- Classes should be open for extension but closed for modification
- The main idea of this principle is to keep existing code from breaking when you implement new features

### Liskov Substitution Principle
- When extending a class, remember that you should be able to pass objects of the subclass in place of objects of the parent class without breaking the client code. This means that the subclass should remain compatible with the behavior of the superclass
- When overriding a method, extend the base behavior rather than replacing it with something else entirely
- Here's a checklist for the subclasses:
    * Parameter types in a method of a subclass should match or be more abstract than parameter tupes in the method of the superclass. For example: for function ```feed(Cat c)```, client code always passes cat objects into this method. You can create a subclass that override the method sto that it can feed animal ```feed(Animal a)```
    * The return type in a method of a subclass should match or be a subtype of the return type in the method of the superclass. For example: You have a method ```buyCat(): Cat```, the subclass overrides the method can be like this ````buyCat(): BengalCat```
    * A method in a subclass shoudn't throw types of exceptions which the base method isn't expected to throw
    * A subclass shouldn't strengthen pre-conditions
    * A subclass shouldn't have weaken post-conditions
    * Invariants of a superclass must be preserved
    * A subclass shouldn't change values of private fields of the superclass


## Interface Segregation Principle
- Client shouldn't be forced to depend on methods they do not use
- Class inheritance lets a class have just one superclass, but it doesn't limit the number of interfaces that the class can implement at the same time. Hence, there's no need to cram tons of unrelated methods to a single interface

## Dependency Inversion Principle
- High-level classes shouldn't depend on low-level classes. Both should depend on abstractions. Abstractions shouldn't depend on details. Details should depend on abstractions
- Usually when designing software, you can make a distinction between two levels of classes:
    * Low-level classes implement basic operations such as working with a disk, transferring data over a network, connecting to a database, etc
    * High-level classes contain complex business logic that directs low-level classes to do something