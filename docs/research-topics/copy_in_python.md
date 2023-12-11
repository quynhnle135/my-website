---
title: Shallow Copy vs Deep Copy
---

# Shallow Copy vs. Deep Copy in Python

- In Python, copying objects can be done in two ways: shallowing copy and deep copying. These two methods differ in how they handle the object and its child objects.

## Shallow Copy
- A shallow copy creates a new object, but it does not create copies of the objects. This means that if the original references to the other objects, the shallow copy will refer to the same objects, not their copies.
- For example:
```python
import copy


original = [[1, 2, 3]], [4, 5, 6]
copy1 = copy.copy(original)

print(copy1)
print(f"Copy 1 is Original? {original is copy1}")
print(id(copy1))
print(id(original))
```

```
Output: 
>>> ([[1, 2, 3]], [4, 5, 6])
>>> Copy 1 is Original? True
>>> 4307289664
>>> 4307289664
```
- You can see that ```copy1``` has the same memory address or ID as the ```original``` object.
- Furthermore, if you updated the original, the copy1 will be updated as well
```python
original[0][0] = 500
print(original)
print(copy1)
```
```Output:
>>> original[0][0] = 500
>>> print(original)
>> print(copy1)
```

## Deep Copy
- A deep copy creates a new object and also recursively creates copies of every object that is referenced by the original object. 
- The original and the copied objects do not share any references to child objects
```python
original = [[1, 2, 3], [4, 5, 6]]
copy2 = copy.deepcopy(original)
print(copy2)
print(id(copy2))
print(id(original))
copy2[0][0] = 100
print(original)
print(copy2)
```
```
Output:
>>> [[1, 2, 3], [4, 5, 6]]
>>> 4371798208
>>> 4373472512
>>> [[1, 2, 3], [4, 5, 6]]
>>> [[100, 2, 3], [4, 5, 6]]
```

- As you can see, ```copy2``` doesn't share the same memory address of ID as ```original``` object. 
- When I modified copy2, the ```original``` object isn't affected and vice versa. Because these two are two differnet objects.

## When to use each?
- Shallow Copy: Use it when you wan to create a new collection object but the element can still be shared
- Deep Copy: Use it when you need a fully independent copy of an object, including all nested objects. 
- Here's a refined code snippet to understand Shallow Copy vs. Deep Copy better:
```python
import copy


original = [[1, 2, 3]], [4, 5, 6]
copy1 = copy.copy(original)
copy2 = copy.deepcopy(original)

# Print IDs of original, copy1, and copy2
print(f"ID of original: {id(original)}")
print(f"ID of copy1: {id(copy1)}")
print(f"ID of copy2: {id(copy2)}")

# Compare original with copy1 and copy2
print(f"Original is copy1? {original is copy1}")
print(f"Original is copy2? {original is copy2}")

# Modify original and see if it affects copy1 and copy2 or not
original[0][0] = 100
print(f"Original after being modified: {original}")
print(f"Copy1 after modifying Original: {copy1}")
print(f"Copy2 after modifying Original: {copy2}")

```

```
Output:
ID of original: 4376578304
ID of copy1: 4376578304
ID of copy2: 4376584832
Original is copy1? True
Original is copy2? False
Original after being modified: ([100], [4, 5, 6])
Copy1 after modifying Original: ([100], [4, 5, 6])
Copy2 after modifying Original: ([[1, 2, 3]], [4, 5, 6])
```