"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1573],{3546:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(5893),r=t(1151);const i={title:"Oct 31"},a=void 0,l={id:"learning-journal/2023/October/oct_31_23",title:"Oct 31",description:"What I did today:",source:"@site/docs/learning-journal/2023/October/oct_31_23.md",sourceDirName:"learning-journal/2023/October",slug:"/learning-journal/2023/October/oct_31_23",permalink:"/my-website/docs/learning-journal/2023/October/oct_31_23",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Oct 31"},sidebar:"tutorialSidebar",previous:{title:"Oct 30",permalink:"/my-website/docs/learning-journal/2023/October/oct_30_23"},next:{title:"Daily Practice",permalink:"/my-website/docs/category/daily-practice"}},o={},c=[{value:"What I did today:",id:"what-i-did-today",level:3},{value:"Expense Management Project",id:"expense-management-project",level:4},{value:"Django app (just show the views.py file because it&#39;s the most important)",id:"django-app-just-show-the-viewspy-file-because-its-the-most-important",level:5},{value:"Expense API",id:"expense-api",level:5}];function p(e){const n={code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"what-i-did-today",children:"What I did today:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Leetcode 75 - Binary Tree (stack, queue, and binary tree)"}),"\n",(0,s.jsx)(n.li,{children:"Reviewed and updated Expense Management project"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"expense-management-project",children:"Expense Management Project"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Built simple Django having CRUD functionalities + search function"}),"\n",(0,s.jsx)(n.li,{children:"Built simple API having CRUD system as well"}),"\n",(0,s.jsx)(n.li,{children:"TODO: filter/order views for API, add basic style, add README"}),"\n"]}),"\n",(0,s.jsx)(n.h5,{id:"django-app-just-show-the-viewspy-file-because-its-the-most-important",children:"Django app (just show the views.py file because it's the most important)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="expense_manager/views.py"',children:'\nfrom django.views import generic\nfrom .models import Expense\nfrom django.urls import reverse_lazy\n\n\n# Create your views here.\nclass ExpenseListView(generic.ListView):\n    model = Expense\n    context_object_name = "expenses"\n\n    def get_queryset(self):\n        queryset = super().get_queryset()\n\n        card_name = self.request.GET.get("card_name")\n        title = self.request.GET.get("title")\n        expense_date = self.request.GET.get("expense_date")\n        category = self.request.GET.get("category")\n        note = self.request.GET.get("note")\n\n        if card_name:\n            queryset = queryset.filter(card_name__icontains=card_name)\n        if title:\n            queryset = queryset.filter(title__icontains=title)\n        if expense_date:\n            queryset = queryset.filter(expense_date__date=expense_date)\n        if category:\n            queryset = queryset.filter(category__icontains=category)\n        if note:\n            queryset = queryset.filter(note__icontains=note)\n\n        return queryset\n\n    def get_context_data(self, *, object_list=None, **kwargs):\n        context = super().get_context_data(**kwargs)\n        context["count"] = Expense.objects.count()\n\n        return context\n\n\nclass ExpenseDetailView(generic.DetailView):\n    model = Expense\n\n\nclass ExpenseCreateView(generic.CreateView):\n    model = Expense\n    fields = "__all__"\n    success_url = reverse_lazy("expense-list")\n\n\nclass ExpenseDeleteView(generic.DeleteView):\n    model = Expense\n    fields = "__all__"\n    success_url = reverse_lazy("expense-list")\n\n\nclass ExpenseUpdateView(generic.UpdateView):\n    model = Expense\n    fields = "__all__"\n    success_url = reverse_lazy("expense-list")\n    template_name = "expense_manager/expense_update_form.html"\n\n\n'})}),"\n",(0,s.jsx)(n.h5,{id:"expense-api",children:"Expense API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="expense_api/views.py"',children:"\nfrom rest_framework import generics\nfrom .serializers import ExpenseSerializer\nfrom expense_manager.models import Expense\nfrom django_filters import rest_framework as filters\n\n\n# Create your views here.\n# class ExpenseFilter(filters.FilterSet):\n\nclass ExpenseListAPIView(generics.ListAPIView):\n    queryset = Expense.objects.all()\n    serializer_class = ExpenseSerializer\n\n\nclass ExpenseRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):\n    queryset = Expense.objects.all()\n    serializer_class = ExpenseSerializer\n\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="expense_api/urls.py"',children:'\nfrom django.urls import path\nfrom . import views\n\n\nurlpatterns = [\n    path("", views.ExpenseListAPIView.as_view()),\n    path("<int:pk>/", views.ExpenseRetrieveUpdateDestroyView.as_view())\n]\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="expense_api/serializers.py"',children:'from rest_framework import serializers\nfrom expense_manager.models import Expense\n\n\nclass ExpenseSerializer(serializers.ModelSerializer):\n    card_name = serializers.CharField(max_length=255)\n    title = serializers.CharField(max_length=255)\n    expense_date = serializers.DateField()\n    category = serializers.CharField(max_length=255)\n    note = serializers.CharField()\n\n    class Meta:\n        model = Expense\n        fields = "__all__"\n\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(7294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);