"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2897],{800:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=t(5893),r=t(1151);const o={title:"Writing tests for Expense Manager project (3)"},i="How I Wrote Tests for Expense Manager project - Views",a={id:"troubleshooting/testing/writing_test_3",title:"Writing tests for Expense Manager project (3)",description:"1. Some notes while I review my tests",source:"@site/docs/troubleshooting/testing/writing_test_3.md",sourceDirName:"troubleshooting/testing",slug:"/troubleshooting/testing/writing_test_3",permalink:"/docs/troubleshooting/testing/writing_test_3",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Writing tests for Expense Manager project (3)"},sidebar:"tutorialSidebar",previous:{title:"Writing tests for Expense Manager project (2)",permalink:"/docs/troubleshooting/testing/writing_test_2"},next:{title:"Writing tests for Expense Manager project",permalink:"/docs/troubleshooting/write_test_for_expense_manager_app"}},p={},d=[{value:"1. Some notes while I review my tests",id:"1-some-notes-while-i-review-my-tests",level:2},{value:"2. The logic behind writing tests for views.py",id:"2-the-logic-behind-writing-tests-for-viewspy",level:2},{value:"3. Tests I wrote for views.py",id:"3-tests-i-wrote-for-viewspy",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"how-i-wrote-tests-for-expense-manager-project---views",children:"How I Wrote Tests for Expense Manager project - Views"}),"\n",(0,n.jsx)(s.h2,{id:"1-some-notes-while-i-review-my-tests",children:"1. Some notes while I review my tests"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"I find writing tests for views are very different from writing tests for functions I had in other project."}),"\n",(0,n.jsx)(s.li,{children:"For this whole Django application, writing tests doesn't mean checking if the functions you have in your files or in your class work or not. It's about the request and response cycle."}),"\n",(0,n.jsx)(s.li,{children:"You need to test if the url's format is correct and if it maps to the correct views or not."}),"\n",(0,n.jsx)(s.li,{children:"Most of the times you'd work with POST and GET methods. For examples, if you want to views the Expense list, you need to enter the GET method with the url and make sure it works if its status code is 200."}),"\n",(0,n.jsx)(s.li,{children:"Speaking of status code, the HTTP 200 OK success status response code indicates that the request has succeeded."}),"\n",(0,n.jsx)(s.li,{children:"In my views, I need to make sure that users are authenticated and logged in first to access other views besides login and register, or if user updates or delete an expense successfully. Therefore, the HTTP 302 FOUND redirect status reponse code will be seen in my tests. This HTTP 302 Found redirect status response code indicates that the resrouce requested has been temporarily moved the URL given by the Location header."}),"\n",(0,n.jsxs)(s.li,{children:["You can read more about HTTP Status Code ",(0,n.jsx)(s.a,{href:"https://http.cat/",children:"here"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"2-the-logic-behind-writing-tests-for-viewspy",children:"2. The logic behind writing tests for views.py"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Testing the HTTP Response and Status Codes: Verifying that each view returns the correct HTTP response and status code for various request scenarios."}),"\n",(0,n.jsx)(s.li,{children:"Validating template use and context data: Ensure that the view uses the correct template and that the context data passed to the template is as expected."}),"\n",(0,n.jsx)(s.li,{children:"Verifying business logic: For this, it means tests will cover the processing, database interactions, etc."}),"\n",(0,n.jsx)(s.li,{children:"Checking redirect flows"}),"\n",(0,n.jsx)(s.li,{children:"Form handling and validation"}),"\n",(0,n.jsx)(s.li,{children:"Handling GET and POST requests"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"3-tests-i-wrote-for-viewspy",children:"3. Tests I wrote for views.py"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",metastring:'title="tests/test_views.py"',children:'import datetime\nimport pytest\nfrom django.urls import reverse\nfrom django.contrib.auth.models import User\nfrom pytest_django.asserts import assertTemplateUsed\nfrom expense_manager_app.models import Expense\nfrom django.contrib.auth import get_user_model\nfrom expense_manager_app.forms import RegisterForm\n\n\n@pytest.fixture\ndef test_user(db):\n    return User.objects.create_user(\n        username="testuser",\n        password="12345"\n    )\n\n\n@pytest.fixture\ndef test_expense(db, test_user):\n    return Expense.objects.create(\n        user=test_user,\n        card="Visa",\n        category="Grocery",\n        expense_date="2023-12-01",\n        amount=100.00,\n        notes="Test notes"\n    )\n\n\n@pytest.mark.django_db\ndef test_register_view(client):\n    url = reverse("register")\n    response = client.get(url)\n    assert response.status_code == 200\n    assert isinstance(response.context["form"], RegisterForm)\n\n    user_data = {\n        "username": "newuser",\n        "first_name": "John",\n        "last_name": "Doe",\n        "email": "example@gmail.com",\n        "password1": "complex_password",\n        "password2": "complex_password"\n    }\n    response = client.post(url, data=user_data)\n    assert response.status_code == 302\n    assert response.url == reverse("login")\n\n    user_model = get_user_model()\n    assert user_model.objects.filter(username="newuser").exists()\n\n\n@pytest.mark.django_db\ndef test_expense_list_view(client, test_user, test_expense):\n    url = reverse("expense-list")\n    response = client.get(url)\n\n    # Test if it redirects to login page\n    assert response.status_code == 302\n    assert response["Location"] == "/login/?next=/"\n\n    client.force_login(test_user)\n    response = client.get(url)\n    assert response.status_code == 200\n    assert test_expense in response.context["expenses"]\n\n\n@pytest.mark.django_db\ndef test_expense_search_view(client, test_user, test_expense):\n    url = reverse("expense-search") + "?search-card=Visa"\n    response = client.get(url)\n    # Redirect to login page\n    assert response.status_code == 302\n    assert response["Location"] == f"/login/?next=/search/%3Fsearch-card%3DVisa"\n    \n    # Login as test user\n    client.force_login(user=test_user)\n    response = client.get(url)\n    assert response.status_code == 200\n    assert test_expense in response.context["expenses"]\n\n\n@pytest.mark.django_db\ndef test_expense_detail_view(client, test_user, test_expense):\n    url = reverse("expense-detail", kwargs={\'pk\': test_expense.pk})\n    response = client.get(url)\n\n    # Redirect user to login page\n    assert response.status_code == 302\n    assert response["Location"] == f"/login/?next={url}"\n\n    # Login as test user\n    client.force_login(user=test_user)\n    response = client.get(url)\n    assert response.status_code == 200\n    assert "expense" in response.context\n\n\n@pytest.mark.django_db\ndef test_expense_create_view(client, test_user, test_expense):\n    url = reverse("expense-add")\n    response = client.get(url)\n\n    # Redirect user to login page\n    assert response.status_code == 302\n    assert response["Location"] == f"/login/?next={url}"\n\n    # Login as test user\n    client.force_login(user=test_user)\n    response = client.get(url)\n    assert response.status_code == 200\n    assertTemplateUsed(response, "expense_manager_app/expense_form.html")\n\n    # Set up new expense data\n    new_expense_data = {\n        "card": "Mastercard",\n        "category": "Utilities",\n        "expense_date": datetime.date(2023, 12, 4),\n        "amount": 200.00,\n        "notes": "Test add"\n    }\n    response = client.post(url, new_expense_data)\n    # Redirect to expense list page\n    assert response.status_code == 302\n\n    # Verify a new Expense object has been created\n    new_expense = Expense.objects.last()\n    assert new_expense is not None\n    assert new_expense.user == test_user\n    assert new_expense.card == "Mastercard"\n    assert new_expense.category == "Utilities"\n    assert str(new_expense.expense_date) == "2023-12-04"\n    assert new_expense.amount == 200.00\n    assert new_expense.notes == "Test add"\n\n\n@pytest.mark.django_db\ndef test_expense_update_view(client, test_user, test_expense):\n    url = reverse("expense-update", kwargs={"pk": test_expense.pk})\n    response = client.get(url)\n\n    # Redirect to login page\n    assert response.status_code == 302\n    assert response["Location"] == f"/login/?next={url}"\n\n    # Login as test user\n    client.force_login(test_user)\n\n    # Verify initial form values (GET request)\n    response = client.get(url)\n    assert response.status_code == 200\n    assertTemplateUsed(response, "expense_manager_app/expense_update_form.html")\n    form = response.context.get("form")\n    assert form.initial["card"] == test_expense.card\n\n    # Perform update action\n    updated_data = {\n        "card": "Debit Card",\n        "category": "Food",\n        "expense_date": "2023-12-03",\n        "amount": 50.00,\n        "notes": "Test updating"\n    }\n    response = client.post(url, data=updated_data)\n\n    # Redirect to expense list page\n    assert response.status_code == 302\n    assert response.url == reverse("expense-list")\n\n    # Verify the update in the database\n    test_expense.refresh_from_db()\n    assert test_expense.card == "Debit Card"\n    assert test_expense.category == "Food"\n    assert test_expense.expense_date == datetime.date(2023, 12, 3)\n    assert test_expense.amount == 50.00\n    assert test_expense.notes == "Test updating"\n    assert Expense.objects.filter(card="Debit Card").exists()\n\n\n@pytest.mark.django_db\ndef test_expense_delete_view(client, test_user, test_expense):\n    url = reverse("expense-delete", kwargs={"pk": test_expense.pk})\n    response = client.get(url)\n\n    # Redirect to login page\n    assert response.status_code == 302\n    assert response["Location"] == f"/login/?next={url}"\n\n    # Login as test user\n    client.force_login(user=test_user)\n\n    # Verify the delete confirmation page\n    response = client.get(url)\n    assert response.status_code == 200\n    assertTemplateUsed(response, "expense_manager_app/expense_confirm_delete.html")\n\n    # Perform delete action\n    response = client.post(url)\n\n    # Redirect to expense list page after deleting expense\n    assert response.status_code == 302\n    assert response.url == reverse("expense-list")\n    assert not Expense.objects.filter(pk=test_expense.pk).exists()\n\n'})})]})}function l(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var n=t(7294);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);