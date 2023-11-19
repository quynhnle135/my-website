"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5370],{6397:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=r(5893),t=r(1151);const a={title:"Nov 14"},o="1. What I Learned Today",l={id:"learning-journal/2023/November/20231114",title:"Nov 14",description:"- Reach the end of Python Regular Expression course",source:"@site/docs/learning-journal/2023/November/20231114.md",sourceDirName:"learning-journal/2023/November",slug:"/learning-journal/2023/November/20231114",permalink:"/my-website/docs/learning-journal/2023/November/20231114",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Nov 14"},sidebar:"tutorialSidebar",previous:{title:"Nov 13",permalink:"/my-website/docs/learning-journal/2023/November/20231113"},next:{title:"Nov 15",permalink:"/my-website/docs/learning-journal/2023/November/20231115"}},s={},d=[{value:"Findall function",id:"findall-function",level:3},{value:"Group function",id:"group-function",level:3},{value:"More practice with exercises prompt from ChatGPT",id:"more-practice-with-exercises-prompt-from-chatgpt",level:3},{value:"Split",id:"split",level:3},{value:"Look Ahead",id:"look-ahead",level:3},{value:"Look Behind",id:"look-behind",level:3},{value:"More practice with Look Ahead and Look Behind",id:"more-practice-with-look-ahead-and-look-behind",level:3},{value:"Extracting content from HTML",id:"extracting-content-from-html",level:3}];function h(n){const e={code:"code",h1:"h1",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"1-what-i-learned-today",children:"1. What I Learned Today"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Reach the end of Python Regular Expression course"}),"\n",(0,i.jsx)(e.li,{children:"Get to know more better about functions and patterns in Python Regular Expression since I do the give exercises again and ask ChatGPT for more exercises using the Python Regular Expression functions."}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"2-questions-i-have",children:"2. Questions I Have"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["To use functions from Regurlar Expression, we have to import them from module, then what is a module?","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'A module is a file, since this is a Python module, it\'s a file ending ".py" extension.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:'I thought "re" is a module that I kept thinking that how come a Python file can have such many functions? I click on the "re" and it shows the whole program with different functions that I actually use from this module.'}),"\n",(0,i.jsxs)(e.li,{children:["Then what are the differences between module, package, and library?","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Module: A single file that contains Python code with functions, classes, and variables."}),"\n",(0,i.jsx)(e.li,{children:"Package: A collection of modules which are organized with specific structure. For example: NumPy, Pandas"}),"\n",(0,i.jsx)(e.li,{children:"Library: A collection of modules and package. For example: Django, Flask."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Still confusing a lot about patterns: what's the difference between Look Ahead and Look Behind? When to use it?","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"By the names of them: Look Ahead will search for the specified pattern before a certain word/phrase/pattern while the Look Behind will search behind/after."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"4/5 projects in the course. I only understand how to extracting data from HTML file."}),"\n",(0,i.jsx)(e.li,{children:"Other projects are scraping/extracting data from PDF and websites. Will look at it one more time tomorrow."}),"\n"]}),"\n",(0,i.jsx)(e.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,i.jsx)(e.h3,{id:"findall-function",children:"Findall function"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import re\n\n\nline = 'your alpha@scientificprograming.io, blah beta@scientificprogramming.io blah user'\nline2 = 'your examaple-1@gmai.com, and here is a does-not-exist@gmail.com-seriously haha'\nemails = re.findall(r'[\\w\\.-]+@[\\w\\.-]+', line)\nemails2 = re.findall(r'[\\w\\.-]+@[\\w\\.-]+', line2)\nprint(emails)\nprint(emails2)\n\n\n"})}),"\n",(0,i.jsx)(e.h3,{id:"group-function",children:"Group function"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import re\n\nname = "Learn Scientific"\n\nm = re.match("(?P<first>\\w+)\\W+(?P<last>\\w+)", name)\n\nif m:\n    print(m.group("first"))\n    print(m.group("last"))\nelse:\n    print("no match")\n\nprint("---")\n\nif m:\n    d = m.groupdict()\n    for t in d:\n        print("key:", t)\n        print("value:", d[t])\n\n'})}),"\n",(0,i.jsx)(e.h1,{id:"some-practices",children:"Some practices"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import re\n\n# replace numbers with *\nline1 = "hello123this567ismyphonenumber: 6093251446"\nm = re.sub(r\'\\d\', "*", line1)\nprint(m)\n\n# split the words and only words\nline2 = "hello123this567ismyphonenumber: 6093251446"\nm = re.split(r\'\\d\', line2)\nm2 = re.split(r\'[^\\D\\S+]\', line2)\nprint(m)\nprint(m2)\n\n# Practice flag re.I: Perform case-insensitive matching\nline3 = "pyTHON is one the most popular programming language, that\'s why I choose to learn Python"\npython = re.findall("python", line3, re.I)\nprint(python)\n'})}),"\n",(0,i.jsx)(e.h3,{id:"more-practice-with-exercises-prompt-from-chatgpt",children:"More practice with exercises prompt from ChatGPT"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import re\n\n\n# Find if the word "Python" appears in the string "Learning programming with Python is fun!".\nprint("---Search---")\nline1 = "Learning programming with Python is fun!"\nm1 = re.search("Python", line1)\nif m1:\n    print("Found it!", m1.group())\nelse:\n    print("Cannot find Python")\n\n\n# Check if the string "Data 123" starts with the word "Data".\nprint("---Match---")\nline2 = "Data 123"\nm2 = re.match("Data", line2)\nif m2:\n    print("Found it!", m2.group())\nelse:\n    print("Cannot find Data")\nprint()\n\n\n# Extract all the email addresses from the string "Contact us at support@example.com or feedback@example.org".\nprint("---Findall---")\nline3 = "Contact us at support@example.com or feedback@example.org"\nm3 = re.findall(r"[\\w\\.-]+@[\\w\\.-]+", line3)\nprint("Emails I can find:", m3)\nprint()\n\nline4 = "Contactus at suport123@example.com or feed567back@example.org"\nm3 = re.findall(r"[\\w]+@[\\w.]+", line4)\nprint(m3)\nprint()\n\n\n# Split the string "apples, oranges, bananas, cherries" into a list, using the comma , as a separator.\nprint("---Split---")\nline5 = "apples, oranges, bananas, cherries"\nfruits = re.split(r",\\s*", line5)\nprint(fruits)\nprint()\n\n\n# Replace all occurrences of the word "Python" with "Java"\n# in the string "Python is an easy to learn, powerful programming language. Python is open-source".\nprint("---Sub---")\nline6 = "Python is an easy to learn, powerful programming language. Python is open-source"\nnew_line = re.sub("Python", "Java", line6)\nprint(new_line)\nprint()\n\n\n# Given the string "John: 34, Sara: 42, Ted: 28",\n# use a regular expression to find all names and their corresponding ages, and print them as groups.\nprint("---Finditer---")\nline7 = "John: 34, Sara: 24, Ted: 28"\nmatches = re.finditer(r\'(\\w+): (\\d+)\', line7)\nfor match in matches:\n    print(f"Name: {match.group(1)}, Age: {match.group(2)}")\n\nprint("---")\n\n\n# Given a log string "INFO: 2023-03-15 - The server responded in 0.003 seconds",use regular expressions\n# to extract the date ("2023-03-15"), the log level ("INFO"), and the response time ("0.003 seconds").\nlog_string = "INFO: 2023-03-15 - The server responded in 0.003 seconds"\nlog_info = re.search(r\'(\\w+): (\\d{4}-\\d{2}-\\d{2}) - .+ in ([\\d.]+ seconds)\', log_string)\nprint("Log level:", log_info.group(1))\nprint("Date:", log_info.group(2))\nprint("Response time:", log_info.group(3))\nprint()\n\n\n# Check valid phone number with format (***) ***-****\nprint("Find valid phone numbers")\nphone_numbers = "my phone number is (123) 456-7890 and my friend number is 123-456-789 and my mom phone number is (987)-654-3210"\nnumbers = re.findall(r"\\(?\\d{3}\\)?[-\\s]?\\d{3}-\\d{4}", phone_numbers)\nprint(numbers)\nprint()\n\n# Validate if the string "+1-555-123-4567" is a valid US phone number format.\nprint("---Validate a valid US phone number format---")\nphone_nums = "+1-555-123-4567"\nphone_nums_list = "+1-555-123-4567 +1-555-123-4568 +1-555-123-4569 +1-555-123-4560"\nif re.match(r"\\+\\d-\\d{3}-\\d{3}-\\d{4}", phone_nums):\n    print(f"Yes, this phone number {phone_nums} is valid")\nelse:\n    print("It\'s not a valid phone number")\n\nvalid_nums = re.findall(r"\\+\\d-\\d{3}-\\d{3}-\\d{4}", phone_nums_list)\nprint(valid_nums)\nprint()\n\n# Extract the protocol, domain, and path from the URL "https://www.example.com/path/to/page".\nprint("---Extract the protocol, domain, and path---")\nurl = "https://www.example.com/path/to/page"\nmatch = re.search(r"(https?)://([\\w.-]+)/([\\w./-]+)", url)\nif match:\n    print(f"Protocol: {match.group(1)}")\n    print(f"Domain: {match.group(2)}")\n    print(f"Path: /{match.group(3)}")\n\n'})}),"\n",(0,i.jsx)(e.h3,{id:"split",children:"Split"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import re\n\n\nline = "Learn, Scientific, Python"\n\nm = re.split(r"\\W+", line)\nif m:\n    print(m)\nelse:\n    print("no match")\n\nline1 = "+61Lean7489Scientific324234"\nm = re.split(\'[A-Za-z]+\', line1, re.I)\nif m:\n    print(m)\nelse:\n    print("no match")\n'})}),"\n",(0,i.jsx)(e.h3,{id:"look-ahead",children:"Look Ahead"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import re\n\n\nstring = "begin:learner1:scientific:learner2:scientific:learner3:end"\nvalues_ahead = re.findall(r"(\\w+)(?=:scientific)", string)\nprint(values_ahead)\n\nnegative_look_ahead = re.findall(r"(learner\\d+)(?!:scientific)", string)\nprint(negative_look_ahead)\n'})}),"\n",(0,i.jsx)(e.h3,{id:"look-behind",children:"Look Behind"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import re\n\nstring = "begin:learner1:scientific:learner2:scientific:learner3:end"\n\nlook_behind = re.findall(r"(?<=learner\\d:)(\\b\\w*\\b)", string)\nlook_behind_negative = re.findall(r"^(?<!learner\\d:)(\\b\\w*\\b)", string)\n\nprint(look_behind)\nprint(look_behind_negative)\n'})}),"\n",(0,i.jsx)(e.h3,{id:"more-practice-with-look-ahead-and-look-behind",children:"More practice with Look Ahead and Look Behind"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import re\n\n# find a word after #\nline1 = "#Python is great"\nm = re.findall(r"(?<=#)\\w+", line1)\nprint(m)\n\n# find word after :\nline2 = "my name is: quinn, my age is: 22"\nm = re.findall(r"(?<=: )\\w+", line2)\nprint(m)\n\n\n# find word before :\nm = re.findall(r"\\w+(?=:)", line2)\nprint(m)\n\n# Find fruits\nbasket = "orange, apple, banana, pineapple"\nfruit = re.findall(r"(\\w+)(?=,\\s|$)", basket)\nprint(fruit)\n\n# Email Domain Extraction\nemail = "example@gmai.com, username@domain.com"\nm = re.findall(r"(\\w+)(?=@)", email)\nprint(m)\n\n# Password validation\npassword_pattern = r"^(?=.*[A-Z])(?=.*\\d).{8,}$"\n\npasswords = ["Passw0rd", "password", "PASSWORD", "Pass1234", "pass"]\n\nfor password in passwords:\n    if re.match(password_pattern, password):\n        print(f"\'{password}\': Valid password")\n    else:\n        print(f"\'{password}\': Invalid password")\n\n# Date Format Conversion\ndate_pattern = r"(\\d{2})-(\\d{2})-(\\d{4})"\ndate_string = "12-31-2023"\nnew_date_format = re.sub(date_pattern, r\'\\3-\\1-\\2\', date_string)\nprint(f"New date: {new_date_format}")\n\n# Word Boundary\nword_pattern = r"\\b\\w+(?=,|\\.)"\nsentence = "This is a test, to check regular expression."\nmatches = re.findall(word_pattern, sentence)\nprint(matches)\n\n# Currency Extraction\ndollar = "$100"\neuro = "\u20ac200"\ndollar_val = re.findall(r"(?<=\\$)([0-9]+)", dollar)\neuro_val = re.findall(r"(?<=\\\u20ac)\\d+", euro)\nprint(dollar_val)\nprint(euro_val)\n\n\n# File extension check\nline = "I have a 221290.md file and she has 99999.txt file"\nfile_names = re.findall(r"\\w+(?=\\.\\w+)", line)\nprint(file_names)\n\n# Conditional Username Matching\nusernames = "here are some words: quick, quack, quiet, notquite, kevin, barbie, q"\nq_names = re.findall(r"\\bq\\w*", usernames)\nprint(q_names)\n\n'})}),"\n",(0,i.jsx)(e.h3,{id:"extracting-content-from-html",children:"Extracting content from HTML"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:'import re\n\nwith open("data.html", "r") as my_file:\n    data = my_file.read().replace("\\n", "")\n# print(data)\nresult = re.findall(r"<td>\\w+</td>\\s<td>(\\w+)</td>\\s<td>(\\w+)</td>", data)\nprint(result)\n'})})]})}function c(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>l,a:()=>o});var i=r(7294);const t={},a=i.createContext(t);function o(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);