"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4389],{1594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(5893),o=t(1151);const a={title:"Creational Design Patterns (1) - Factory Method"},s="Creational Design Patterns (1) - Factory Method",i={id:"learning-journal/dive-into-design-patterns/post_04",title:"Creational Design Patterns (1) - Factory Method",description:"Creational design patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code:",source:"@site/docs/learning-journal/dive-into-design-patterns/post_04.md",sourceDirName:"learning-journal/dive-into-design-patterns",slug:"/learning-journal/dive-into-design-patterns/post_04",permalink:"/docs/learning-journal/dive-into-design-patterns/post_04",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Creational Design Patterns (1) - Factory Method"},sidebar:"tutorialSidebar",previous:{title:"Software Design Principles",permalink:"/docs/learning-journal/dive-into-design-patterns/post_03"},next:{title:"Creational Design Patterns (2) - Abstract Factory",permalink:"/docs/learning-journal/dive-into-design-patterns/post_05"}},c={},l=[{value:"Applicability",id:"applicability",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"creational-design-patterns-1---factory-method",children:"Creational Design Patterns (1) - Factory Method"}),"\n",(0,r.jsx)(n.p,{children:"Creational design patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Factory method: provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created"}),"\n",(0,r.jsx)(n.li,{children:"Abstract Factory: Lets your produce families of related objects without specifying their concrete classes"}),"\n",(0,r.jsx)(n.li,{children:"Builder: Lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code"}),"\n",(0,r.jsx)(n.li,{children:"Prototype: Lets you copy existing objects without making your code dependent on their classes"}),"\n",(0,r.jsx)(n.li,{children:'Singleton" Lets you ensure that a class has only one instance, while providing a global access point to this instance'}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h1,{id:"factory-method",children:"Factory Method"}),"\n",(0,r.jsxs)(n.p,{children:["Factory method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created\nHere are what the structure looks like:\n",(0,r.jsx)(n.img,{alt:"Factory Method Structure",src:t(3685).Z+"",width:"1212",height:"804"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Product declares the interface, which is common to all objects that can be produced by the creator and its subclasses"}),"\n",(0,r.jsx)(n.li,{children:"Concrete Products are different implementation of the product interface"}),"\n",(0,r.jsx)(n.li,{children:"The Creator class declares the factory method that returns new product objects. It's important that the return type of this method matches the product interface"}),"\n",(0,r.jsxs)(n.li,{children:["You can declare the factory methods as ",(0,r.jsx)(n.code,{children:"@abstractmethod"})," to force all subclasses to implement their own versions of the method"]}),"\n",(0,r.jsx)(n.li,{children:"Concrete Creators override the base factory method so it returns a different type of product."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here's my example of Transportation and Transportation Factory"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["I have the main product ",(0,r.jsx)(n.code,{children:"Transportation"})," and its subclasses are ",(0,r.jsx)(n.code,{children:"Car"})," and ",(0,r.jsx)(n.code,{children:"Truck"}),". ",(0,r.jsx)(n.code,{children:"Car"})," and ",(0,r.jsx)(n.code,{children:"Truck"})," have to implement methods like ",(0,r.jsx)(n.code,{children:"start_engine"})," and ",(0,r.jsx)(n.code,{children:"display_info"})," but they can specify their method to match the car's and truck's attributes"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TransportaionFactory"})," is used as an interface that create Transportation. User can just give some info make, model, year, color, etc then it can be classified as either Car or Truck later"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"CarFactory"})," and ",(0,r.jsx)(n.code,{children:"TruckFactory"})," return Car or Truck objects as required"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="transportation.py"',children:'from abc import ABC, abstractmethod\n\n\nclass Vehicle(ABC):\n    def __init__(self,  make: str, model: str, year: int, color: str):\n        self.make = make\n        self.model = model\n        self.year = year\n        self.color = color\n\n    @abstractmethod\n    def start_engine(self) -> None:\n        pass\n\n    @abstractmethod\n    def display_info(self) -> None:\n        pass\n\n\nclass Car(Vehicle):\n    def start_engine(self) -> None:\n        print("CAR engine starting...")\n\n    def display_info(self) -> None:\n        print(f"---Car Info---\\n"\n              f"Make: {self.make}\\n"\n              f"Model: {self.model}\\n"\n              f"Year: {str(self.year)}\\n"\n              f"Color: {self.color}")\n\n\nclass Truck(Vehicle):\n    def start_engine(self) -> None:\n        print("TRUCK engine starting...")\n\n    def display_info(self) -> None:\n        print(f"---Truck Info---\\n"\n              f"Make: {self.make}\\n"\n              f"Model: {self.model}\\n"\n              f"Year: {str(self.year)}\\n"\n              f"Color: {self.color}")\n\n\nclass VehicleFactory(ABC):\n    @abstractmethod\n    def create_vehicle(self, make, model, year, color) -> Vehicle:\n        pass\n\n\nclass CarFactory(VehicleFactory):\n    def create_vehicle(self, make, model, year, color) -> Vehicle:\n        return Car(make, model, year, color)\n\n\nclass TruckFactory(VehicleFactory):\n    def create_vehicle(self, make, model, year, color) -> Vehicle:\n        return Truck(make, model, year, color)\n\n\ndef client_code(vehicle_factory: VehicleFactory):\n    vehicle = vehicle_factory.create_vehicle("Honda", "Civic", 2021, "Red")\n    vehicle.start_engine()\n    vehicle.display_info()\n\n\nif __name__ == "__main__":\n    car_factory = CarFactory()\n    client_code(car_factory)\n\n    truck_factory = TruckFactory()\n    client_code(truck_factory)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Output:\nCAR engine starting...\n---Car Info---\nMake: Honda\nModel: Civic\nYear: 2021\nColor: Red\nTRUCK engine starting...\n---Truck Info---\nMake: Honda\nModel: Civic\nYear: 2021\nColor: Red\n"})}),"\n",(0,r.jsx)(n.p,{children:"Another example of Appliance that I coded out to understand this concept better:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="home_appliance.py"',children:'from abc import ABC, abstractmethod\n\n\nclass Appliance(ABC):\n    def __init__(self, brand: str, model: str, color: str, price: float) -> None:\n        self.brand = brand\n        self.model = model\n        self.color = color\n        self.price = price\n\n    @abstractmethod\n    def display_info(self) -> None:\n        pass\n\n    @abstractmethod\n    def turn_on(self) -> None:\n        pass\n\n    @abstractmethod\n    def turn_off(self) -> None:\n        pass\n\n\nclass Television(Appliance):\n    def display_info(self) -> None:\n        print("---Television Info---\\n"\n              f"Brand: {self.brand}\\n"\n              f"Model: {self.model}\\n"\n              f"Color: {self.color}\\n"\n              f"Price: {self.price}\\n")\n\n    def turn_on(self) -> None:\n        print("Turning on Television...")\n\n    def turn_off(self) -> None:\n        print("Turing off Television...")\n\n\nclass Cooker(Appliance):\n    def display_info(self) -> None:\n        print("---Cooker Info---\\n"\n              f"Brand: {self.brand}\\n"\n              f"Model: {self.model}\\n"\n              f"Color: {self.color}\\n"\n              f"Price: {self.price}\\n")\n\n    def turn_on(self) -> None:\n        print("Turning on Cooker...")\n\n    def turn_off(self) -> None:\n        print("Turning off Cooker...")\n\n\nclass ApplianceFactory(ABC):\n    @abstractmethod\n    def create_appliance(self, brand: str, model: str, color: str, price: float) -> Appliance:\n        pass\n\n\nclass TelevisionFactory(ApplianceFactory):\n    def create_appliance(self, brand: str, model: str, color: str, price: float) -> Appliance:\n        return Television(brand=brand, model=model, color=color, price=price)\n\n\nclass CookerFactory(ApplianceFactory):\n    def create_appliance(self, brand: str, model: str, color: str, price: float) -> Appliance:\n        return Cooker(brand=brand, model=model, color=color, price=price)\n\n\ndef client_code(appliance_factory: ApplianceFactory):\n    appliance = appliance_factory.create_appliance(brand="LG", model="Electric Smart", color="black", price=800)\n    appliance.turn_on()\n    appliance.display_info()\n    appliance.turn_off()\n\n\nif __name__ == "__main__":\n    cooker_factory = CookerFactory()\n    client_code(cooker_factory)\n    \n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Output:\nTurning on Cooker...\n---Cooker Info---\nBrand: LG\nModel: Electric Smart\nColor: black\nPrice: 800\n\nTurning off Cooker...\n"})}),"\n",(0,r.jsx)(n.h2,{id:"applicability",children:"Applicability"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use the Factory Method when you don't know beforehand the exact types and dependencies of the objects your code should work with"}),"\n",(0,r.jsx)(n.li,{children:"The Factory Method separates product construction code from the code that actually uses the product. Therefore, it's easier to extend the product construction code independently from the rest of the code"}),"\n",(0,r.jsx)(n.li,{children:"Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components"}),"\n",(0,r.jsx)(n.li,{children:"Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pros-and-cons",children:"Pros and Cons"}),"\n",(0,r.jsx)(n.h3,{id:"pros",children:"Pros"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You avoid tight coupling between the creator and the concrete products"}),"\n",(0,r.jsx)(n.li,{children:"Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support"}),"\n",(0,r.jsx)(n.li,{children:"Open and Closed Principle. You can introduce new types of products into the program without breaking existing client code"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"cons",children:"Cons"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is whenyou're introducing the pattern into an existing hierarchy of creator classes."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3685:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/factory_method_structure-2a54a60b37b7acda1ed818cceeff817d.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(7294);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);