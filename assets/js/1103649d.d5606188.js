"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3965],{9005:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=t(5893),i=t(1151);const a={title:"Dec 01, 2023"},r="Coding Journal: Dec 01, 2023",o={id:"learning-journal/2023/December/20231201",title:"Dec 01, 2023",description:"- Installed Daily.dev as my default browser.",source:"@site/docs/learning-journal/2023/December/20231201.md",sourceDirName:"learning-journal/2023/December",slug:"/learning-journal/2023/December/20231201",permalink:"/docs/learning-journal/2023/December/20231201",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Dec 01, 2023"},sidebar:"tutorialSidebar",previous:{title:"December",permalink:"/docs/category/december"},next:{title:"Dec 02, 2023",permalink:"/docs/learning-journal/2023/December/20231202"}},l={},d=[];function c(e){const n={a:"a",code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"coding-journal-dec-01-2023",children:"Coding Journal: Dec 01, 2023"}),"\n",(0,s.jsx)(n.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Installed Daily.dev as my default browser."}),"\n",(0,s.jsx)(n.li,{children:"Bought domain quinnle.io and updated my website to this new domain."}),"\n",(0,s.jsxs)(n.li,{children:['Read and summarized "How to use Marketing Techniques to Build A Better Resume". You can check it ',(0,s.jsx)(n.a,{href:"https://quinnle.io/docs/tech-blogs/notes/post_1",children:"here"})]}),"\n",(0,s.jsxs)(n.li,{children:["Created section ",(0,s.jsx)(n.a,{href:"https://quinnle.io/docs/category/research-topics",children:"Reseaseach Topics"}),", inside this section will have ",(0,s.jsx)(n.a,{href:"https://quinnle.io/docs/research-topics/communications/first_communication_post",children:"Communication"})," as sub-section."]}),"\n",(0,s.jsx)(n.li,{children:"Created section Trouble Shooting to take notes when I had to solve my problems and coding or making projects."}),"\n",(0,s.jsxs)(n.li,{children:["Added Infoq, Mostly Python, and The Engineering Manager in Techblogs Archive, you can check it ",(0,s.jsx)(n.a,{href:"https://quinnle.io/docs/tech-blogs/archive",children:"here"})," (last three sentences)."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://quinnle.io/docs/research-topics/static_site_generator",children:"Static Site Generators research"})}),"\n",(0,s.jsxs)(n.li,{children:["Wrote ",(0,s.jsx)(n.a,{href:"https://quinnle.io/docs/troubleshooting/custom_domain",children:"Custom Domain post"})," in Troubleshooting to take notes how I updated my website to the new domain."]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"2-questions-i-have",children:"2. Questions I Have"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How can I make my app only return the data of current logged-in user? Because it's showing all data that all accounts have been adding to the database."}),"\n",(0,s.jsx)(n.li,{children:"How can I create a search function in my app?"}),"\n",(0,s.jsx)(n.li,{children:"What's the difference between get_querryset and get_context_data in Django?"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Added login, logout, and register functionalities to the project. I have to make sure that user cannot view expense or update them without logging in first."}),"\n",(0,s.jsx)(n.li,{children:"There are several ways to write UserRegister views and I got really confused at first."}),"\n",(0,s.jsx)(n.li,{children:"There are many different ways to build an API using Django REST Framework. I use generic API views and the framework mostly handles everything for me, which is very magical but confusing to me as well."}),"\n",(0,s.jsx)(n.li,{children:"Planned to expand my Expense Manager project: calculate and display the total amount in the head, add search function which will return expense records based on card, category, note, date, amount, etc."}),"\n",(0,s.jsx)(n.li,{children:"Updated CSS"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,s.jsx)(n.p,{children:"Set up model"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="expense_manager_app/models.py"',children:'from django.db import models\nfrom django.contrib.auth.models import User\nfrom django.utils import timezone\n\n\n# Create your models here.\nclass Expense(models.Model):\n    user = models.ForeignKey(User, on_delete=models.CASCADE)\n    card = models.CharField(max_length=255)\n    category = models.CharField(max_length=255)\n    expense_date = models.DateField(default=timezone.now)\n    amount = models.DecimalField(max_digits=5, decimal_places=2)\n    notes = models.TextField(null=True, blank=True)\n\n    def __str__(self):\n        return f"{self.card} -  {self.expense_date} - {self.amount}"\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="expense_manager_app/views.py"',children:'from django.contrib.auth import login\nfrom django.views import generic\nfrom .models import Expense\nfrom django.urls import reverse_lazy\nfrom django.contrib.auth.mixins import LoginRequiredMixin\nfrom django.contrib.auth.views import FormView\nfrom . import forms\nfrom django.db.models import Q\nfrom django.db.models import Sum\n\n\nclass UserRegisterView(FormView):\n    form_class = forms.RegisterForm\n    template_name = "expense_manager_app/register.html"\n    redirect_authenticated_user = True\n    success_url = reverse_lazy("login")\n\n    def form_valid(self, form):\n        user = form.save()\n        if user is not None:\n            login(self.request, user)\n        return super().form_valid(form)\n\n\nclass ExpenseListView(LoginRequiredMixin, generic.ListView):\n    login_url = "/login/"\n    model = Expense\n    context_object_name = "expenses"\n    template_name = "expense_manager_app/expense_list.html"\n\n\nclass ExpenseSearchView(LoginRequiredMixin, generic.ListView):\n    login_url = "/login/"\n    model = Expense\n    template_name = "expense_manager_app/expense_search_list.html"\n    context_object_name = "expenses"\n\n\nclass ExpenseDetailView(LoginRequiredMixin, generic.DetailView):\n    login_url = "/login/"\n    model = Expense\n    context_object_name = "expense"\n    template_name = "expense_manager_app/expense_detail.html"\n\n\nclass ExpenseCreateView(LoginRequiredMixin, generic.CreateView):\n    login_url = "/login/"\n    model = Expense\n    fields = ["card", "category", "expense_date", "amount", "notes"]\n    template_name = "expense_manager_app/expense_form.html"\n    success_url = reverse_lazy("expense-list")\n\n    def form_valid(self, form):\n        form.instance.user = self.request.user\n        form.save()\n        return super().form_valid(form)\n\n\nclass ExpenseUpdateView(LoginRequiredMixin, generic.UpdateView):\n    login_url = "/login/"\n    model = Expense\n    fields = ["card", "category", "expense_date", "amount", "notes"]\n    template_name = "expense_manager_app/expense_update_form.html"\n    success_url = reverse_lazy("expense-list")\n\n\nclass ExpenseDeleteView(LoginRequiredMixin, generic.DeleteView):\n    login_url = "/login/"\n    model = Expense\n    template_name = "expense_manager_app/expense_confirm_delete.html"\n    success_url = reverse_lazy("expense-list")\n\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="expense_manager_app/urls.py"',children:'from django.urls import path\nfrom . import views\nfrom django.contrib.auth import views as auth_views\n\nurlpatterns = [\n    # User login/logout/register functions\n    path("register/", views.UserRegisterView.as_view(), name="register"),\n    path("login/", auth_views.LoginView.as_view(template_name="expense_manager_app/login.html", next_page="expense-list"), name="login"),\n    path("logout/", auth_views.LogoutView.as_view(next_page="login"), name="logout"),\n    # Expense CRUD functions\n    path("", views.ExpenseListView.as_view(), name="expense-list"),\n    path("<int:pk>/", views.ExpenseDetailView.as_view(), name="expense-detail"),\n    path("add/", views.ExpenseCreateView.as_view(), name="expense-add"),\n    path("update/<int:pk>/", views.ExpenseUpdateView.as_view(), name="expense-update"),\n    path("delete/<int:pk>/", views.ExpenseDeleteView.as_view(), name="expense-delete")\n]\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["I also created templates for each views, which you can view them ",(0,s.jsx)(n.a,{href:"https://github.com/quynhnle135/expense-manager/tree/main/expense_manager_app/templates/expense_manager_app",children:"here"})]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);