"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7210],{3239:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=s(5893),i=s(1151);const o={title:"Class methods"},r="Class methods",l={id:"tech-blogs/oop/oop_in_python_05",title:"Class methods",description:"About Class methods",source:"@site/docs/tech-blogs/oop/oop_in_python_05.md",sourceDirName:"tech-blogs/oop",slug:"/tech-blogs/oop/oop_in_python_05",permalink:"/docs/tech-blogs/oop/oop_in_python_05",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Class methods"},sidebar:"tutorialSidebar",previous:{title:"Static methods",permalink:"/docs/tech-blogs/oop/oop_in_python_04"},next:{title:"__str__() and __rep__()",permalink:"/docs/tech-blogs/oop/oop_in_python_06"}},a={},c=[{value:"About Class methods",id:"about-class-methods",level:2},{value:"A variety of approaches",id:"a-variety-of-approaches",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"class-methods",children:"Class methods"}),"\n",(0,t.jsx)(n.h2,{id:"about-class-methods",children:"About Class methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Class methods are useful when you want to work with informations that's associated with a class, but not associated with one specific instance"}),"\n",(0,t.jsx)(n.li,{children:"Class methods are used to track instanaces"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class BonsaiTree:\n    num_trees = 0\n\n    def __init__(self, name: str, description: str = ""):\n        self.name = name\n        self.description = description\n\n        BonsaiTree.num_trees += 1\n\n    def describe_tree(self):\n        msg = f"{self.name}: {self.description}"\n        print(msg)\n\n    @classmethod\n    def count_trees(cls):\n        msg = f"We have {cls.num_trees} trees in the collection"\n        print(msg)\n\n\ntree = BonsaiTree("Winged Elm")\ntree.description = "tall, solid trunk"\ntree.describe_tree()\n\ntrees = []\n\ntree1 = BonsaiTree("Winged Elm")\ntree1.description = "tall, solid trunk"\ntrees.append(tree1)\n\ntree2 = BonsaiTree("El Arbol Murcielago")\ntree2.description = "short, open trunk"\ntrees.append(tree2)\n\ntree3 = BonsaiTree("Mt. Mitchell")\ntree3.description = "small mountain forest"\ntrees.append(tree3)\n\n\nfor tree in trees:\n    tree.describe_tree()\n\nBonsaiTree.count_trees()\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Output:\n>> Winged Elm: tall, solid trunk\nWinged Elm: tall, solid trunk\nEl Arbol Murcielago: short, open trunk\nMt. Mitchell: small mountain forest\nWe have 4 trees in the collection\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.code,{children:"BonsaiTree"})," class, there's an attributes called ",(0,t.jsx)(n.code,{children:"num_trees"})," which is added outside of the ",(0,t.jsx)(n.code,{children:"__init__()"})," method and it has no prefix"]}),"\n",(0,t.jsxs)(n.li,{children:["An attribute with no prefix is associated with the overall class, and it points to one value. Meanwhile, attributes prefixed with ",(0,t.jsx)(n.code,{children:"self"})," are associated with specific instances, and have distinct values associated with each instance"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"__init__()"})," method doesn't receive ",(0,t.jsx)(n.code,{children:"cls"})," argument, so it needs to access ",(0,t.jsx)(n.code,{children:"num_trees"})," through the name of the class: ",(0,t.jsx)(n.code,{children:"BonsaiTree.num_trees += 1"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"a-variety-of-approaches",children:"A variety of approaches"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using the name class in a class method"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'@classmethod\ndef count_trees(cls):\n    msg = f"We have {BonsaiTree.num_trees} trees in the collection"\n    print(msg)\n'})}),"\n",(0,t.jsx)(n.p,{children:"=> There's no reason to do this, but it's good to be aware that this syntax wont' cause an error"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Calling a class method through an instance"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'tree = BonsaiTree("Winged Elm")\ntree.description = "tall, solid trunk"\ntree.count_trees()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["=> This will generate the same output as calling ",(0,t.jsx)(n.code,{children:"BonsaiTree.count_trees()"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Accessing class attributes from within regular methods"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def describe_tree():\n    msg = f"{self.name}: {self.description}"\n    msg += f"\\n This is one of {BonsaiTree.num_trees} trees"\n    print(msg)\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["However, with class attributes, you cannot calling it using ",(0,t.jsx)(n.code,{children:"self"})," prefix, because ",(0,t.jsx)(n.code,{children:"self"})," refers to a specific attribute only, not the whole class attribute."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When the flexibility of OOP feels overwhelming, remember the following points:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you\u2019re working with data that\u2019s associated with individual instances, write a regular method with self as the first argument. If you need to work with a class attribute, access it using the name of the class."}),"\n",(0,t.jsx)(n.li,{children:"If you\u2019re working with data that\u2019s only associated with the overall class, write a class method and access the data through the cls argument."}),"\n",(0,t.jsx)(n.li,{children:"If you\u2019re writing a method that doesn\u2019t need any data associated with individual instances or the overall class, write a static method"}),"\n",(0,t.jsx)(n.li,{children:"When calling class methods, use the name of the class unless you only have access to an existing instance of the class."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["You can read the full article ",(0,t.jsx)(n.a,{href:"https://www.mostlypython.com/p/oop-in-python-part-5-class-methods",children:"here"})]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var t=s(7294);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);