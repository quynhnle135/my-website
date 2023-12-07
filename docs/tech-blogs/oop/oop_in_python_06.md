---
title: __str__() and __rep__()
---

# __str__() and __repr__()

- The  ```__str__``` method is used to generate user-friendly representations of objects in printed output
- The ```__repr__``` method is used to generate representations that are targeted towards developers

## The \__str__() method
- Let's take a look of the ```BonsaiTree``` class without defining the ```__str__``` method:
```python
class BonsaiTree:
    def __init__(self, name, description=""):
        self.name = name
        self.description = description
    
    def describe_tree(self):
        msg = f"{self.name}: {self.description}"
        print(msg) 


tree = BonsaiTree("Winged Elm")
print(tree)
```
```
>>> <__main__.BonsaiTree object at 0x102e58c10>
```

- If you don't tell Python how to represent an object as a string, it just prints a message containing the following information:
    * The name of the file that's being run
    * The name of the class that was used to create the instance
    * The memory location where the object is stored

- The ```__str__``` method allows you to specify what should be printed when someone prints an object directly
```python
class BonsaiTree:

    def __init__(self, name, description=""):
        ...

    def describe_tree(self):
        ...

    def __str__(self):
        return self.name

tree = BonsaiTree("Red Maple")
print(tree)
```
```
Output
>> Red Maple
```

## The __repr__() method
- A common alternative to the default representation is one that lets you recreate an equivalent instance from the class.
- Python calls ```__repr__``` method when it generates debugging output as well. When looking at debugging output, it can be helpful to have exactly the information you need to recreate an object involved in the issue you're working on.

```python
class BonsaiTree:
    num_trees = 0

    def __init__(self, name: str, description: str = ""):
        self.name = name
        self.description = description

        BonsaiTree.num_trees += 1

    @classmethod
    def count_trees(cls):
        msg = f"We have {cls.num_trees} trees in the collection"
        print(msg)

    def describe_tree(self):
        msg = f"{self.name}: {self.description}"
        msg += f"\nThis is one of {BonsaiTree.num_trees} trees"
        print(msg)

    def __repr__(self):
        if self.description:
            return (f"BonsaiTree(name={self.name}, description={self.description})")
        else:
            return (f"BonsaiTree=(name={self.name})")
```

## Conclusion
- Python has always had the goal of doing as much work as possible for you under the hood, while giving you the ability to override its default behavior whenever you need to. The ```__str__()``` and ```__repr__()``` methods are perfect examples of this.
- When deciding whether to include either or both of these methods in a class, keep in mind that ```__str__()``` is typically used to generate output for end users, while ```__repr__()``` is used to generate output that only developers should see.

---

You can read the full article [here](https://www.mostlypython.com/p/oop-in-python-part-6-__str__-and)

