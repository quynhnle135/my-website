---
title: Writing tests for Expense Manager project
---

# How I Learned to Write Tests Using Pytest for Expense Manager Project

## Install Pytest and Generate Test Coverage

- Install pytest: ```pip install pytest```
- Install coverage to generate test coverage report later: ```python3 -m pip install coverage```
- Generate test coverage report: ```python3 -m coverage report -m```
- Genereate HTML report (which you can view on your browser, click on the specific files you want to view which lines of code haven't been covered yet): ```python3 -m pytest --cov=. --cov-report=html```

## Encounter problem when running tests
- As many documents I've read,m, it shows me to run ```pytest``` only. However, it doesn't work. 
- Then I tried to install pytest.ini file and set up DJANGO_SETTINGS_MODULES (make sure it's SETTINGS with the s, I did it without the s so it didn't work out at first)

```commandline
touch pytest.ini
```

```python title="pytest.ini"
[pytest]
DJANGO_SETTINGS_MODULE = expense_manager.settings
python_files = tests.py test_*.py *_test.py
```

- I run the tests again with ```pytest``` but it still doesn't work. For now, it doesn't show any error about the INSTALLED_APP like it used to show before I updated the pytest.ini. Now it showed me the module django_filters not found although I did install it before and it still works perfectly fine inside the app's views.
- I think it must be with the Python environment, which is a common error I encounter with. Therefore, I ran ```python3 -m pytest``` and it works perfectly fine. 

## Why I can run "python3 -m pytest" but not "pytest"?
- Different Python environments:
    * When I use "python3 -m pytest", it explicitly uses the "pytest" module installed in the environment that "python3" points to
    * If "pytest" is installed in a different Python environment than the one "python3" points to, the "pytest" command might not be found because it's not in the system's PATH for the current environment
- "python3 -m pytest" doesn't rely on PATH for finding pytest; it directly tells Python to run the pytest module.
- Because I always "python3" for my app such as "python3 manage.py runserver", I will keep it consistent by doing the same with pytest. 


---

## How I Wrote Tests for models.py file in Django app?
- \@pytest.fixture() here is like a helper for my test and it help me set up things that my test needs before they start. In this case, it's create a test user
- The 'test_user' fixture create a new user in the database my test can use (db). For this, it's like setting up a dummy account for testing.
- The 'db' argument tells pytest that it's going to use the current database my Django app is using for the test. However, with 'db' fixture, it makes sure that my tests don't interfere with each other.
- This 'db' argument create the test database which is temporary and isolated, which is controlled by the testing framework.
- Because I have to test if Expense object is created or not, I have somewhere to store it. The '@pytest.mark.django_db' decorator enables database access and it uses a test database, which ensures that my main database remains unaffected by tests.
- So basically for this 'test_models.py':
    * I set up User object by using the pytest.fixture
    * I use pytest.mark.django_db to have permission to access the database but keep it unaffected with my test object
    * Assert the object I created while testing with the expected output to make sure they are all equal.
    * Test string function for Expense class to make sure it returns expected string.

```python title="tests/test_model.py"
import pytest
from django.contrib.auth.models import User
from expense_manager_app.models import Expense
from datetime import date


@pytest.fixture()
def test_user(db):
    return User.objects.create_user(username="testuser", password="12345")


@pytest.mark.django_db
def test_expense_creation(test_user):
    expense = Expense.objects.create(
        user=test_user,
        card="Visa",
        category="Grocery",
        expense_date=date(2023, 12, 1),
        amount=100.00,
        notes="Thanksgiving party"
    )

    assert expense.user.username == "testuser"
    assert expense.card == "Visa"
    assert expense.category == "Grocery"
    assert expense.expense_date == date(2023, 12, 1)
    assert expense.amount == 100.00
    assert expense.notes == "Thanksgiving party"


@pytest.mark.django_db
def test_expense_str(test_user):
    expense = Expense.objects.create(
        user=test_user,
        card="Visa",
        category="Grocery",
        expense_date=date(2023, 12, 1),
        amount=100.00,
        notes="Thanksgiving party"
    )
    expense_str = str(expense)
    assert expense_str == "Visa - 2023-12-01 - 100.0"
```