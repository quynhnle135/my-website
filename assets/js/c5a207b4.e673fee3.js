"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1865],{5476:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=i(5893),r=i(1151);const a={title:"Oct 07, 2023"},o="Coding Journal: Oct 07, 2023",s={id:"learning-journal/October/20231007",title:"Oct 07, 2023",description:"BFS and DFS review",source:"@site/docs/learning-journal/October/20231007.md",sourceDirName:"learning-journal/October",slug:"/learning-journal/October/20231007",permalink:"/my-website/docs/learning-journal/October/20231007",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Oct 07, 2023"},sidebar:"tutorialSidebar",previous:{title:"Oct 05, 2023",permalink:"/my-website/docs/learning-journal/October/20231005"},next:{title:"Oct 09, 2023",permalink:"/my-website/docs/learning-journal/October/20231009"}},d={},l=[{value:"BFS and DFS review",id:"bfs-and-dfs-review",level:2},{value:"BFS review",id:"bfs-review",level:3},{value:"Count Islands in BFS way",id:"count-islands-in-bfs-way",level:3},{value:"DFS review",id:"dfs-review",level:3},{value:"Count Islands in DFS way",id:"count-islands-in-dfs-way",level:3},{value:"Interviewing.io",id:"interviewingio",level:3},{value:"Question I was asked: Kids with with the greatest number of candies",id:"question-i-was-asked-kids-with-with-the-greatest-number-of-candies",level:5},{value:"Notes:",id:"notes",level:4}];function c(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"coding-journal-oct-07-2023",children:"Coding Journal: Oct 07, 2023"}),"\n",(0,t.jsx)(e.h2,{id:"bfs-and-dfs-review",children:"BFS and DFS review"}),"\n",(0,t.jsx)(e.h3,{id:"bfs-review",children:"BFS review"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'def BFS(graph):\n    queue = []\n    visited = set()\n    result = []\n    for vertex in graph:\n        if vertex not in visited:\n            queue.append(vertex)\n            while queue:\n                node = queue.pop(0)\n                if node not in visited:\n                    visited.add(node)\n                    result.append(node)\n                    for neighbors in graph[node]:\n                        queue.append(neighbors)\n    return result\n\n\ndef main():\n    graph = {\n        "A": ["B", "C"],\n        "B": ["D", "E"],\n        "C": ["F"],\n        "D": [],\n        "E": ["F"],\n        "F": []\n    }\n    print(BFS(graph))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(e.h3,{id:"count-islands-in-bfs-way",children:"Count Islands in BFS way"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'def countIslands(matrix):\n    islands = 0\n    queue = []\n    visited = set()\n    for row in range(len(matrix)):\n        for col in range(len(matrix[row])):\n            pos = (row, col)\n            if matrix[row][col] == "1" and pos not in visited:\n                islands += 1\n                queue.append(pos)\n                while queue:\n                    node = queue.pop(0)\n                    if node not in visited:\n                        visited.add(node)\n                        bfs(node[0], node[1], queue, matrix)\n    return islands\n\n\ndef bfs(row, col, queue, matrix):\n    if row < 0 or row > len(matrix) - 1 or col < 0 or col > len(matrix[0]) - 1 or matrix[row][col] == "0":\n        return\n    # matrix[row][col] = "0"\n    up = (row - 1, col)\n    down = (row + 1, col)\n    left = (row, col - 1)\n    right = (row, col + 1)\n\n    if 0 <= up[0] < len(matrix):\n        queue.append(up)\n\n    if 0 <= down[0] < len(matrix):\n        queue.append(down)\n\n    if 0 <= left[1] < len(matrix[0]):\n        queue.append(left)\n\n    if 0 <= right[1] < len(matrix[0]):\n        queue.append(right)\n\n\ndef main():\n    print(countIslands([\n                          ["1","1","1","1","0"],\n                          ["1","1","0","1","0"],\n                          ["1","1","0","0","0"],\n                          ["0","0","0","0","0"]\n                       ]))\n\n    print(countIslands([\n                          ["1","1","0","0","0"],\n                          ["1","1","0","0","0"],\n                          ["0","0","1","0","0"],\n                          ["0","0","0","1","1"]\n                       ]))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(e.h3,{id:"dfs-review",children:"DFS review"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'def DFS(graph):\n    stack = []\n    visited = set()\n    result = []\n    for vertex in graph:\n        if vertex not in visited:\n            stack.append(vertex)\n            while stack:\n                node = stack.pop()\n                if node not in visited:\n                    visited.add(node)\n                    result.append(node)\n                    for neighbors in graph[node]:\n                        stack.append(neighbors)\n    return result\n\n\ndef main():\n    graph = {\n        "A": ["B", "C"],\n        "B": ["D", "E"],\n        "C": ["F"],\n        "D": [],\n        "E": ["F"],\n        "F": []\n    }\n    print(DFS(graph))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(e.h3,{id:"count-islands-in-dfs-way",children:"Count Islands in DFS way"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'def count_islands(matrix):\n    islands = 0\n    stack = []\n    visited = set()\n\n    for row in range(len(matrix)):\n        for col in range(len(matrix[row])):\n            pos = (row, col)\n            if matrix[row][col] == 1 and pos not in visited:\n                islands += 1\n                stack.append(pos)\n                while stack:\n                    node = stack.pop()\n                    if node not in visited:\n                        visited.add(node)\n                        DFS(matrix, stack, node)\n    return islands\n\n\ndef DFS(matrix, stack, node):\n    if node[0] < 0 or node[0] >= len(matrix) or node[1] < 0 or node[1] >= len(matrix[node[0]]) or matrix[node[0]][node[1]] == 0:\n        return\n    up = (node[0] - 1, node[1])\n    down = (node[0] + 1, node[1])\n    left = (node[0], node[1] - 1)\n    right = (node[0], node[1] + 1)\n\n    if 0 <= up[0] < len(matrix):\n        stack.append(up)\n\n    if 0 <= down[0] < len(matrix):\n        stack.append(down)\n\n    if 0 <= left[1] < len(matrix[node[0]]):\n        stack.append(left)\n\n    if 0 <= right[0] < len(matrix[node[0]]):\n        stack.append(right)\n\n\ndef main():\n    matrix = [\n        [1, 1, 0],\n        [1, 0, 0],\n        [0, 0, 1]\n    ]\n    print(count_islands(matrix))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(e.h3,{id:"interviewingio",children:"Interviewing.io"}),"\n",(0,t.jsx)(e.h5,{id:"question-i-was-asked-kids-with-with-the-greatest-number-of-candies",children:"Question I was asked: Kids with with the greatest number of candies"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'class Solution(object):\n    def kidsWithCandies(self, candies, extraCandies):\n        """\n        :type candies: List[int]\n        :type extraCandies: int\n        :rtype: List[bool]\n        """\n        max_candies = max(candies)\n        for i in range(len(candies)):\n            if max_candies - candies[i] <= extraCandies:\n                candies[i] = True\n            else:\n                candies[i] = False\n        return candies\n'})}),"\n",(0,t.jsx)(e.h4,{id:"notes",children:"Notes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"The problem is pretty easy but can try to provide the second approach faster. Took me 30 minutes to come up with 2 approaches for this problem"}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>s,a:()=>o});var t=i(7294);const r={},a=t.createContext(r);function o(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);