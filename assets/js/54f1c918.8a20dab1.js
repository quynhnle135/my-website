"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={title:"Aug 26",description:"Fri, Aug 26"},i=void 0,l={unversionedId:"coding-journal/2023/August/aug_26_23",id:"coding-journal/2023/August/aug_26_23",title:"Aug 26",description:"Fri, Aug 26",source:"@site/docs/coding-journal/2023/8 - August/aug_26_23.md",sourceDirName:"coding-journal/2023/8 - August",slug:"/coding-journal/2023/August/aug_26_23",permalink:"/my-website/docs/coding-journal/2023/August/aug_26_23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding-journal/2023/8 - August/aug_26_23.md",tags:[],version:"current",frontMatter:{title:"Aug 26",description:"Fri, Aug 26"},sidebar:"tutorialSidebar",previous:{title:"Aug 25",permalink:"/my-website/docs/coding-journal/2023/August/aug_25_23"},next:{title:"Aug 27",permalink:"/my-website/docs/coding-journal/2023/August/aug_27_23"}},s={},u=[{value:"Doing some exercises about Django REST API",id:"doing-some-exercises-about-django-rest-api",level:2},{value:"Learn about Serializer in Django REST API",id:"learn-about-serializer-in-django-rest-api",level:3},{value:"BookList project",id:"booklist-project",level:4},{value:"BookListAPI app",id:"booklistapi-app",level:4},{value:"The Full Stacj exercises",id:"the-full-stacj-exercises",level:2},{value:"Connect the Little Lemon back-end to MySQL",id:"connect-the-little-lemon-back-end-to-mysql",level:3},{value:"Set up Little Lemon booking API",id:"set-up-little-lemon-booking-api",level:3},{value:"Coursera Notes",id:"coursera-notes",level:3}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"doing-some-exercises-about-django-rest-api"},"Doing some exercises about Django REST API"),(0,r.kt)("h3",{id:"learn-about-serializer-in-django-rest-api"},"Learn about Serializer in Django REST API"),(0,r.kt)("h4",{id:"booklist-project"},"BookList project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="booklist/settings.py"',title:'"booklist/settings.py"'},"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'BooklistAPI',\n    'rest_framework',\n]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="booklist/urls.py"',title:'"booklist/urls.py"'},"from django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('api/', include('BooklistAPI.urls')),\n]\n")),(0,r.kt)("h4",{id:"booklistapi-app"},"BookListAPI app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="booklistapi/models.py"',title:'"booklistapi/models.py"'},"from django.db import models\n\n# Create your models here.\n\n\nclass Book(models.Model):\n    title = models.CharField(max_length=255)\n    author = models.CharField(max_length=255)\n    price = models.DecimalField(max_digits=5, decimal_places=2)\n\n    def __str__(self) -> str:\n        return self.title\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="booklistapi/admin.py"',title:'"booklistapi/admin.py"'},"from django.contrib import admin\nfrom .models import Book\n\n# Register your models here.\nadmin.site.register(Book)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="booklistapi/views.py"',title:'"booklistapi/views.py"'},"from rest_framework import generics\nfrom .models import Book\nfrom .serializers import BookSerializer\n\n\nclass BookView(generics.ListCreateAPIView):\n    queryset = Book.objects.all()\n    serializer_class = BookSerializer\n\n\nclass SingleBookView(generics.RetrieveUpdateAPIView):\n    queryset = Book.objects.all()\n    serializer_class = BookSerializer\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="booklistapi/urls.py"',title:'"booklistapi/urls.py"'},"from django.urls import path\nfrom . import views\n\n\nurlpatterns = [\n    path('books/', views.BookView.as_view()),\n    path('books/<int:pk>/', views.SingleBookView.as_view()),\n]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="booklistapi/serializers.py"',title:'"booklistapi/serializers.py"'},"from .models import Book\nfrom rest_framework import serializers\n\n\nclass BookSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Book\n        fields = ['id', 'author', 'price']\n")),(0,r.kt)("h2",{id:"the-full-stacj-exercises"},"The Full Stacj exercises"),(0,r.kt)("h3",{id:"connect-the-little-lemon-back-end-to-mysql"},"Connect the Little Lemon back-end to MySQL"),(0,r.kt)("h3",{id:"set-up-little-lemon-booking-api"},"Set up Little Lemon booking API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="restaurant/views.py"',title:'"restaurant/views.py"'},"def bookings(request):\n    date = request.GET.get('date', datetime.today().date())\n    bookings = Booking.objects.all()\n    booking_json = serializers.serialize('json', bookings)\n    return render(request, \"booking.html\", {\"bookings\": booking_json})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="restaurant/ulrs.py"',title:'"restaurant/ulrs.py"'},"from django.urls import path\nfrom . import views\n\n\nurlpatterns = [\n    path('', views.home, name=\"home\"),\n    path('about/', views.about, name=\"about\"),\n    path('book/', views.book, name=\"book\"),\n    path('menu/', views.menu, name=\"menu\"),\n    path('menu_item/<int:pk>/', views.display_menu_item, name=\"menu_item\"),\n    path('bookings/', views.bookings, name=\"bookings\"),\n]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="restaurant/forms.py"',title:'"restaurant/forms.py"'},'from .models import Booking\nfrom django import forms\n\n\nclass BookingForm(forms.ModelForm):\n    class Meta:\n        model = Booking\n        fields = "__all__"\n')),(0,r.kt)("h3",{id:"coursera-notes"},"Coursera Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deployment process",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To run an application in the Cloud, you need one or multiple servers to upload your application and link them to your domain. This process of uploading code and data to the servers is called Deployment"),(0,r.kt)("li",{parentName:"ul"},"There are two types of deployment:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Manual: Need to manually upload everything using File Transfer Protocol (FTP), Secure File Transfer Protocols (SFTP), etc"),(0,r.kt)("li",{parentName:"ul"},"Automated: Can be done with a version control system and build tools."))))),(0,r.kt)("li",{parentName:"ul"},"It starts when the developer makes some changes and pushes code to the repository"),(0,r.kt)("li",{parentName:"ul"},"The build tools receive the signal and create a build environment identical to the production environment"),(0,r.kt)("li",{parentName:"ul"},"It runs the tests to ensure everything in your code is working correctly"),(0,r.kt)("li",{parentName:"ul"},"If everything is okay, the build tools connect to the server where your files will stay and upload your code")),(0,r.kt)("p",null,"There are two important terms when it comes to deployment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Continuous Integration (CI): is the process of immitating the development environment and then running the test to ensure your code is okay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Continuous Deployment (CD)"))),(0,r.kt)("p",null,"CI/CD Process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code -> Version Control -> Build -> Test -> Deploy")))}c.isMDXComponent=!0}}]);