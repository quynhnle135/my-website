"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8624],{5285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(5893),r=n(1151);const i={title:"Writing tests for Expense Manager project (1)"},o="How I Wrote Tests for Expense Manager project - Model",a={id:"troubleshooting/testing/writing_test_1",title:"Writing tests for Expense Manager project (1)",description:"1. Install Pytest and Generate Test Coverage",source:"@site/docs/troubleshooting/testing/writing_test_1.md",sourceDirName:"troubleshooting/testing",slug:"/troubleshooting/testing/writing_test_1",permalink:"/docs/troubleshooting/testing/writing_test_1",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Writing tests for Expense Manager project (1)"},sidebar:"tutorialSidebar",previous:{title:"Writing Test",permalink:"/docs/category/writing-test"},next:{title:"Writing tests for Expense Manager project (2)",permalink:"/docs/troubleshooting/testing/writing_test_2"}},l={},d=[{value:"1. Install Pytest and Generate Test Coverage",id:"1-install-pytest-and-generate-test-coverage",level:2},{value:"2. Encounter problem when running tests",id:"2-encounter-problem-when-running-tests",level:2},{value:"3. Why I can run &quot;python3 -m pytest&quot; but not &quot;pytest&quot;?",id:"3-why-i-can-run-python3--m-pytest-but-not-pytest",level:2},{value:"4. How I Wrote Tests for models.py file in Django app?",id:"4-how-i-wrote-tests-for-modelspy-file-in-django-app",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"how-i-wrote-tests-for-expense-manager-project---model",children:"How I Wrote Tests for Expense Manager project - Model"}),"\n",(0,s.jsx)(t.h2,{id:"1-install-pytest-and-generate-test-coverage",children:"1. Install Pytest and Generate Test Coverage"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Install pytest: ",(0,s.jsx)(t.code,{children:"pip install pytest"})]}),"\n",(0,s.jsxs)(t.li,{children:["Install coverage to generate test coverage report later: ",(0,s.jsx)(t.code,{children:"python3 -m pip install coverage"})]}),"\n",(0,s.jsxs)(t.li,{children:["Generate test coverage report: ",(0,s.jsx)(t.code,{children:"python3 -m coverage report -m"})]}),"\n",(0,s.jsxs)(t.li,{children:["Genereate HTML report (which you can view on your browser, click on the specific files you want to view which lines of code haven't been covered yet): ",(0,s.jsx)(t.code,{children:"python3 -m pytest --cov=. --cov-report=html"})]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"2-encounter-problem-when-running-tests",children:"2. Encounter problem when running tests"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["As many documents I've read, most of them show me that I need to run ",(0,s.jsx)(t.code,{children:"pytest"})," only. However, it doesn't work for my project."]}),"\n",(0,s.jsxs)(t.li,{children:["Then I tried to install ",(0,s.jsx)("b",{children:"pytest.ini"})," file (",(0,s.jsx)(t.code,{children:"touch pytest.ini"}),") and set up DJANGO_SETTINGS_MODULES (make sure it's SETTINGS with the ",(0,s.jsx)("b",{children:"s"}),", I did it without it so it didn't work out at first)"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'title="pytest.ini"',children:"[pytest]\nDJANGO_SETTINGS_MODULE = expense_manager.settings\npython_files = tests.py test_*.py *_test.py\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["I ran the tests again with ",(0,s.jsx)(t.code,{children:"pytest"})," but it still doesn't work. At that time, it didn't show any error about the INSTALLED_APP like it used to show before I updated the pytest.ini. Now it showed me the module django_filters not found although I did install it before and it still works perfectly fine inside the app's views."]}),"\n",(0,s.jsxs)(t.li,{children:["I think it must be with the Python environment, which is a common error I've encountered with. Therefore, I ran ",(0,s.jsx)(t.code,{children:"python3 -m pytest"})," and it works perfectly fine."]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"3-why-i-can-run-python3--m-pytest-but-not-pytest",children:'3. Why I can run "python3 -m pytest" but not "pytest"?'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Different Python environments:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["When I use ",(0,s.jsx)(t.code,{children:"python3 -m pytest"}),', it explicitly uses the "pytest" module installed in the environment that "python3" points to']}),"\n",(0,s.jsx)(t.li,{children:'If "pytest" is installed in a different Python environment than the one "python3" points to, the "pytest" command might not be found because it\'s not in the system\'s PATH for the current environment'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"python3 -m pytest"})," doesn't rely on PATH for finding pytest; it directly tells Python to run the pytest module."]}),"\n",(0,s.jsxs)(t.li,{children:['Because I always "python3" for my app such as ',(0,s.jsx)(t.code,{children:"python3 manage.py runserver"}),", I will keep it consistent by doing the same with pytest."]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"4-how-i-wrote-tests-for-modelspy-file-in-django-app",children:"4. How I Wrote Tests for models.py file in Django app?"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"@pytest.fixture()"})," here is like a helper for my test and it help me set up things that my test needs before they start. In this case, it's create a test user."]}),"\n",(0,s.jsx)(t.li,{children:"The 'test_user' fixture create a new user in the database my test can use (db). For this, it's like setting up a dummy account for testing."}),"\n",(0,s.jsx)(t.li,{children:"The 'db' argument tells pytest that it's going to use the current database my Django app is using for the test. However, with 'db' fixture, it makes sure that my tests don't interfere with each other."}),"\n",(0,s.jsx)(t.li,{children:"This 'db' argument create the test database which is temporary and isolated, which is controlled by the testing framework."}),"\n",(0,s.jsxs)(t.li,{children:["Because I have to test if an Expense object is created or not, I should have somewhere to store it. The ",(0,s.jsx)(t.code,{children:"@pytest.mark.django_db"})," decorator enables database access and it uses a test database, which ensures that my main database remains unaffected by tests."]}),"\n",(0,s.jsxs)(t.li,{children:["So basically for this ",(0,s.jsx)(t.code,{children:"test_models.py"}),":","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"I set up User object by using the pytest.fixture"}),"\n",(0,s.jsx)(t.li,{children:"I use pytest.mark.django_db to have permission to access the database but keep it unaffected with my test object"}),"\n",(0,s.jsx)(t.li,{children:"Assert the object I created while testing with the expected output to make sure they are all equal."}),"\n",(0,s.jsx)(t.li,{children:"Test string function for Expense class to make sure it returns expected string."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'title="tests/test_model.py"',children:'import pytest\nfrom django.contrib.auth.models import User\nfrom expense_manager_app.models import Expense\nfrom datetime import date\n\n\n@pytest.fixture()\ndef test_user(db):\n    return User.objects.create_user(username="testuser", password="12345")\n\n\n@pytest.mark.django_db\ndef test_expense_creation(test_user):\n    expense = Expense.objects.create(\n        user=test_user,\n        card="Visa",\n        category="Grocery",\n        expense_date=date(2023, 12, 1),\n        amount=100.00,\n        notes="Thanksgiving party"\n    )\n\n    assert expense.user.username == "testuser"\n    assert expense.card == "Visa"\n    assert expense.category == "Grocery"\n    assert expense.expense_date == date(2023, 12, 1)\n    assert expense.amount == 100.00\n    assert expense.notes == "Thanksgiving party"\n\n\n@pytest.mark.django_db\ndef test_expense_str(test_user):\n    expense = Expense.objects.create(\n        user=test_user,\n        card="Visa",\n        category="Grocery",\n        expense_date=date(2023, 12, 1),\n        amount=100.00,\n        notes="Thanksgiving party"\n    )\n    expense_str = str(expense)\n    assert expense_str == "Visa - 2023-12-01 - 100.0"\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);