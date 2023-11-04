"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Day 7"},i="Stack - FILO!!!!",c={unversionedId:"daily-practice/leetcode-75/day-7",id:"daily-practice/leetcode-75/day-7",title:"Day 7",description:"2390. Removing Stars From a String",source:"@site/docs/daily-practice/leetcode-75/day-7.md",sourceDirName:"daily-practice/leetcode-75",slug:"/daily-practice/leetcode-75/day-7",permalink:"/my-website/docs/daily-practice/leetcode-75/day-7",draft:!1,tags:[],version:"current",frontMatter:{title:"Day 7"},sidebar:"tutorialSidebar",previous:{title:"Day 6",permalink:"/my-website/docs/daily-practice/leetcode-75/day-6"},next:{title:"Day 8",permalink:"/my-website/docs/daily-practice/leetcode-75/day-8"}},l={},s=[{value:"2390. Removing Stars From a String",id:"2390-removing-stars-from-a-string",level:4},{value:"735. Asteroid Collision",id:"735-asteroid-collision",level:4},{value:"394. Decode String",id:"394-decode-string",level:4}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stack---filo"},"Stack - FILO!!!!"),(0,a.kt)("h4",{id:"2390-removing-stars-from-a-string"},"2390. Removing Stars From a String"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Solution(object):\n    def removeStars(self, s):\n        stack = []\n        for c in s:\n            if c == "*":\n                stack.pop()\n            else:\n                stack.append(c)\n        return "".join(stack)\n\n\ndef main():\n    solution = Solution()\n    print(solution.removeStars("leet**cod*e"))\n    print(solution.removeStars("erase*****"))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,a.kt)("h4",{id:"735-asteroid-collision"},"735. Asteroid Collision"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Solution(object):\n    def asteroidCollision(self, asteroids):\n        stack = []\n        for a in asteroids:\n            if not stack or a > 0:\n                stack.append(a)\n            else:\n                while stack and stack[-1] > 0 and stack[-1] < -a:\n                    stack.pop()\n                if not stack or stack[-1] < 0:\n                    stack.append(a)\n                elif stack and stack[-1] == -a:\n                    stack.pop()\n        return stack\n\n\ndef main():\n    solution = Solution()\n    print(solution.asteroidCollision([5, 10, -5]))  # [5, 10]\n    print(solution.asteroidCollision([8, -8]))  # []\n    print(solution.asteroidCollision([10, 2, -5]))  # [10]\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("h4",{id:"394-decode-string"},"394. Decode String"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"")))}u.isMDXComponent=!0}}]);