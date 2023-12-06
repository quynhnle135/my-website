---
title: Type Hints in Python
---
# Type Hints in Python

## 1. What is type hint?

- Type hinting is a formal solution to statically indicate the type of value within your Python code. For example:

```python
def greet(name: str) -> str:
    return f"Hello {name}!"
```

- The ```name: str``` syntax indicates the name argument should be of type str. The ```->``` syntax indicates the greet() function will return a string

- Here's another example of Python function before applying type hinting:
```python
def headline(text, align=True):
    if align:
        return f"{text.title()}\n{'-' * len((text))}"
    else:
        return f"{text.tilte()}".center(50, "o")
```
```
>>> print(headline("python type checking"))
Python Type Checking
--------------------

>>> print(headline("python type checking", align=False))
oooooooooooooo Python Type Checking oooooooooooooo
```

- Now add type hints by annotating the arguments and the return values as follows:

``` python
def headline(text: str, align: bool = True) -> str:
    if align:
        return f"{text.title()}\n{'-' * len((text))}"
    else:
        return f"{text.tilte()}".center(50, "o")
```

- In the code above, input "text" should be a string type while "align" should be boolean type, if "align" is not specified, its default value is True
- In terms of style, PEP 8 recommends the following:
    * Use normal rules for colons, that is, no space before and one space after a colon (text: str).
    * Use spaces around the = sign when combining an argument annotation with a default value (align: bool = True).
    * Use spaces around the -> arrow (def headline(...) -> str).

## 2. Why do we need type hints?
- Python is a dynamically typed language, which means you never have to explicitly indicate what kind of variable it is.
- However, dynamic typing can lead to some bugs that are very difficult to debug, and in those cases, Type Hints are useful. 
- You can install mypy to check if the current code is violating Type Hints or not. To install: ```pip install mypy```

## 3. Updated my projects with type hints
- For my projects, especially the Python-based and CLI tools, I need to add type hints to clarify the expected type of input and output

* Expense Management OOP 
``` python title="expense.py"
from typing import Optional
import datetime


class Expense:
    last_id = 0

    def __init__(self, card_name: str, title: str, expense_date: datetime.date, amount: float, category: str,
                 note: Optional[str] = None):
        Expense.last_id += 1
        self.id = Expense.last_id
        self.card_name = card_name
        self.title = title
        self.expense_date = expense_date
        self.amount = amount
        self.category = category
        self.note = note

    def __str__(self):
        return f"ID: {self.id}\nCard name: {self.card_name}\nTitle: {self.title}\n" \
               f"Date: {str(self.expense_date)}\nAmount: {self.amount}\nCategory: {self.category}\n" \
               f"Notes: {self.note}\n***"

```

``` python title="user.py"
import datetime
from typing import Tuple

from expense import Expense


class User:
    def __init__(self):
        self.total_expenses = []

    def menu(self) -> None:
        ...

    def get_menu_choice(self) -> str:
        ...

    def process_choice(self, choice: str) -> None:
        ...

    def add_expense(self, expense: Expense) -> None:
        ...

    def calculate_total(self) -> float:
        ...

    def edit_expense(self, search_id: str) -> None:
       ...

    def _find_expense_by_id(self, search_id: str):
        ...

    def _get_edit_choice(self):
        ...

    def _apply_edit_to_expense(self, edit_choice: str, expense: Expense) -> bool:
        ...

    def delete_expense(self, search_id: str) -> None:
        ...

    def view_all_expense(self) -> None:
       ...

    def view_all_categories(self) -> None:
        ...

    def calculate_total_by_category(self) -> float:
        ...

    def search(self) -> None:
        ...

    def _search_by_id(self, search_id: str) -> None:
        ...

    def _search_by_category(self, category: str) -> None:
        ...

    def _search_by_card_name(self, card_name: str) -> None:
        ...

    def _search_by_date(self, start_date: datetime.date, end_date: datetime.date) -> None:
        ...

    def _search_by_amount(self, start_amount: float, end_amount: float) -> None:
       ...

    def _search_by_note(self, note: str) -> None:
        ...

    def _get_date_from_user(self, prompt: str) -> datetime.date:
       ...

    def _validate_date(self, date: datetime.date) -> Tuple[bool, str]:
       ...
```

## 4. What's the difference between Dynamically Typed Languages and Statically Typed Languages
- The concept of compiled vs interpreted:
    * Source Code: Original code (usually typed by a human into a computer)
    * Translation: Converting source code into something a computer can read like machine code
    * Run-time: Period when program is executing commands
    * Compiled: Code translated before run-time
    * Intepreted: Code translated on the fly, during execution
- One simple example for statically and dynamically typed languages are Java (statically) and Python (dynamically)
- Every variable and function in Java have to define the type so that these types are all checked before run-time. Meanwhile, Python doesn't require type declaring before running the code. 
- A compiled language will have better performance at run-time if it's statically typed because the knowledge of types allows for machine code optimization. It's also faster because the code has been translated already instead of needing to "interpreted" on the fly.
- Because it needs to check data's type early, static typing catches error earlier. 
- Dynamica typing is more flexible when it comes to data type and it's faster for developers since they don't have to define data type explicitly at the start. However, it's challenging when it comes to debugging or keep the data type consistent. That's why Type Hints in Python is necessary and significant.

---
Here are some articles and posts I read when writing this post:
* [Type Hints in Python](https://www.geeksforgeeks.org/type-hints-in-python/)
* [Type Hinting in Python](https://dagster.io/blog/python-type-hinting)
* [Statiscally Typed vs Dynamically Typed Languages](https://www.baeldung.com/cs/statically-vs-dynamically-typed-languages)
* [I finally understand static vs. dynamic typing and you will too!](https://hackernoon.com/i-finally-understand-static-vs-dynamic-typing-and-you-will-too-ad0c2bd0acc7)
