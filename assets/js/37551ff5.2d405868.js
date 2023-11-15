"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,c=p["".concat(m,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(c,o(o({ref:t},s),{},{components:n})):r.createElement(c,o({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"Nov 10"},o=void 0,l={unversionedId:"learning-journal/2023/November/11_10_23",id:"learning-journal/2023/November/11_10_23",title:"Nov 10",description:"What I did today:",source:"@site/docs/learning-journal/2023/November/11_10_23.md",sourceDirName:"learning-journal/2023/November",slug:"/learning-journal/2023/November/11_10_23",permalink:"/my-website/docs/learning-journal/2023/November/11_10_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Nov 10"},sidebar:"tutorialSidebar",previous:{title:"November",permalink:"/my-website/docs/category/november"},next:{title:"Nov 11",permalink:"/my-website/docs/learning-journal/2023/November/11_11_23"}},m={},d=[{value:"MD File Generator basic Python program",id:"md-file-generator-basic-python-program",level:3}],s={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"What I did today:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn about Python CLI program"),(0,a.kt)("li",{parentName:"ul"},"Finish MD File Generator basic Python program "),(0,a.kt)("li",{parentName:"ul"},"Working on MD File Generatpr Python CLI Program")),(0,a.kt)("p",null,"Note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When learning new things, you should paste the example code and run it first. Try to figure out what it's doing and then read the documentation"),(0,a.kt)("li",{parentName:"ul"},"When solving a problem or start a project, if you cannot figure out the main thing, try with the simple/basic step first, yet you still need to things that relevant to the project you're working on to avoit time waste.")),(0,a.kt)("h3",{id:"md-file-generator-basic-python-program"},"MD File Generator basic Python program"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Working with file handling in Python such as create, write, read, and remove files from directory"),(0,a.kt)("li",{parentName:"ul"},"Working with datetime to make sure that if it's leap year or when it comes to months that have 30 or 31 days, the program will handle correctly. ")),(0,a.kt)("p",null,"Practice with datetime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime\n\n\ninput_datetime_1 = "2023/11/20"\ndatetime_1 = datetime.strptime(input_datetime_1, "%Y/%m/%d")\ndate_1 = datetime.strptime(input_datetime_1, "%Y/%m/%d").date()\nprint(input_datetime_1)\nprint(datetime_1)\nprint(date_1)\nprint(type(input_datetime_1))\nprint(type(datetime_1))\nprint(type(date_1))\n\n')),(0,a.kt)("p",null,"MD Files Generator "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\nimport os\nimport datetime as d\nfrom datetime import datetime\n\n\ndef md_files_generator(directory):\n    if not os.path.exists(directory):\n        print("Please enter valid directory.")\n\n    today = d.date.today()\n\n    for i in range(1, 8):\n        file_date = today + d.timedelta(days=i)\n        file_name = f"{file_date.strftime(\'%Y%m%d\')}.md"\n        file_path = f"{directory}/{file_name}"\n        with open(file_path, "w") as f:\n            f.write(f"{file_name}")\n\n        print(f"File {file_name} is created successfully at {directory}")\n\n\ndef md_files_generator_by_dates(directory, dates):\n    if not os.path.exists(directory):\n        print("Please enter valid directory.")\n\n    dates = datetime.strptime(dates, "%Y-%m-%d").date()\n    print(dates)\n\n    for i in range(1, 8):\n        file_date = dates + d.timedelta(days=i)\n        file_name = f"{file_date.strftime(\'%Y%m%d\')}.md"\n        print("File name:", file_name)\n        file_path = f"{directory}/{file_name}"\n        with open(file_path, "w") as f:\n            f.write(f"{file_date}")\n        print(f"File {file_name} is created successfully at {directory}")\n')),(0,a.kt)("p",null,"Menu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from generator import md_files_generator, md_files_generator_by_dates\n\n\ndef menu():\n    # Greetings line\n    print("--- Welcome to MD Files Generator---")\n    directory = input("Please enter the directory where you want to create your files: ")\n    option = input("Select either of the following options:\\n"\n                   "1. Create files starting from today\\n"\n                   "2. Created files with customized date\\n")\n    if option == "1":\n        md_files_generator(directory)\n    else:\n        dates = input("Please enter the date in the format yyyy-mm-dd")\n        md_files_generator_by_dates(directory, dates)\n\n')),(0,a.kt)("p",null,"Main"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from menu import menu\n\n\ndef main():\n    menu()\n\n\nif __name__ == "__main__":\n    main()\n')),(0,a.kt)("p",null,"CLI Python Program"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CLI - Command Line Interface. CLI Python Program is used when you want to create your own your command line to run in terminal to perform certain tasks. "),(0,a.kt)("li",{parentName:"ul"},"Basic steps to create simple/basic CLI Python program with argparse:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Define functions that you want to perform under certain commandline later."),(0,a.kt)("li",{parentName:"ul"},"In the main function, start with creating ArgumentParser object to handle commandline arguments"),(0,a.kt)("li",{parentName:"ul"},"Define arguments by using add_argument method. In this method, you should specify some details such as short command option (one dash), long command option (two dashes), type, help message (when user run program -h)"),(0,a.kt)("li",{parentName:"ul"},"Implement functionality with parse_args() methods")))),(0,a.kt)("p",null,"Print name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import argparse\n\n\ndef printname(name):\n    print(f"Hello {name}, welcome to my Python CLI program!")\n\n\ndef main():\n    parser = argparse.ArgumentParser(description="Welcome to Greeting Program.")\n    parser.add_argument("-p", "--printing", type=str, help="Print out entered name.")\n    args = parser.parse_args()\n\n    printname(args.printing)\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,a.kt)("p",null,"Find Sum"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import argparse\n\n\ndef findsum(nums):\n    return sum(nums)\n\n\ndef main():\n    parser = argparse.ArgumentParser("Welcome to Find Sum Program")\n    parser.add_argument("-a", "--add", type=int, nargs="+", help="All the numbers separated by spaces will be added.")\n    args = parser.parse_args()\n    print(findsum(args.add))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,a.kt)("p",null,"Read lines"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import argparse\n\n\ndef read_lines(file):\n    with open(file, "r") as f:\n        line = f.read()\n        return line\n\n\ndef main():\n    parser = argparse.ArgumentParser("Welcome to File Handling program.")\n    parser.add_argument("-r", "--read", type=str, help="Read line from file.")\n    args = parser.parse_args()\n    print(read_lines(args.read))\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,a.kt)("p",null,"MD File Generator (not too detail and haven't handle special cases yet)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import argparse\nimport os\nimport datetime\n\n\ndef validate_path(directory):\n    return os.path.exists(directory)\n\n\ndef md_generate(directory):\n    if validate_path(str(directory)):\n        today = datetime.date.today()\n        for i in range(1, 8):\n            file_date = today + datetime.timedelta(days=i)\n            file_name = f"{file_date}.md"\n            file_path = f"{directory}/{file_name}"\n            with open(file_path, "w") as f:\n                f.write(f"{file_date}")\n            print(f"Created {file_name} at {directory}.")\n    else:\n        print("Invalid directory.")\n        quit()\n\n\ndef md_file_generator(directory):\n    today = datetime.date.today()\n    for i in range(1, 8):\n        file_date = today + datetime.timedelta(days=i)\n        file_name = f"{file_date}.md"\n        file_path = os.path.join(directory, file_name)\n        with open(file_path, "w") as f:\n            f.write(f"Created {file_name} at {directory}")\n\n\ndef main():\n    parser = argparse.ArgumentParser("Welcome to MD Files Generator.")\n    parser.add_argument("-c", "--create", type=str, help="Create one new file in the current directory.")\n    parser.add_argument("-g", "--generate", type=str, help="Generate 7 files in the current directory")\n    parser.add_argument("directory", type=str, help="Generate new files.")\n    args = parser.parse_args()\n    # create_file(args.create)\n    # md_generate(args.generate)\n    md_file_generator(args.directory)\n\n\nif __name__ == "__main__":\n    main()\n\n```\n')))}u.isMDXComponent=!0}}]);