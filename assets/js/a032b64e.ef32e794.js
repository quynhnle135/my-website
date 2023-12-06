"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6724],{2659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(5893),o=n(1151);const i={title:"Static methods"},a="Static Methods",r={id:"tech-blogs/oop/oop_in_python_04",title:"Static methods",description:"- Static methods can do their work without access to any of the information stored in an instance's attributes.",source:"@site/docs/tech-blogs/oop/oop_in_python_04.md",sourceDirName:"tech-blogs/oop",slug:"/tech-blogs/oop/oop_in_python_04",permalink:"/docs/tech-blogs/oop/oop_in_python_04",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Static methods"},sidebar:"tutorialSidebar",previous:{title:"The __init__() method",permalink:"/docs/tech-blogs/oop/oop_in_python_03"},next:{title:"Class methods",permalink:"/docs/tech-blogs/oop/oop_in_python_05"}},h={},c=[{value:"1. A method that doesn&#39;t need self",id:"1-a-method-that-doesnt-need-self",level:2},{value:"2. Why use static methods?",id:"2-why-use-static-methods",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"static-methods",children:"Static Methods"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Static methods can do their work without access to any of the information stored in an instance's attributes."}),"\n",(0,s.jsx)(t.li,{children:"Static methods are simpler than regular methods because Python doesn't need to provide them with all the information associated with the instances."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"1-a-method-that-doesnt-need-self",children:"1. A method that doesn't need self"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Methods that don't use any information associated with a specific instance are called static methods"}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"@staticmethod"})," decorator tells Python not to pass the self arugment to a method"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'class Mountain:\n    def __init__(self, name: str = "", elev_meters: int = 0):\n        self.name = name\n        self.elev_meters = elev_meters\n\n    def describe_mountain(self):\n        msg = f"{self.name} is {self.elev_meters} meters tall."\n        print(msg)\n\n    @staticmethod\n    def show_disclaimer():\n        msg = "\\nClimbing steep mountains can bee dangerous."\n        msg += " If you are new to climbing"\n        msg += " please seek out instruction from"\n        msg += " a qualified guide or an"\n        msg += " experienced mentor."\n        print(msg)\n\n\nmy_mountain = Mountain("Mt. Verstovia", 1022)\nmy_mountain.describe_mountain()\nmy_mountain.show_disclaimer()\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Output\n>>> Mt. Verstovia is 1022 meters tall.\n\n>> Climbing steep mountains can bee dangerous. If you are new to climbing please seek out instruction from a qualified guide or an experienced mentor.\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Notice that the ",(0,s.jsx)(t.code,{children:"show_disclaimer()"})," doesn't have any argument, even the ",(0,s.jsx)(t.code,{children:"self"})," argument, because it's a static method."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"2-why-use-static-methods",children:"2. Why use static methods?"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Classes that use static methods where appropriate are clearer."}),"\n",(0,s.jsxs)(t.li,{children:["When you decorate a method with ",(0,s.jsx)(t.code,{children:"@staticmethod"}),", you're just not telling Python how to handle the method. You're also communicating with other developers that this method doesn't modify any instance, and that they can call the method without first creating an instance"]}),"\n",(0,s.jsx)(t.li,{children:"Classes that use static methods are more efficient."}),"\n",(0,s.jsxs)(t.li,{children:["In a large class with many attributes and many instances have been created, and those instances are all calling a certain method many times. Adding the ",(0,s.jsx)(t.code,{children:"@staticmethod"})," decorator eliminates a significant amount of work that Python would have been doing unnecessarily"]}),"\n",(0,s.jsx)(t.li,{children:"Static methods are used for helper methods since they don't need information associated with an instance."}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:["You can read the full article ",(0,s.jsx)(t.a,{href:"https://www.mostlypython.com/p/oop-in-python-part-4-static-methods",children:"here"})]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(7294);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);