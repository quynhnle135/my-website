"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8971],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,g=c["".concat(o,".").concat(u)]||c[u]||d[u]||i;return t?r.createElement(g,s(s({ref:n},m),{},{components:t})):r.createElement(g,s({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={title:"Sep 13",description:"Wed, Sep 13"},s=void 0,l={unversionedId:"coding-journal/2023/September/sep_13_23",id:"coding-journal/2023/September/sep_13_23",title:"Sep 13",description:"Wed, Sep 13",source:"@site/docs/coding-journal/2023/September/sep_13_23.md",sourceDirName:"coding-journal/2023/September",slug:"/coding-journal/2023/September/sep_13_23",permalink:"/my-website/docs/coding-journal/2023/September/sep_13_23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding-journal/2023/September/sep_13_23.md",tags:[],version:"current",frontMatter:{title:"Sep 13",description:"Wed, Sep 13"},sidebar:"tutorialSidebar",previous:{title:"Sep 12",permalink:"/my-website/docs/coding-journal/2023/September/sep_12_23"},next:{title:"Sep 16",permalink:"/my-website/docs/coding-journal/2023/September/sep_16_23"}},o={},p=[{value:"Working on the Expense Management API",id:"working-on-the-expense-management-api",level:3},{value:"Project level (expense_management)",id:"project-level-expense_management",level:4},{value:"App level (expense_api)",id:"app-level-expense_api",level:4},{value:"Notes",id:"notes",level:3}],m={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"working-on-the-expense-management-api"},"Working on the Expense Management API"),(0,a.kt)("h4",{id:"project-level-expense_management"},"Project level (expense_management)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="expense_management/settings.py"',title:'"expense_management/settings.py"'},"INSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'expense_api.apps.ExpenseApiConfig',  # new\n    'rest_framework',  # new\n    'django_filters',  # new\n]\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="expense_management.py/urls.py"',title:'"expense_management.py/urls.py"'},"from django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('api/', include('expense_api.urls')),\n]\n")),(0,a.kt)("h4",{id:"app-level-expense_api"},"App level (expense_api)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="expense_api/models.py"',title:'"expense_api/models.py"'},"class Expense(models.Model):\n    card_name = models.CharField(max_length=255)\n    title = models.CharField(max_length=255)\n    expense_date = models.DateField()\n    amount = models.DecimalField(max_digits=6, decimal_places=2)\n    category = models.CharField(max_length=255)\n    note = models.TextField(null=True, blank=True)\n    expense_type = models.CharField(\n        max_length=20,\n        choices=[('business', 'Business'), ('personal', 'Personal')],\n        default='personal'\n    )\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="expense_api/serializers.py"',title:'"expense_api/serializers.py"'},"class ExpenseSerializer(serializers.ModelSerializer):\n    tag_list = serializers.CharField(write_only=True, required=False)\n\n    class Meta:\n        model = Expense\n        fields = '__all__'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="expense_api/urls.py"',title:'"expense_api/urls.py"'},"from django.urls import path\nfrom . import views\n\n\nurlpatterns = [\n    path('', views.ExpenseListCreateView.as_view()),\n    path('<int:pk>/', views.ExpenseRetrieveUpdateDestroy.as_view()),\n]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="expense_api/views.py"',title:'"expense_api/views.py"'},"from django_filters import rest_framework as filters\nfrom rest_framework import generics\nfrom .models import Expense\nfrom .serializers import ExpenseSerializer\n\n\n# Create your views here.\nclass ExpenseFilter(filters.FilterSet):\n    min_amount = filters.NumberFilter(field_name='amount', lookup_expr='gte')\n    max_amount = filters.NumberFilter(field_name='amount', lookup_expr='lte')\n    category = filters.CharFilter(field_name='category', lookup_expr='iexact')\n    card_name = filters.CharFilter(field_name='card_name', lookup_expr='iexact')\n    date_range = filters.DateFromToRangeFilter(field_name='expense_date')\n\n    class Meta:\n        model = Expense\n        fields = '__all__'\n\n\nclass ExpenseListCreateView(generics.ListCreateAPIView):\n    queryset = Expense.objects.all()\n    serializer_class = ExpenseSerializer\n    filterset_class = ExpenseFilter\n\n\nclass ExpenseRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):\n    queryset = Expense.objects.all()\n    serializer_class = ExpenseSerializer\n")),(0,a.kt)("h3",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I still need to work on adding tags features since I had difficulty creating model, serializer, and view for tag."),(0,a.kt)("li",{parentName:"ul"},"The most interesting feature I've worked on in this project is filtering. User can either choose to view expense by selecting min/max amount, category, card name, or transaction date")))}d.isMDXComponent=!0}}]);