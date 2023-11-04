"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={title:"Oct 31"},i=void 0,l={unversionedId:"learning-journal/2023/October/oct_31_23",id:"learning-journal/2023/October/oct_31_23",title:"Oct 31",description:"What I did today:",source:"@site/docs/learning-journal/2023/10 - October/oct_31_23.md",sourceDirName:"learning-journal/2023/10 - October",slug:"/learning-journal/2023/October/oct_31_23",permalink:"/my-website/docs/learning-journal/2023/October/oct_31_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Oct 31"},sidebar:"tutorialSidebar",previous:{title:"Oct 30",permalink:"/my-website/docs/learning-journal/2023/October/oct_30_23"},next:{title:"Daily Practice",permalink:"/my-website/docs/category/daily-practice"}},o={},p=[{value:"What I did today:",id:"what-i-did-today",level:3},{value:"Expense Management Project",id:"expense-management-project",level:4},{value:"Django app (just show the views.py file because it&#39;s the most important)",id:"django-app-just-show-the-viewspy-file-because-its-the-most-important",level:5},{value:"Expense API",id:"expense-api",level:5}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"what-i-did-today"},"What I did today:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Leetcode 75 - Binary Tree (stack, queue, and binary tree)"),(0,a.kt)("li",{parentName:"ul"},"Reviewed and updated Expense Management project")),(0,a.kt)("h4",{id:"expense-management-project"},"Expense Management Project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Built simple Django having CRUD functionalities + search function"),(0,a.kt)("li",{parentName:"ul"},"Built simple API having CRUD system as well"),(0,a.kt)("li",{parentName:"ul"},"TODO: filter/order views for API, add basic style, add README")),(0,a.kt)("h5",{id:"django-app-just-show-the-viewspy-file-because-its-the-most-important"},"Django app (just show the views.py file because it's the most important)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="expense_manager/views.py"',title:'"expense_manager/views.py"'},'\nfrom django.views import generic\nfrom .models import Expense\nfrom django.urls import reverse_lazy\n\n\n# Create your views here.\nclass ExpenseListView(generic.ListView):\n    model = Expense\n    context_object_name = "expenses"\n\n    def get_queryset(self):\n        queryset = super().get_queryset()\n\n        card_name = self.request.GET.get("card_name")\n        title = self.request.GET.get("title")\n        expense_date = self.request.GET.get("expense_date")\n        category = self.request.GET.get("category")\n        note = self.request.GET.get("note")\n\n        if card_name:\n            queryset = queryset.filter(card_name__icontains=card_name)\n        if title:\n            queryset = queryset.filter(title__icontains=title)\n        if expense_date:\n            queryset = queryset.filter(expense_date__date=expense_date)\n        if category:\n            queryset = queryset.filter(category__icontains=category)\n        if note:\n            queryset = queryset.filter(note__icontains=note)\n\n        return queryset\n\n    def get_context_data(self, *, object_list=None, **kwargs):\n        context = super().get_context_data(**kwargs)\n        context["count"] = Expense.objects.count()\n\n        return context\n\n\nclass ExpenseDetailView(generic.DetailView):\n    model = Expense\n\n\nclass ExpenseCreateView(generic.CreateView):\n    model = Expense\n    fields = "__all__"\n    success_url = reverse_lazy("expense-list")\n\n\nclass ExpenseDeleteView(generic.DeleteView):\n    model = Expense\n    fields = "__all__"\n    success_url = reverse_lazy("expense-list")\n\n\nclass ExpenseUpdateView(generic.UpdateView):\n    model = Expense\n    fields = "__all__"\n    success_url = reverse_lazy("expense-list")\n    template_name = "expense_manager/expense_update_form.html"\n\n\n')),(0,a.kt)("h5",{id:"expense-api"},"Expense API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="expense_api/views.py"',title:'"expense_api/views.py"'},"\nfrom rest_framework import generics\nfrom .serializers import ExpenseSerializer\nfrom expense_manager.models import Expense\nfrom django_filters import rest_framework as filters\n\n\n# Create your views here.\n# class ExpenseFilter(filters.FilterSet):\n\nclass ExpenseListAPIView(generics.ListAPIView):\n    queryset = Expense.objects.all()\n    serializer_class = ExpenseSerializer\n\n\nclass ExpenseRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):\n    queryset = Expense.objects.all()\n    serializer_class = ExpenseSerializer\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="expense_api/urls.py"',title:'"expense_api/urls.py"'},'\nfrom django.urls import path\nfrom . import views\n\n\nurlpatterns = [\n    path("", views.ExpenseListAPIView.as_view()),\n    path("<int:pk>/", views.ExpenseRetrieveUpdateDestroyView.as_view())\n]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="expense_api/serializers.py"',title:'"expense_api/serializers.py"'},'from rest_framework import serializers\nfrom expense_manager.models import Expense\n\n\nclass ExpenseSerializer(serializers.ModelSerializer):\n    card_name = serializers.CharField(max_length=255)\n    title = serializers.CharField(max_length=255)\n    expense_date = serializers.DateField()\n    category = serializers.CharField(max_length=255)\n    note = serializers.CharField()\n\n    class Meta:\n        model = Expense\n        fields = "__all__"\n\n')))}m.isMDXComponent=!0}}]);