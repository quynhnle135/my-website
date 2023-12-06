---
title: The __init__() method
---

# The \__init__() method

## 1. A class without \__init__()
- Let's consider if it's possible to have a functioning class without and ```__init__()``` method

``` python
class Greeter:
    def say_hello(self):
        print("Hi!")


greeter = Greeter()
greeter.say_hello()
```
```
>>> Hi!
```

- A class doesn't need an ```__init__()``` method

## 2. A simple \__init__() method
- Let's take a look at a simple \__init__() method
```python
class Greeter:
    def __init__(self, tone: str = "casual"):
        self.tone = tone

    def say_hello(self):
        if self.tone == "casual":
            print("Hi.")
        elif self.tone == "formal":
            print("Hello.")


greeter = Greeter()
greeter.say_hello()

greeter.tone = "formal"
greeter.say_hello()
```

```
>>> Hi.
>>> Hello.
```

- It looks like only one method, ```say_hello()``` is being called. But when the first line here is execute, Python finds our \__init__() method and runs it.
- Most importantly, the value of ```self.tone``` is being set before ```say_hello()``` can ever be called.

## 3. You can call it something else
- You can call ```__init__()``` something else. Here's Greeter with an initialize_object() method instead of ```__init__()```:
```python
class Greeter:
    # def __init__(self, tone: str = "casual"):
    #     self.tone = tone

    def initialize_object(self, tone="casual"):
        self.tone = tone

    def say_hello(self):
        if self.tone == "casual":
            print("Hi.")
        elif self.tone == "formal":
            print("Hello.")


greeter = Greeter()
greeter.initialize_object()
greeter.say_hello()

greeter.tone = "formal"
greeter.say_hello()
```
- This code works exactly as the earlier version did. The only difference is that we’re using a name other than ```__init__()```, so we have to call that method explicitly before calling ```say_hello()```. If you leave out the call to ```initialize_object()```, you’ll get the same traceback we saw earlier.

## Conclusion:
- All you need to remember is that whenever you create a new instance from a class, Python looks for a method called ```__init__()```, and runs that method if it finds one.

---

You can read the full article [here](https://www.mostlypython.com/p/oop-in-python-part-3-the-__init__)