"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9828],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),h=i,f=u["".concat(d,".").concat(h)]||u[h]||c[h]||a;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=h;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={title:"Sep 27"},o=void 0,p={unversionedId:"coding-journal/2023/September/sep_27_23",id:"coding-journal/2023/September/sep_27_23",title:"Sep 27",description:"Graph review",source:"@site/docs/coding-journal/2023/9 - September/sep_27_23.md",sourceDirName:"coding-journal/2023/9 - September",slug:"/coding-journal/2023/September/sep_27_23",permalink:"/my-website/docs/coding-journal/2023/September/sep_27_23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding-journal/2023/9 - September/sep_27_23.md",tags:[],version:"current",frontMatter:{title:"Sep 27"},sidebar:"tutorialSidebar",previous:{title:"Sep 26",permalink:"/my-website/docs/coding-journal/2023/September/sep_26_23"},next:{title:"Sep 28",permalink:"/my-website/docs/coding-journal/2023/September/sep_28_23"}},d={},s=[{value:"Graph review",id:"graph-review",level:2},{value:"Breadth First Search",id:"breadth-first-search",level:3},{value:"Find level of each node in graph",id:"find-level-of-each-node-in-graph",level:3},{value:"Find existing path",id:"find-existing-path",level:3}],l={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"graph-review"},"Graph review"),(0,i.kt)("h3",{id:"breadth-first-search"},"Breadth First Search"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visit the current node and its neighbors first by using queue to keep track "),(0,i.kt)("li",{parentName:"ul"},"Using set for visited nodes so it doesn't fall into a loop")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def breadth_first_search(graph, start):\n    queue = [start]\n    visited = set()\n    traversal = []\n\n    while queue:\n        node = queue.pop(0)\n        if node not in visited:\n            visited.add(node)\n            traversal.append(node)\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                queue.append(neighbor)\n    return traversal\n\n\ndef bfs(graph, start):\n    return bfs_helper(graph=graph, queue=[start], visited=set())\n\n\ndef bfs_helper(graph, queue, visited):\n    if not queue:\n        return []\n    node = queue.pop(0)\n    if node in visited:\n        return bfs_helper(graph, queue, visited)\n\n    visited.add(node)\n    for neighbor in graph[node]:\n        queue.append(neighbor)\n    return [node] + bfs_helper(graph, queue, visited)\n\n\ndef main():\n    graph = {\n        'A': ['B', 'C'],\n        'B': ['D', 'E'],\n        'C': ['F'],\n        'D': [],\n        'E': ['F'],\n        'F': []\n    }\n    print(breadth_first_search(graph, 'A'))\n    print(bfs(graph, 'A'))\n\n\nif __name__ == \"__main__\":\n    main()\n\n")),(0,i.kt)("h3",{id:"find-level-of-each-node-in-graph"},"Find level of each node in graph"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since this exercise requires to go by level to check and count, BFS should be applied"),(0,i.kt)("li",{parentName:"ul"},"Instead of storing the node, store the tuple of node and level")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def find_level_of_each_node(graph, start):\n    visited = set()\n    queue = [(start, 0)]\n    node_levels = {}\n\n    while queue:\n        node, level = queue.pop(0)\n        if node not in visited:\n            visited.add(node)\n            node_levels[node] = level\n\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                queue.append((neighbor, level + 1))\n    return node_levels\n\n\ndef main():\n    graph = {\n        'A': ['B', 'C'],\n        'B': ['A', 'D', 'E'],\n        'C': ['A', 'F'],\n        'D': ['B'],\n        'E': ['B', 'F'],\n        'F': ['C', 'E']\n    }\n    print(find_level_of_each_node(graph, 'A'))\n\n\nif __name__ == \"__main__\":\n    main()\n")),(0,i.kt)("h3",{id:"find-existing-path"},"Find existing path"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When traversing thru every node in graph, we can check if it contains end node. If contained, return True"),(0,i.kt)("li",{parentName:"ul"},"If we're done traversing every node in graph but end node cannot be found, return False")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def check_existing_path(graph, start, end):\n    if start not in graph or end not in graph:\n        return False\n    visited = set()\n    queue = [start]\n    while queue:\n        node = queue.pop(0)\n        if node not in visited:\n            if node == end:\n                return True\n            visited.add(node)\n\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                queue.append(neighbor)\n    return False\n\n\ndef main():\n    graph = {\n        'A': ['B', 'C'],\n        'B': ['A', 'D', 'E'],\n        'C': ['A', 'F'],\n        'D': ['B'],\n        'E': ['B', 'F'],\n        'F': ['C', 'E']\n    }\n    print(check_existing_path(graph, 'A', 'E'))\n    print(check_existing_path(graph, 'A', 'C'))\n    print(check_existing_path(graph, 'C', 'F'))\n    print(check_existing_path(graph, 'A', 'W'))\n    print(check_existing_path(graph, 'W', 'A'))\n    print(check_existing_path(graph, 'E', 'A'))\n\n\nif __name__ == \"__main__\":\n    main()\n")))}c.isMDXComponent=!0}}]);