---
title: Python Testing with pytest (Chap 1 + 2)
---

# Python Testing with pytest (Chap 1 + 2) - Okken

### Getting Started

* *What is pip because I always use pip whenever it comes to install a new package, library, or framework?*
    
    \=&gt; Answer: ***<mark>pip is a package management system which is used to install and manage software packages.</mark>***
    

### Key notes in Chapter 1:

* pytest is installed into a virtual environment with the following steps (for Mac):
    
    (\*) Disclaimer: I'm using Pycharm and looks like there's already a virtual environment venv set up. However, I can always create a new virtual environment with different name if needed.
    
    *(\*) Why do we need virtual environment?*
    

\=&gt; Answer: ***<mark>To keep dependencies required by different projects separated by creating isolated Python environment for them.</mark>*** For example, there's one project that I need Django and Django framework to work with. However, the other one doesn't require any Django but Spotipy instead. Therefore, it's necessary to create a virtual environment for each project.

### **Set up and install pytest**

`python3 -m venv myvenv (your virtual environment's name)`

`source myvenv/bin/activate (activate your virtual environment)`

`pip install pytest (install pytest)`

(\*) `pytest` can be run in several different ways:

* `pytest`: With no argument, pytest searches the local repository and subdirectories for tests.
    
* `pytest <filename>`: Run the tests in that file.
    
* `pytest <filename1> <filename2>`: Run tests in multiple files.
    
* `pytest <dirname>`: Run tests in a particular directory
    

(\*) To make sure your tests are being tested and run, *pay attention to naming convention:*

* Test files should be named `test_<something>.py` or `<something>_test.py`
    
* Test methods or functions should be named `test_<something>`
    
* Test classes should be `Test<Something>`
    

***Code Snippet***

```python
def test_passing():
    assert (1, 2, 3) == (1, 2, 3)

# Make this test fail on purpose
def test_failing():
    assert (1, 2, 3) == (3, 2, 1)
```

---

### Chapter 2: Writing Test Functions

Install `cards_proj` as instructed in the book I encountered some errors while running the tests. At first, I use `pytest` as my command:

* The current Python I'm using is Python 3.11.0. However, if I run `pytest` itself only, it will be associated with different Python interpreter than the one I'm using.
    
* I doubt it happens because of the project structure and try to make it correct, but it still ended up with `ModuleNotFound error`. Although I tried to import the Card class with specific, it couldn't work.
    
* I changed my command to `python3 -m pytest`., everything works perfectly. Because `python3` makes sure that all the environment settings and dependencies are taken into account. I'm using Python3 as well so it makes more sense.
    

***Tests for cards\_procj***

```python
from cards import Card


# Test when create a Card object without giving it any argument.
def test_default():
    c = Card()
    assert c.summary == None
    assert c.owner == None
    assert c.state == "todo"
    assert c.id == None


# Test when creating a Card object with arguments.
def test_field_access():
    c = Card("something", "brian", "todo", 123)
    assert c.summary == "something"
    assert c.owner == "brian"
    assert c.state == "todo"
    assert c.id == 123


# Test if two Card objects with the same attributes are equal or not
def test_equality():
    c1 = Card("something", "brian", "todo", 123)
    c2 = Card("something", "brian", "todo", 123)
    assert c1 == c2


# Test if two Card objects with the same attributes but different ids are equal or not.
# Because in Card class, id cannot be compared.
def test_equality_with_diff_ids():
    c1 = Card("something", "brian", "todo", 123)
    c2 = Card("something", "brian", "todo", 4567)
    assert c1 == c2


# Test if two Cards objects are different if given different attributes
def test_inequality():
    c1 = Card("something", "brian", "todo", 123)
    c2 = Card("completely different", "okken", "done", 123)
    assert c1 != c2


# Test from_dict() function in Card class
def test_from_dict():
    c1 = Card("something", "brian", "todo", 123)
    c2_dict = {
        "summary": "something",
        "owner": "brian",
        "state": "todo",
        "id": 123
    }
    c2 = Card.from_dict(c2_dict)
    assert c1 == c2


# Test to_dict() function in Card class
def test_to_dict():
    c1 = Card("something", "brian", "todo", 123)
    c2 = c1.to_dict()
    c2_expected = {
        "summary": "something",
        "owner": "brian",
        "state": "todo",
        "id": 123
    }
    assert c2 == c2_expected
```

* One thing about pytest is its assert statements are different from unittest's:
    
    * `assert something` is `assertTrue(something)` in unittest
        
    * `assert not something` is `assertFlase(something)` in unittest
        
    * `assert a == b` is `assertEqual(a, b)`
        
    * `assert a != b` is `assertNotEqual(a, b)`
        

* Moreover, you can run `python3 -m pytest --vv` to show more details if your test fails.
    

(\*) Failing with `pytest.fail()` and Exceptions:

* Basically for this section, it tells you that if you want to add comments to explain how this test fail or you can expect this test is failed and want to explain the reason while running your test, you can use `pytest.fail()`
    

```python
import pytest
from cards import Card


def test_with_fail():
    c1 = Card("sit down", "brian")
    c2 = Card("do sonmething", "okken")
    if c1 != c2:
        pytest.fail("they don't match")
```

\=&gt; For the test above, I know that c1 and c2 will be different because their first arguments are different. Adding `pytest.fail()` tell me "they don't match" in the short test summary: `FAILED test_alt_`[`fail.py`](http://fail.py)`::test_with_fail - Failed: they don't match`

* You use `pytest.raises()` to test for expected exceptions.
    

```python
import cards
import pytest


def test_no_path_raises():
    with pytest.raises(TypeError):
        cards.CardsDB()


def test_raises_with_info():
    match_regex = "missing 1 .* positional argument"
    with pytest.raises(TypeError, match=match_regex):
        cards.CardsDB()


def test_raises_with_info_alt():
    with pytest.raises(TypeError) as exc_info:
        cards.CardsDB()
    expected = "missing 1 required argument"
    assert expected in str(exc_info.value)
```

(\*) Structuring Test Functions: Arrange-Act-Assert

* Arrange: get ready to something
    
* Act: do something
    
* Assert: check to see if it worked
    

```python
from cards import Card


def test_to_dict():
    # Arrange a Card object with known content
    c1 = Card("something", "brian", "todo", 123)
    # Act by calling to_dict() function with c1 object and assign it to c2
    c2 = c1.to_dict()
    expected_result = {
        "summary": "something",
        "owner": "brian",
        "state": "todo",
        "id": 123
    }
    # Assert: check if they are equal
    assert c2 == expected_result
```

### Key Notes in Chapter 2:

* Tests can fail from assertion failures, from calls to fail(), or from any uncaught exception
    
* `pytest.raises()` is used to test for expected exceptiojns
    
* A great way to structure tests is called Given-When-Then or Arrange-Act-Assert
    
* Running small subsets of tests is handy while debugging, and pytest allows you to run a small batch of tests in many ways:
    
    * Single test method: `python3 -m pytest path/test_module::TestClass::test_method`
        
    * All tests in a class: `python3 -m pytest path/test_module::TestClass`
        
* the -vv command-line flag shows even more information during test failures.
    