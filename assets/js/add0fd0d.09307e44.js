"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7478],{2871:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=i(5893),t=i(1151);const s={title:"AZ-204 Implement Azure App Service web apps"},a="AZ-204: Implement Azure App Service web apps",o={id:"tech-blogs/azure-prep/azure_1",title:"AZ-204 Implement Azure App Service web apps",description:"Explore Azure App Service",source:"@site/docs/tech-blogs/azure-prep/azure_1.md",sourceDirName:"tech-blogs/azure-prep",slug:"/tech-blogs/azure-prep/azure_1",permalink:"/docs/tech-blogs/azure-prep/azure_1",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"AZ-204 Implement Azure App Service web apps"},sidebar:"tutorialSidebar",previous:{title:"AZ-204 Notes and Test Preparation",permalink:"/docs/category/az-204-notes-and-test-preparation"},next:{title:"AZ-204 Implement Azure Functions",permalink:"/docs/tech-blogs/azure-prep/azure_2"}},l={},p=[{value:"Explore Azure App Service",id:"explore-azure-app-service",level:2},{value:"What are Azure App Service?",id:"what-are-azure-app-service",level:4},{value:"What are Azure App Service plans?",id:"what-are-azure-app-service-plans",level:4},{value:"When do you need to isloate your app into a new App Service plan?",id:"when-do-you-need-to-isloate-your-app-into-a-new-app-service-plan",level:4},{value:"How to deploy to App Service?",id:"how-to-deploy-to-app-service",level:4},{value:"How Azure App Service manages authentication and authorization?",id:"how-azure-app-service-manages-authentication-and-authorization",level:4},{value:"Steps of authentication flow",id:"steps-of-authentication-flow",level:4},{value:"Multi-tenant App Service networking features",id:"multi-tenant-app-service-networking-features",level:4},{value:"Configure Web App Settings",id:"configure-web-app-settings",level:2},{value:"Scale apps in Azure App Service",id:"scale-apps-in-azure-app-service",level:2},{value:"Explore Azure App Service deployment slots",id:"explore-azure-app-service-deployment-slots",level:2},{value:"Knowlege Check",id:"knowlege-check",level:2}];function c(e){const n={h1:"h1",h2:"h2",h4:"h4",hr:"hr",li:"li",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"az-204-implement-azure-app-service-web-apps",children:"AZ-204: Implement Azure App Service web apps"}),"\n",(0,r.jsx)(n.h2,{id:"explore-azure-app-service",children:"Explore Azure App Service"}),"\n",(0,r.jsx)(n.h4,{id:"what-are-azure-app-service",children:"What are Azure App Service?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Azure App Service is HTTP-based service for hosting web applications, REST APIs, and mobile backends."}),"\n",(0,r.jsxs)(n.li,{children:["Azure App Service has some of the following key features:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Built-in auto scale support"}),"\n",(0,r.jsx)(n.li,{children:"Container support"}),"\n",(0,r.jsx)(n.li,{children:"Continous integration/deployment support"}),"\n",(0,r.jsx)(n.li,{children:"Deployment slots"}),"\n",(0,r.jsx)(n.li,{children:"App Service on Linux"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"what-are-azure-app-service-plans",children:"What are Azure App Service plans?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Shared compute: ",(0,r.jsx)("b",{children:"Free and Shared"}),", the two base tiers, runs an app on the same Azure VM as other App Service apps, including apps of other customers. These tiers allocate CPU quotas to each app that runs on the shared resouces, and ",(0,r.jsx)("mark",{children:"the resources cannot scale out."})]}),"\n",(0,r.jsxs)(n.li,{children:["Dedicated compute: The ",(0,r.jsx)("b",{children:"Basic, Standard, Premium, Premium V2, and PremiumV3"})," tiers run apps on dedicated Azure VMs. Only apps in the same App Service plan share the same compute resouces. ",(0,r.jsx)("mark",{children:"The higher the tier, the more VM instances are available to you for scale-out."})]}),"\n",(0,r.jsxs)(n.li,{children:["Isolated: The ",(0,r.jsx)("b",{children:"Isolated and IsolatedV2"})," tiers run dedicated Azure VMs on dedicated Azure Virtual Networks. It provides network isolation on top of compute isolation to your apps. ",(0,r.jsx)("mark",{children:"It provides the maximum scale-out capabilities."})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"when-do-you-need-to-isloate-your-app-into-a-new-app-service-plan",children:"When do you need to isloate your app into a new App Service plan?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The app is resource-intensive."}),"\n",(0,r.jsx)(n.li,{children:"You want to scale the app independently from the other apps in the existing plan."}),"\n",(0,r.jsx)(n.li,{children:"The app needs resource in a different geographical region."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"how-to-deploy-to-app-service",children:"How to deploy to App Service?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Automated deployment:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Automated deployment is a process used to push out new features and bug fixes in a fast and repetitive pattern with minimal effect on end users."}),"\n",(0,r.jsx)(n.li,{children:"Azure supports automated deployment directly from several sources such as Azure DevOps Services, Github, and Bitbucket."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Manuual deployment: Here are some options that you can use to manually push your code to Azure: Git, CLI, Zip deploy, FTP/S"}),"\n",(0,r.jsxs)(n.li,{children:["Use deployment slots:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Continuously deploy code"}),"\n",(0,r.jsx)(n.li,{children:"Coninuously deploy containers"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"how-azure-app-service-manages-authentication-and-authorization",children:"How Azure App Service manages authentication and authorization?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The authentication and authorization module runs in the same sandbox as your application code. When it's enabled, every incoming HTTP request passes through it before being handled by your application code. This module hanles several things for your app:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Authenticates users and clients with the specified identity provider(s)"}),"\n",(0,r.jsx)(n.li,{children:"Validates, stores, and refreshes OAuth tokens issued by the configured identity provider(s)"}),"\n",(0,r.jsx)(n.li,{children:"Manages the authenticated session"}),"\n",(0,r.jsx)(n.li,{children:"Injects identity information into HTTP request headers."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"steps-of-authentication-flow",children:"Steps of authentication flow"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sign user in"}),"\n",(0,r.jsx)(n.li,{children:"Post authentication"}),"\n",(0,r.jsx)(n.li,{children:"Establish authenticated session"}),"\n",(0,r.jsx)(n.li,{children:"Serve authenticated content"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"multi-tenant-app-service-networking-features",children:"Multi-tenant App Service networking features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In Azure, the term multi-tenant app service refers to an environment where ",(0,r.jsx)("b",{children:(0,r.jsx)("i",{children:"multiple customers (tenants) share the same computing resources"})}),", such as a server or database."]}),"\n",(0,r.jsx)(n.li,{children:"Inbound traffic: The data coming into your Azure cloud/resource from the internet or other networks."}),"\n",(0,r.jsx)(n.li,{children:"Outbounds traffic: The data leaving your Azure cloud/resource to head to other networks."}),"\n",(0,r.jsxs)(n.li,{children:["Inbound features:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"App-assigned address \u2192 Support IP-based SSL needs for your app, support unshared dedicated inbound address for your app."}),"\n",(0,r.jsx)(n.li,{children:"Access restrictions \u2192 Restrict access to your app from a set of well-defined addresses."}),"\n",(0,r.jsx)(n.li,{children:"Service endpoints"}),"\n",(0,r.jsx)(n.li,{children:"Private endpoints"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Outbound features:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Hybrid connections"}),"\n",(0,r.jsx)(n.li,{children:"Gateway-required virtual network integration"}),"\n",(0,r.jsx)(n.li,{children:"Virtual network integration"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"configure-web-app-settings",children:"Configure Web App Settings"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"scale-apps-in-azure-app-service",children:"Scale apps in Azure App Service"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"explore-azure-app-service-deployment-slots",children:"Explore Azure App Service deployment slots"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"knowlege-check",children:"Knowlege Check"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Which of the following App Service plan categories provides the maximum scale-out capabilities?"}),"\n",(0,r.jsx)(n.li,{children:"Which of the following networking features of App Service can be used to control outbound network traffic?"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var r=i(7294);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);