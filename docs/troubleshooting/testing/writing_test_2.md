---
title: Writing tests for Expense Manager project (2)
---

# How I Wrote Tests for Expense Manager project - URLs

## 1. About Test Coverage
- While I wrote tests, I needed to make sure they all worked and cover the file I was testing. However, when I ran ```python3 -m coverage report -m```, there are some files that I don't think they're necessary in the testing process and report such as migrations and the test files themselves.
- Therefore, I need to exclude unnecessary files:
    * Create a <b>.coveragerc</b> file (```touch .coveragerc```) and add rules to exclude certain patterns:
        ```ini
        [run]
        omit =
            */migrations/*
            */tests.py
            */tests/*
            */__init__.py
            manage.py
            */settings.py
            */urls.py
            */wsgi.py
            */asgi.py
        ```

---

## 2. Do I really need to test the urls.py file in my Django app?
- Yes, testing the <b>urls.py</b> file in a Django application is important:
    * Ensuring correct URL-To-View Mapping:
    * Catching typos and configuration errors
    * Verifying URL parameters and patterns
    * Improve code coverage

---

## 3. How I Wrote Tests for url.py file?
- Writing tests for <b>urls.py</b> is quite easy in opinion.
- In Django testing, "reverse" and "resolve" are two functions that play important rols in testing URLs and views.
- Reverse:
    * The <b>reverse</b> fucntion is used to dynamically find a URL path based on a URL name.
    * Instead of hardcoding URL paths like http://localhost:8000/expenses/update/1, we can just have ```url = reverse(expense-update)```
- Resolve:
    * The <b>resolve</b> function is used to find which view function correspond to a give URL path. It's the reverse of <b>reverse</b>
    * You use <b>resolve</b> to verify that a particular URL path resolves to the correct view function or class. This is the key for ensuring that your URL configuration correctly maps URLs to views.

---

## 4. Let's take one test as an example

```python
def test_register_url():
    url = reverse("register")
    assert resolve(url).func.view_class == views.UserRegisterView
```

- With this test, I want to test the URL for user register. 
- The first line ```url = reverse("register")``` is setting up the url mapping to the UserRegisterView
- The ```assert``` line is resolving the url to the function but since I wrote a class-based view for register functionality, I need to add ```view_class``` and it needs to be equal to ```views.UserReigsterView```

Here are all the tests I wrote for <b>urls.py</b> for expense_manager_app

```python title="tests/test_urls.py
from django.urls import reverse, resolve
from expense_manager_app import views
from django.contrib.auth import views as auth_views


def test_register_url():
    url = reverse("register")
    assert resolve(url).func.view_class == views.UserRegisterView


def test_login_url():
    url = reverse("login")
    assert resolve(url).func.view_class == auth_views.LoginView


def test_logout_url():
    url = reverse("logout")
    assert resolve(url).func.view_class == auth_views.LogoutView


def test_expense_list_url():
    url = reverse("expense-list")
    assert resolve(url).func.view_class == views.ExpenseListView


def test_expense_search_url():
    url = reverse("expense-search")
    assert resolve(url).func.view_class == views.ExpenseSearchView


def test_expense_detail_url():
    url = reverse("expense-detail", args=[1])
    assert resolve(url).func.view_class == views.ExpenseDetailView


def test_expense_add_url():
    url = reverse("expense-add")
    assert resolve(url).func.view_class == views.ExpenseCreateView


def test_expense_update_url():
    url = reverse("expense-update", args=[1])
    assert resolve(url).func.view_class == views.ExpenseUpdateView


def test_expense_delete_url():
    url = reverse("expense-delete", args=[1])
    assert resolve(url).func.view_class == views.ExpenseDeleteView

```