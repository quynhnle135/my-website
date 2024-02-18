"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[677],{7565:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=r(5893),i=r(1151);const t={title:"Feb 07, 2024"},o="Coding Journal: Feb 07, 2024",a={id:"learning-journal/2024/February/20240207",title:"Feb 07, 2024",description:"- Continued solving Leetcode to prepare for technical interviews",source:"@site/docs/learning-journal/2024/February/20240207.md",sourceDirName:"learning-journal/2024/February",slug:"/learning-journal/2024/February/20240207",permalink:"/docs/learning-journal/2024/February/20240207",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Feb 07, 2024"},sidebar:"tutorialSidebar",previous:{title:"Feb 06, 2024",permalink:"/docs/learning-journal/2024/February/20240206"},next:{title:"Feb 14, 2024",permalink:"/docs/learning-journal/2024/February/20240214"}},l={},c=[{value:"Ismorphic String",id:"ismorphic-string",level:4},{value:"Longest Common Prefix",id:"longest-common-prefix",level:4},{value:"Reverse Words in A String",id:"reverse-words-in-a-string",level:4},{value:"Best Time To Buy Stock",id:"best-time-to-buy-stock",level:4},{value:"Valid Anagrams",id:"valid-anagrams",level:4},{value:"Group Anagrams",id:"group-anagrams",level:4}];function d(n){const e={code:"code",h1:"h1",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"coding-journal-feb-07-2024",children:"Coding Journal: Feb 07, 2024"}),"\n",(0,s.jsx)(e.h1,{id:"1-what-i-learned-and-did-today",children:"1. What I Learned and Did Today"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Continued solving Leetcode to prepare for technical interviews"}),"\n",(0,s.jsxs)(e.li,{children:["Prepare for technical round with BeaconFire, ramp up JavaScript knowledge:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Array/String:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Ismorphic String"}),"\n",(0,s.jsx)(e.li,{children:"Longest Common Prefix"}),"\n",(0,s.jsx)(e.li,{children:"Reverse Words in A String"}),"\n",(0,s.jsx)(e.li,{children:"Best Time To Buy Stock"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Hashmap:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Valid Anagrams"}),"\n",(0,s.jsx)(e.li,{children:"Group Anagrams"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"2-question-i-had-today",children:"2. Question I Had Today"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"I didn't have any question for today."}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"3-what-i-found-challenging-today",children:"3. What I Found Challenging Today"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"I didn't find anything challenging for today."}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,s.jsx)(e.h4,{id:"ismorphic-string",children:"Ismorphic String"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'function isomorphicStr(s, t) {\n    if (s.length !== t.length) {\n        return false;\n    }\n\n    let sDict = new Map();\n    let tDict = new Map();\n\n    for (let i = 0; i < s.length; i++) {\n        sChar = s[i];\n        tChar = t[i];\n\n        if (sDict.has(sChar)) {\n            if (sDict.get(sChar) !== tChar) {\n                return false;\n            } \n        } else {\n            sDict.set(sChar, tChar);\n        }\n\n        if (tDict.has(tChar)) {\n            if (tDict.get(tChar) !== sChar) {\n                return false;\n            } \n        } else {\n            tDict.set(tChar, sChar);\n        }\n    }\n    return true;\n}\n\nconsole.log(isomorphicStr(s="egg", t="add")); // true\nconsole.log(isomorphicStr(s="bar", t="foo")); // false\nconsole.log(isomorphicStr(s="paper", t="title")); // true\n\n'})}),"\n",(0,s.jsx)(e.h4,{id:"longest-common-prefix",children:"Longest Common Prefix"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'function longestCommonPrefix(strs) {\n    if (strs.length === 0) {\n        return "";\n    }\n    let prefix = strs[0];\n    for (let i = 1; i < strs.length; i++) {\n        while (strs[i].indexOf(prefix) !== 0) {\n            prefix = prefix.substring(0, prefix.length - 1);\n            if (prefix === "") {\n                return "";\n            }\n        }\n    }\n    return prefix;\n}\n\n// let s = "flower";\n// console.log(s.slice(0, s.length - 1));\n// console.log(s.substring(0, 3)); // flo\n// console.log(s.indexOf("er"));\n// console.log(s.substring(0, s.length - 1));\n\nconsole.log(longestCommonPrefix(strs=["flower","flow","flight"]));\n'})}),"\n",(0,s.jsx)(e.h4,{id:"reverse-words-in-a-string",children:"Reverse Words in A String"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'function reverseString(s) {\n    s = s.split(" ").reverse();\n    res = "";\n    for (let ch of s) {\n        if (ch !== "") {\n            res += ch + " ";\n        }\n    }\n    return res.trim();\n}\n\nlet s = "   fly me   to the moon   ";\n// s = s.replace(/[^a-z0-9]/gi, \'\');\n// let arr = s.split(" ");\n// console.log(s);\n// console.log(arr);\nconsole.log(reverseString(s));\n'})}),"\n",(0,s.jsx)(e.h4,{id:"best-time-to-buy-stock",children:"Best Time To Buy Stock"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"function bestTimeToBuyStock(prices) {\n    let min_value = Number.MAX_VALUE;\n    let profit = 0;\n    for (let price of prices) {\n        min_value = Math.min(min_value, price);\n        profit = Math.max(profit, price - min_value);\n    }\n    return profit;\n}\n\nconsole.log(bestTimeToBuyStock(prices=[7,1,5,3,6,4]));\nconsole.log(bestTimeToBuyStock(prices=[7,6,4,3,1]));\n"})}),"\n",(0,s.jsx)(e.h4,{id:"valid-anagrams",children:"Valid Anagrams"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'function is_anagrams(s, t) {\n    if (s.length != t.length) {\n        return false;\n    }\n    s_map = new Map();\n    for (let i = 0; i < s.length; i++) {\n        if (s_map[s[i]] === undefined) {\n            s_map[[s[i]]] = 1;\n        } else {\n            s_map[s[i]]++;\n        }\n    }\n    console.log(s_map);\n    for (let i = 0; i < t.length; i++) {\n        if (s_map[t[i]] === undefined) {\n            return false;\n        } else {\n            s_map[t[i]]--;\n            if (s_map[t[i]] < 0) {\n                return false;\n            }\n        }\n    }\n    return true;\n} \n\nconsole.log(is_anagrams("anagram", "margana"));  // true\nconsole.log(is_anagrams("dog", "god"));  // true\nconsole.log(is_anagrams("car", "rat")); // false\n'})}),"\n",(0,s.jsx)(e.h4,{id:"group-anagrams",children:"Group Anagrams"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:'function group_anagram(strs) {\n    let hashmap = new Map();\n\n    for (let word of strs) {\n        let sorted_word = word.split("").sort().join("");\n\n        if (!hashmap.has(sorted_word)) {\n            hashmap.set(sorted_word, []);\n        }\n\n        hashmap.get(sorted_word).push(word);\n\n    }\n    return Array.from(hashmap.values());\n}\n\nlet strs = ["eat","tea","tan","ate","nat","bat"];\n// for (let word of strs) {\n//     console.log(word);\n// }\n\nconsole.log(group_anagram(strs));\n'})})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>a,a:()=>o});var s=r(7294);const i={},t=s.createContext(i);function o(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);