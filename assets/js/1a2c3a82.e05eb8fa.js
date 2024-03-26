"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8868],{1648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(5893),o=t(1151);const i={title:"Node.js Introduction and Fundamental (2)"},r="Node.js Introduction and Fundamental (2)",l={id:"tech-blogs/become-fullstack-developer/node2",title:"Node.js Introduction and Fundamental (2)",description:"Events in Javascript and Node.js",source:"@site/docs/tech-blogs/become-fullstack-developer/node2.md",sourceDirName:"tech-blogs/become-fullstack-developer",slug:"/tech-blogs/become-fullstack-developer/node2",permalink:"/docs/tech-blogs/become-fullstack-developer/node2",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Node.js Introduction and Fundamental (2)"},sidebar:"tutorialSidebar",previous:{title:"Node.js Introduction and Fundamental (1)",permalink:"/docs/tech-blogs/become-fullstack-developer/node1"},next:{title:"Node.js Introduction and Fundamental (3)",permalink:"/docs/tech-blogs/become-fullstack-developer/node3"}},c={},d=[{value:"Events in Javascript and Node.js",id:"events-in-javascript-and-nodejs",level:2},{value:"Order Food Coding Challenge",id:"order-food-coding-challenge",level:3},{value:"Process object in Node.js",id:"process-object-in-nodejs",level:2},{value:"Creating simple server with Node.js",id:"creating-simple-server-with-nodejs",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"nodejs-introduction-and-fundamental-2",children:"Node.js Introduction and Fundamental (2)"}),"\n",(0,s.jsx)(n.h2,{id:"events-in-javascript-and-nodejs",children:"Events in Javascript and Node.js"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In JavaScript and Node.js, ",(0,s.jsx)("b",{children:"events"})," are things that happen while you're programming, like clicking a button or getting an error. They let your program know so you can decide what to do when these things happen \u2192",(0,s.jsx)("i",{children:"This is a big part of making websites or server programs that react to what users do or what happens in the system."})]}),"\n",(0,s.jsxs)(n.li,{children:["What does it mean by ",(0,s.jsx)("i",{children:"listening to an event"})," in JavaScript?","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In JavaScript, ",(0,s.jsx)("i",{children:"listening to an event"})," means setting up a function that will be called automatically whenever a specific event occurs."]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)("mark",{children:["When you ",(0,s.jsx)("i",{children:"listen to an event"}),", you're telling the program to watch for a particular action or occurrence (like button click, a key press, or a page loading), and to execute a piece of code in response."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["To handle events, Node.js uses ",(0,s.jsx)(n.code,{children:"events"})," module and ",(0,s.jsx)(n.code,{children:"EventEmitter"})," object."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("b",{children:"(*) Handling events in Vanilla JavaScript: "}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'document.getElementById("open").addEventListener("click", function() {\n    alert("Button clicked!")\n})\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u2192 ",(0,s.jsxs)("mark",{children:["When an element with ID ",(0,s.jsx)("i",{children:"open"})," is ",(0,s.jsx)("i",{children:"clicked"}),", a function will be called to alert ",(0,s.jsx)("i",{children:"Button clicked!"})]})]}),"\n",(0,s.jsx)("b",{children:"(*) Handing or emitting events in Node.js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const EventEmitter = require("events");\n\nconst myEmitter = new EventEmitter();\nmyEmitter.on("event one", function () {\n  console.log("This is function to handle event one!");\n});\n\nmyEmitter.on("event two", function () {\n  console.log("This is function to handle event two!");\n});\n\nmyEmitter.emit("event one");\nmyEmitter.emit("event two");\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Explanation:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"myEmitter.on(event, callback/function)"}),": this is used to set up ",(0,s.jsx)("i",{children:"event listener"}),". It attaches callback/function to that specific event, so when that event is listened, the attached function will be called automatically."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"myEmitter.emit(event)"}),": this is used to trigger/emit an event."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"order-food-coding-challenge",children:"Order Food Coding Challenge"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const EventEmitter = require("events");\nconst { emit } = require("process");\n\nconst myEmitter = new EventEmitter();\n\nmyEmitter.on("order", function (food) {\n  console.log("Order placed for", food);\n});\n\nmyEmitter.on("doorbell", function () {\n  console.log("DING DONG...");\n});\n\nmyEmitter.on("deliver", function () {\n  console.log("Food is delivered!");\n});\n\nmyEmitter.on("payment", function (food) {\n  console.log("Payment is made. Please enjoy your food.");\n});\n\nmyEmitter.emit("order", "Popeyes");\nmyEmitter.emit("doorbell");\nmyEmitter.emit("deliver");\nmyEmitter.emit("payment", "Popeyes");\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We are taking care of 4 events:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"order"})," will be fired when we place an order for some ",(0,s.jsx)(n.code,{children:"food"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"doorbell"})," will be fired when our food is at the door."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"deliver"})," will be fired when shiper confirm the delivery to customer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"payment"})," for ",(0,s.jsx)(n.code,{children:"food"})," will be fired when payment is made."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"process-object-in-nodejs",children:"Process object in Node.js"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"process"})," object is a global that allows us to control the current process."]}),"\n",(0,s.jsxs)(n.li,{children:["Being an instance of the ",(0,s.jsx)(n.code,{children:"EventEmitter"})," class, it has a few important events that we should know: ",(0,s.jsx)("mark",{children:"exit and beforeExit"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you wish to save your program progress to the cloud once it's done processing. ",(0,s.jsxs)("mark",{children:["The ",(0,s.jsx)(n.code,{children:"beforeExit"})," event is perfect for this job. It is fired when the event loop is empty, which means that Node.js has done all its work and is about exit."]})," You can register ",(0,s.jsx)(n.code,{children:"beforeExit"})," event to make a network call to your cloud drive and upload your data."]}),"\n",(0,s.jsxs)(n.li,{children:["Once your data has been uploaded, you want the program to notify you with an output on the console. The ",(0,s.jsx)(n.code,{children:"exit"})," event is fired when ",(0,s.jsx)(n.code,{children:"process.exit()"})," is called. The ",(0,s.jsx)(n.code,{children:"exit"})," event executes ",(0,s.jsx)("mark",{children:"synchronously, so asynchronous calls may not return properly"})]}),"\n",(0,s.jsxs)(n.li,{children:["If we explicitly call ",(0,s.jsx)(n.code,{children:"process.exit()"}),", the ",(0,s.jsx)(n.code,{children:"beforeExit()"})," event is not fired."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'console.log("This is the first message");\n\nprocess.on("beforeExit", function (code) {\n  console.log("Process beforeExit event with code", code);\n});\n\nprocess.on("exit", function (code) {\n  setTimeout(() => {\n    console.log("This will not work");\n  }, 0);\n  console.log("Process exit event with code", code);\n});\n\nconsole.log("This is the second message");\n// process.exit();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"creating-simple-server-with-nodejs",children:"Creating simple server with Node.js"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Websites don't use a command-line terminal to serve all those beautiful web pages. However, Node.js allows us to serve web pages using ",(0,s.jsx)(n.code,{children:"http"})," module by creating a simple server."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="ModuleOne/Practice/practice_http.js"',children:'const http = require("http");  // import http module\n\nconst hostname = "0.0.0.0";  // set up hostname \nconst port = 3500;  // set up port number\n\nconst server = http.createServer((request, response) => {\n  response.statusCode = 200;  // set status code to successful HTTP request\n  response.setHeader("Content-Type", "text/html");  \n  response.end("Hello, world!"); // send the response back to the client and ends the response process\n});\n\nserver.listen(port, hostname, function () {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Explanation:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Starting the server: By running the script ",(0,s.jsx)(n.code,{children:"node ModuleOne/Practice/practice_http.js"}),", the server starts listening and the callback function inside ",(0,s.jsx)(n.code,{children:"listen"})," method is called. It takes the ",(0,s.jsx)(n.code,{children:"port"})," variable which was initialzied above and so is hostname. On terminal, you will see the output ",(0,s.jsx)(n.code,{children:"Server running at http://0.0.0.0:3500/"})]}),"\n",(0,s.jsx)(n.li,{children:'When you click on that URL, you\'re sending a request to the server so that you can see a website with "Hello, word!" sentence displayed in the browser.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Written on Mar 25, 2024."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);