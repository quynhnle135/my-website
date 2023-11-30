"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9205],{2925:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=i(5893),t=i(1151);const a={title:"Oct 03, 2023"},o="Coding Journal: Oct 03, 2023",d={id:"learning-journal/October/20231003",title:"Oct 03, 2023",description:"BFS review",source:"@site/docs/learning-journal/October/20231003.md",sourceDirName:"learning-journal/October",slug:"/learning-journal/October/20231003",permalink:"/my-website/docs/learning-journal/October/20231003",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Oct 03, 2023"},sidebar:"tutorialSidebar",previous:{title:"Oct 02, 2023",permalink:"/my-website/docs/learning-journal/October/20231002"},next:{title:"Oct 04, 2023",permalink:"/my-website/docs/learning-journal/October/20231004"}},s={},c=[{value:"BFS review",id:"bfs-review",level:3},{value:"DFS review",id:"dfs-review",level:3},{value:"Number of Islands review (solved in BFS way)",id:"number-of-islands-review-solved-in-bfs-way",level:3},{value:"Number of Islands review (solved in DFS way)",id:"number-of-islands-review-solved-in-dfs-way",level:3},{value:"Number of Provinces (applied BFS)",id:"number-of-provinces-applied-bfs",level:3},{value:"Transitive closure",id:"transitive-closure",level:3},{value:"Detect cycle in a directed graph",id:"detect-cycle-in-a-directed-graph",level:3}];function l(n){const e={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"coding-journal-oct-03-2023",children:"Coding Journal: Oct 03, 2023"}),"\n",(0,r.jsx)(e.h3,{id:"bfs-review",children:"BFS review"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def BFS(graph):\n    queue = []\n    visited = set()\n    result = []\n    for vertex in graph:\n        if vertex not in visited:\n            queue.append(vertex)\n            while queue:\n                node = queue.pop(0)\n                if node not in visited:\n                    visited.add(node)\n                    result.append(node)\n                    for neighbor in graph[node]:\n                        if neighbor not in visited:\n                            queue.append(neighbor)\n    return result\n\n\ndef main():\n    g = {\n        "A": ["B", "C"],\n        "B": ["D"],\n        "C": ["E", "F"],\n        "D": [],\n        "E": ["F"],\n        "F": []\n    }\n    print(BFS(g))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(e.h3,{id:"dfs-review",children:"DFS review"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def DFS(graph):\n    stack = []\n    visited = set()\n    result = []\n    for vertex in graph:\n        if vertex not in visited:\n            stack.append(vertex)\n            while stack:\n                node = stack.pop()\n                if node not in visited:\n                    visited.add(node)\n                    result.append(node)\n                    for neighbor in graph[vertex]:\n                        if neighbor not in visited:\n                            stack.append(neighbor)\n    return result\n\n\ndef main():\n    graph1 = {\n        "A": ["B"],\n        "B": ["C"],\n        "C": ["D"],\n        "D": ["E"],\n        "E": []\n    }\n\n    graph2 = {\n        "A": ["B", "C"],\n        "B": ["D", "E", "F"],\n        "C": [],\n        "D": [],\n        "E": ["G"],\n        "F": [],\n        "G": []\n    }\n\n    print(DFS(graph1))\n    print(DFS(graph2))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(e.h3,{id:"number-of-islands-review-solved-in-bfs-way",children:"Number of Islands review (solved in BFS way)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def count_islands(matrix):\n    islands = 0\n    visited = set()\n    queue = []\n    for row in range(len(matrix)):\n        for col in range(len(matrix[row])):\n            pos = (row, col)\n            if matrix[row][col] == 1 and pos not in visited:\n                queue.append(pos)\n                islands += 1\n                while queue:\n                    node = queue.pop(0)\n                    if node not in visited:\n                        visited.add(node)\n                        check_neighbors(matrix, visited, queue, node)\n    return islands\n\n\ndef check_neighbors(matrix, visited, queue, node):\n    if node[0] < 0 or node[0] > len(matrix) or node[1] < 0 or node[1] > len(matrix[node[0]]) or matrix[node[0]][node[1]] == 0:\n        return\n    up = (node[0] - 1, node[1])\n    down = (node[0] + 1, node[1])\n    left = (node[0], node[1] - 1)\n    right = (node[0], node[1] + 1)\n\n    if 0 <= up[0] < len(matrix):\n        queue.append(up)\n\n    if 0 <= down[0] < len(matrix):\n        queue.append(down)\n\n    if 0 <= left[1] < len(matrix[node[0]]):\n        queue.append(left)\n\n    if 0 <= right[1] < len(matrix[node[0]]):\n        queue.append(right)\n\n\ndef main():\n    graph1 = [\n        [1, 1, 0, 0],\n        [0, 1, 0, 0],\n        [0, 0, 0, 0],\n        [1, 0, 1, 1]\n    ]\n\n    graph2 = [\n        [1, 1, 0, 0],\n        [1, 1, 0, 0],\n        [0, 0, 0, 0],\n        [0, 0, 0, 1]\n    ]\n\n    print(count_islands(graph1))\n    print(count_islands(graph2))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(e.h3,{id:"number-of-islands-review-solved-in-dfs-way",children:"Number of Islands review (solved in DFS way)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def count_islands(matrix):\n    islands = 0\n    stack = []\n    visited = set()\n\n    for row in range(len(matrix)):\n        for col in range(len(matrix[row])):\n            pos = (row, col)\n            if matrix[row][col] == 1 and pos not in visited:\n                islands += 1\n                stack.append(pos)\n                while stack:\n                    node = stack.pop()\n                    if node not in visited:\n                        visited.add(node)\n                        DFS(matrix, stack, node)\n    return islands\n\n\ndef DFS(matrix, stack, node):\n    if node[0] < 0 or node[0] >= len(matrix) or node[1] < 0 or node[1] >= len(matrix[node[0]]) or matrix[node[0]][node[1]] == 0:\n        return\n    up = (node[0] - 1, node[1])\n    down = (node[0] + 1, node[1])\n    left = (node[0], node[1] - 1)\n    right = (node[0], node[1] + 1)\n\n    if 0 <= up[0] < len(matrix):\n        stack.append(up)\n\n    if 0 <= down[0] < len(matrix):\n        stack.append(down)\n\n    if 0 <= left[1] < len(matrix[node[0]]):\n        stack.append(left)\n\n    if 0 <= right[0] < len(matrix[node[0]]):\n        stack.append(right)\n\n\ndef main():\n    matrix = [\n        [1, 1, 0],\n        [1, 0, 0],\n        [0, 0, 1]\n    ]\n    print(count_islands(matrix))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(e.h3,{id:"number-of-provinces-applied-bfs",children:"Number of Provinces (applied BFS)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def count_provinces(matrix):\n    provinces = 0\n    n = len(matrix)\n    queue = []\n    visited = [False] * n\n    for i in range(n):\n        if not visited[i]:\n            provinces += 1\n            queue.append(i)\n            while queue:\n                node = queue.pop(0)\n                if not visited[node]:\n                    visited[node] = True\n                    for j in range(n):\n                        if matrix[node][j] == 1 and not visited[j]:\n                            queue.append(j)\n    return provinces\n\n\ndef main():\n    graph1 = [\n        [1, 1, 0],\n        [0, 1, 1],\n        [0, 0, 1],\n    ]\n    graph2 = [\n        [1, 1, 0, 0],\n        [0, 1, 0, 0],\n        [0, 0, 1, 1],\n        [0, 0, 0, 1]\n    ]\n\n    print(count_provinces(graph1))\n    print(count_provinces(graph2))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,r.jsx)(e.h3,{id:"transitive-closure",children:"Transitive closure"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def transitive_closure(graph):\n    n = len(graph)\n    tc = [0] * n\n    for i in range(n):\n        tc[i] = graph[i]\n\n    for row in range(n):\n        for col in range(n):\n            if graph[row][col] == 1:\n                check_neighbor(graph, tc, row, col)\n    return tc\n\n\ndef check_neighbor(graph, tc, s, v):\n    tc[s][v] = 1\n    n = len(graph)\n    for row in range(n):\n        for col in range(n):\n            if graph[v][col] == 1 and tc[s][col] == 0:\n                check_neighbor(graph, tc, s, col)\n\n\ndef main():\n    graph1 = [\n        [1, 1, 0, 0],\n        [0, 1, 1, 0],\n        [0, 0, 1, 1],\n        [0, 0, 0, 1]\n    ]\n    print(transitive_closure(graph1))\n    graph2 = [\n        [1, 1, 0, 1],\n        [0, 1, 0, 0],\n        [0, 1, 1, 0],\n        [0, 0, 0, 1]\n    ]\n    print(transitive_closure(graph2))\n    graph3 = [\n        [1, 1, 0, 0],\n        [0, 1, 1, 0],\n        [0, 0, 1, 0],\n        [1, 0, 0, 1]\n    ]\n    print(transitive_closure(graph3))\n\n\nif __name__ == "__main__":\n    main()\n\n'})}),"\n",(0,r.jsx)(e.h3,{id:"detect-cycle-in-a-directed-graph",children:"Detect cycle in a directed graph"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def detect_cycle(graph):\n    n = len(graph)\n    visited = [False] * n\n    for i in range(n):\n        if visited[i]:\n            continue\n        stack = [i]\n        while stack:\n            v = stack[-1]\n            if not visited[v]:\n                visited[v] = True\n            else:\n                stack.pop()\n                continue\n            for j in range(n):\n                if graph[v][j] == 1:\n                    if not visited[j]:\n                        stack.append(j)\n                    elif j in stack:\n                        return True\n    return False\n\n\ndef isCyclic(graph):\n    n = len(graph)\n    visited = [False] * n\n    recStack = [False] * n\n\n    for i in range(n):\n        if not visited[i]:\n            if isCyclicUtil(i, graph, visited, recStack):\n                return True\n    return False\n\n\ndef isCyclicUtil(v, graph, visited, recStack):\n    visited[v] = True\n    recStack[v] = True\n\n    for i in range(len(graph)):\n        if graph[v][i] == 1:\n            if not visited[i]:\n                if isCyclicUtil(i, graph, visited, recStack):\n                    return True\n            elif recStack[i]:\n                return True\n\n    recStack[v] = False\n    return False\n\n\ndef main():\n    matrix1 = [\n        [0, 1, 0, 0],\n        [0, 0, 1, 1],\n        [1, 0, 0, 0],\n        [0, 0, 0, 0]\n    ]\n\n    matrix2 = [\n        [0, 1, 0, 0],\n        [0, 0, 1, 1],\n        [0, 0, 0, 0],\n        [0, 0, 0, 0]\n    ]\n\n    print(detect_cycle(matrix1))\n    print(isCyclic(matrix1))\n    print(detect_cycle(matrix2))\n    print(isCyclic(matrix2))\n\n\nif __name__ == "__main__":\n    main()\n'})})]})}function p(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>d,a:()=>o});var r=i(7294);const t={},a=r.createContext(t);function o(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);