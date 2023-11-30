"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9110],{1359:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>_,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=i(5893),t=i(1151);const l={title:"Sep 16, 2023"},a="Coding Journal: Sep 16, 2023",s={id:"learning-journal/September/20230916",title:"Sep 16, 2023",description:"Interviewing.io",source:"@site/docs/learning-journal/September/20230916.md",sourceDirName:"learning-journal/September",slug:"/learning-journal/September/20230916",permalink:"/my-website/docs/learning-journal/September/20230916",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Sep 16, 2023"},sidebar:"tutorialSidebar",previous:{title:"Sep 13, 2023",permalink:"/my-website/docs/learning-journal/September/20230913"},next:{title:"Sep 17, 2023",permalink:"/my-website/docs/learning-journal/September/20230917"}},o={},c=[{value:"Interviewing.io",id:"interviewingio",level:3},{value:"Best Time to buy and sell stocks",id:"best-time-to-buy-and-sell-stocks",level:5},{value:"Go over Intervals coding pattern",id:"go-over-intervals-coding-pattern",level:3},{value:"Insert intervals",id:"insert-intervals",level:5},{value:"Interval intersection",id:"interval-intersection",level:5},{value:"Merge Interval",id:"merge-interval",level:5}];function d(n){const e={code:"code",h1:"h1",h3:"h3",h5:"h5",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"coding-journal-sep-16-2023",children:"Coding Journal: Sep 16, 2023"}),"\n",(0,r.jsx)(e.h3,{id:"interviewingio",children:"Interviewing.io"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Quesion: Best Time to buy and sell stocks"}),"\n",(0,r.jsxs)(e.li,{children:["Feedback:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Good job coming up with brute force approach then tried to optimized the solution"}),"\n",(0,r.jsx)(e.li,{children:"Actively discussed the time complexity and space complexity of the solution for given problem"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Suggestions:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Leetcode as much as possible to improve technical skills"}),"\n",(0,r.jsx)(e.li,{children:"May check Pramp to practice coding interview"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h5,{id:"best-time-to-buy-and-sell-stocks",children:"Best Time to buy and sell stocks"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'# first approach\ndef find_best_time_bruteforce(prices):\n    max_profit = 0\n    prices_len = len(prices)\n    if prices_len <= 1:\n        return max_profit\n\n    for i in range(prices_len):\n        for j in range(i + 1, prices_len):\n            cur_price = prices[j] - prices[i]\n            max_profit = max(max_profit, cur_price)\n\n    return max_profit\n\n\n# second approach\ndef find_best_time(prices):\n    min_value = float("inf")\n    max_profit = 0\n    prices_len = len(prices)\n    if prices_len <= 1:\n        return 0\n\n    for i in range(prices_len):\n        if prices[i] < min_value:\n            min_value = prices[i]\n\n        cur_max = prices[i] - min_value\n        max_profit = max(max_profit, cur_max)\n\n    return max_profit\n\n\ndef main():\n    print(find_best_time_bruteforce(prices=[7, 1, 5, 3, 6, 4]))  # 5\n    print(find_best_time(prices=[7, 1, 5, 3, 6, 4]))  # 5\n\n    print(find_best_time_bruteforce(prices=[7, 6, 4, 3, 1]))  # 0\n    print(find_best_time(prices=[7, 6, 4, 3, 1]))  # 0\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(e.h3,{id:"go-over-intervals-coding-pattern",children:"Go over Intervals coding pattern"}),"\n",(0,r.jsx)(e.h5,{id:"insert-intervals",children:"Insert intervals"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def insert_interval(intervals, new_interval):\n    if not intervals:\n        return [new_interval]\n\n    result = []\n    for interval in intervals:\n        if new_interval[0] > interval[1]:\n            result.append(interval)\n        elif new_interval[1] < interval[0]:\n            result.append(new_interval)\n            new_interval = interval\n        else:\n            new_interval[0] = min(new_interval[0], interval[0])\n            new_interval[1] = max(new_interval[1], interval[1])\n    result.append(new_interval)\n    return result\n\n\ndef main():\n    print(insert_interval(intervals=[[1, 3], [6, 9]], new_interval=[2, 5]))\n    print(insert_interval(intervals=[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], new_interval=[4, 8]))\n\n\nif __name__ == "__main__":\n    main()\n\n\n'})}),"\n",(0,r.jsx)(e.h5,{id:"interval-intersection",children:"Interval intersection"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def find_intersection(list_a, list_b):\n    if not list_a:\n        return []\n    if not list_b:\n        return []\n\n    result = []\n    i = j = 0\n    while (i < len(list_a)) and (j < len(list_b)):\n        interval_start = max(list_a[i][0], list_b[j][0])\n        interval_end = min(list_a[i][1], list_b[j][1])\n        if interval_start <= interval_end:\n            result.append([interval_start, interval_end])\n\n        if list_a[i][1] >= list_b[j][1]:\n            j += 1\n        else:\n            i += 1\n    return result\n\n\ndef main():\n    print(find_intersection(list_a=[[0, 2], [5, 10], [13, 23], [24, 25]], list_b=[[1, 5], [8, 12], [15, 24], [25, 26]]))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,r.jsx)(e.h5,{id:"merge-interval",children:"Merge Interval"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'def merge_intervals(intervals):\n    if not intervals:\n        return []\n\n    # Sort intervals by their starting times\n    intervals.sort(key=lambda x: x[0])\n\n    # Append the first interval\n    merged = [intervals[0]]\n\n    for interval in intervals[1:]:\n        last_merged_interval = merged[-1]\n\n        if interval[0] <= last_merged_interval[1]:\n            last_merged_interval[1] = max(interval[1], last_merged_interval[1])\n        else:\n            merged.append(interval)\n\n    return merged\n\n\ndef main():\n    print(merge_intervals([[1, 3], [2, 6], [8, 10], [15, 18]]))  # [[1, 6], [8, 10], [15, 18]]\n    print(merge_intervals([[1, 4], [4, 5]]))  # [[1, 5]]\n\n\nif __name__ == "__main__":\n    main()\n\n\n\n'})})]})}function _(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>s,a:()=>a});var r=i(7294);const t={},l=r.createContext(t);function a(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);