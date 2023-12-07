"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8661],{1897:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=s(5893),i=s(1151);const a={title:"Introduction to OOP"},l="Dive Into Design Patterns: Introduction to OOP",r={id:"learning-journal/dive-into-design-patterns/post_01",title:"Introduction to OOP",description:'- Object-oriented programming is a paradigm based on the concept of wrapping pieces of data, and behavior related to that data, into special bundle called objects, which are constructed from a set of "blueprints" called classess',source:"@site/docs/learning-journal/dive-into-design-patterns/post_01.md",sourceDirName:"learning-journal/dive-into-design-patterns",slug:"/learning-journal/dive-into-design-patterns/post_01",permalink:"/docs/learning-journal/dive-into-design-patterns/post_01",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Introduction to OOP"},sidebar:"tutorialSidebar",previous:{title:"Dec 10, 2023",permalink:"/docs/learning-journal/December/20231210"},next:{title:"Research Topics",permalink:"/docs/category/research-topics"}},o={},c=[{value:"Object, classes",id:"object-classes",level:2},{value:"Class hierarchies",id:"class-hierarchies",level:2},{value:"Pillars of OOP",id:"pillars-of-oop",level:2},{value:"Abstraction",id:"abstraction",level:3},{value:"Encapsulation",id:"encapsulation",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Polymorphism",id:"polymorphism",level:2},{value:"Relations between Objects",id:"relations-between-objects",level:2},{value:"The big picture",id:"the-big-picture",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"dive-into-design-patterns-introduction-to-oop",children:"Dive Into Design Patterns: Introduction to OOP"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Object-oriented programming is a paradigm based on the concept of wrapping pieces of data, and behavior related to that data, into special bundle called ",(0,t.jsx)("b",{children:"objects"}),', which are constructed from a set of "blueprints" called ',(0,t.jsx)("b",{children:"classess"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"object-classes",children:"Object, classes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A class is like a ",(0,t.jsx)("b",{children:"blueprint"})," that defines the structure for objects, which are concrete ",(0,t.jsx)("b",{children:"instances"})," of that class"]}),"\n",(0,t.jsxs)(n.li,{children:["For example: I have a cat named Oscar. Oscar is an object, an instance of the ",(0,t.jsx)(n.code,{children:"Cat"})," class. Every cat has a lot of standard attributes: name, sex, age, weight, color, etc. These are the class's fields"]}),"\n",(0,t.jsx)(n.li,{children:"All cats also behave similarly: breathe, run, eat, sleept, etc. These are the class's methods"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("b",{children:"Data stored inside the object's fields in often referenced as state, and all the object's methods define its behavior"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Cat:\n    def __init__(self, name: str, sex: str, age: int, weight: int, color: str):\n        self.name = name\n        self.sex = sex\n        self.age = age\n        self.weight = weight\n        self.color = color\n    \n    def breathe(self):\n        print("I\'m breathing")\n    \n    def eat(self, food: str):\n        print(f"I\'m eating {food}")\n\n\noscar = Cat("Oscar", "male", 2, 5, "white")\noscar.breathe()\noscar.eat("sardine")\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:">>> I'm breathing\n>>> I'm eating sardine\n"})}),"\n",(0,t.jsx)(n.h2,{id:"class-hierarchies",children:"Class hierarchies"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A real program contains more than one single class. Some of these classes might be organized into class hierarchies."}),"\n",(0,t.jsx)(n.li,{children:"Just like cats, dogs also have a lot in common: name, sex, age, and color, etc. Dogs can also sleep and eat. Therefore, we can define the base class Animal that would list the common attributes and behaviors"}),"\n",(0,t.jsx)(n.li,{children:"A parent class is called a superclass. Its children are subclasses."}),"\n",(0,t.jsxs)(n.li,{children:["Subclasses inherit state and behavior from their parents, defining only attributes or behaviors that differ. For example, the ",(0,t.jsx)(n.code,{children:"Cat"})," class would have the ",(0,t.jsx)(n.code,{children:"meow"})," method, and the Dog class has the ",(0,t.jsx)(n.code,{children:"bark"})," method"]}),"\n",(0,t.jsx)(n.li,{children:"Subclasses can override the behavior of methods that they inherit from parent classes."}),"\n",(0,t.jsx)(n.li,{children:"A subclass can either completely replace the default behavior or just enhance it with some extra stuff."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pillars-of-oop",children:"Pillars of OOP"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Object-oriented programming is based on four pillars: ",(0,t.jsx)("b",{children:"Abstraction, Encapsulation, Inheritance, Polymorphism"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"abstraction",children:"Abstraction"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Abstraction is a model of a real-world object limited to a specific context, which represents all details relevant to this context with high accuracy and omits all the rest."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Airplane:\n    # Create private attributes by prefixing the attribute name with double underscores\n    def __init__(self, speed: int, altitude: int, rollAngle: int, pitchAngle: int, yawAngle: int, type: str):\n        self.speed = speed\n        self.altitude = altitude\n        self.rollAngle = rollAngle\n        self.pitchAngle = pitchAngle\n        self.yawAngle = yawAngle\n        self.type = type\n\n\ndef main():\n    airplane = Airplane(1, 2, 3, 4, 5, "Aircraft")\n    print(airplane.speed)\n    print(airplane.altitude)\n    print(airplane.type)\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Output:\n>>> 1\n>> 2\n>> Aircarft\n"})}),"\n",(0,t.jsx)(n.h2,{id:"encapsulation",children:"Encapsulation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Encapsulation is the ability of an object to hide parts of its states and behaviors from other objects, exposing only a limited interface to the rest of the program"}),"\n",(0,t.jsxs)(n.li,{children:["To encapsulate something means to make it ",(0,t.jsx)("b",{children:"private"}),", and thus accessible only from within the methods of its own class."]}),"\n",(0,t.jsxs)(n.li,{children:["For an example: In the class Airplane below, I only want the ",(0,t.jsx)(n.code,{children:"type"})," state of an Airplane object accessible. The other states like speed, altitude, etc are makred private with leading double underscores"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Airplane:\n    # Create private attributes by prefixing the attribute name with double underscores\n    def __init__(self, speed: int, altitude: int, rollAngle: int, pitchAngle: int, yawAngle: int, type: str):\n        self.__speed = speed\n        self.__altitude = altitude\n        self.__rollAngle = rollAngle\n        self.__pitchAngle = pitchAngle\n        self.__yawAngle = yawAngle\n        self.type = type\n\n\ndef main():\n    airplane = Airplane(1, 2, 3, 4, 5, "Aircraft")\n    print(airplane.type)\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(n.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Inheritance is the ability to build new classes on top of existing one."}),"\n",(0,t.jsxs)(n.li,{children:["The main benefit of inheritance is ",(0,t.jsx)("b",{children:"code reuse"}),". If you want to create a class that's slightly different from an existing one, there's no need to duplicate code."]}),"\n",(0,t.jsx)(n.li,{children:"You cannot hide a method in a subclass if it was declared in the superclass."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Animal:\n    def __init__(self, name: str, sex: str, age: int, weight: int, color: str):\n        self.name = name\n        self.sex = sex\n        self.age = age\n        self.weight = weight\n        self.color = color\n\n    def breath(self):\n        print("Breathing...")\n\n    def eat(self, food: str):\n        print(f"I\'m eating {food}")\n\n    def run(self, destination: str):\n        print(f"I\'m running to {destination}")\n\n    def sleep(self, hours: int):\n        print(f"I\'ve slept for {hours} hours")\n\n\nclass Cat(Animal):\n    def __init__(self, name: str, sex: str, age: int, weight: int, color: str, texture: str, isNasty: bool):\n        self.texture = texture\n        self.isNasty = isNasty\n        Animal.__init__(self, name, sex, age, weight, color)\n\n    @staticmethod\n    def meow():\n        print("Meow, meow")\n\nclass Dog(Animal):\n    def __init__(self, name: str, sex: str, age: int, weight: int, color: str, bestFriend: Human):\n        self.bestFriend = bestFriend\n        Animal.__init__(self, name, sex, age, weight, color)\n\n    @staticmethod\n    def bark():\n        print("Woof, Woof")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"polymorphism",children:"Polymorphism"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Most ",(0,t.jsx)(n.code,{children:"Animals"})," can make sounds. We can anticipate that all subclasses will need to overide the base ",(0,t.jsx)(n.code,{children:"make_sound"})," method so each subclass can emit the correct sound"]}),"\n",(0,t.jsx)(n.li,{children:"Polymorphism lets us omit any default implementation of the method in the superclass, but force all subclasses to come up with their own"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Animal:\n    def __init__(self, name: str, sex: str, age: int, weight: int, color: str):\n        self.name = name\n        self.sex = sex\n        self.age = age\n        self.weight = weight\n        self.color = color\n\n    def breath(self):\n        print("Breathing...")\n\n    def eat(self, food: str):\n        print(f"I\'m eating {food}")\n\n    def run(self, destination: str):\n        print(f"I\'m running to {destination}")\n\n    def sleep(self, hours: int):\n        print(f"I\'ve slept for {hours} hours")\n\n    def make_sound(self):\n        pass\n\n\nclass Cat(Animal):\n    def __init__(self, name: str, sex: str, age: int, weight: int, color: str, texture: str, isNasty: bool):\n        self.texture = texture\n        self.isNasty = isNasty\n        Animal.__init__(self, name, sex, age, weight, color)\n\n    def make_sound(self):\n        print("MEOW MEOW MEOW")\n\n\nclass Dog(Animal):\n    def __init__(self, name: str, sex: str, age: int, weight: int, color: str, breed: str):\n        self.breed = breed\n        Animal.__init__(self, name, sex, age, weight, color)\n\n    def make_sound(self):\n        print("WOOF WOOF WOOF")\n\n\ndef main():\n    oscar = Cat(name="Oscar", sex="male", age=3, weight=7, color="brown", texture="striped", isNasty=False)\n    lucy = Dog(name="Lucy", sex="female", age=2, weight=15, color="white",breed="Corgi")\n\n    oscar.make_sound()\n    lucy.make_sound()\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:">>> MEOW MEOW MEOW\n>>> WOOF WOOF WOOF  \n"})}),"\n",(0,t.jsx)(n.h2,{id:"relations-between-objects",children:"Relations between Objects"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("b",{children:"Dependency"}),": This is the most basic and the weakest type of relations between classes. There is a dependency between two classes if some changes to the definition of one class might result in modifications to another class."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("b",{children:"Association"}),": This is a relationship in which one object uses or interacts with another. In general, you use an association to represent a field that contains some other objects. This field serves as a link between two objects."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("b",{children:"Aggregation"}),': This a specialized type of association that represents "one-to-many", "many-to-many", or "whole part" relations between multiple objects']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)("b",{children:"Composition"}),": This is a specific kind of aggregation, where one object is composed of one or more instances of the other."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"the-big-picture",children:"The big picture"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Dependency: Class A can be affected by changes in class B"}),"\n",(0,t.jsx)(n.li,{children:"Association: Object A knows about object B. Class A depends on B"}),"\n",(0,t.jsx)(n.li,{children:"Aggregation: Object A knows about object B, and consists of B. Class A depends on B"}),"\n",(0,t.jsx)(n.li,{children:"Composition: Object A knows about object B, consists of B, and manages B's life cycle. Class A depends B"}),"\n",(0,t.jsx)(n.li,{children:"Implementation: Class A defines methods declared in interface B. Object A can be treated as B. Class A depends on B"}),"\n",(0,t.jsxs)(n.li,{children:["Inheritance",":s"," Class A inherits interface and implementation of class B but can extend it. Objects A can be treated as B. Class A depends on B"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var t=s(7294);const i={},a=t.createContext(i);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);