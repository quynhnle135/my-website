"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7028],{7781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(5893),s=t(1151);const r={title:"Pythonic Programming Tips (1)"},a="Pythonic Programming Tips (1)",l={id:"tech-blogs/pythonic-programming-tips/post_1",title:"Pythonic Programming Tips (1)",description:"Use quotes of all sorts",source:"@site/docs/tech-blogs/pythonic-programming-tips/post_1.md",sourceDirName:"tech-blogs/pythonic-programming-tips",slug:"/tech-blogs/pythonic-programming-tips/post_1",permalink:"/docs/tech-blogs/pythonic-programming-tips/post_1",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Pythonic Programming Tips (1)"},sidebar:"tutorialSidebar",previous:{title:"Pythonic Programming Tips",permalink:"/docs/category/pythonic-programming-tips"},next:{title:"Book Reviews",permalink:"/docs/category/book-reviews"}},o={},d=[{value:"Use quotes of all sorts",id:"use-quotes-of-all-sorts",level:2},{value:"Keep letter case consistent",id:"keep-letter-case-consistent",level:2},{value:"Self-document the code",id:"self-document-the-code",level:2},{value:"Let input() speak for itself",id:"let-input-speak-for-itself",level:2},{value:"Mark dummy variables",id:"mark-dummy-variables",level:2},{value:"Distinguish parameters and arguments",id:"distinguish-parameters-and-arguments",level:2},{value:"Avoid &quot;magic&quot; values",id:"avoid-magic-values",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"pythonic-programming-tips-1",children:"Pythonic Programming Tips (1)"}),"\n",(0,i.jsx)(n.h1,{id:"quotes-and-letter-case-related-tips",children:"Quotes and Letter Case Related Tips"}),"\n",(0,i.jsx)(n.h2,{id:"use-quotes-of-all-sorts",children:"Use quotes of all sorts"}),"\n",(0,i.jsx)(n.p,{children:"There are four types of quotation marks:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"' '"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'" "'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"''' '''"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'""" """'})}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"print(\"Mary had a little lamb\")\nprint('Mary had a little lamb')\nprint('''Mary had a little lamb''')\nprint(\"\"\"Mary had a little lamb\"\"\")\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:">>> Output:\nMary had a little lamb\nMary had a little lamb\nMary had a little lamb\nMary had a little lamb\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u2192 ",(0,i.jsx)("b",{children:(0,i.jsx)("i",{children:"There's no difference between single and double quotation marks in Python"})})]}),"\n",(0,i.jsx)(n.p,{children:"However, triple-single and triple-double quotation marks define multiline strings. They can include literal line breaks."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# We can print multiple lines using triple-quotes\nprint("""Mary had\na little lamb""")\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:">>> Output:\nMary had\na little lamb\n"})}),"\n",(0,i.jsx)(n.h2,{id:"keep-letter-case-consistent",children:"Keep letter case consistent"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Any Python identifier must start with a letter or an underscore and contain only letters, digits, or underscores."}),"\n",(0,i.jsx)(n.li,{children:"Identifiers should be short and descriptive."}),"\n",(0,i.jsx)(n.li,{children:"Use all uppercase letters for constant varibles, although Python doesn't have constant as such."}),"\n",(0,i.jsx)(n.li,{children:"If necessary, mixedIdentifiers for variables, functions, and modules are acceptable."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Use uppercase letters for constants\nPI = 3.14159  # Please use math.pi instead!\nprint(PI)\n# For pi number, we can just import math module instead\nprint(math.pi)\n\n# Use identifiers in lowercase, connected with underscores\nmy_cat_s_age = 11\n_var = "I do not care"\nprint(f"My cat\'s age: {my_cat_s_age}")\nprint(f"_var: {_var}")\n# If necessary, mixedCase identifiers for variables, functions and modules\nmyCatsAge = 10\nprint(f"myCatsAge: {myCatsAge}")\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:">>> Output:\n3.14159\n3.141592653589793\nMy cat's age: 11\n_var: I do not care\nmyCatsAge: 10\nResult: 28\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Capitalized words are used in classes"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Use capitalized words without spaces for classes\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\n\nclass LinkedList:\n    def __init__(self, head=None):\n        self.head = head\n\n    def print_list(self):\n        node = self.head\n        while node.next:\n            print(node.val, end=" -> ")\n            node = node.next\n        print(node.val, end=" -> null")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"self-document-the-code",children:"Self-document the code"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The description part of self-documentation is called a docstring."}),"\n",(0,i.jsx)(n.li,{children:"A docstring is implemented as a string literal as the first statement of the objects' body"}),"\n",(0,i.jsx)(n.li,{children:"A docstring should be descriptive and limited to a single line"}),"\n",(0,i.jsx)(n.li,{children:"Docstrings are used to describe the purpose of objects while comments are used for explaning the code lines in details"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def len(obj) -> int:\n  'Return the number of items in a container.' \n  # Do something\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"input-varibales-and-enumeration-related-tips",children:"Input, Varibales, and Enumeration Related Tips"}),"\n",(0,i.jsx)(n.h2,{id:"let-input-speak-for-itself",children:"Let input() speak for itself"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A prompt is a printed invitation to enter some missing information."}),"\n",(0,i.jsx)(n.li,{children:"The prompt should explain in a langluage suitable to the expected user, like what the user should input and how."}),"\n",(0,i.jsxs)(n.li,{children:["We can use the ",(0,i.jsx)(n.code,{children:"print()"})," function to display the prompt, follow by ",(0,i.jsx)(n.code,{children:"input()"})," to collect the input.\n\u2192 ",(0,i.jsx)("b",{children:(0,i.jsxs)("i",{children:["However, the best way is to let the ",(0,i.jsx)(n.code,{children:"input()"})," speak for itself."]})})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Practice input()\nname = input("Enter your name: ").strip()\nyear = input(f"What is your year of birth, {name}? ")\nprint(f"You are {2023 - int(year)} years old")\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:">>> Output: \nEnter your name: Quinn\nWhat is your year of birth, Quinn? 2001\nYou are 22 years old\n"})}),"\n",(0,i.jsx)(n.h2,{id:"mark-dummy-variables",children:"Mark dummy variables"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Some looping statements in Python require that we declare a temporary, dummy, or a loop variable. The loop variable is created and updated automatically."}),"\n",(0,i.jsxs)(n.li,{children:["These loop variables are meant to use in the the body of the loop. However, there are some situation that this loop variable isn't used or wasted \u2192 ",(0,i.jsx)("b",{children:(0,i.jsx)("i",{children:"Python has a memorable name reserved for such variables: a single underscore."})})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Mark dummy variables\nfor _ in range(4):\n    print("Hello, World!")\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:">>> Output:\nHello, World!\nHello, World!\nHello, World!\nHello, World!\n"})}),"\n",(0,i.jsx)(n.h2,{id:"distinguish-parameters-and-arguments",children:"Distinguish parameters and arguments"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A parameter is what the function expects from the caller, which are declared in the function header"}),"\n",(0,i.jsx)(n.li,{children:"An argument is a value that the caller passes to the function. For example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def add(a, b):\n    return a+b\n\nadd(5, 4)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u2192 ",(0,i.jsx)("i",{children:"a"})," and ",(0,i.jsx)("i",{children:"b"})," are the parameters, while ",(0,i.jsx)("i",{children:"5"})," and ",(0,i.jsx)("i",{children:"4"})," are the arguments passed"]}),"\n",(0,i.jsx)(n.h2,{id:"avoid-magic-values",children:'Avoid "magic" values'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Magic values are constant that not self-explanatory, as if included in the program without reason\n\u2192 ",(0,i.jsx)("b",{children:"The simplest way to avoid magic value is to define Python constants"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"distance=1# Let's suppose distance is 1\nMILES_TO_KM = 1.6\ndistance = MILES_TO_KM * distance\nN_COLUMNS = 3\nN_ROWS = 3\nfield = [[' '] * N_COLUMNS for _ in range(N_ROWS)]\nprint(field)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(7294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);