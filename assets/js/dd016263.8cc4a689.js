"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[602],{3914:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(5893),t=i(1151);const r={title:"6 skills required to be a senior software engineer"},o="6 skills required to be a senior software engineer",l={id:"tech-blogs/level-up-software-engineering/post_9",title:"6 skills required to be a senior software engineer",description:"1. Data Modeling",source:"@site/docs/tech-blogs/level-up-software-engineering/post_9.md",sourceDirName:"tech-blogs/level-up-software-engineering",slug:"/tech-blogs/level-up-software-engineering/post_9",permalink:"/docs/tech-blogs/level-up-software-engineering/post_9",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"6 skills required to be a senior software engineer"},sidebar:"tutorialSidebar",previous:{title:"Superchare your career growth",permalink:"/docs/tech-blogs/level-up-software-engineering/post_8"},next:{title:"Troubleshooting",permalink:"/docs/category/troubleshooting"}},a={},c=[{value:"1. Data Modeling",id:"1-data-modeling",level:2},{value:"Entity",id:"entity",level:3},{value:"Attribute",id:"attribute",level:3},{value:"Relationship",id:"relationship",level:3},{value:"2. Events, message queues, and workers",id:"2-events-message-queues-and-workers",level:2},{value:"3. Autoscaling infrastructure",id:"3-autoscaling-infrastructure",level:2},{value:"4. Cloud technologies",id:"4-cloud-technologies",level:2},{value:"5. Caching",id:"5-caching",level:2},{value:"6. Concurrency / Idempotency",id:"6-concurrency--idempotency",level:2}];function u(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"6-skills-required-to-be-a-senior-software-engineer",children:"6 skills required to be a senior software engineer"}),"\n",(0,s.jsx)(n.h2,{id:"1-data-modeling",children:"1. Data Modeling"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["As a seinor engineer, you'll be asked to come up with a data model or architecture that:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"solve your unique problem"}),"\n",(0,s.jsx)(n.li,{children:"fits with your existing systems"}),"\n",(0,s.jsx)(n.li,{children:"can be easily extended"}),"\n",(0,s.jsx)(n.li,{children:"is performant"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"entity",children:"Entity"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An entity is a real-world object or concept that can be uniquely identified and described, such as a person, place, thing, event, or concept."}),"\n",(0,s.jsx)(n.li,{children:"An entity is typically represented by a table in a relational database, and each instance of the entity is represented by a row in the table."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"attribute",children:"Attribute"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An attribute is a characteristic or property of an entity, such as a name, age, address, or color. Attributes are represented by columns in the table that represents the entity."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"relationship",children:"Relationship"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A relationship is a connection or association between two or more entities and it describes how entities interact or relate to each other"}),"\n",(0,s.jsx)(n.li,{children:"Relationships can be one-to-one, one-to-many, or many-to-many"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-events-message-queues-and-workers",children:"2. Events, message queues, and workers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A lot of companies today are building / working in distributed systems that process work in real-time (APIs), but also asynchronously (queues + workers)."}),"\n",(0,s.jsxs)(n.li,{children:["One of the key pieces of an asynchronous system is message queues. Message queues are really useful when working with micro services. You can use them to:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Rate limit processing of events"}),"\n",(0,s.jsx)(n.li,{children:"Communicate between micro services"}),"\n",(0,s.jsx)(n.li,{children:"Shard the load of specific types of events to be processed at different rates"}),"\n",(0,s.jsx)(n.li,{children:"Batch process a bunch of events"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Message queues can also be used for interservice communication. If an action or event:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Doesn't need instant feedback"}),"\n",(0,s.jsx)(n.li,{children:"Spans several domains"}),"\n",(0,s.jsx)(n.li,{children:"Is used by multiple consumers"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"3-autoscaling-infrastructure",children:"3. Autoscaling infrastructure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It's important when you are working on systems that have spiky load, or need to scale without human resources"}),"\n",(0,s.jsx)(n.li,{children:"For monoliths, learn how to set up autoscaling ec2 instances. When traffic/usage gets over a certain threshold, you can spin up multiple servers to handle your traffic"}),"\n",(0,s.jsx)(n.li,{children:"For micro services, you can implement horizontal pod autoscaling in kubernetes"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4-cloud-technologies",children:"4. Cloud technologies"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Most modern companies run their apps and servers in the cloud and gaining huge advantages from it"}),"\n",(0,s.jsx)(n.li,{children:"You can't really avoid learning about AWS, Azure, or Google Cloud"}),"\n",(0,s.jsx)(n.li,{children:"Besides certifications about cloud technologies, you also need to have real-world experience beyond just your certification"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"5-caching",children:"5. Caching"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When your system reaches more scale and has moments of sporadic traffic, one tool that works really nicely is caching"}),"\n",(0,s.jsx)(n.li,{children:"Caching allows your system to handle more load, and respond quicker to your users' requests without scaling your servers"}),"\n",(0,s.jsx)(n.li,{children:"One of the ways you can learn about implementing caching and what types of problems or scenarios it's useful for is by reading engineering blogs, and system design books"}),"\n",(0,s.jsxs)(n.li,{children:["Here is a quick overview of the various types of caching you could implement in your app:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Site cache \u2013 serves content quickly to return website visitors"}),"\n",(0,s.jsx)(n.li,{children:"Application/Output caching \u2013 server level HTML caching"}),"\n",(0,s.jsx)(n.li,{children:"Distributed Data caching \u2013 redis, memcached, GemFire, Ehcache"}),"\n",(0,s.jsx)(n.li,{children:"File caching \u2013 CDN for static files, images, multimedia"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"6-concurrency--idempotency",children:"6. Concurrency / Idempotency"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Author gave an example when the problem was compounded with concurrency in distributed systems - where there's a bunch of parallel processes happening at the same time"}),"\n",(0,s.jsx)(n.li,{children:"To author, concurrency and idempotency in distributed system have been one of the hardest problems to solve in computer science"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["You can read the full artcile ",(0,s.jsx)(n.a,{href:"https://levelupsoftwareengineering.substack.com/p/6-skills-required-to-be-a-senior?utm_source=profile&utm_medium=reader2",children:"here"})]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);