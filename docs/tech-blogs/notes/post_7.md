---
title: 11 Python Magic Methods Every Programmer Should Know
---

# 11 Python Magic Methods Every Programmer Should Know
- Magic methods, which are also known as <b>dunder methods</b>, help you emulate (imitate or copy) the behavior of built-in functions in  your Python classes.
- These methods have leading and trailing double underscores (__)
- In this article, it shows you hw magic methods are used in an example Vector2D class.
---
## 1. \__init__
- This function is used to initialize a class. When we creat4e an object of a class, the method is automatically applied and defines the object's inital behavior
- If you don't define the \__init__ method, you can instantiate an object after creating a class, you can add atrributes like ```obj_name.attribute_name=value```. However, this manual way doesn't guarantee the consistency of your objects.
- For the Vector2D class, I want every object has x and y values

```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

v = Vector(x=5, y=10)
```

## 2. \__repr__
- When you want to inspect or print out the object you instantiated, you'll see that you don't get any helpful information: 

```python 
v = Vector2D(3, 5)
print(v)
```
```
Output >>> <__main__.Vector2D object at 0x7d2fcfaf0ac0>
```

This is why you should add a representation string for the object.
```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    

    def __repr__(self):
        return f"Vector2D(x={self.x}, y={self.y})

v = Vector2D(3, 5)
print(v)
```
```
Output >>> Vector2D(x=3, y=5)
```

## 3. \__str__
- This method is used to add a string representation for the object as well.

``` python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector2D(x={self.x}, y={self.y})"

v = Vector2D(3, 5)
print(v)
```
```
Output >>> Vector2D(x=3, y=5)
```

- What is the difference between \__repr__ and \__str__?
    - Answer: The \__str__ method is user-friendly which means that it displays a string that any person can read and understand, meanwhile the \__repr__ function is developer-friend which means that display a srting showcasing the real structure of the object. For example:
    ```python 
    from datetime import datetime

    def main():
        today_date = datetime.today()
        print(str(today_date))
        print(repr(today_date))


    if __name__ == '__main__':
        main()
    ```
    ```
    2023-12-03 16:51:36.967512
    datetime.datetime(2023, 12, 3, 16, 51, 36, 967512)
    ```

## 4. \__eq__
- This method is used to check for equality of any two objects. 

```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector2D(x={self.x}, y={self.y})"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

v1 = Vector2D(3, 5)
v2 = Vector2D(3, 5)
print(v1 == v2)

```
```
Output >>> True
```
- If we don't modify this method, by default v1 and v2 wouldn't be equal because the default comparison checks for the objects IDs in memory

## 5. \__len__
- Python’s built-in len() function helps you compute the length of built-in iterables. Let’s say, for a vector, length should return the number of elements that the vector contains.

```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector2D(x={self.x}, y={self.y})"

    def __len__(self):
        return 2

v = Vector2D(3, 5)
print(len(v))

```
```
Output >>> 2
```

## 6. \__add__
- With the class Vector2D, we cannot add two vector objects directly, therefore it's necessary to have an \__add__ method:

```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector2D(x={self.x}, y={self.y})"

    def __add__(self, other):
        return Vector2D(self.x + other.x, self.y + other.y)


v1 = Vector2D(3, 5)
v2 = Vector2D(1, 2)
result = v1 + v2
print(result)
```
```
Output >>> Vector2D(x=4, y=7)
```

## 7. \__sub__
- Just like the \__add__ method above, we need to have \__sub__ method to calculate the difference between any two vector objects

```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector2D(x={self.x}, y={self.y})"

    def __sub__(self, other):
        return Vector2D(self.x - other.x, self.y - other.y)

v1 = Vector2D(3, 5)
v2 = Vector2D(1, 2)
result = v1 - v2
print(result)

```

```
Output >>> Vector2D(x=2, y=3)
```

## 8. \__mul__
- We can also define a \__mul__ method to define multiplication between two vector objects

``` python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector2D(x={self.x}, y={self.y})"

    def __mul__(self, other):
        # Scalar multiplication
        if isinstance(other, (int, float)):
            return Vector2D(self.x * other, self.y * other)
        # Dot product
        elif isinstance(other, Vector2D):
            return self.x * other.x + self.y * other.y
        else:
            raise TypeError("Unsupported operand type for *")

v1 = Vector2D(3, 5)
v2 = Vector2D(1, 2)

# Scalar multiplication
result1 = v1 * 2
print(result1)  
# Dot product
result2 = v1 * v2
print(result2)
```

```
Output >>>

Vector2D(x=6, y=10)
13

```

## 9. \__getitem__
- The \__getitem__ magic method allows you to index into the objects and access attributes ir slice of attributes using the familiar square-bracket \[] syntax
```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector2D(x={self.x}, y={self.y})"

    def __getitem__(self, key):
        if key == 0:
            return self.x
        elif key == 1:
            return self.y
        else:
            raise IndexError("Index out of range")

v = Vector2D(3, 5)
print(v[0])  
print(v[1])
```
```
Output >>>

3
5
```

## 10. \__call__
- With an implementation of the \__call__method, you can call objects as if they were functions

```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y
 	 
    def __repr__(self):
        return f"Vector2D(x={self.x}, y={self.y})"

    def __call__(self, scalar):
        return Vector2D(self.x * scalar, self.y * scalar)

v = Vector2D(3, 5)
result = v(3)
print(result)
```
```
Output >>> Vector2D(x=9, y=15)
```

## 11. \__getattr__
- The \__getattr__ method is used to get the values of specific attributes of the objects
``` python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector2D(x={self.x}, y={self.y})"

    def __getattr__(self, name):
        if name == "magnitude":
            return (self.x ** 2 + self.y ** 2) ** 0.5
        else:
            raise AttributeError(f"'Vector2D' object has no attribute '{name}'")

v = Vector2D(3, 4)
print(v.magnitude)
```
```
Output >>> 5.0
```

## Here's my final code snippet I wrote while reading this article

```python
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector2D(x={self.x}, y={self.y})"

    def __str__(self):
        return f"Vector2D(x={self.x}, y={self.y})"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __len__(self):
        return 2

    def __add__(self, other):
        return Vector2D(x=self.x + other.x, y=self.y + other.y)

    def __sub__(self, other):
        return Vector2D(x=self.x - other.x, y=self.y - other.y)

    def __mul__(self, other):
        if isinstance(other, (int, float)):
            return Vector2D(x=self.x * other, y=self.y * other)
        elif isinstance(other, Vector2D):
            return self.x * other.x + self.y * other.y
        else:
            raise TypeError("Unsupported operand type for *")

    def __getitem__(self, item):
        if item == 0:
            return self.x
        elif item == 1:
            return self.y
        else:
            raise IndexError("Index out of range")

    def __call__(self, scalar):
        return Vector2D(self.x * scalar, self.y * scalar)

    def __getattr__(self, item):
        if item == "magnitude":
            return (self.x ** 2 + self.y ** 2) ** 0.5
        else:
            raise AttributeError(f"Vector2D object has no attribute {item}")


v = Vector2D(3, 5)
print(v)
print(len(v))
print(v[0])
print(v[1])
result = v(3)
print(result)
print(v.magnitude)

v1 = Vector2D(10, 20)
v2 = Vector2D(10, 20)
print(v1 == v2)
print(v1 + v2)
print(v1 - v2)
print(v1 * 2)
print(v1 * v2)


```

---
You can read the full article [here](https://www.kdnuggets.com/11-python-magic-methods-every-programmer-should-know?utm_source=rss&utm_medium=rss&utm_campaign=11-python-magic-methods-every-programmer-should-know&ref=dailydev)