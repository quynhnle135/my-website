---
title: Pythonic Programming Tips (1)
---

# Pythonic Programming Tips (1)

# Quotes and Letter Case Related Tips
## Use quotes of all sorts
There are four types of quotation marks:
- ```' '```
- ```" "```
- ```''' '''```
- ```""" """```

```python
print("Mary had a little lamb")
print('Mary had a little lamb')
print('''Mary had a little lamb''')
print("""Mary had a little lamb""")
```

```
>>> Output:
Mary had a little lamb
Mary had a little lamb
Mary had a little lamb
Mary had a little lamb
```

&rarr; <b><i>There's no difference between single and double quotation marks in Python</i></b>

However, triple-single and triple-double quotation marks define multiline strings. They can include literal line breaks.
```python
# We can print multiple lines using triple-quotes
print("""Mary had
a little lamb""")
```
```
>>> Output:
Mary had
a little lamb
```

## Keep letter case consistent

- Any Python identifier must start with a letter or an underscore and contain only letters, digits, or underscores.
- Identifiers should be short and descriptive.
- Use all uppercase letters for constant varibles, although Python doesn't have constant as such.
- If necessary, mixedIdentifiers for variables, functions, and modules are acceptable.

```python
# Use uppercase letters for constants
PI = 3.14159  # Please use math.pi instead!
print(PI)
# For pi number, we can just import math module instead
print(math.pi)

# Use identifiers in lowercase, connected with underscores
my_cat_s_age = 11
_var = "I do not care"
print(f"My cat's age: {my_cat_s_age}")
print(f"_var: {_var}")
# If necessary, mixedCase identifiers for variables, functions and modules
myCatsAge = 10
print(f"myCatsAge: {myCatsAge}")
```

```
>>> Output:
3.14159
3.141592653589793
My cat's age: 11
_var: I do not care
myCatsAge: 10
Result: 28
```

- Capitalized words are used in classes
```python
# Use capitalized words without spaces for classes
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def print_list(self):
        node = self.head
        while node.next:
            print(node.val, end=" -> ")
            node = node.next
        print(node.val, end=" -> null")
```

## Self-document the code
- The description part of self-documentation is called a docstring.
- A docstring is implemented as a string literal as the first statement of the objects' body
- A docstring should be descriptive and limited to a single line
- Docstrings are used to describe the purpose of objects while comments are used for explaning the code lines in details

```python
def len(obj) -> int:
  'Return the number of items in a container.' 
  # Do something
```

---

# Input, Varibales, and Enumeration Related Tips
## Let input() speak for itself
- A prompt is a printed invitation to enter some missing information.
- The prompt should explain in a langluage suitable to the expected user, like what the user should input and how.
- We can use the ```print()``` function to display the prompt, follow by ```input()``` to collect the input.
&rarr; <b><i>However, the best way is to let the ```input()``` speak for itself.</i></b>


```python
# Practice input()
name = input("Enter your name: ").strip()
year = input(f"What is your year of birth, {name}? ")
print(f"You are {2023 - int(year)} years old")
```

```
>>> Output: 
Enter your name: Quinn
What is your year of birth, Quinn? 2001
You are 22 years old
```

## Mark dummy variables
- Some looping statements in Python require that we declare a temporary, dummy, or a loop variable. The loop variable is created and updated automatically.
- These loop variables are meant to use in the the body of the loop. However, there are some situation that this loop variable isn't used or wasted &rarr; <b><i>Python has a memorable name reserved for such variables: a single underscore.

```python
# Mark dummy variables
for _ in range(4):
    print("Hello, World!")
```

```
>>> Output:
Hello, World!
Hello, World!
Hello, World!
Hello, World!
```

## Distinguish parameters and arguments
- A parameter is what the function expects from the caller, which are declared in the function header
- An argument is a value that the caller passes to the function. For example:

```python
def add(a, b):
    return a+b

add(5, 4)
```

&rarr; <b> <i>a</i> and <i>b</i> are the parameters, while <i>5</i> and <i>4</i> are the arguments passed

## Avoid "magic" values
- Magic values are constant that not self-explanatory, as if included in the program without reason
&rarr; <b>The simplest way to avoid magic value is to define Python constants</b>

```python
distance=1# Let's suppose distance is 1
MILES_TO_KM = 1.6
distance = MILES_TO_KM * distance
N_COLUMNS = 3
N_ROWS = 3
field = [[' '] * N_COLUMNS for _ in range(N_ROWS)]
print(field)
```