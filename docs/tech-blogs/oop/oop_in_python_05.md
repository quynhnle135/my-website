---
title: Class methods
---

# Class methods

## About Class methods

- Class methods are useful when you want to work with informations that's associated with a class, but not associated with one specific instance
- Class methods are used to track instanaces
```python
class BonsaiTree:
    num_trees = 0

    def __init__(self, name: str, description: str = ""):
        self.name = name
        self.description = description

        BonsaiTree.num_trees += 1

    def describe_tree(self):
        msg = f"{self.name}: {self.description}"
        print(msg)

    @classmethod
    def count_trees(cls):
        msg = f"We have {cls.num_trees} trees in the collection"
        print(msg)


tree = BonsaiTree("Winged Elm")
tree.description = "tall, solid trunk"
tree.describe_tree()

trees = []

tree1 = BonsaiTree("Winged Elm")
tree1.description = "tall, solid trunk"
trees.append(tree1)

tree2 = BonsaiTree("El Arbol Murcielago")
tree2.description = "short, open trunk"
trees.append(tree2)

tree3 = BonsaiTree("Mt. Mitchell")
tree3.description = "small mountain forest"
trees.append(tree3)


for tree in trees:
    tree.describe_tree()

BonsaiTree.count_trees()
```
```
Output:
>> Winged Elm: tall, solid trunk
Winged Elm: tall, solid trunk
El Arbol Murcielago: short, open trunk
Mt. Mitchell: small mountain forest
We have 4 trees in the collection
```

- For ```BonsaiTree``` class, there's an attributes called ```num_trees``` which is added outside of the ```__init__()``` method and it has no prefix
- An attribute with no prefix is associated with the overall class, and it points to one value. Meanwhile, attributes prefixed with ```self``` are associated with specific instances, and have distinct values associated with each instance
- The ```__init__()``` method doesn't receive ```cls``` argument, so it needs to access ```num_trees``` through the name of the class: ```BonsaiTree.num_trees += 1```

---

## A variety of approaches
* Using the name class in a class method
``` python
@classmethod
def count_trees(cls):
    msg = f"We have {BonsaiTree.num_trees} trees in the collection"
    print(msg)
```
=> There's no reason to do this, but it's good to be aware that this syntax wont' cause an error

* Calling a class method through an instance
```python
tree = BonsaiTree("Winged Elm")
tree.description = "tall, solid trunk"
tree.count_trees()
```
=> This will generate the same output as calling ```BonsaiTree.count_trees()```

* Accessing class attributes from within regular methods
```python
def describe_tree():
    msg = f"{self.name}: {self.description}"
    msg += f"\n This is one of {BonsaiTree.num_trees} trees"
    print(msg)
```

* However, with class attributes, you cannot calling it using ```self``` prefix, because ```self``` refers to a specific attribute only, not the whole class attribute.


## Conclusion
- When the flexibility of OOP feels overwhelming, remember the following points:
    * If you’re working with data that’s associated with individual instances, write a regular method with self as the first argument. If you need to work with a class attribute, access it using the name of the class.
    * If you’re working with data that’s only associated with the overall class, write a class method and access the data through the cls argument.
    * If you’re writing a method that doesn’t need any data associated with individual instances or the overall class, write a static method
    * When calling class methods, use the name of the class unless you only have access to an existing instance of the class.

---

You can read the full article [here](https://www.mostlypython.com/p/oop-in-python-part-5-class-methods)