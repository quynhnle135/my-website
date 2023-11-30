"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9869],{7502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=n(5893),i=n(1151);const s={ttile:"Custom Domain and Github Pages"},a="Trouble Shooting: Custom Domain and Github Pages",d={id:"trouble-shooting/custom_domain",title:"Trouble Shooting: Custom Domain and Github Pages",description:"* I changed my website's domain name from quynhnle135.github.io/my-website/ to quinnle.io",source:"@site/docs/trouble-shooting/custom_domain.md",sourceDirName:"trouble-shooting",slug:"/trouble-shooting/custom_domain",permalink:"/docs/trouble-shooting/custom_domain",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{ttile:"Custom Domain and Github Pages"},sidebar:"tutorialSidebar",previous:{title:"Trouble Shooting",permalink:"/docs/category/trouble-shooting"},next:{title:"test_coverage",permalink:"/docs/trouble-shooting/test_coverage"}},u={},l=[{value:"Does it affect my website if I change my default website&#39;s domain name deployed using Github Pages to my custom domain?",id:"does-it-affect-my-website-if-i-change-my-default-websites-domain-name-deployed-using-github-pages-to-my-custom-domain",level:3},{value:"Do I have to deploy my website all over again?",id:"do-i-have-to-deploy-my-website-all-over-again",level:3},{value:"Do I need to update my url and baseUrl in docusaurus.config.js file?",id:"do-i-need-to-update-my-url-and-baseurl-in-docusaurusconfigjs-file",level:3},{value:"Why I access quinnle.io to see my website but it shows nothing?",id:"why-i-access-quinnleio-to-see-my-website-but-it-shows-nothing",level:3},{value:"Why I added new content and deployed to update the website, the new custom domain cannot access but the old one?",id:"why-i-added-new-content-and-deployed-to-update-the-website-the-new-custom-domain-cannot-access-but-the-old-one",level:3}];function c(e){const t={a:"a",h1:"h1",h3:"h3",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"trouble-shooting-custom-domain-and-github-pages",children:"Trouble Shooting: Custom Domain and Github Pages"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"I changed my website's domain name from quynhnle135.github.io/my-website/ to quinnle.io"}),"\n",(0,o.jsx)(t.li,{children:'My question when it comes to changing domain name is "Does it affect my website?", "Do I have to deploy my website all over again with the new domain name?", "Do I need to update my url and baseUrl in docusaurus.config.js file?"'}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"does-it-affect-my-website-if-i-change-my-default-websites-domain-name-deployed-using-github-pages-to-my-custom-domain",children:"Does it affect my website if I change my default website's domain name deployed using Github Pages to my custom domain?"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The answer is no, it doesn't affect my wesbite. Changing my default's website domain in Github Pages involves setting up a redirect from the old domain to the new one. This means that if someone accesses my website using the old domain, they will be automatically redirected to the new custom domain."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"do-i-have-to-deploy-my-website-all-over-again",children:"Do I have to deploy my website all over again?"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"No, I don't need to deplpy my website all over again. However, I need to set up DNS (Domain Name System)."}),"\n",(0,o.jsxs)(t.li,{children:["To set up DNS, I have to update Host Records in Advanced DNS in Namecheap Domain setting. Provide 4 A records (check them [here][",(0,o.jsx)(t.a,{href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site",children:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site"}),"])"," and CNAME (host: www; value: quynhnle135.github.io)"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"do-i-need-to-update-my-url-and-baseurl-in-docusaurusconfigjs-file",children:"Do I need to update my url and baseUrl in docusaurus.config.js file?"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'I only need to update baseUrl to "/" instead of "/my-website/"'}),"\n",(0,o.jsx)(t.li,{children:"The url doesn't need updating becasue I enter my custom domain in Github already."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"why-i-access-quinnleio-to-see-my-website-but-it-shows-nothing",children:"Why I access quinnle.io to see my website but it shows nothing?"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Configuring DNS with new custom domain will take at least 30 minutes. After 30 minutes, I refresh my website and it works perfectly fine."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"why-i-added-new-content-and-deployed-to-update-the-website-the-new-custom-domain-cannot-access-but-the-old-one",children:"Why I added new content and deployed to update the website, the new custom domain cannot access but the old one?"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"By the question above I mean it deploys the site at the default github.io domain, if I go back to the GitHub repository settings, the custom domain was removed and I need to add it manually."}),"\n",(0,o.jsxs)(t.li,{children:["To solve this, I need to add CNAME file in static folder and also update my url and baseUrl. It was explained by [Docusaurus documentation][",(0,o.jsx)(t.a,{href:"https://docusaurus.io/docs/deployment",children:"https://docusaurus.io/docs/deployment"}),"]"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var o=n(7294);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);