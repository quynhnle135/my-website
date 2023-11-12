"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>c});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},_=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),m=l(n),_=r,c=m["".concat(d,".").concat(_)]||m[_]||p[_]||a;return n?i.createElement(c,o(o({ref:t},f),{},{components:n})):i.createElement(c,o({ref:t},f))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=_;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}_.displayName="MDXCreateElement"},6862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={title:"Nov 11"},o="What I Learned/Did Today",s={unversionedId:"learning-journal/2023/November/11_11_23",id:"learning-journal/2023/November/11_11_23",title:"Nov 11",description:"- Finish my Markdown File Manager project",source:"@site/docs/learning-journal/2023/11 - November/11_11_23.md",sourceDirName:"learning-journal/2023/11 - November",slug:"/learning-journal/2023/November/11_11_23",permalink:"/my-website/docs/learning-journal/2023/November/11_11_23",draft:!1,tags:[],version:"current",frontMatter:{title:"Nov 11"},sidebar:"tutorialSidebar",previous:{title:"Nov 10",permalink:"/my-website/docs/learning-journal/2023/November/11_10_23"},next:{title:"Nov 04",permalink:"/my-website/docs/learning-journal/2023/November/11_4_23"}},d={},l=[],f={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-i-learneddid-today"},"What I Learned/Did Today"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finish my Markdown File Manager project"),(0,r.kt)("li",{parentName:"ul"},"Review a little bit about writing test using Python unittest and Pytest")),(0,r.kt)("h1",{id:"questions-i-have"},"Questions I have"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When to use Mock in writing Test"),(0,r.kt)("li",{parentName:"ul"},"What's the difference between using tempfile.TemporaryDirectory() and mock? Which one is better"),(0,r.kt)("li",{parentName:"ul"},"What is the purpose of Mock in unittest? "),(0,r.kt)("li",{parentName:"ul"},"Using tempfile.TemporaryDirectory() will create a real directory so how to remove it? (It automatically clean up after the test is ran.)"),(0,r.kt)("li",{parentName:"ul"},'How to write different headings in MD files from Python program? (Do it like normal but add # for different headings that you want. For example: with(file, "w") as f: f.write("# Hello world!"))')),(0,r.kt)("h1",{id:"what-i-found-challenging"},"What I Found Challenging"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Writing tests for the md-file-manager projects. I can write simple tests to check if the given directory is a valid path or if the given file is Markdown file or now. When the functions in the program get more complicated, I was stuck and didn't know how and where to start writing tests for them. ")),(0,r.kt)("h1",{id:"code-i-wrote-today"},"Code I Wrote Today"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="md_file_manager.py"',title:'"md_file_manager.py"'},'import datetime\nimport os\n\n\ndef path_exists(path):\n    try:\n        return os.path.exists(path)\n    except OSError as e:\n        print(f"An error occurred: {e}")\n        return False\n\n\ndef is_md_file(file_path):\n    return file_path.endswith(".md")\n\n\ndef generate_single_md_file(path):\n    if path_exists(path):\n        file_date = datetime.date.today()\n        file_name = f"{file_date.strftime(\'%y%m%d\')}.md"\n        file_path = os.path.join(path, file_name)\n        with open(file_path, "w") as f:\n            f.write(f"This file is created at {file_date} in {file_path} directory.")\n    else:\n        print("The given path does not exist.")\n\n\ndef read_file(file):\n    if is_md_file(file):\n        with open(file, "r") as f:\n            lines = f.readlines()\n            for l in lines:\n                print(l)\n            return lines\n    else:\n        print("File\'s format is not correct or file doesn\'t exist.")\n        return None\n\n\ndef count_md_files(directory):\n    if path_exists(directory):\n        files = os.listdir(directory)\n        count = sum(1 for file in files if is_md_file(file))\n        if count <= 0:\n            print(f"No available Markdown file in {directory} directory.")\n            return count\n        elif count == 1:\n            print(f"There\'s 1 Markdown file in {directory} directory.")\n            return count\n        else:\n            print(f"There\'re {count} Markdown files in {directory} directory.")\n            return count\n    else:\n        print(f"{directory} path does not exist.")\n        return None\n\n\ndef md_file_generate(directory):\n    if path_exists(directory):\n        today = datetime.date.today()\n        for i in range(1, 8):\n            file_date = today + datetime.timedelta(days=i)\n            file_name = f"{file_date.strftime(\'%Y%m%d\')}.md"\n            file_path = os.path.join(directory, file_name)\n            with open(file_path, "w") as file:\n                file.write("# 1. What I Learned Today\\n\\n\\n")\n                file.write("# 2. Questions I Have\\n\\n\\n")\n                file.write("# 3. What I Found Challenging\\n\\n\\n")\n                file.write("# 4. Code I Wrote Today\\n\\n\\n")\n    else:\n        print(f"{directory} path does not exist.")\n\n\ndef customized_md_file_generate(directory, days=7):\n    if days == 7:\n        md_file_generate(directory)\n    else:\n        if path_exists(directory):\n            today = datetime.date.today()\n            for i in range(1, days + 1):\n                file_date = today + datetime.timedelta(days=i)\n                file_name = f"{file_date.strftime(\'%Y%m%d\')}.md"\n                file_path = os.path.join(directory, file_name)\n                with open(file_path, "w") as file:\n                    file.write("# 1. What I Learned Today\\n\\n\\n")\n                    file.write("# 2. Questions I Have\\n\\n\\n")\n                    file.write("# 3. What I Found Challenging\\n\\n\\n")\n                    file.write("# 4. Code I Wrote Today\\n\\n\\n")\n        else:\n            print(f"{directory} path does not exist.")\n            return None\n\n\ndef update_md_file_content(file, new_content):\n    if is_md_file(file):\n        with open(file, "w") as f:\n            f.write(new_content)\n        print(f"New content has been updated in {file}")\n    else:\n        print(f"{file} file does not exist.")\n\n\ndef update_all_md_files_content_in_dir(directory, new_content):\n    if path_exists(directory):\n        files = os.listdir(directory)\n        for f in files:\n            if is_md_file(f):\n                file_path = os.path.join(directory, f)\n                with open(file_path, "w") as file:\n                    file.write(new_content)\n                print(f"New content has been updated in {file_path}")\n        print("Finish updating content")\n    else:\n        print("Invalid path.")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'from md_file_manager import *\nimport argparse\n\n\ndef main():\n    parser = argparse.ArgumentParser(description="Welcome to MD File Manager program.")\n    parser.add_argument("-p", "--path", type=str, help="Check if the specified path exists in the system")\n    parser.add_argument("-m", "--validatemd", type=str, help="Verify the specified file is a Markdown (.md) file")\n    parser.add_argument("-cr", "--createmd", type=str, help="Create a new Markdown (.md) file in the specified directory. Use \'.\' to indicate the current directory.")\n    parser.add_argument("-rd", "--readmd", type=str, help="Read and display the contents of a specified file.")\n    parser.add_argument("-co", "--count", type=str, help="Count the number of Markdown (.md) files in the specified directory. Use \'.\' to count files in the current directory.")\n    parser.add_argument("-g", "--generate", type=str, help="Generate 7 Markdown (.md) files for the next 7 days, starting from tomorrow.")\n    parser.add_argument("-gc", "--generatecustomize", type=str, help="Directory to generate Markdown files.")\n    parser.add_argument("-d", "--days", type=int, default=7, help="Number of days to generate files for (default: 7).")\n    parser.add_argument("-uf", "--updatemd", type=str, help="Updated content of the specified Markdown file.")\n    parser.add_argument("-nc", "--newcontent", type=str, help="New content for updating.")\n    parser.add_argument("-u", "--update", type=str, help="Updated contents of Markdown files in the specified directory.")\n\n    args = parser.parse_args()\n\n    if args.path:\n        if path_exists(args.path):\n            print(f"The path {args.path} exists.")\n        else:\n            print(f"The path {args.path} does not exist.")\n    elif args.validatemd:\n        if is_md_file(args.validatemd):\n            print(f"{args.validatemd} is a valid Markdonw file")\n        else:\n            print(f"{args.validatemd} is not a valid Markdown file.")\n    elif args.createmd:\n        generate_single_md_file(args.createmd)\n        print(f"Markdown is created in {args.createmd} directory.")\n    elif args.readmd:\n        read_file(args.readmd)\n    elif args.count:\n        count_md_files(args.count)\n    elif args.generate:\n        md_file_generate(args.generate)\n        print(f"7 Markdown files are created in {args.generate} directory.")\n    elif args.generatecustomize:\n        customized_md_file_generate(args.generatecustomize, args.days)\n        print(f"Markdown files are created.")\n    elif args.updatemd:\n        update_md_file_content(args.updatemd, args.newcontent)\n    elif args.update:\n        update_all_md_files_content_in_dir(args.update, args.newcontent)\n\n\nif __name__ == "__main__":\n    main()\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="test_md_file_manager.py"',title:'"test_md_file_manager.py"'},'import tempfile\nimport unittest.mock as mock\nfrom md_file_manager import *\n\n\n# Test for path_exists function\ndef test_path_exists_1():\n    assert path_exists("/Users/quinnle/Desktop") == True\n\n\ndef test_path_exists_2():\n    assert path_exists("/Users/quinnle/nothing") == False\n\n\n# Test for is_md_file function\ndef test_is_md_file_1():\n    assert is_md_file("/Users/quinnle/PycharmProjects/md-file-manager/draft.md") == True\n\n\ndef test_is_md_file_2():\n    assert is_md_file("/Users/quinnle/PycharmProjects/md-file-manager/draft.txt") == False\n\n\n# Test for count_md_files function\ndef test_count_md_files_1():\n    assert count_md_files("/Users/quinnle/PycharmProjects/md-file-manager/folder1") == 10\n\n\ndef test_count_md_files_2():\n    assert count_md_files("/Users/quinnle/PycharmProjects/md-file-manager/md_files") == 8\n\n\ndef test_count_md_files_3():\n    assert count_md_files("/Users/quinnle/PycharmProjects/md-file-manager") == 3\n\n\n# Test for generate_single_md_file function\ndef test_generate_single_md_file_1():\n    # Create a temporary directory\n    with tempfile.TemporaryDirectory() as tmp_dir:\n        generate_single_md_file(tmp_dir)\n\n        file_date = datetime.date.today()\n        expected_file_name = f"{file_date.strftime(\'%y%m%d\')}.md"\n        expected_file_path = os.path.join(tmp_dir, expected_file_name)\n\n        assert os.path.exists(expected_file_path) == True\n\n\n# Test for generate_single_md_file function using mock\n@mock.patch(\'os.path.exists\')\n@mock.patch(\'builtins.open\', new_callable=mock.mock_open)\ndef test_generate_single_md_file_2(mock_open, mock_exists):\n    # Set up the mock to return True for any path\n    mock_exists.return_value = True\n\n    # Call the function with a mock path\n    generate_single_md_file(\'mock/path\')\n\n    # Construct the expected file name\n    file_date = datetime.date.today()\n    expected_file_name = f"{file_date.strftime(\'%y%m%d\')}.md"\n    expected_file_path = os.path.join("mock/path", expected_file_name)\n\n    # Check if it was called correctly\n    mock_open.assert_called_once_with(expected_file_path, "w")\n\n\n# Test for read_file function\ndef test_read_file_1():\n    expected_output = ["line1\\n", "line2\\n", "line3"]\n    assert read_file("/Users/quinnle/PycharmProjects/md-file-manager/draft.md") == expected_output\n\n\ndef test_read_file_2():\n    assert read_file("/Users/quinnle/PycharmProjects/md-file-manager/draft2.md") == ["test"]\n\n\ndef test_read_file_3():\n    with tempfile.NamedTemporaryFile(mode="w", suffix=".md", delete=False) as tmpfile:\n        content = "Line 1\\nLine 2\\nLine 3"\n        tmpfile.write(content)\n        tmpfile_name = tmpfile.name\n\n    lines = read_file(tmpfile_name)\n    assert lines == ["Line 1\\n", "Line 2\\n", "Line 3"]\n\n    os.remove(tmpfile_name)\n\n\n@mock.patch("md_file_manager.is_md_file", return_value=False)\ndef test_read_file_4(mock_is_md_file):\n    assert read_file("/path/to/non-md-file.txt") is None\n\n\ndef test_md_file_generate_existing_directory():\n    with tempfile.TemporaryDirectory() as tmp_dir:\n        md_file_generate(tmp_dir)\n\n        # Check for each of the next 7 days if a file has been created\n        today = datetime.date.today()\n        for i in range(1, 8):\n            file_date = today + datetime.timedelta(days=i)\n            file_name = f"{file_date.strftime(\'%Y%m%d\')}.md"\n            file_path = os.path.join(tmp_dir, file_name)\n\n            assert os.path.exists(file_path), f"File {file_name} was not created."\n\n\ndef test_customized_md_file_generate():\n    with tempfile.TemporaryDirectory() as tmp_dir:\n        customized_md_file_generate(tmp_dir, 10)\n\n        today = datetime.date.today()\n        count = 0\n        for i in range(1, 11):\n            file_date = today + datetime.timedelta(days=i)\n            file_name = f"{file_date.strftime(\'%Y%m%d\')}.md"\n            file_path = os.path.join(tmp_dir, file_name)\n            count += 1\n            assert os.path.exists(file_path), f"File {file_name} was not created."\n\n        assert count == count_md_files(tmp_dir)\n\n')))}p.isMDXComponent=!0}}]);