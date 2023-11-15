"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2583],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),m=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=m(n),u=r,g=d["".concat(i,".").concat(u)]||d[u]||c[u]||s;return n?a.createElement(g,l(l({ref:e},p),{},{components:n})):a.createElement(g,l({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var m=2;m<s;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5959:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const s={title:"Aug 28",description:"Mon, Aug 28"},l="Practice class-based views and form in Django",o={unversionedId:"learning-journal/2023/August/aug_28_23",id:"learning-journal/2023/August/aug_28_23",title:"Aug 28",description:"Mon, Aug 28",source:"@site/docs/learning-journal/2023/August/aug_28_23.md",sourceDirName:"learning-journal/2023/August",slug:"/learning-journal/2023/August/aug_28_23",permalink:"/my-website/docs/learning-journal/2023/August/aug_28_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Aug 28",description:"Mon, Aug 28"},sidebar:"tutorialSidebar",previous:{title:"Aug 27",permalink:"/my-website/docs/learning-journal/2023/August/aug_27_23"},next:{title:"Aug 29",permalink:"/my-website/docs/learning-journal/2023/August/aug_29_23"}},i={},m=[{value:"To Do List app",id:"to-do-list-app",level:3}],p={toc:m},d="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"practice-class-based-views-and-form-in-django"},"Practice class-based views and form in Django"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="myproject/settings.py"',title:'"myproject/settings.py"'},"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'todolist.apps.TodolistConfig',\n    'introduce.apps.IntroduceConfig',\n]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="myproject/urls.py"',title:'"myproject/urls.py"'},"from django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('tasks/', include('todolist.urls')),\n    path('people/', include('introduce.urls'))\n]\n")),(0,r.kt)("h3",{id:"to-do-list-app"},"To Do List app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="todolist/models.py"',title:'"todolist/models.py"'},"from django.db import models\n\n# Create your models here.\nclass Task(models.Model):\n    title = models.CharField(max_length=255)\n    description = models.TextField()\n    completed = models.BooleanField(default=False)\n\n    def __str__(self) -> str:\n        return self.title\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="todolist/admin.py"',title:'"todolist/admin.py"'},"from django.contrib import admin\nfrom .models import Task\n\n# Register your models here.\nadmin.site.register(Task)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="todolist/views.py"',title:'"todolist/views.py"'},"from django.shortcuts import render\nfrom django.views import generic\nfrom .models import Task\nfrom django.urls import reverse_lazy\n\n# Create your views here.\nclass TaskList(generic.ListView):\n    model = Task\n    context_object_name = \"tasks\"\n\n\nclass TaskDetail(generic.DetailView):\n    model = Task\n\n\nclass TaskCreate(generic.CreateView):\n    model = Task\n    fields = \"__all__\"\n    success_url = reverse_lazy('tasks')\n\n\nclass TaskDelete(generic.DeleteView):\n    model = Task\n    success_url = reverse_lazy('tasks')\n\n\nclass TaskUpdate(generic.UpdateView):\n    model = Task\n    fields = \"__all__\"\n    success_url = reverse_lazy('tasks')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="todolist/urls.py"',title:'"todolist/urls.py"'},"from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path('tasks/', views.TaskList.as_view(), name=\"tasks\"),\n    path('tasks/<int:pk>/', views.TaskDetail.as_view(), name=\"task\"),\n    path('tasks/create', views.TaskCreate.as_view(), name=\"task-create\"),\n    path('tasks/<int:pk>/delete', views.TaskDelete.as_view(), name=\"task-delete\"),\n    path('tasks/<int:pk>/update', views.TaskUpdate.as_view(), name=\"task-update\"),\n]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="todolist/templates/todolist/task_confirm_delete.html"',title:'"todolist/templates/todolist/task_confirm_delete.html"'},'<form method="POST">\n    {% csrf_token %}\n    <p>Are you you sure you want to delete task <span>{{task.title}}</span>?</p>\n    <input type="submit" value="Confirm">\n</form>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="todolist/templates/todolist/task_detail.html"',title:'"todolist/templates/todolist/task_detail.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Task Detail</title>\n</head>\n<body>\n    <h1>Task Detail</h1>\n    <h3>{{task.title}}</h3>\n    <p>{{task.description}}</p>\n\n    <a href="{% url \'tasks\' %}">Go back?</a>\n</body>\n</html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="todolist/templates/todolist/task_form.html"',title:'"todolist/templates/todolist/task_form.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Create Task</title>\n</head>\n<body>\n    <h1>Let\'s create new task!</h1>\n    <form method="POST">\n        {% csrf_token %}\n        {{ form.as_p }}\n        <button type="submit">Create Task</button>\n    </form>\n</body>\n</html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="todolist/templates/todolist/task_list.html"',title:'"todolist/templates/todolist/task_list.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Tasks</title>\n</head>\n<body>\n    <h1>All tasks</h1>\n    <ul>\n        {% for task in tasks %}\n        <li>{{task.title}}</li>\n        <a href="{% url \'task\' task.id %}">View</a>\n        <a href="{% url \'task-delete\' task.id %}">Delete</a>\n        <a href="{% url \'task-update\' task.id %}">Update</a>\n        {% endfor %}\n    </ul>\n    \n    <br>\n    <a href="{% url \'task-create\' %}">Create new task?</a>\n    \n    \n</body>\n</html>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="todolist/templates/todolist/task_update_form.html"',title:'"todolist/templates/todolist/task_update_form.html"'},'<form method="POST">\n    {% csrf_token %}\n    {{form.as_p}}\n    <input type="submit" value="Update">\n</form>\n')))}c.isMDXComponent=!0}}]);