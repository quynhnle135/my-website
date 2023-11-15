"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||a;return r?o.createElement(k,i(i({ref:t},m),{},{components:r})):o.createElement(k,i({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={title:"Sep 02",description:"Saturday, Sep 02"},i=void 0,l={unversionedId:"learning-journal/2023/September/sep_02_23",id:"learning-journal/2023/September/sep_02_23",title:"Sep 02",description:"Saturday, Sep 02",source:"@site/docs/learning-journal/2023/September/sep_02_23.md",sourceDirName:"learning-journal/2023/September",slug:"/learning-journal/2023/September/sep_02_23",permalink:"/my-website/docs/learning-journal/2023/September/sep_02_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Sep 02",description:"Saturday, Sep 02"},sidebar:"tutorialSidebar",previous:{title:"Oct 31",permalink:"/my-website/docs/learning-journal/2023/October/oct_31_23"},next:{title:"Sep 04",permalink:"/my-website/docs/learning-journal/2023/September/sep_04_23"}},s={},p=[{value:"Simple Book Project",id:"simple-book-project",level:2},{value:"Project level",id:"project-level",level:3},{value:"Book App level",id:"book-app-level",level:3},{value:"Book API level",id:"book-api-level",level:3},{value:"Quickstart project",id:"quickstart-project",level:2},{value:"Note for today",id:"note-for-today",level:3},{value:"What&#39;s the different between Django views and urls in Django app and API views and endpoints?",id:"whats-the-different-between-django-views-and-urls-in-django-app-and-api-views-and-endpoints",level:4}],m={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"simple-book-project"},"Simple Book Project"),(0,n.kt)("h3",{id:"project-level"},"Project level"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="book/settings.py"',title:'"book/settings.py"'},"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'bookapp.apps.BookappConfig',  # new\n    'bookapi.apps.BookapiConfig',  # new\n    'rest_framework',   # new\n]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="book/urls.py"',title:'"book/urls.py"'},"from django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('', include('bookapp.urls')),\n    path('api/', include('bookapi.urls')),\n]\n")),(0,n.kt)("h3",{id:"book-app-level"},"Book App level"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="bookapp/admin.py"',title:'"bookapp/admin.py"'},"from django.contrib import admin\nfrom .models import Book\n\n# Register your models here.\nadmin.site.register(Book)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="bookapp/models.py"',title:'"bookapp/models.py"'},"from django.db import models\n\n\n# Create your models here.\nclass Book(models.Model):\n    title = models.CharField(max_length=255)\n    subtitle = models.CharField(max_length=255)\n    author = models.CharField(max_length=100)\n    isbn = models.CharField(max_length=13)\n\n    def __str__(self):\n        return self.title\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="bookapp/urls.py"',title:'"bookapp/urls.py"'},'from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path("", views.BookListView.as_view(), name="book-list"),\n    path("<int:pk>/", views.BookDetailView.as_view(), name="book-detail"),\n]\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="bookapp/views.py"',title:'"bookapp/views.py"'},'from django.shortcuts import render\nfrom django.views import generic\nfrom .models import Book\n\n# Create your views here.\nclass BookListView(generic.ListView):\n    model = Book\n    context_object_name = "books"\n    template_name = "bookapp/book_list.html"\n\n\nclass BookDetailView(generic.DetailView):\n    model = Book\n    template_name = "bookapp/book_detail.html"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="bookapp/templates/bookapp/book_detail.html"',title:'"bookapp/templates/bookapp/book_detail.html"'},"<h1>Book Detail</h1>\n\n<ul>\n    <li>Title: {{book.title}}</li>\n    <li>Subtitle: {{book.subtitle}}</li>\n    <li>Author: {{book.author}}</li>\n    <li>ISBN: {{book.isbn}}</li>\n</ul>\n<a href=\"{% url 'book-list' %}\">Go back</a>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="bookapp/templates/bookapp/book_list.html"',title:'"bookapp/templates/bookapp/book_list.html"'},"<h1>Book List</h1>\n\n{% for book in books %}\n<ul>\n    <li>Title: {{book.title}}</li>\n    <li>Subtitle: {{book.subtitle}}</li>\n    <li>Author: {{book.author}}</li>\n    <li>ISBN: {{book.isbn}}</li>\n</ul>\n<a href=\"{% url 'book-detail' book.id %}\">View Detail</a>\n{% endfor %}\n")),(0,n.kt)("h3",{id:"book-api-level"},"Book API level"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="bookapi/serializers.py"',title:'"bookapi/serializers.py"'},'from bookapp.models import Book\nfrom rest_framework import serializers\n\n\nclass BookSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Book\n        fields = "__all__"\n\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="bookapi/urls.py"',title:'"bookapi/urls.py"'},'from django.urls import path\nfrom .views import BookDetailAPIView, BookListAPIView\n\nurlpatterns = [\n    path("", BookListAPIView.as_view()),\n    path("<int:pk>/", BookDetailAPIView.as_view()),\n]\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="bookapi/views.py"',title:'"bookapi/views.py"'},"from django.shortcuts import render\nfrom .serializers import BookSerializer\nfrom rest_framework import generics\nfrom bookapp.models import Book\n\n\n# Create your views here.\nclass BookListAPIView(generics.ListAPIView):\n    queryset = Book.objects.all()\n    serializer_class = BookSerializer\n\n\nclass BookDetailAPIView(generics.RetrieveAPIView):\n    queryset = Book.objects.all()\n    serializer_class = BookSerializer\n")),(0,n.kt)("h2",{id:"quickstart-project"},"Quickstart project"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tutorial/quickstart/serializers.py"',title:'"tutorial/quickstart/serializers.py"'},'from django.contrib.auth.models import User, Group\nfrom rest_framework import serializers\n\n\nclass UserSerializer(serializers.HyperlinkedModelSerializer):\n    class Meta:\n        model = User\n        fields = ["url", "username", "email", "groups"]\n\n\nclass GroupSerializer(serializers.HyperlinkedModelSerializer):\n    class Meta:\n        model = Group\n        fields = ["url", "name"]\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tutorial/quickstart/views.py"',title:'"tutorial/quickstart/views.py"'},"from django.shortcuts import render\nfrom rest_framework import viewsets\nfrom rest_framework import permissions\nfrom tutorial.quickstart.serializers import UserSerializer, GroupSerializer\nfrom django.contrib.auth.models import User, Group\n\n\n# Create your views here.\nclass UserViewSet(viewsets.ModelViewSet):\n    queryset = User.objects.all()\n    serializer_class = UserSerializer\n    permission_classes = [permissions.IsAuthenticated]\n\n\nclass GroupViewSet(viewsets.ModelViewSet):\n    queryset = Group.objects.all()\n    serializer_class = GroupSerializer\n    permission_classes = [permissions.IsAuthenticated]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tutorial/settings.py"',title:'"tutorial/settings.py"'},"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'rest_framework',  # new\n]\n\nREST_FRAMEWORK = {\n    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',\n    'PAGE_SIZE': 10\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tutorial/urls.py"',title:'"tutorial/urls.py"'},"from django.contrib import admin\nfrom django.urls import path, include\nfrom rest_framework import routers\nfrom tutorial.quickstart import views\n\nrouter = routers.DefaultRouter()\nrouter.register(r'users', views.UserViewSet)\nrouter.register(r'groups', views.GroupViewSet)\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('api-auth/', include(\"rest_framework.urls\", namespace=\"rest_framework\"))\n]\n")),(0,n.kt)("h3",{id:"note-for-today"},"Note for today"),(0,n.kt)("p",null,"I realized that I cannot build or create an API myself so I decided to read the book Django for APIs instead and here's what I applied to start creating an API on my by following this process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"install rest_framework and update in settings.py file (project level)"),(0,n.kt)("li",{parentName:"ul"},"create models "),(0,n.kt)("li",{parentName:"ul"},"create serializers based on the models "),(0,n.kt)("li",{parentName:"ul"},"create views with model and serializers (model for queryset and serializers for serializer_class) "),(0,n.kt)("li",{parentName:"ul"},"connect views to urls")),(0,n.kt)("h4",{id:"whats-the-different-between-django-views-and-urls-in-django-app-and-api-views-and-endpoints"},"What's the different between Django views and urls in Django app and API views and endpoints?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Both Django and API views can be written either as function-based views or class based-views. For normal Django app, you can write class-based views with generic from django.views, meanwhile, to write API class-based views, you import generics from rest_framework "),(0,n.kt)("li",{parentName:"ul"},"Django app views only need models, meanwhile API views need both models and serializers. Serializer is an important feature when it comes to API because it converts data from Python program to JSON and vice versa (deserialize)"),(0,n.kt)("li",{parentName:"ul"},"With the same endpoint, API can also handles different HTTP methods: POST (Create), GET(Read, Retrieve), PUT (Update), DELETE (Delete)")))}d.isMDXComponent=!0}}]);