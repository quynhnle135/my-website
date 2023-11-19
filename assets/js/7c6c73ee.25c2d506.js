"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7333],{3777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=t(5893),s=t(1151);const i={title:"Aug 27",description:"Sun, Aug 27"},a=void 0,o={id:"learning-journal/2023/August/aug_27_23",title:"Aug 27",description:"Sun, Aug 27",source:"@site/docs/learning-journal/2023/August/aug_27_23.md",sourceDirName:"learning-journal/2023/August",slug:"/learning-journal/2023/August/aug_27_23",permalink:"/my-website/docs/learning-journal/2023/August/aug_27_23",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Aug 27",description:"Sun, Aug 27"},sidebar:"tutorialSidebar",previous:{title:"Aug 26",permalink:"/my-website/docs/learning-journal/2023/August/aug_26_23"},next:{title:"Aug 28",permalink:"/my-website/docs/learning-journal/2023/August/aug_28_23"}},l={},m=[{value:"Finish The Full Stack course",id:"finish-the-full-stack-course",level:4},{value:"Working on Back-End Developer Capstone project",id:"working-on-back-end-developer-capstone-project",level:4},{value:"Project set-up",id:"project-set-up",level:5},{value:"Restaurant app",id:"restaurant-app",level:5},{value:"Little Lemon API",id:"little-lemon-api",level:5}];function u(e){const n={code:"code",h4:"h4",h5:"h5",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h4,{id:"finish-the-full-stack-course",children:"Finish The Full Stack course"}),"\n",(0,r.jsx)(n.h4,{id:"working-on-back-end-developer-capstone-project",children:"Working on Back-End Developer Capstone project"}),"\n",(0,r.jsx)(n.h5,{id:"project-set-up",children:"Project set-up"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="littlelemon/settings.py"',children:"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'restaurant.apps.RestaurantConfig',\n    'LittleLemonAPI',\n    'rest_framework',\n    'rest_framework.authtoken',\n    'djoser',\n]\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="littlelemon/urls.py"',children:"from django.contrib import admin\nfrom django.urls import path, include\nfrom rest_framework.routers import DefaultRouter\nfrom restaurant.views import BookingViewSet\n\nrouter = DefaultRouter()\nrouter.register(r'booking', BookingViewSet)\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('restaurant/', include('restaurant.urls')),\n    path('restaurant/booking/', include(router.urls)),\n    path('api/', include('LittleLemonAPI.urls')),\n    path('auth/', include('djoser.urls')),\n    path('auth/', include('djoser.urls.authtoken')),\n]\n"})}),"\n",(0,r.jsx)(n.h5,{id:"restaurant-app",children:"Restaurant app"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="restaurant/urls.py"',children:"from django.urls import path\nfrom . import views\nfrom rest_framework.authtoken.views import obtain_auth_token\n\n\nurlpatterns = [\n    path('', views.index, name=\"home\"),\n    path('menu-items/', views.MenuItemView.as_view()),\n    path('menu-items/<int:pk>/', views.SingleMenuItemView.as_view()),\n    path('api-token-auth/', obtain_auth_token)\n]\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="restaurant/views.py"',children:'from django.shortcuts import render\nfrom rest_framework.views import APIView\nfrom rest_framework.response import Response\nfrom .models import Booking, MenuItem\nfrom .serializers import BookingSerializer, MenuItemSerializer\nfrom rest_framework import generics\nfrom rest_framework import viewsets\nfrom rest_framework.permissions import IsAuthenticated\n# Create your views here.\n\n\ndef index(request):\n    return render(request, "index.html")\n\n\n# class bookingView(APIView):\n#     def get(self, request):\n#         items = Booking.objects.all()\n#         seriallizer = BookingSerializer(items, many=True)\n#         return Response(seriallizer.data)  # Return JSON\n\n#     def post(self, request):\n#         serializer = MenuItemSerializer(data=request.data)\n\n#         if serializer.is_valid():\n#             serializer.save()\n#             return Response({"status": "success", "data": serializer.data})\n\n\nclass MenuItemView(generics.CreateAPIView):\n    queryset = MenuItem.objects.all()\n    serializer_class = MenuItemSerializer\n\n\nclass SingleMenuItemView(generics.RetrieveUpdateDestroyAPIView):\n    queryset = MenuItem.objects.all()\n    serializer_class = MenuItemSerializer\n\n\nclass BookingViewSet(viewsets.ModelViewSet):\n    queryset = Booking.objects.all()\n    serializer_class = BookingSerializer\n    permission_classes = [IsAuthenticated]\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="restaurant/serializers.py"',children:"from .models import Booking, MenuItem\nfrom rest_framework import serializers\nfrom django.contrib.auth.models import User\n\n\nclass BookingSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Booking\n        fields = \"__all__\"\n\n\nclass MenuItemSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = MenuItem\n        fields = \"__all__\"\n\n\nclass UserSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = User\n        fields = ['url', 'username', 'email', 'groups']\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="restaurant/models.py"',children:"from django.db import models\n\n# Create your models here.\n\n\nclass Booking(models.Model):\n    name = models.CharField(max_length=255)\n    no_of_guests = models.IntegerField()\n    booking_date = models.DateTimeField()\n\n    def __str__(self) -> str:\n        return self.name\n\n\nclass MenuItem(models.Model):\n    title = models.CharField(max_length=255)\n    price = models.DecimalField(max_digits=10, decimal_places=2)\n    inventory = models.IntegerField()\n"})}),"\n",(0,r.jsx)(n.h5,{id:"little-lemon-api",children:"Little Lemon API"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="littlelemonapi/models.py"',children:"from django.db import models\n\n# Create your models here.\n\n\nclass MenuItem(models.Model):\n    title = models.CharField(max_length=255)\n    price = models.DecimalField(max_digits=6, decimal_places=2)\n    inventory = models.SmallIntegerField()\n\n    def get_item(self):\n        return f'{self.title} : {str(self.price)}'\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="littlelemonapi/serializers.py"',children:'from rest_framework import serializers\nfrom .models import MenuItem\n\n\nclass MenuItemSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = MenuItem\n        fields = "__all__"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="littlelemonapi/urls.py"',children:"from django.urls import path\nfrom . import views\nfrom rest_framework.authtoken.views import obtain_auth_token\n\n\nurlpatterns = [\n    path('menu-items/', views.MenuItemView.as_view()),\n    path('menu-items/<int:pk>/', views.SingleMenuItemView.as_view()),\n    path('message/', views.msg),\n    path('api-token-auth/', obtain_auth_token),\n]\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="littlelemonapi/views.py"',children:'from django.shortcuts import render\nfrom rest_framework import generics\nfrom .models import MenuItem\nfrom .serializers import MenuItemSerializer\nfrom rest_framework.decorators import api_view, permission_classes\nfrom rest_framework.permissions import IsAuthenticated\nfrom rest_framework.response import Response\n\n# Create your views here.\n\n\nclass MenuItemView(generics.ListCreateAPIView):\n    permission_classes = [IsAuthenticated]\n    queryset = MenuItem.objects.all()\n    serializer_class = MenuItemSerializer\n\n\nclass SingleMenuItemView(generics.RetrieveUpdateDestroyAPIView):\n    queryset = MenuItem.objects.all()\n    serializer_class = MenuItemSerializer\n\n\n@api_view()\n@permission_classes([IsAuthenticated])\ndef msg(request):\n    return Response({"message": "This view is protected"})\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(7294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);