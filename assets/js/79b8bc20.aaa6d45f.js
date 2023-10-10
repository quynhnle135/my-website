"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4017],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),l=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=l(n.components);return r.createElement(s.Provider,{value:e},n.children)},p="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,s=n.parentName,c=d(n,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(m,a(a({ref:e},c),{},{components:t})):r.createElement(m,a({ref:e},c))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=f;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=n,d[p]="string"==typeof n?n:o,a[1]=d;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4874:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const i={title:"Oct 7"},a=void 0,d={unversionedId:"coding-journal/2023/October/oct_07_23",id:"coding-journal/2023/October/oct_07_23",title:"Oct 7",description:"BFS and DFS review",source:"@site/docs/coding-journal/2023/October/oct_07_23.md",sourceDirName:"coding-journal/2023/October",slug:"/coding-journal/2023/October/oct_07_23",permalink:"/my-website/docs/coding-journal/2023/October/oct_07_23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding-journal/2023/October/oct_07_23.md",tags:[],version:"current",frontMatter:{title:"Oct 7"},sidebar:"tutorialSidebar",previous:{title:"Oct 5",permalink:"/my-website/docs/coding-journal/2023/October/oct_05_23"},next:{title:"Oct 9",permalink:"/my-website/docs/coding-journal/2023/October/oct_09_23"}},s={},l=[{value:"BFS and DFS review",id:"bfs-and-dfs-review",level:3},{value:"BFS review",id:"bfs-review",level:4},{value:"Count Islands in BFS way",id:"count-islands-in-bfs-way",level:4},{value:"DFS review",id:"dfs-review",level:4},{value:"Count Islands in DFS way",id:"count-islands-in-dfs-way",level:4}],c={toc:l},p="wrapper";function u(n){let{components:e,...t}=n;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"bfs-and-dfs-review"},"BFS and DFS review"),(0,o.kt)("h4",{id:"bfs-review"},"BFS review"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def BFS(graph):\n    queue = []\n    visited = set()\n    result = []\n    for vertex in graph:\n        if vertex not in visited:\n            queue.append(vertex)\n            while queue:\n                node = queue.pop(0)\n                if node not in visited:\n                    visited.add(node)\n                    result.append(node)\n                    for neighbors in graph[node]:\n                        queue.append(neighbors)\n    return result\n\n\ndef main():\n    graph = {\n        "A": ["B", "C"],\n        "B": ["D", "E"],\n        "C": ["F"],\n        "D": [],\n        "E": ["F"],\n        "F": []\n    }\n    print(BFS(graph))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("h4",{id:"count-islands-in-bfs-way"},"Count Islands in BFS way"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def countIslands(matrix):\n    islands = 0\n    queue = []\n    visited = set()\n    for row in range(len(matrix)):\n        for col in range(len(matrix[row])):\n            pos = (row, col)\n            if matrix[row][col] == "1" and pos not in visited:\n                islands += 1\n                queue.append(pos)\n                while queue:\n                    node = queue.pop(0)\n                    if node not in visited:\n                        visited.add(node)\n                        bfs(node[0], node[1], queue, matrix)\n    return islands\n\n\ndef bfs(row, col, queue, matrix):\n    if row < 0 or row > len(matrix) - 1 or col < 0 or col > len(matrix[0]) - 1 or matrix[row][col] == "0":\n        return\n    # matrix[row][col] = "0"\n    up = (row - 1, col)\n    down = (row + 1, col)\n    left = (row, col - 1)\n    right = (row, col + 1)\n\n    if 0 <= up[0] < len(matrix):\n        queue.append(up)\n\n    if 0 <= down[0] < len(matrix):\n        queue.append(down)\n\n    if 0 <= left[1] < len(matrix[0]):\n        queue.append(left)\n\n    if 0 <= right[1] < len(matrix[0]):\n        queue.append(right)\n\n\ndef main():\n    print(countIslands([\n                          ["1","1","1","1","0"],\n                          ["1","1","0","1","0"],\n                          ["1","1","0","0","0"],\n                          ["0","0","0","0","0"]\n                       ]))\n\n    print(countIslands([\n                          ["1","1","0","0","0"],\n                          ["1","1","0","0","0"],\n                          ["0","0","1","0","0"],\n                          ["0","0","0","1","1"]\n                       ]))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("h4",{id:"dfs-review"},"DFS review"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def DFS(graph):\n    stack = []\n    visited = set()\n    result = []\n    for vertex in graph:\n        if vertex not in visited:\n            stack.append(vertex)\n            while stack:\n                node = stack.pop()\n                if node not in visited:\n                    visited.add(node)\n                    result.append(node)\n                    for neighbors in graph[node]:\n                        stack.append(neighbors)\n    return result\n\n\ndef main():\n    graph = {\n        "A": ["B", "C"],\n        "B": ["D", "E"],\n        "C": ["F"],\n        "D": [],\n        "E": ["F"],\n        "F": []\n    }\n    print(DFS(graph))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,o.kt)("h4",{id:"count-islands-in-dfs-way"},"Count Islands in DFS way"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def count_islands(matrix):\n    islands = 0\n    stack = []\n    visited = set()\n\n    for row in range(len(matrix)):\n        for col in range(len(matrix[row])):\n            pos = (row, col)\n            if matrix[row][col] == 1 and pos not in visited:\n                islands += 1\n                stack.append(pos)\n                while stack:\n                    node = stack.pop()\n                    if node not in visited:\n                        visited.add(node)\n                        DFS(matrix, stack, node)\n    return islands\n\n\ndef DFS(matrix, stack, node):\n    if node[0] < 0 or node[0] >= len(matrix) or node[1] < 0 or node[1] >= len(matrix[node[0]]) or matrix[node[0]][node[1]] == 0:\n        return\n    up = (node[0] - 1, node[1])\n    down = (node[0] + 1, node[1])\n    left = (node[0], node[1] - 1)\n    right = (node[0], node[1] + 1)\n\n    if 0 <= up[0] < len(matrix):\n        stack.append(up)\n\n    if 0 <= down[0] < len(matrix):\n        stack.append(down)\n\n    if 0 <= left[1] < len(matrix[node[0]]):\n        stack.append(left)\n\n    if 0 <= right[0] < len(matrix[node[0]]):\n        stack.append(right)\n\n\ndef main():\n    matrix = [\n        [1, 1, 0],\n        [1, 0, 0],\n        [0, 0, 1]\n    ]\n    print(count_islands(matrix))\n\n\nif __name__ == "__main__":\n    main()\n')))}u.isMDXComponent=!0}}]);