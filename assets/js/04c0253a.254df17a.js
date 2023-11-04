"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7545],{3905:(n,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var t=r(7294);function i(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function a(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var l=t.createContext({}),d=function(n){var e=t.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):a(a({},e),n)),r},u=function(n){var e=d(n.components);return t.createElement(l.Provider,{value:e},n.children)},c="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},f=t.forwardRef((function(n,e){var r=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),c=d(r),f=i,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return r?t.createElement(m,a(a({ref:e},u),{},{components:r})):t.createElement(m,a({ref:e},u))}));function m(n,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s[c]="string"==typeof n?n:i,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6257:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=r(7462),i=(r(7294),r(3905));const o={title:"Oct 1"},a=void 0,s={unversionedId:"learning-journal/2023/October/oct_01_23",id:"learning-journal/2023/October/oct_01_23",title:"Oct 1",description:"DFS review",source:"@site/docs/learning-journal/2023/10 - October/oct_01_23.md",sourceDirName:"learning-journal/2023/10 - October",slug:"/learning-journal/2023/October/oct_01_23",permalink:"/my-website/docs/learning-journal/2023/October/oct_01_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Oct 1"},sidebar:"tutorialSidebar",previous:{title:"Sep 29",permalink:"/my-website/docs/learning-journal/2023/September/sep_29_23"},next:{title:"Oct 2",permalink:"/my-website/docs/learning-journal/2023/October/oct_02_23"}},l={},d=[{value:"DFS review",id:"dfs-review",level:3},{value:"BFS review",id:"bfs-review",level:3},{value:"Number of Islands but based on Node (OOP)",id:"number-of-islands-but-based-on-node-oop",level:3},{value:"Number of Islands using tuples",id:"number-of-islands-using-tuples",level:3},{value:"Transitive closure of a directed graph",id:"transitive-closure-of-a-directed-graph",level:3}],u={toc:d},c="wrapper";function p(n){let{components:e,...r}=n;return(0,i.kt)(c,(0,t.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"dfs-review"},"DFS review"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def dfs(graph, start):\n    stack = []\n    visited = set()\n    result = []\n\n    stack.append(start)\n    while stack:\n        node = stack.pop()\n        if node not in visited:\n            visited.add(node)\n            result.append(node)\n            for neighbor in graph[node]:\n                if neighbor not in visited:\n                    stack.append(neighbor)\n                    dfs(graph, neighbor)\n    return result\n\n\ndef main():\n    graph = {\n        "A": ["B", "C"],\n        "B": ["D"],\n        "C": ["E", "F"],\n        "D": [],\n        "E": ["F"],\n        "F": []\n    }\n\n    print(dfs(graph, "A"))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h3",{id:"bfs-review"},"BFS review"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def bfs(graph, start):\n    queue = []\n    visited = set()\n    result = []\n    queue.append(start)\n\n    while queue:\n        node = queue.pop(0)\n        if node not in visited:\n            visited.add(node)\n            result.append(node)\n            for neighbor in graph[node]:\n                if neighbor not in visited:\n                    queue.append(neighbor)\n    return result\n\n\ndef main():\n    graph = {\n        "A": ["B", "C"],\n        "B": ["D"],\n        "C": ["E", "F"],\n        "D": [],\n        "E": ["F"],\n        "F": []\n    }\n\n    print(bfs(graph, "A"))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h3",{id:"number-of-islands-but-based-on-node-oop"},"Number of Islands but based on Node (OOP)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Node:\n    def __init__(self, row, col):\n        self.row = row\n        self.col = col\n\n    def __hash__(self):\n        return hash((self.row, self.col))\n\n    def __eq__(self, other):\n        return (self.row == other.row) and (self.col == other.col)\n\n\ndef number_of_islands(matrix):\n    islands = 0\n    queue = []\n    visited = set()\n\n    for row in range(len(matrix)):\n        for col in range(len(matrix[row])):\n            node = Node(row, col)\n            if matrix[row][col] == "1" and node not in visited:\n                islands += 1\n                queue.append(node)\n\n                while queue:\n                    cur_node = queue.pop(0)\n                    if cur_node not in visited:\n                        visited.add(cur_node)\n                        find_neighbors(matrix, cur_node, queue)\n\n    return islands\n\n\ndef find_neighbors(matrix, cur_node, queue):\n    if cur_node.row < 0 or cur_node.row >= len(matrix) or cur_node.col < 0 or cur_node.col >= len(matrix[0]) or matrix[cur_node.row][cur_node.col] == "0":\n        return\n\n    up = Node(cur_node.row - 1, cur_node.col)\n    down = Node(cur_node.row + 1, cur_node.col)\n    left = Node(cur_node.row, cur_node.col - 1)\n    right = Node(cur_node.row, cur_node.col + 1)\n\n    if 0 <= down.row < len(matrix):\n        queue.append(down)\n\n    if 0 <= up.row < len(matrix):\n        queue.append(up)\n\n    if 0 <= right.col < len(matrix[0]):\n        queue.append(right)\n\n    if 0 <= left.col < len(matrix[0]):\n        queue.append(left)\n\n\ndef main():\n    grid1 = [\n        ["1", "1", "1", "1", "0"],\n        ["1", "1", "0", "1", "0"],\n        ["1", "1", "0", "0", "0"],\n        ["0", "0", "0", "0", "0"]\n    ]\n\n    grid2 = [\n        ["1", "1", "0", "0", "0"],\n        ["1", "1", "0", "0", "0"],\n        ["0", "0", "1", "0", "0"],\n        ["0", "0", "0", "1", "1"]\n    ]\n\n    print(number_of_islands(grid1))\n    print(number_of_islands(grid2))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,i.kt)("h3",{id:"number-of-islands-using-tuples"},"Number of Islands using tuples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def number_of_islands_dfs(matrix):\n    islands = 0\n    for row in range(len(matrix)):\n        for col in range(len(matrix[row])):\n            if matrix[row][col] == "1":\n                islands += 1\n                dfs(matrix, row, col)\n    return islands\n\n\ndef dfs(matrix, row, col):\n    if row < 0 or row >= len(matrix) or col < 0 or col >= len(matrix[0]) or matrix[row][col] == "0":\n        return\n    matrix[row][col] = "0"\n    dfs(matrix, row + 1, col)\n    dfs(matrix, row - 1, col)\n    dfs(matrix, row, col + 1)\n    dfs(matrix, row, col - 1)\n\n\ndef number_of_islands_bfs(matrix):\n    islands = 0\n    queue = []\n    visited = set()\n\n    for row in range(len(matrix)):\n        for col in range(len(matrix[row])):\n            if matrix[row][col] == 1:\n                pos = (row, col)\n                if pos not in visited:\n                    islands += 1\n                    queue.append(pos)\n                    while queue:\n                        cur_pos = queue.pop(0)\n                        if cur_pos not in visited:\n                            visited.add(cur_pos)\n                            # checking and adding neighbors\n                            find_neighbors(matrix, cur_pos, queue)\n    return islands\n\n\ndef find_neighbors(matrix, cur_pos, queue):\n    if cur_pos[0] < 0 or cur_pos[0] > len(matrix) or cur_pos[1] < 0 or cur_pos[1] > len(matrix[0]):\n        return\n    up = (cur_pos[0] - 1, cur_pos[1])\n    down = (cur_pos[0] + 1, cur_pos[1])\n    left = (cur_pos[0], cur_pos[1] - 1)\n    right = (cur_pos[0], cur_pos[1] + 1)\n\n    if 0 <= up[0] < len(matrix):\n        queue.append(up)\n\n    if 0 <= down[0] < len(matrix):\n        queue.append(down)\n\n    if 0 <= left[0] < len(matrix[0]):\n        queue.append(left)\n\n    if 0 <= right[0] < len(matrix[0]):\n        queue.append(right)\n\n\ndef main():\n    grid1 = [\n                ["1", "1", "1", "1", "0"],\n                ["1", "1", "0", "1", "0"],\n                ["1", "1", "0", "0", "0"],\n                ["0", "0", "0", "0", "0"]\n            ]\n\n    grid2 = [\n              ["1", "1", "0", "0", "0"],\n              ["1", "1", "0", "0", "0"],\n              ["0", "0", "1", "0", "0"],\n              ["0", "0", "0", "1", "1"]\n            ]\n    print(number_of_islands_dfs(grid1))\n    print(number_of_islands_dfs(grid2))\n\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("h3",{id:"transitive-closure-of-a-directed-graph"},"Transitive closure of a directed graph"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def transitive_closure_dfs(matrix):\n    tc = [0] * len(matrix)\n    for i in range(len(matrix)):\n        tc[i] = matrix[i]\n\n    for i in range(len(matrix)):\n        for j in range(len(matrix[i])):\n            if matrix[i][j] == 1:\n                dfs(matrix, tc, i, j)\n    print(tc)\n\n\ndef dfs(matrix, tc, s, v):\n    tc[s][v] = 1\n    for i in range(len(matrix)):\n        for j in range(len(matrix[i])):\n            if matrix[v][j] == 1 and tc[s][j] == 0:\n                tc[s][j] = 1\n\n\ndef main():\n    graph = [[1, 1, 0, 1],\n             [0, 1, 1, 0],\n             [0, 0, 1, 1],\n             [0, 0, 0, 1]]\n\n    graph2 = [[1, 0, 1, 1],\n              [1, 1, 0, 0],\n              [0, 0, 1, 0],\n              [0, 1, 0, 1]]\n\n    transitive_closure_dfs(graph)\n    transitive_closure_dfs(graph2)\n\n\nif __name__ == "__main__":\n    main()\n')))}p.isMDXComponent=!0}}]);