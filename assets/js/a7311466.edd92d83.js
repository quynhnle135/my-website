"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8338],{49:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=r(5893),s=r(1151);const a={title:"Sep 24, 2023"},i="Coding Journal: Sep 24, 2023",o={id:"learning-journal/September/20230924",title:"Sep 24, 2023",description:"Exploring Frameworks",source:"@site/docs/learning-journal/September/20230924.md",sourceDirName:"learning-journal/September",slug:"/learning-journal/September/20230924",permalink:"/my-website/docs/learning-journal/September/20230924",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Sep 24, 2023"},sidebar:"tutorialSidebar",previous:{title:"Sep 23, 2023",permalink:"/my-website/docs/learning-journal/September/20230923"},next:{title:"Sep 26, 2023",permalink:"/my-website/docs/learning-journal/September/20230926"}},l={},d=[{value:"Exploring Frameworks",id:"exploring-frameworks",level:2},{value:"Question 1:",id:"question-1",level:3},{value:"Working on Django REST Framework for To Do List API",id:"working-on-django-rest-framework-for-to-do-list-api",level:2},{value:"Notes:",id:"notes",level:4},{value:"Getting started to Flask",id:"getting-started-to-flask",level:2},{value:"To run this:",id:"to-run-this",level:5},{value:"Explore more about methods and urls in Flask",id:"explore-more-about-methods-and-urls-in-flask",level:5},{value:"To run this:",id:"to-run-this-1",level:5}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"coding-journal-sep-24-2023",children:"Coding Journal: Sep 24, 2023"}),"\n",(0,t.jsx)(n.h2,{id:"exploring-frameworks",children:"Exploring Frameworks"}),"\n",(0,t.jsx)(n.p,{children:"Goal: This exercise will help me explore many different Python frameworks to build API"}),"\n",(0,t.jsx)(n.h3,{id:"question-1",children:"Question 1:"}),"\n",(0,t.jsx)(n.p,{children:"There are 5 main HTTP Verbs: GET, POST, PUT, PATCH, DELETE. Explain in details what they are?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'GET: I understand this verb as "GET INFORMATION". For this case, the API will get the information from MYSQL database that I set up and connect to my project. Everytime new task is added, TODOLIST database will be updated. So whenever a GET request is made, it will retrieve and return the required data.'}),"\n",(0,t.jsx)(n.li,{children:'POST: I understand this verb as "POST SOMETHING NEW". For this case, when I add new task, I\'m POSTING. Adding new data/resource to database/server.'}),"\n",(0,t.jsx)(n.li,{children:'DELETE: I literally understand as what it\'s called, "DELETE". If a Delete request is made, the required data will be removed from the database/server.'}),"\n",(0,t.jsx)(n.li,{children:"PUT & PATCH: Both of these two methods are UPDATE, but they're not similar"}),"\n",(0,t.jsx)(n.li,{children:"PUT: Update the current data or create a new if doesn't exist. For example, to change the title and remove the description, you can send a PUT request with title: somthingnew. The absence of the description would signal that it should be removed or reset to default."}),"\n",(0,t.jsx)(n.li,{children:'PATCH: Only update a partial modification to a resource. So to update task\'s title, you only need to send a PATCH request with title: "somethingnew" without having to resent the whole entity'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"working-on-django-rest-framework-for-to-do-list-api",children:"Working on Django REST Framework for To Do List API"}),"\n",(0,t.jsx)(n.p,{children:"For this, I can either combine GET, PUT, PATCH, DELETE with generics.RetrieveUpdateDestroyAPIView"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="todolistapi/views.py"',children:"from .models import Task\nfrom .serializers import TaskSerializers\nfrom rest_framework import generics\n\n\n# Create your views here.\nclass TaskListView(generics.ListAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskDetailView(generics.RetrieveUpdateDestroyAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="todolistapi/urls.py"',children:'from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path("tasks/", views.TaskListView.as_view(), name="task-list"),\n    path("tasks/<int:pk>/", views.TaskDetailView.as_view(), name="task-detail"),\n]\n'})}),"\n",(0,t.jsx)(n.p,{children:"I can also create seperate view for each function but it will repeate the same format (querryset, serializer_class)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="todolistapi/views.py"',children:"from .models import Task\nfrom .serializers import TaskSerializers\nfrom rest_framework import generics\n\n\n# Create your views here.\nclass TaskListView(generics.ListAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskDetailView(generics.RetrieveUpdateDestroyAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskCreateView(generics.CreateAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskDetailView(generics.RetrieveAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskUpdateView(generics.UpdateAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskDeleteView(generics.DestroyAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="todolistapi/urls.py"',children:'from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path("tasks/", views.TaskListView.as_view(), name="task-list"),\n    path("tasks/create/", views.TaskCreateView.as_view(), name="task-create"),\n    path("tasks/<int:pk>/", views.TaskDetailView.as_view(), name="task-detail"),\n    path("tasks/update/<int:pk>/", views.TaskUpdateView.as_view(), name="task-update"),\n    path("tasks/delete/<int:pk>/",  views.TaskDeleteView.as_view(), name="task-delete"),\n]\n'})}),"\n",(0,t.jsx)(n.h4,{id:"notes",children:"Notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"I prefer to stick with the first way by using generics.RetrieveUpdateDestroyAPIView since it can handle PUT, PATCH, DELETE methods in only class-based view. DRY principle is applied by not repeating code through out the whole program"}),"\n",(0,t.jsx)(n.li,{children:"There may be confusing if I create seperate function for each method since REST principles lean more on HTTP verb than url"}),"\n",(0,t.jsx)(n.li,{children:"I need to rearrnage the urlpatterns because the urls for PUT, PATCH, DELETE are like the one for GET method."}),"\n",(0,t.jsx)(n.li,{children:"We can also write CRUD functions using APIView but I'll work on it later."}),"\n",(0,t.jsx)(n.li,{children:"Testing endpoints and HTTP Verb using curl in Terminal is a good way to make sure that your API works properly."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started-to-flask",children:"Getting started to Flask"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="hello.py"',children:'from flask import Flask\nfrom markupsafe import escape\n\napp = Flask(__name__)\n\n\n@app.route("/")\ndef index():\n    return "Index page!"\n\n\n@app.route("/hello")\ndef hello():\n    return "Hello Flask!"\n\n\n@app.route("/<name>")\ndef hello_name(name):\n    return f"Hello, {escape(name)}!"\n\n\n@app.route("/user/<username>")\ndef show_user_profile(username):\n    return f"User: {escape(username)}"\n\n\n@app.route("/post/<int:post_id>")\ndef show_post(post_id):\n    return f"Post: {escape(post_id)}"\n\n\n'})}),"\n",(0,t.jsx)(n.h5,{id:"to-run-this",children:"To run this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-command",children:"flask --app hello run\n"})}),"\n",(0,t.jsx)(n.h5,{id:"explore-more-about-methods-and-urls-in-flask",children:"Explore more about methods and urls in Flask"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:"from flask import Flask, url_for, request\nfrom markupsafe import escape\n\napp = Flask(__name__)\n\n\ndef do_the_login():\n    return \"LOG IN!\"\n\n\ndef show_the_login_form():\n    return \"The form is FORMING\"\n\n\n@app.route('/')\ndef index():\n    return 'index'\n\n\n# @app.route('/login', methods=['GET', 'POST'])\n# def login():\n#     if request.method == 'POST':\n#         return do_the_login()\n#     else:\n#         return show_the_login_form()\n\n@app.get('/login')\ndef login_get():\n    return show_the_login_form()\n\n\n@app.post('/login')\ndef login_post():\n    return do_the_login()\n\n\n@app.route('/user/<username>')\ndef profile(username):\n    return f'{username}\\'s profile'\n\n\nwith app.test_request_context():\n    print(url_for('index'))\n    print(url_for('login'))\n    print(url_for('login', next='/'))\n    print(url_for('profile', username='John Doe'))\n"})}),"\n",(0,t.jsx)(n.h5,{id:"to-run-this-1",children:"To run this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-command",children:"flask --app app run\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(7294);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);