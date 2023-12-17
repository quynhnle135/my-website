"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7564],{8774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(5893),s=t(1151);const i={title:"Dec 15, 2023"},o="Coding Journal: Dec 15, 2023",a={id:"learning-journal/2023/December/20231215",title:"Dec 15, 2023",description:"- Read and summarized From Senior to Staff Software Engineer - A manager perspective",source:"@site/docs/learning-journal/2023/December/20231215.md",sourceDirName:"learning-journal/2023/December",slug:"/learning-journal/2023/December/20231215",permalink:"/docs/learning-journal/2023/December/20231215",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Dec 15, 2023"},sidebar:"tutorialSidebar",previous:{title:"Dec 14, 2023",permalink:"/docs/learning-journal/2023/December/20231214"},next:{title:"Dive Into Design Patterns",permalink:"/docs/category/dive-into-design-patterns"}},l={},p=[];function c(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"coding-journal-dec-15-2023",children:"Coding Journal: Dec 15, 2023"}),"\n",(0,r.jsx)(n.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Read and summarized ",(0,r.jsx)(n.a,{href:"https://quinnle.io/docs/tech-blogs/notes/post_42",children:"From Senior to Staff Software Engineer - A manager perspective"})]}),"\n",(0,r.jsxs)(n.li,{children:["Read and summarized ",(0,r.jsx)(n.a,{href:"https://quinnle.io/docs/tech-blogs/notes/post_43",children:"How to grow into the tech lead position"})]}),"\n",(0,r.jsx)(n.li,{children:"Started learning about News API and tried out some of its endpoints"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"2-questions-i-have",children:"2. Questions I Have"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"What are the differences among everything, sources, and top-headlines endpoints in News API?"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"I didn't find anything challening today"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,r.jsx)(n.p,{children:"Practiced with News API endpoints and figured out its return values"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="get_news.py"',children:'import json\nimport requests\n\n\nURL = "https://newsapi.org/v2/top-headlines?category=technology&language=en"\nheader = {\n    "X-Api-Key": "b939e78e924b4e949331cc38cab93a95"\n}\n\nresponse = requests.request(method="GET", url=URL, headers=header).json()\nresult = json.dumps(response, indent=4)\n\nprint(f"Type of result: {type(result)}")\nprint(f"Type of response: {type(response)}")\nprint(f"Response status: {response[\'status\']}")\nprint(f"Type of response[articles]: {type(response[\'articles\'])}")\nprint(f"Length of articles: {len(response[\'articles\'])}")\nprint(f"Keywords in response[articles]: {response[\'articles\'][0].keys()}")\nprint(response["articles"])\n\narticles = response[\'articles\']\n\nprint("---20 Articles\' titles of top-headlines in category Technology---")\ncount = 1\nfor item in articles:\n    title = item[\'title\']\n    print(f"{count}. {title}\\n")\n    count += 1\n\nprint("---")\nprint("---Get news with Python Keyword---")\nurl_python = "https://newsapi.org/v2/everything?q=python&sortBy=popularity&language=en&from=2023-12-01&to=2023-12-15"\nresponse_python = requests.request(method="GET", url=url_python, headers=header).json()\nprint(response_python)\nprint(response_python.keys())\nprint(f"Total results: {response_python[\'totalResults\']}")\nprint(f"Articles: {response_python[\'articles\']}")\nprint(len(response_python[\'articles\']))\n\narticles_python = response_python[\'articles\'][:20]\nprint(len(articles_python))\nprint(type(articles_python))\nprint(articles_python[0])\nprint(articles_python[0].keys())\n\nprint()\nprint("---20 Python articles---")\ncount = 1\nfor item in articles_python:\n    print(f"{count}. {item[\'title\']}\\n"\n          f"Written by: {item[\'author\']}\\n"\n          f"Published at: {item[\'publishedAt\']}")\n    count += 1\n    print()\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Practiced with top-headlines and everything endpoints:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Customized top-headlines endpoint which the category is technology and the articles are written in English"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'URL = "https://newsapi.org/v2/top-headlines?category=technology&language=en"\nheader = {\n    "X-Api-Key": "b939e78e924b4e949331cc38cab93a95"\n}               \nresponse = requests.request(method="GET", url=URL, headers=header).json()\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Customized everythin endpoint with ",(0,r.jsx)("i",{children:"python"})," appearing in title or the paragraph, ",(0,r.jsx)("i",{children:"written in English, published from 2023-12-01 to 2023-12-15 and sorted by poppularity"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'url_python = "https://newsapi.org/v2/everything?q=python&sortBy=popularity&language=en&from=2023-12-01&to=2023-12-15"\nresponse_python = requests.request(method="GET", url=url_python, headers=header).json()\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import json\nimport requests\n\n\nURL = "https://newsapi.org/v2/top-headlines?category=technology&language=en"\nheader = {\n    "X-Api-Key": "b939e78e924b4e949331cc38cab93a95"\n}\n\nresponse = requests.request(method="GET", url=URL, headers=header).json()\nresult = json.dumps(response, indent=4)\n\nprint(f"Type of result: {type(result)}")\nprint(f"Type of response: {type(response)}")\nprint(f"Response status: {response[\'status\']}")\nprint(f"Type of response[articles]: {type(response[\'articles\'])}")\nprint(f"Length of articles: {len(response[\'articles\'])}")\nprint(f"Keywords in response[articles]: {response[\'articles\'][0].keys()}")\nprint(response["articles"])\n\narticles = response[\'articles\']\n\nprint("---20 Articles\' titles of top-headlines in category Technology---")\ncount = 1\nfor item in articles:\n    title = item[\'title\']\n    print(f"{count}. {title}\\n")\n    count += 1\n\nprint("---")\nprint("---Get news with Python Keyword---")\nurl_python = "https://newsapi.org/v2/everything?q=python&sortBy=popularity&language=en&from=2023-12-01&to=2023-12-15"\nresponse_python = requests.request(method="GET", url=url_python, headers=header).json()\nprint(response_python)\nprint(response_python.keys())\nprint(f"Total results: {response_python[\'totalResults\']}")\nprint(f"Articles: {response_python[\'articles\']}")\nprint(len(response_python[\'articles\']))\n\narticles_python = response_python[\'articles\'][:20]\nprint(len(articles_python))\nprint(type(articles_python))\nprint(articles_python[0])\nprint(articles_python[0].keys())\n\nprint()\nprint("---20 Python articles---")\ncount = 1\nfor item in articles_python:\n    print(f"{count}. {item[\'title\']}\\n"\n          f"Written by: {item[\'author\']}\\n"\n          f"Published at: {item[\'publishedAt\']}")\n    count += 1\n    print()\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Practiced more with everything, top-headlines, and sources endpoints"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Get news having Python in the title and written in English"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'from api_key import API_KEY\nimport requests\n\n\nurl = "https://newsapi.org/v2/everything?qInTitle=python&language=en"\nheader = {\n    "X-Api-Key": API_KEY\n}\nresponse = requests.request(method="GET", url=url, headers=header).json()\nprint(response)\narticles = response["articles"][:20]\ncount = 1\n\nfor item in articles:\n    print(f"{count}. {item[\'title\']}\\n"\n        f"Written by: {item[\'author\']}\\n"\n        f"Read the full article at: {item[\'url\']}")\n    count += 1\n    print()\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Get top-headlines news in America"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="get_top_headlines_news.py"',children:'import requests\n\n\nAPI_KEY = "b939e78e924b4e949331cc38cab93a95"\nurl = "https://newsapi.org/v2/top-headlines?country=us"\nheader = {\n    "X-Api-Key": API_KEY\n}\n\nresponse = requests.request(method="GET", url=url, headers=header).json()\n# print(response.keys())\n# print(response[\'articles\'][0].keys())\narticles = response[\'articles\'][:20]\n\nprint("---20 top and breaking news in the US---")\ncount = 1\nfor item in articles:\n    print(f"{count}. {item[\'title\']}\\n"\n        f"Written by: {item[\'author\']}\\n"\n        f"Read the full article at: {item[\'url\']}")\n    print()\n    count += 1\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Get top-headlines new in category Technology"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'title="get_top_headlines_technology_news.py"',children:'import requests\nfrom api_key import API_KEY\n\nurl = "https://newsapi.org/v2/top-headlines/sources?category=technology"\nheader = {\n    "X-Api-Key": API_KEY\n}\n\nresponse = requests.request(method="GET", url=url, headers=header).json()\n# print(response[\'sources\'][0].keys())\narticles = response[\'sources\'][:10]\ncount = 1\n\nprint("---Top 10 publishers about Technology---")\n\nfor item in articles:\n    print(f"{count}. {item[\'description\']} - {item[\'name\']}\\n"\n        f"Read articles at: {item[\'url\']}")\n    print()\n    count += 1\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(7294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);