"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Day 7"},i="Stack - FILO!!!!",s={unversionedId:"leetcode-grinding/leetcode-75/day-7",id:"leetcode-grinding/leetcode-75/day-7",title:"Day 7",description:"2390. Removing Stars From a String",source:"@site/docs/leetcode-grinding/leetcode-75/day-7.md",sourceDirName:"leetcode-grinding/leetcode-75",slug:"/leetcode-grinding/leetcode-75/day-7",permalink:"/my-website/docs/leetcode-grinding/leetcode-75/day-7",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode-grinding/leetcode-75/day-7.md",tags:[],version:"current",frontMatter:{title:"Day 7"},sidebar:"tutorialSidebar",previous:{title:"Day 6",permalink:"/my-website/docs/leetcode-grinding/leetcode-75/day-6"},next:{title:"Tutorial Intro",permalink:"/my-website/docs/intro"}},c={},l=[{value:"2390. Removing Stars From a String",id:"2390-removing-stars-from-a-string",level:4},{value:"735. Asteroid Collision",id:"735-asteroid-collision",level:4},{value:"394. Decode String",id:"394-decode-string",level:4}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stack---filo"},"Stack - FILO!!!!"),(0,o.kt)("h4",{id:"2390-removing-stars-from-a-string"},"2390. Removing Stars From a String"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution(object):\n    def removeStars(self, s):\n        stack = []\n        for c in s:\n            if c == "*":\n                stack.pop()\n            else:\n                stack.append(c)\n        return "".join(stack)\n\n\ndef main():\n    solution = Solution()\n    print(solution.removeStars("leet**cod*e"))\n    print(solution.removeStars("erase*****"))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,o.kt)("h4",{id:"735-asteroid-collision"},"735. Asteroid Collision"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution(object):\n    def asteroidCollision(self, asteroids):\n        stack = []\n        for a in asteroids:\n            if not stack or a > 0:\n                stack.append(a)\n            else:\n                while stack and stack[-1] > 0 and stack[-1] < -a:\n                    stack.pop()\n                if not stack or stack[-1] < 0:\n                    stack.append(a)\n                elif stack and stack[-1] == -a:\n                    stack.pop()\n        return stack\n\n\ndef main():\n    solution = Solution()\n    print(solution.asteroidCollision([5, 10, -5]))  # [5, 10]\n    print(solution.asteroidCollision([8, -8]))  # []\n    print(solution.asteroidCollision([10, 2, -5]))  # [10]\n\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("h4",{id:"394-decode-string"},"394. Decode String"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"")))}u.isMDXComponent=!0}}]);