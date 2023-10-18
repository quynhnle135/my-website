"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,g=p["".concat(l,".").concat(d)]||p[d]||c[d]||a;return n?r.createElement(g,s(s({ref:t},m),{},{components:n})):r.createElement(g,s({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"Aug 27",description:"Sun, Aug 27"},s=void 0,o={unversionedId:"coding-journal/2023/August/aug_27_23",id:"coding-journal/2023/August/aug_27_23",title:"Aug 27",description:"Sun, Aug 27",source:"@site/docs/coding-journal/2023/8 - August/aug_27_23.md",sourceDirName:"coding-journal/2023/8 - August",slug:"/coding-journal/2023/August/aug_27_23",permalink:"/my-website/docs/coding-journal/2023/August/aug_27_23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding-journal/2023/8 - August/aug_27_23.md",tags:[],version:"current",frontMatter:{title:"Aug 27",description:"Sun, Aug 27"},sidebar:"tutorialSidebar",previous:{title:"Aug 26",permalink:"/my-website/docs/coding-journal/2023/August/aug_26_23"},next:{title:"Aug 28",permalink:"/my-website/docs/coding-journal/2023/August/aug_28_23"}},l={},u=[{value:"Finish The Full Stack course",id:"finish-the-full-stack-course",level:4},{value:"Working on Back-End Developer Capstone project",id:"working-on-back-end-developer-capstone-project",level:4},{value:"Project set-up",id:"project-set-up",level:5},{value:"Restaurant app",id:"restaurant-app",level:5},{value:"Little Lemon API",id:"little-lemon-api",level:5}],m={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"finish-the-full-stack-course"},"Finish The Full Stack course"),(0,i.kt)("h4",{id:"working-on-back-end-developer-capstone-project"},"Working on Back-End Developer Capstone project"),(0,i.kt)("h5",{id:"project-set-up"},"Project set-up"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="littlelemon/settings.py"',title:'"littlelemon/settings.py"'},"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'restaurant.apps.RestaurantConfig',\n    'LittleLemonAPI',\n    'rest_framework',\n    'rest_framework.authtoken',\n    'djoser',\n]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="littlelemon/urls.py"',title:'"littlelemon/urls.py"'},"from django.contrib import admin\nfrom django.urls import path, include\nfrom rest_framework.routers import DefaultRouter\nfrom restaurant.views import BookingViewSet\n\nrouter = DefaultRouter()\nrouter.register(r'booking', BookingViewSet)\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('restaurant/', include('restaurant.urls')),\n    path('restaurant/booking/', include(router.urls)),\n    path('api/', include('LittleLemonAPI.urls')),\n    path('auth/', include('djoser.urls')),\n    path('auth/', include('djoser.urls.authtoken')),\n]\n")),(0,i.kt)("h5",{id:"restaurant-app"},"Restaurant app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="restaurant/urls.py"',title:'"restaurant/urls.py"'},"from django.urls import path\nfrom . import views\nfrom rest_framework.authtoken.views import obtain_auth_token\n\n\nurlpatterns = [\n    path('', views.index, name=\"home\"),\n    path('menu-items/', views.MenuItemView.as_view()),\n    path('menu-items/<int:pk>/', views.SingleMenuItemView.as_view()),\n    path('api-token-auth/', obtain_auth_token)\n]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="restaurant/views.py"',title:'"restaurant/views.py"'},'from django.shortcuts import render\nfrom rest_framework.views import APIView\nfrom rest_framework.response import Response\nfrom .models import Booking, MenuItem\nfrom .serializers import BookingSerializer, MenuItemSerializer\nfrom rest_framework import generics\nfrom rest_framework import viewsets\nfrom rest_framework.permissions import IsAuthenticated\n# Create your views here.\n\n\ndef index(request):\n    return render(request, "index.html")\n\n\n# class bookingView(APIView):\n#     def get(self, request):\n#         items = Booking.objects.all()\n#         seriallizer = BookingSerializer(items, many=True)\n#         return Response(seriallizer.data)  # Return JSON\n\n#     def post(self, request):\n#         serializer = MenuItemSerializer(data=request.data)\n\n#         if serializer.is_valid():\n#             serializer.save()\n#             return Response({"status": "success", "data": serializer.data})\n\n\nclass MenuItemView(generics.CreateAPIView):\n    queryset = MenuItem.objects.all()\n    serializer_class = MenuItemSerializer\n\n\nclass SingleMenuItemView(generics.RetrieveUpdateDestroyAPIView):\n    queryset = MenuItem.objects.all()\n    serializer_class = MenuItemSerializer\n\n\nclass BookingViewSet(viewsets.ModelViewSet):\n    queryset = Booking.objects.all()\n    serializer_class = BookingSerializer\n    permission_classes = [IsAuthenticated]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="restaurant/serializers.py"',title:'"restaurant/serializers.py"'},"from .models import Booking, MenuItem\nfrom rest_framework import serializers\nfrom django.contrib.auth.models import User\n\n\nclass BookingSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Booking\n        fields = \"__all__\"\n\n\nclass MenuItemSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = MenuItem\n        fields = \"__all__\"\n\n\nclass UserSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = User\n        fields = ['url', 'username', 'email', 'groups']\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="restaurant/models.py"',title:'"restaurant/models.py"'},"from django.db import models\n\n# Create your models here.\n\n\nclass Booking(models.Model):\n    name = models.CharField(max_length=255)\n    no_of_guests = models.IntegerField()\n    booking_date = models.DateTimeField()\n\n    def __str__(self) -> str:\n        return self.name\n\n\nclass MenuItem(models.Model):\n    title = models.CharField(max_length=255)\n    price = models.DecimalField(max_digits=10, decimal_places=2)\n    inventory = models.IntegerField()\n")),(0,i.kt)("h5",{id:"little-lemon-api"},"Little Lemon API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="littlelemonapi/models.py"',title:'"littlelemonapi/models.py"'},"from django.db import models\n\n# Create your models here.\n\n\nclass MenuItem(models.Model):\n    title = models.CharField(max_length=255)\n    price = models.DecimalField(max_digits=6, decimal_places=2)\n    inventory = models.SmallIntegerField()\n\n    def get_item(self):\n        return f'{self.title} : {str(self.price)}'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="littlelemonapi/serializers.py"',title:'"littlelemonapi/serializers.py"'},'from rest_framework import serializers\nfrom .models import MenuItem\n\n\nclass MenuItemSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = MenuItem\n        fields = "__all__"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="littlelemonapi/urls.py"',title:'"littlelemonapi/urls.py"'},"from django.urls import path\nfrom . import views\nfrom rest_framework.authtoken.views import obtain_auth_token\n\n\nurlpatterns = [\n    path('menu-items/', views.MenuItemView.as_view()),\n    path('menu-items/<int:pk>/', views.SingleMenuItemView.as_view()),\n    path('message/', views.msg),\n    path('api-token-auth/', obtain_auth_token),\n]\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="littlelemonapi/views.py"',title:'"littlelemonapi/views.py"'},'from django.shortcuts import render\nfrom rest_framework import generics\nfrom .models import MenuItem\nfrom .serializers import MenuItemSerializer\nfrom rest_framework.decorators import api_view, permission_classes\nfrom rest_framework.permissions import IsAuthenticated\nfrom rest_framework.response import Response\n\n# Create your views here.\n\n\nclass MenuItemView(generics.ListCreateAPIView):\n    permission_classes = [IsAuthenticated]\n    queryset = MenuItem.objects.all()\n    serializer_class = MenuItemSerializer\n\n\nclass SingleMenuItemView(generics.RetrieveUpdateDestroyAPIView):\n    queryset = MenuItem.objects.all()\n    serializer_class = MenuItemSerializer\n\n\n@api_view()\n@permission_classes([IsAuthenticated])\ndef msg(request):\n    return Response({"message": "This view is protected"})\n')))}c.isMDXComponent=!0}}]);