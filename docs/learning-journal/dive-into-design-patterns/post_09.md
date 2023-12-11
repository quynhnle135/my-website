---
title: Creational Design Patterns - Factory Method vs. Abstract Factory
---

# Factory Method vs. Abstract Factory

## Factory Method
- Purpose: Create objects without specifying the exact class of object that will be created.
- Usage: Used when the creation logic of an object might change or can be extended, and when the object creation can be deferred to subclasses
- Implementation: A single method (factory method) in a class for creating an object. Subclasses can override this method to change the type of objects will be created

Example:
```python
class Animal:
    def speak(self):
        pass


class Dog(Animal):
    def speak(self):
        print("WOOF WOOF")


class Cat(Animal):
    def speak(self):
        print("MEOW MEOW")


class AnimalFactory:
     def create_animal(self, animal_type: str):
        if animal_type == "dog":
             return Dog()
        elif animal_type == "cat":
            return Cat()
        else:
            raise ValueError("Unknown animal type")


factory = AnimalFactory()
dog = factory.create_animal(animal_type="dog")
dog.speak()
cat = factory.create_animal(animal_type="cat")
cat.speak()
```

```
Output:
>>> WOOF WOOF
>>> MEOW MEOW
```

### Why can't I just create a dog instance by calling the Dog() object directly?
- Decoupling code: Factory methods decouple the creation of objects from their usage, which means that the rest of your code doesn't need to know about the concrete classes requried to create these objects. As the example above, user doesn't need if there're subclasses ```Dog()``` or ```Cat()``` or any animal subclass; they're able to create an Animal subclass by calling ```AnimalFactory()```
- Flexibility and Extensibility: Adding new types or new Animal subclasses become easier and doesn't require changing the client code. You can extend the factory to handle new types, providing greater flexibility and making the codebase more maintainable
- Conditional Logic for Object Creation and consistency in Object Creation: Ensuring that all objects of a certain type are created with consistent initialization logical can be crucial in some applications. A factory method centralize this creation logic.
=> While direct instantiation is simpler and suitable for many cases, the Factory Method pattern offers benefits in term of code maintainability, flexibility, and scalability, especially in complex system or when future extension are anticipated.

### Why don't we use @abstractmethod for speak() function in Animal class?
- If you're sure that you won't create any instance from Animal object, you can add ```@abstractmethod``` decorator as well as import Abstract Base Class and mark ```Animal```  as ```abc```
- However, it's still possible to include ```@abstractmethod``` in the example above, which makes it clear to anyone reading the code that ```speak()``` is required for every Animal subclasses and can be overriden. 

---

## Abstact Factory
- Purpose: Provide an interface for <b>creating families of related or dependent objects</b> without specifying their concrete classes.
- Usage: Used when the system needs to be independent of how its products are created, composed, and represented, and when families of related product objects are designed to be used together.
- Implementation: Involve multiple factory methods, each for creating a different type of object

Example:

```python
from abc import ABC, abstractmethod


class WidgetFactory(ABC):
    @abstractmethod
    def create_button(self):
        pass

    @abstractmethod
    def create_checkbox(self):
        pass


class LightThemeWidgetFactory(WidgetFactory):
    def create_button(self):
        return LightThemeButton()

    def create_checkbox(self):
        return LightThemeCheckbox()


class DarkThemeWidgetFactory(WidgetFactory):
    def create_button(self):
        return DarkThemeButton()

    def create_checkbox(self):
        return DarkThemeCheckbox()


class Button(ABC):
    @abstractmethod
    def paint(self):
        pass


class LightThemeButton(Button):
    def paint(self):
        return "Rendering a button in light theme"


class DarkThemeButton(Button):
    def paint(self):
        return "Rendering a button in dark theme"


class Checkbox(ABC):
    @abstractmethod
    def paint(self):
        pass


class LightThemeCheckbox(Checkbox):
    def paint(self):
        return "Rendering a checkbox in light theme"


class DarkThemeCheckbox(Checkbox):
    def paint(self):
        return "Rendering a checkbox in dark theme"


# Client code
def client_code(factory: WidgetFactory):
    button = factory.create_button()
    checkbox = factory.create_checkbox()
    print(button.paint())
    print(checkbox.paint())


def main():
    user_choice = input("Do you want Light Theme or Dark Theme: ")
    if user_choice == "light":
        factory = LightThemeWidgetFactory()
        client_code(factory)
    else:
        factory = DarkThemeWidgetFactory()
        client_code(factory)


if __name__ == "__main__":
    main()
```
- In this example, there are multiple factories are applied: ```WidgetFactory```, ````LightThemeWidgetFactory```, and ```DarkThemeFactory```
- By applying the Abstract Method, a set of widget will be produced or returned based on the theme (Light or Dark)
- Another example: You want to make your house as vintage as possible so you should buy vintage furniture set as well. A furniture set may include television, couch, chairs, and tables. By calling the ```VitangeFurnitureFactory```, you can easily get the whole set of vintages objects as mentioned previously.

---
## Key Differences
1. Scale of abstraction:
    * Factory method: Operate at a single object level
    * Abstract Factory: Work with families of related objects
2. Method of creation:
    * Factory method: Involve a single method to create one type of object
    * Abstract Factory: Use multiple factory methods to create realted objects
3. Flexibility:
    * Factory method: More flexible at the individual object level, as subclasses can override the factory method to change the way objects are created.
    * Abstract Factory: Offers flexibility at the family of related objects level, allowing you to switch between different families of products seamlessly
    