---
title: Creational Design Patterns (2) - Abstract Factory
---

# Creational Design Patterns (2) - Abstract Factory

Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes

## Applicability
- Use the Abstract Factory when your code needs to work with various families of related products, but you don't want it to depend on the concrete classes of those products - they might be unknown beforehand or you simply want to allow for future extensibility
- Consider implementing Abstract Factory when you have a class with a set of Factory Methods that blur its primary responsibility

## Pros and Cons

### Pros:
- You can be sure that the products you're getting from a factory are compatible with each other
- You avoid tight coupling between Concrete Products and client code
- Single Responsibility Principle. You can extract the product creation code into one place, making the code easier to support
- Open and Closed Principle. You can introduce new variants of products without breaking existing client code

### Cons:
- The code may become more complicated than it should be since a lot of new interfaces and classes are introduced along with the pattern

Here's an example of applying Abstract Factory

```python
from abc import ABC, abstractmethod


class Television(ABC):
    def __init__(self, brand: str, model: str, color: str, price: float, size: int):
        self.brand = brand
        self.model = model
        self.color = color
        self.price = price
        self.size = size

    @abstractmethod
    def display_info(self) -> None:
        pass

    @abstractmethod
    def turn_on(self) -> None:
        pass

    @abstractmethod
    def turn_off(self) -> None:
        pass


class ModernTelevision(Television):
    def display_info(self) -> None:
        print("---Modern Television Info---\n"
              f"Brand: {self.brand}\n"
              f"Model: {self.model}\n"
              f"Color: {self.color}\n"
              f"Price: {str(self.price)}\n"
              f"Size: {str(self.size)}")

    def turn_on(self) -> None:
        print("Turning on MODERN TELEVISION...")

    def turn_off(self) -> None:
        print("Turning off MODERN TELEVISION...")


class VintageTelevision(Television):
    def display_info(self) -> None:
        print("---Vintage Television Info---\n"
              f"Brand: {self.brand}\n"
              f"Model: {self.model}\n"
              f"Color: {self.color}\n"
              f"Price: {str(self.price)}\n"
              f"Size: {str(self.size)}")

    def turn_on(self) -> None:
        print("Turning on VINTAGE TELEVISION...")

    def turn_off(self) -> None:
        print("Turning off VINTAGE TELEVISION...")


class Cooker(ABC):
    def __init__(self, brand: str, model: str, color: str, price: float, size: int):
        self.brand = brand
        self.model = model
        self.color = color
        self.price = price
        self.size = size

    @abstractmethod
    def display_info(self) -> None:
        pass

    @abstractmethod
    def turn_on(self) -> None:
        pass

    @abstractmethod
    def turn_off(self) -> None:
        pass


class ModernCooker(Cooker):
    def display_info(self) -> None:
        print("---Modern Cooker Info---\n"
              f"Brand: {self.brand}\n"
              f"Model: {self.model}\n"
              f"Color: {self.color}\n"
              f"Price: {str(self.price)}\n"
              f"Size: {str(self.size)}")

    def turn_on(self) -> None:
        print("Turning on MODERN Cooker...")

    def turn_off(self) -> None:
        print("Turning off MODERN Cooker...")


class VintageCooker(Cooker):
    def display_info(self) -> None:
        print("---Vintage Cooker Info---\n"
              f"Brand: {self.brand}\n"
              f"Model: {self.model}\n"
              f"Color: {self.color}\n"
              f"Price: {self.price}\n"
              f"Size: {str(self.size)}")

    def turn_on(self) -> None:
        print("Turning on VINTAGE Cooker...")

    def turn_off(self) -> None:
        print("Turning off VINTAGE Cooker...")


class ApplianceFactory(ABC):
    @abstractmethod
    def produce_television(self, brand: str, model: str, color: str, price: float, size: int) -> Television:
        pass

    @abstractmethod
    def produce_cooker(self, brand: str, model: str, color: str, price: float, size: int):
        pass


class ModernApplianceFactory(ApplianceFactory):
    def produce_television(self, brand: str, model: str, color: str, price: float, size: int) -> ModernTelevision:
        return ModernTelevision(brand=brand, model=model, color=color, price=price, size=size)

    def produce_cooker(self, brand: str, model: str, color: str, price: float, size: int) -> ModernCooker:
        return ModernCooker(brand=brand, model=model, color=color, price=price, size=size)


class VintageApplianceFactory(ApplianceFactory):
    def produce_television(self, brand: str, model: str, color: str, price: float, size: int) -> VintageTelevision:
        return VintageTelevision(brand=brand, model=model, color=color, price=price, size=size)

    def produce_cooker(self, brand: str, model: str, color: str, price: float, size: int) -> VintageCooker:
        return VintageCooker(brand=brand, model=model, color=color, price=price, size=size)


def client_code(factory: ApplianceFactory):
    tv = factory.produce_television(brand="LG", model="2023", color="white", price=100, size=10)
    cooker = factory.produce_cooker(brand="LG", model="2023", color="white", price=100, size=10)
    tv.display_info()
    cooker.display_info()


if __name__ == "__main__":
    modern = ModernApplianceFactory()
    client_code(modern)
```

However, I want user interact with the program by providing inputs so here's another version

```python
from abc import ABC, abstractmethod


class Television(ABC):
    def __init__(self, brand: str, model: str, color: str, price: float, size: int):
        self.brand = brand
        self.model = model
        self.color = color
        self.price = price
        self.size = size

    @abstractmethod
    def display_info(self) -> None:
        pass

    @abstractmethod
    def turn_on(self) -> None:
        pass

    @abstractmethod
    def turn_off(self) -> None:
        pass


class ModernTelevision(Television):
    def display_info(self) -> None:
        print("---Modern Television Info---\n"
              f"Brand: {self.brand}\n"
              f"Model: {self.model}\n"
              f"Color: {self.color}\n"
              f"Price: {str(self.price)}\n"
              f"Size: {str(self.size)}")

    def turn_on(self) -> None:
        print("Turning on MODERN TELEVISION...")

    def turn_off(self) -> None:
        print("Turning off MODERN TELEVISION...")


class VintageTelevision(Television):
    def display_info(self) -> None:
        print("---Vintage Television Info---\n"
              f"Brand: {self.brand}\n"
              f"Model: {self.model}\n"
              f"Color: {self.color}\n"
              f"Price: {str(self.price)}\n"
              f"Size: {str(self.size)}")

    def turn_on(self) -> None:
        print("Turning on VINTAGE TELEVISION...")

    def turn_off(self) -> None:
        print("Turning off VINTAGE TELEVISION...")


class Cooker(ABC):
    def __init__(self, brand: str, model: str, color: str, price: float, size: int):
        self.brand = brand
        self.model = model
        self.color = color
        self.price = price
        self.size = size

    @abstractmethod
    def display_info(self) -> None:
        pass

    @abstractmethod
    def turn_on(self) -> None:
        pass

    @abstractmethod
    def turn_off(self) -> None:
        pass


class ModernCooker(Cooker):
    def display_info(self) -> None:
        print("---Modern Cooker Info---\n"
              f"Brand: {self.brand}\n"
              f"Model: {self.model}\n"
              f"Color: {self.color}\n"
              f"Price: {str(self.price)}\n"
              f"Size: {str(self.size)}")

    def turn_on(self) -> None:
        print("Turning on MODERN Cooker...")

    def turn_off(self) -> None:
        print("Turning off MODERN Cooker...")


class VintageCooker(Cooker):
    def display_info(self) -> None:
        print("---Vintage Cooker Info---\n"
              f"Brand: {self.brand}\n"
              f"Model: {self.model}\n"
              f"Color: {self.color}\n"
              f"Price: {self.price}\n"
              f"Size: {str(self.size)}")

    def turn_on(self) -> None:
        print("Turning on VINTAGE Cooker...")

    def turn_off(self) -> None:
        print("Turning off VINTAGE Cooker...")


class ApplianceFactory(ABC):
    @abstractmethod
    def produce_television(self, brand: str, model: str, color: str, price: float, size: int) -> Television:
        pass

    @abstractmethod
    def produce_cooker(self, brand: str, model: str, color: str, price: float, size: int):
        pass


class ModernApplianceFactory(ApplianceFactory):
    def produce_television(self, brand: str, model: str, color: str, price: float, size: int) -> ModernTelevision:
        return ModernTelevision(brand=brand, model=model, color=color, price=price, size=size)

    def produce_cooker(self, brand: str, model: str, color: str, price: float, size: int) -> ModernCooker:
        return ModernCooker(brand=brand, model=model, color=color, price=price, size=size)


class VintageApplianceFactory(ApplianceFactory):
    def produce_television(self, brand: str, model: str, color: str, price: float, size: int) -> VintageTelevision:
        return VintageTelevision(brand=brand, model=model, color=color, price=price, size=size)

    def produce_cooker(self, brand: str, model: str, color: str, price: float, size: int) -> VintageCooker:
        return VintageCooker(brand=brand, model=model, color=color, price=price, size=size)


def get_appliance_detail():
    brand = input("Enter brand name: ")
    model = input("Enter model name: ")
    color = input("Enter color: ")
    price = float(input("Enter price: "))
    size = int(input("Enter size: "))

    return brand, model, color, price, size


def choose_factory():
    choice = input("Enter factory type (modern/vintage): ").lower()
    if choice == "modern":
        return ModernApplianceFactory()
    else:
        return VintageApplianceFactory()


def client_code(factory: ApplianceFactory):
    brand, model, color, price, size = get_appliance_detail()
    tv = factory.produce_television(brand, model, color, price, size)
    cooker = factory.produce_cooker(brand, model, color, price, size)
    tv.turn_on()
    tv.display_info()
    tv.turn_off()

    cooker.turn_on()
    cooker.display_info()
    cooker.turn_off()


if __name__ == "__main__":
    factory = choose_factory()
    client_code(factory)
```