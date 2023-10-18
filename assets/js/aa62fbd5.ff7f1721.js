"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4263],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,k=d["".concat(l,".").concat(c)]||d[c]||m[c]||s;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const s={title:"Sep 24",description:"Sun, Sep 24"},i=void 0,o={unversionedId:"coding-journal/2023/September/sep_24_23",id:"coding-journal/2023/September/sep_24_23",title:"Sep 24",description:"Sun, Sep 24",source:"@site/docs/coding-journal/2023/9 - September/sep_24_23.md",sourceDirName:"coding-journal/2023/9 - September",slug:"/coding-journal/2023/September/sep_24_23",permalink:"/my-website/docs/coding-journal/2023/September/sep_24_23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding-journal/2023/9 - September/sep_24_23.md",tags:[],version:"current",frontMatter:{title:"Sep 24",description:"Sun, Sep 24"},sidebar:"tutorialSidebar",previous:{title:"Sep 23",permalink:"/my-website/docs/coding-journal/2023/September/sep_23_23"},next:{title:"Sep 26",permalink:"/my-website/docs/coding-journal/2023/September/sep_26_23"}},l={},p=[{value:"Question 1:",id:"question-1",level:3},{value:"Working on Django REST Framework for To Do List API",id:"working-on-django-rest-framework-for-to-do-list-api",level:2},{value:"Notes:",id:"notes",level:4},{value:"Getting started to Flask",id:"getting-started-to-flask",level:2},{value:"To run this:",id:"to-run-this",level:5},{value:"Explore more about methods and urls in Flask",id:"explore-more-about-methods-and-urls-in-flask",level:5},{value:"To run this:",id:"to-run-this-1",level:5}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Exploring Frameworks\nGoal: This exercise will help me explore many different Python frameworks to build API"),(0,a.kt)("h3",{id:"question-1"},"Question 1:"),(0,a.kt)("p",null,"There are 5 main HTTP Verbs: GET, POST, PUT, PATCH, DELETE. Explain in details what they are? "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'GET: I understand this verb as "GET INFORMATION". For this case, the API will get the information from MYSQL database that I set up and connect to my project. Everytime new task is added, TODOLIST database will be updated. So whenever a GET request is made, it will retrieve and return the required data. '),(0,a.kt)("li",{parentName:"ul"},'POST: I understand this verb as "POST SOMETHING NEW". For this case, when I add new task, I\'m POSTING. Adding new data/resource to database/server. '),(0,a.kt)("li",{parentName:"ul"},'DELETE: I literally understand as what it\'s called, "DELETE". If a Delete request is made, the required data will be removed from the database/server.'),(0,a.kt)("li",{parentName:"ul"},"PUT & PATCH: Both of these two methods are UPDATE, but they're not similar",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'PUT: Update the current data or create a new if doesn\'t exist. For example, to change the title and remove the description, you can send a PUT request with {title: "somethingnew"}. The absence of the description would signal that it should be removed or reset to default.'),(0,a.kt)("li",{parentName:"ul"},'PATCH: Only update a partial modification to a resource. So to update task\'s title, you only need to send a PATCH request with {title: "somethingnew"} without having to resent the whole entity')))),(0,a.kt)("h2",{id:"working-on-django-rest-framework-for-to-do-list-api"},"Working on Django REST Framework for To Do List API"),(0,a.kt)("p",null,"For this, I can either combine GET, PUT, PATCH, DELETE with generics.RetrieveUpdateDestroyAPIView"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="todolistapi/views.py"',title:'"todolistapi/views.py"'},"from .models import Task\nfrom .serializers import TaskSerializers\nfrom rest_framework import generics\n\n\n# Create your views here.\nclass TaskListView(generics.ListAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskDetailView(generics.RetrieveUpdateDestroyAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="todolistapi/urls.py"',title:'"todolistapi/urls.py"'},'from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path("tasks/", views.TaskListView.as_view(), name="task-list"),\n    path("tasks/<int:pk>/", views.TaskDetailView.as_view(), name="task-detail"),\n]\n')),(0,a.kt)("p",null,"I can also create seperate view for each function but it will repeate the same format (querryset, serializer_class)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="todolistapi/views.py"',title:'"todolistapi/views.py"'},"from .models import Task\nfrom .serializers import TaskSerializers\nfrom rest_framework import generics\n\n\n# Create your views here.\nclass TaskListView(generics.ListAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskDetailView(generics.RetrieveUpdateDestroyAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskCreateView(generics.CreateAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskDetailView(generics.RetrieveAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskUpdateView(generics.UpdateAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n\nclass TaskDeleteView(generics.DestroyAPIView):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializers\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="todolistapi/urls.py"',title:'"todolistapi/urls.py"'},'from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path("tasks/", views.TaskListView.as_view(), name="task-list"),\n    path("tasks/create/", views.TaskCreateView.as_view(), name="task-create"),\n    path("tasks/<int:pk>/", views.TaskDetailView.as_view(), name="task-detail"),\n    path("tasks/update/<int:pk>/", views.TaskUpdateView.as_view(), name="task-update"),\n    path("tasks/delete/<int:pk>/",  views.TaskDeleteView.as_view(), name="task-delete"),\n]\n')),(0,a.kt)("h4",{id:"notes"},"Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I prefer to stick with the first way by using generics.RetrieveUpdateDestroyAPIView since it can handle PUT, PATCH, DELETE methods in only class-based view. DRY principle is applied by not repeating code through out the whole program"),(0,a.kt)("li",{parentName:"ul"},"There may be confusing if I create seperate function for each method since REST principles lean more on HTTP verb than url"),(0,a.kt)("li",{parentName:"ul"},"I need to rearrnage the urlpatterns because the urls for PUT, PATCH, DELETE are like the one for GET method."),(0,a.kt)("li",{parentName:"ul"},"We can also write CRUD functions using APIView but I'll work on it later. "),(0,a.kt)("li",{parentName:"ul"},"Testing endpoints and HTTP Verb using curl in Terminal is a good way to make sure that your API works properly.")),(0,a.kt)("h2",{id:"getting-started-to-flask"},"Getting started to Flask"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="hello.py"',title:'"hello.py"'},'from flask import Flask\nfrom markupsafe import escape\n\napp = Flask(__name__)\n\n\n@app.route("/")\ndef index():\n    return "Index page!"\n\n\n@app.route("/hello")\ndef hello():\n    return "Hello Flask!"\n\n\n@app.route("/<name>")\ndef hello_name(name):\n    return f"Hello, {escape(name)}!"\n\n\n@app.route("/user/<username>")\ndef show_user_profile(username):\n    return f"User: {escape(username)}"\n\n\n@app.route("/post/<int:post_id>")\ndef show_post(post_id):\n    return f"Post: {escape(post_id)}"\n\n\n')),(0,a.kt)("h5",{id:"to-run-this"},"To run this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-command"},"flask --app hello run\n")),(0,a.kt)("h5",{id:"explore-more-about-methods-and-urls-in-flask"},"Explore more about methods and urls in Flask"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"from flask import Flask, url_for, request\nfrom markupsafe import escape\n\napp = Flask(__name__)\n\n\ndef do_the_login():\n    return \"LOG IN!\"\n\n\ndef show_the_login_form():\n    return \"The form is FORMING\"\n\n\n@app.route('/')\ndef index():\n    return 'index'\n\n\n# @app.route('/login', methods=['GET', 'POST'])\n# def login():\n#     if request.method == 'POST':\n#         return do_the_login()\n#     else:\n#         return show_the_login_form()\n\n@app.get('/login')\ndef login_get():\n    return show_the_login_form()\n\n\n@app.post('/login')\ndef login_post():\n    return do_the_login()\n\n\n@app.route('/user/<username>')\ndef profile(username):\n    return f'{username}\\'s profile'\n\n\nwith app.test_request_context():\n    print(url_for('index'))\n    print(url_for('login'))\n    print(url_for('login', next='/'))\n    print(url_for('profile', username='John Doe'))\n")),(0,a.kt)("h5",{id:"to-run-this-1"},"To run this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-command"},"flask --app app run\n")))}m.isMDXComponent=!0}}]);