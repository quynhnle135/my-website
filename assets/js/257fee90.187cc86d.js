"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3768],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=s(t),c=i,f=h["".concat(d,".").concat(c)]||h[c]||u[c]||a;return t?r.createElement(f,p(p({ref:n},l),{},{components:t})):r.createElement(f,p({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,p=new Array(a);p[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[h]="string"==typeof e?e:i,p[1]=o;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={title:"Sep 28"},p=void 0,o={unversionedId:"learning-journal/2023/September/sep_28_23",id:"learning-journal/2023/September/sep_28_23",title:"Sep 28",description:"Graph review",source:"@site/docs/learning-journal/2023/9 - September/sep_28_23.md",sourceDirName:"learning-journal/2023/9 - September",slug:"/learning-journal/2023/September/sep_28_23",permalink:"/my-website/docs/learning-journal/2023/September/sep_28_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Sep 28"},sidebar:"tutorialSidebar",previous:{title:"Sep 27",permalink:"/my-website/docs/learning-journal/2023/September/sep_27_23"},next:{title:"Sep 29",permalink:"/my-website/docs/learning-journal/2023/September/sep_29_23"}},d={},s=[{value:"Graph review",id:"graph-review",level:3},{value:"BFS implementation",id:"bfs-implementation",level:4},{value:"DFS implementation",id:"dfs-implementation",level:4},{value:"Check existing path",id:"check-existing-path",level:4},{value:"Check cycle in undirected graph",id:"check-cycle-in-undirected-graph",level:4},{value:"Find the level of each node",id:"find-the-level-of-each-node",level:4}],l={toc:s},h="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(h,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"graph-review"},"Graph review"),(0,i.kt)("h4",{id:"bfs-implementation"},"BFS implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def breadth_first_search(graph, start):\n    queue = [start]\n    visited = set()\n    traversal = []\n\n    while queue:\n        node = queue.pop(0)\n        if node not in visited:\n            visited.add(node)\n            traversal.append(node)\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                queue.append(neighbor)\n    return traversal\n\n\ndef bfs(graph, start):\n    return bfs_helper(graph=graph, queue=[start], visited=set())\n\n\ndef bfs_helper(graph, queue, visited):\n    if not queue:\n        return []\n    node = queue.pop(0)\n    if node in visited:\n        return bfs_helper(graph, queue, visited)\n\n    visited.add(node)\n    for neighbor in graph[node]:\n        queue.append(neighbor)\n    return [node] + bfs_helper(graph, queue, visited)\n\n\ndef main():\n    graph = {\n        'A': ['B', 'C'],\n        'B': ['D', 'E'],\n        'C': ['F'],\n        'D': [],\n        'E': ['F'],\n        'F': []\n    }\n    print(breadth_first_search(graph, 'A'))\n    print(bfs(graph, 'A'))\n\n\nif __name__ == \"__main__\":\n    main()\n\n")),(0,i.kt)("h4",{id:"dfs-implementation"},"DFS implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def dfs(graph, start):\n    return dfs_helper(graph, [start], set(), [])\n\n\ndef dfs_helper(graph, stack, visited, traversal):\n    if not stack:\n        return []\n\n    while stack:\n        node = stack.pop()\n        if node not in visited:\n            visited.add(node)\n            traversal.append(node)\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                stack.append(neighbor)\n                dfs_helper(graph, stack, visited, traversal)\n    return traversal\n\n\ndef dfs_iterative(graph, start):\n    visited = set()\n    stack = [start]\n    traversal = []\n\n    while stack:\n        node = stack.pop()\n        if node not in visited:\n            visited.add(node)\n            traversal.append(node)\n\n        for neighbor in reversed(graph[node]):\n            if neighbor not in visited:\n                stack.append(neighbor)\n    return traversal\n\n\ndef main():\n    graph = {\n        'A': ['B', 'C'],\n        'B': ['A', 'D', 'E'],\n        'C': ['A', 'F'],\n        'D': ['B'],\n        'E': ['B', 'F'],\n        'F': ['C', 'E']\n    }\n    another_graph = {\n        0: [1, 3],\n        1: [0, 2],\n        2: [1, 3],\n        3: [0, 2]\n    }\n\n    print(dfs_iterative(graph, 'A'))\n    print(dfs_iterative(another_graph, 0))\n    print(dfs(graph, 'A'))\n    print(dfs(another_graph, 0))\n\n\nif __name__ == \"__main__\":\n    main()\n")),(0,i.kt)("h4",{id:"check-existing-path"},"Check existing path"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def check_existing_path(graph, start, end):\n    if start not in graph or end not in graph:\n        return False\n    visited = set()\n    queue = [start]\n    while queue:\n        node = queue.pop(0)\n        if node not in visited:\n            if node == end:\n                return True\n            visited.add(node)\n\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                queue.append(neighbor)\n    return False\n\n\ndef main():\n    graph = {\n        'A': ['B', 'C'],\n        'B': ['A', 'D', 'E'],\n        'C': ['A', 'F'],\n        'D': ['B'],\n        'E': ['B', 'F'],\n        'F': ['C', 'E']\n    }\n    print(check_existing_path(graph, 'A', 'E'))\n    print(check_existing_path(graph, 'A', 'C'))\n    print(check_existing_path(graph, 'C', 'F'))\n    print(check_existing_path(graph, 'A', 'W'))\n    print(check_existing_path(graph, 'W', 'A'))\n    print(check_existing_path(graph, 'E', 'A'))\n\n\nif __name__ == \"__main__\":\n    main()\n")),(0,i.kt)("h4",{id:"check-cycle-in-undirected-graph"},"Check cycle in undirected graph"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def has_cycle(graph):\n    visited = set()\n\n    def bfs(start):\n        queue = [(start, None)]\n        while queue:\n            node, parent = queue.pop(0)\n            if node in visited:\n                return True\n            visited.add(node)\n            for neighbor in graph.get(node, []):\n                if neighbor != parent:\n                    queue.append((neighbor, node))\n        return False\n\n    for node in graph:\n        if bfs(node):\n            return True\n    return False\n\n\ndef main():\n    graph1 = {\n        'A': ['B', 'D'],\n        'B': ['A', 'C'],\n        'C': ['B'],\n        'D': ['A']\n    }\n    print(has_cycle(graph1))  # Expected output: False\n\n    graph2 = {\n        'A': ['B', 'D'],\n        'B': ['A', 'C', 'D'],\n        'C': ['B'],\n        'D': ['A', 'B']\n    }\n    print(has_cycle(graph2))  # Expected output: True\n\n    graph3 = {\n        'A': ['B'],\n        'B': ['A', 'C', 'D'],\n        'C': ['B', 'D'],\n        'D': ['B', 'C']\n    }\n    print(has_cycle(graph3))  # Expected output: True\n\n\nif __name__ == \"__main__\":\n    main()\n\n")),(0,i.kt)("h4",{id:"find-the-level-of-each-node"},"Find the level of each node"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def find_level_of_each_node(graph, start):\n    visited = set()\n    queue = [(start, 0)]\n    node_levels = {}\n\n    while queue:\n        node, level = queue.pop(0)\n        if node not in visited:\n            visited.add(node)\n            node_levels[node] = level\n\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                queue.append((neighbor, level + 1))\n    return node_levels\n\n\ndef main():\n    graph = {\n        'A': ['B', 'C'],\n        'B': ['A', 'D', 'E'],\n        'C': ['A', 'F'],\n        'D': ['B'],\n        'E': ['B', 'F'],\n        'F': ['C', 'E']\n    }\n    print(find_level_of_each_node(graph, 'A'))\n\n\nif __name__ == \"__main__\":\n    main()\n")))}u.isMDXComponent=!0}}]);