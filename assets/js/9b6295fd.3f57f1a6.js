"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=a,u=p["".concat(d,".").concat(c)]||p[c]||f[c]||i;return n?r.createElement(u,o(o({ref:t},m),{},{components:n})):r.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Nov 5"},o=void 0,l={unversionedId:"learning-journal/2023/November/11_5_23",id:"learning-journal/2023/November/11_5_23",title:"Nov 5",description:"What I did today:",source:"@site/docs/learning-journal/2023/11 - November/11_5_23.md",sourceDirName:"learning-journal/2023/11 - November",slug:"/learning-journal/2023/November/11_5_23",permalink:"/my-website/docs/learning-journal/2023/November/11_5_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Nov 5"},sidebar:"tutorialSidebar",previous:{title:"Nov 04",permalink:"/my-website/docs/learning-journal/2023/November/11_4_23"},next:{title:"Nov 10",permalink:"/my-website/docs/learning-journal/2023/11_10_23"}},d={},s=[{value:"Markdown Generator",id:"markdown-generator",level:3}],m={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"What I did today: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Leetcode: solving/reviewing some graph problems"),(0,a.kt)("li",{parentName:"ul"},"Created technical blogs page to store useful/informative tech articles"),(0,a.kt)("li",{parentName:"ul"},"Created Markdown file generator in basic Python and start with the Click using CLI (Command-line interface)")),(0,a.kt)("h3",{id:"markdown-generator"},"Markdown Generator"),(0,a.kt)("p",null,"First, I have to review file handling in Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport datetime\n\nget_files = os.listdir("/Users/quinnle/Desktop/random")\nprint(get_files)\ntoday = datetime.date.today()\nfile_name = f"{today.strftime(\'%Y%m%d\')}.md"\nfile_path = os.path.join("/Users/quinnle/Desktop/random", file_name)\nnew_file = open(file_path, "w")\n\n\ntomorrow = datetime.date.today() + datetime.timedelta(days=1)\nnew_file_name = f"{tomorrow.strftime(\'%y%m%d\')}.md"\nnew_file_path = os.path.join("/Users/quinnle/Desktop/random", new_file_name)\n# add new file\nwith open(file_path, "w") as f:\n    f.write()\nget_files_second = os.listdir("/Users/quinnle/Desktop/random")\nprint(get_files_second)\n\n')),(0,a.kt)("p",null,"Practice witg datetime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\n\ntoday = datetime.date.today()\nprint(f"today type\'s: {type(today)}")\nprint(today)\ntoday_str = today.strftime("%Y%m%d")\nanother_day = today.strftime("%Y/%m/%d")\nvietnamese_style = today.strftime("%d/%m/%Y")\nprint(today_str)\nprint(another_day)\nprint(vietnamese_style)\n\nnext_week = today + datetime.timedelta(weeks=1)\nprint(next_week)\n')),(0,a.kt)("p",null,"Markdonw planner"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\nimport datetime\n\n\ndef generate_md_file(directory):\n    if not os.path.exists(directory):\n        os.makedirs(directory)\n\n    # Get today\'s date\n    today = datetime.date.today()\n\n    for i in range(1, 8):\n        file_date = today + datetime.timedelta(days=i)\n        file_name = f"{file_date.strftime(\'%y%m%d\')}.md"\n        file_path = f"{directory}/{file_name}"\n\n        with open(file_path, "w") as f:\n            f.write(f"{file_date.strftime(\'%y%m%d\')}\\n\\n")\n        print(f"File {file_name} created at: {file_path}")\n')),(0,a.kt)("p",null,"main file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import markdown_planner\nimport os\n\n\ndef main():\n    folder_directory = input("Where you want to create Markdown files?\\n").strip()\n    markdown_planner.generate_md_file(folder_directory)\n\n    # check if files are created\n    all_files = os.listdir(folder_directory)\n    print(f"Here are all files in {folder_directory}:{all_files}")\n\n\nif __name__ == "__main__":\n    main()\n\n')))}f.isMDXComponent=!0}}]);