"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1762],{7705:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=a(5893),i=a(1151);const r={title:"Data Analysis and Visualization"},s="Data Analysis and Visualization in Python",l={id:"daily-practice/2023/data_analysis_and_visualization",title:"Data Analysis and Visualization",description:"- Help you know how to analyze and visualize data",source:"@site/docs/daily-practice/2023/data_analysis_and_visualization.md",sourceDirName:"daily-practice/2023",slug:"/daily-practice/2023/data_analysis_and_visualization",permalink:"/docs/daily-practice/2023/data_analysis_and_visualization",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Data Analysis and Visualization"},sidebar:"tutorialSidebar",previous:{title:"Practices",permalink:"/docs/category/practices"},next:{title:"Draft",permalink:"/docs/daily-practice/2023/draft"}},d={},o=[{value:"What is NumPy and why do we use it instead of list or array?",id:"what-is-numpy-and-why-do-we-use-it-instead-of-list-or-array",level:4},{value:"What is Pandas?",id:"what-is-pandas",level:4},{value:"What is correlation?",id:"what-is-correlation",level:4},{value:"Why do we need to scale data?",id:"why-do-we-need-to-scale-data",level:4},{value:"Basic For Analytics",id:"basic-for-analytics",level:4},{value:"Reading Data",id:"reading-data",level:4},{value:"Describing Data",id:"describing-data",level:3}];function p(n){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"data-analysis-and-visualization-in-python",children:"Data Analysis and Visualization in Python"}),"\n",(0,t.jsx)(e.h1,{id:"1-purpose-of-this-course",children:"1. Purpose of this course:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Help you know how to analyze and visualize data"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"This course covers Python Basic for Analytics, reading data, describing data, cleaning data, and visualizing data."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h1,{id:"2-questions-i-have",children:"2. Questions I Have:"}),"\n",(0,t.jsx)(e.h4,{id:"what-is-numpy-and-why-do-we-use-it-instead-of-list-or-array",children:"What is NumPy and why do we use it instead of list or array?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"NumPy is a Python library used for working with arrays"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"It has functions for working in domain of linear algebra, fourier transform, and matrices (provide built-in functions to calculate std, min, max, mean, etc.), or you can a shape of matrix (2D Array) with NumPy built-in function (shape)"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"NumPy is faster that list because NumPy are stored at one continuous place."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"However, NumPy array size is fixed."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"NumPy array is more optimized for numerical computations or scientific computing, meanwhile, list is used as general-purpose data structures."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"So basically, lists are used if flexibility is needed because list can store multiple different types of data and the size of normal lists/arrays are adjustable."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"NumPy is used if memory efficiency is important and need advanced mathematical functions."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"what-is-pandas",children:"What is Pandas?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Pandas is popular Python library in data science and analytics. Pandas can be used to create data tables such as Series, DataFrame. Also we can search, sort, or group data with Pandas as well."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"what-is-correlation",children:"What is correlation?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Correlation is a statistical method used to measure the strength of the linear relationship between two variables and computer their association."}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"why-do-we-need-to-scale-data",children:"Why do we need to scale data?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Scaling the data can help to balance the impact of all variables on the distance calculation and improve the performance of the algorithm."}),"\n"]}),"\n",(0,t.jsx)(e.h1,{id:"3-what-i-found-challenging",children:"3. What I Found Challenging?"}),"\n",(0,t.jsx)(e.p,{children:"The course itself doesn't provide any data or available files for me to work with. I can only work with JSON string and two CSV files. The whole packet of data for visualization isn't available to code along. However, the last two exercises can help me practice data visualization using CSV files."}),"\n",(0,t.jsx)(e.h1,{id:"4-code-i-wrote-today",children:"4. Code I Wrote Today"}),"\n",(0,t.jsx)(e.h4,{id:"basic-for-analytics",children:"Basic For Analytics"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="control_flow.py"',children:'def age_check(age):\n    if age > 40:\n        print("Older than 40")\n    elif age > 30 and age <= 40:\n        print("Between 30 and 40")\n    else:\n        print("Other")\n\nage_check(22)\nage_check(41)\n\nnames = ["tyler", "karen", "jill"]\nfor i, name in enumerate(names):\n    print("Index:", i)\n    print("Value:", name)\n    print()\n\n\nnumbers_gt_5 = [x for x in range(1, 15) if x > 5]\nprint(numbers_gt_5)\n\nnums_plus_one = [x + 1 for x in range(1, 10)]\nprint(nums_plus_one)\n\nmy_list = [2, 10, 1, -5, 22]\nmy_list.sort()\nprint(my_list)\n\n\nanother_list = [1, -10, 20, 3, -5, 11]\nanother_list_sorted = sorted(another_list, key=abs, reverse=True)\nprint(another_list_sorted)\n\n# Zip function\nlist1 = [1, 2, 3]\nlist2 = [\'x\', \'y\', \'z\']\nprint(list(zip(list1, list2)))\n\npairs = [(\'x\', 1), (\'y\', 2), (\'z\', 3)]\nletters, numbers = zip(*pairs)\nprint(letters)\nprint(numbers)\n\nlist_of_tuples = [(\'a\', 1, "!"), ("b", 2, "@")]\nletters, numbers, chars = zip(*list_of_tuples)\nprint(letters)\nprint(numbers)\nprint(chars)\n\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="data_structure_dictionary.py"',children:'from collections import defaultdict\n\n\n# Initialize the dictionary\nmy_dict = {"age": 22, "birth_year": 1999, "name": "jack", "siblings": ["jill", "jen"]}\n\n# Get the value for the key age\nprint("---0---")\nprint("Age:", my_dict["age"])\n\n# Check if age is a key\nprint("---1---")\nprint("age" in my_dict)\n\n# Check if company is a key\nprint("---2---")\nprint("key" in my_dict)\n\n# Get teh value for key age\nprint("---3---")\nprint("Age:", my_dict.get("age"))\n\n# Get the value for the key company\n# If it doesn\'t exist, return 1\'\nprint("--4--")\nif not my_dict.get("key"):\n    print(1)\nelse:\n    print(my_dict.get("key"))\n\nprint(my_dict.get("key", 1))\n\n# Return all the values\nprint("---5---")\nprint(my_dict.values())\n\n# Return all the key, value pairs\nprint("---6---")\nprint(my_dict.items())\n\n# Default dict\nmy_default_dict = defaultdict(int)\nmy_default_dict["age"] = 22\nprint(my_default_dict["company"])\nprint(my_default_dict["age"])\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="data_structure_list',children:'# List in Python\np1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]\np2 = p1[0: 5]\np3 = p1[::-1]\nprint(p1)\nprint(p2)\nprint(p3)\n\ndepths = [1, 5, 3, 6, 4, 7, 10, 12]\nfirst_5_depths = depths[:5]\n\nprint("---0---")\nprint(first_5_depths)\n\n# You can easily sum\nprint("---1---")\nprint(sum(depths))\n\n# Slicing with negative starts from the end, so this returns the last element\nprint("---2---")\nprint(depths[-1])\n\n\n# Print the second to the last element\nprint("---3---")\nprint(depths[-2])\n\n# Return the second, third, and forth elements\nprint("---4---")\nprint(depths[2:5])\n\n# Check if values in the list\nprint("---5---")\nprint(22 in depths)\nprint(1 in depths)\n\n# Return the maximum value in the list\nprint("---6---")\nprint(max(depths))\n\n# Add another value to the list\ndepths.append(44)\nprint("---7---")\nprint(depths)\n\n# Extend the list with another list\nprint("--8---")\ndepths.extend([100, 200])\nprint(depths)\n\n# Replace the 4th value with 100\ndepths[4] = 100\nprint("---9---")\nprint(depths)\n\n# Insert to accomplish the same thing\nprint("---10---")\ndepths.insert(1, 500)\nprint(depths)\n\n\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="data_structure_set.py"',children:'my_set = set()\nmy_set.add(1)\nmy_set.add(2)\nmy_set.add(3)\n\nprint("---0---")\nprint(my_set)\n\nmy_set2 = set()\nmy_set2.add(1)\nmy_set2.add(2)\nmy_set2.add(3)\nmy_set2.add(4)\nprint("---1---")\nprint(my_set2)\n\n\n# Prints the overlap\nprint(my_set.intersection(my_set2))\n\n# Print the combination\nprint(my_set.union(my_set2))\n\n# Print the difference\nprint(my_set.difference(my_set2))\nprint(my_set2.difference(my_set))\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="numpy_2d_array.py"',children:'import numpy as np\n\n\nnp_2d_array = np.array([[1, 2, 3], [4, 5, 6]])\nprint(np_2d_array)\nprint(np_2d_array.shape)\nprint("Sum:", np.sum(np_2d_array))\n\n# Calculate the transpose, which is when you swap the columns and rows\nnp_2d_array_T = np_2d_array.T\nprint(np_2d_array_T)\n\n# Access 2D array\nprint(np_2d_array[1, 1])\nprint(np_2d_array[0, 0])\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="numpy_practice.py"',children:'import numpy as np\n\n\nnp_2d_array = np.array([[1, 2, 3], [4, 5, 6]])\nprint(np_2d_array)\nprint(np_2d_array.shape)\nprint("Sum:", np.sum(np_2d_array))\n\n# Calculate the transpose, which is when you swap the columns and rows\nnp_2d_array_T = np_2d_array.T\nprint(np_2d_array_T)\n\n# Access 2D array\nprint(np_2d_array[1, 1])\nprint(np_2d_array[0, 0])\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="numpy_scipy_practice.py"',children:'import numpy as np\nfrom scipy import stats\n\ndef perform_calculations(array):\n    np_array = np.array(array)\n    max_val = np.max(np_array)\n    np_std = np.std(np_array)\n    np_sum = np.sum(np_array)\n    np_dot = np.dot(np_array, np_array)\n\n    return max_val, np_std, np_sum, np_dot\n\n\ndef correlation(array1, array2):\n    return stats.pearsonr(array1, array2)\n\n\ndef main():\n    print(perform_calculations([1, 4, 6, 5, 2]))\n    print(correlation(np.random.rand(5), np.random.rand(5)))\n\n\nif __name__ == "__main__":\n    main()\n'})}),"\n",(0,t.jsx)(e.h4,{id:"reading-data",children:"Reading Data"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="reading_csv.py"',children:"import pandas as pd\n\ncsv_file = \"/Users/quinnle/PycharmProjects/python-data-analysis-and-visualization/adult/adult.data\"\nnames = ['age', 'workclass', 'fnlwgt', 'education', 'educationnum', 'maritalstatus', 'occupation', 'relationship', 'race',\n        'sex', 'capitalgain', 'capitalloss', 'hoursperweek', 'nativecountry', 'label']\ndf = pd.read_csv(csv_file, header=None, names=names)\nprint(df.head())\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="reading_json"',children:'import json\n\njson_string = """{\n    "glossary": {\n        "title": "example glossary",\n        "GlossDiv": {\n            "title": "S",\n            "GlossList": {\n                "GlossEntry": {\n                    "ID": "SGML",\n                    "SortAs": "SGML",\n                    "GlossTerm": "Standard Generalized Markup Language",\n                    "Acronym": "SGML",\n                    "Abbrev": "ISO 8879:1986",\n                    "GlossDef": {\n                        "para": "A meta-markup language, used to create markup languages such as DocBook.",\n                        "GlossSeeAlso": ["GML", "XML"]\n                    },\n                    "GlossSee": "markup"\n                }\n            }\n        }\n    }\n}"""\n\njson_data = json.loads(json_string)\nprint(json_data)\nprint(type(json_data))\nprint(type(json_string))\n'})}),"\n",(0,t.jsx)(e.h3,{id:"describing-data",children:"Describing Data"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="group_by_aggregation.py"',children:'import pandas as pd\n\n\ndef read_csv():\n    names = ["mpg", "cylinders", "displacement", "horsepower", "weight", "acceleration", "model_year", "origin", "car_name"]\n    auto_mpg_file = "/Users/quinnle/PycharmProjects/python-data-analysis-and-visualization/auto+mpg/auto-mpg.data"\n    df = pd.read_csv(auto_mpg_file, header=None, names=names, delim_whitespace=True)\n    return df\n\n\ndef group_aggregation(df, group_var, agg_var):\n    grouped_df = df.groupby([group_var])[agg_var].mean()\n    return grouped_df\n\n\ndf = read_csv()\nprint(group_aggregation(df, "cylinders", "mpg"))\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="reshaping_data.py"',children:"import numpy as np\nimport pandas as pd\n\n\nnames = ['age', 'workclass', 'fnlwgt', 'education', 'educationnum', 'maritalstatus', 'occupation', 'relationship', 'race',\n        'sex', 'capitalgain', 'capitalloss', 'hoursperweek', 'nativecountry', 'label']\nadult_csv_file = \"/Users/quinnle/PycharmProjects/python-data-analysis-and-visualization/adult/adult.data\"\ntrain_df = pd.read_csv(adult_csv_file, header=None, names=names)\n\n# print(pd.pivot_table(train_df, values=\"hoursperweek\", index=['relationship', 'workclass'], columns=['label'], aggfunc=np.mean).round(2))\nprint(pd.crosstab(train_df['label'], train_df.relationship))\nprint(pd.crosstab(train_df['label'], train_df.relationship, normalize=True))\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="statistics_and_count.py"',children:"import pandas as pd\n\n\nnames = ['age', 'workclass', 'fnlwgt', 'education', 'educationnum', 'maritalstatus', 'occupation', 'relationship', 'race',\n        'sex', 'capitalgain', 'capitalloss', 'hoursperweek', 'nativecountry', 'label']\nadult_csv_file = \"/Users/quinnle/PycharmProjects/python-data-analysis-and-visualization/adult/adult.data\"\ntrain_df = pd.read_csv(adult_csv_file, header=None, names=names)\n\n# Get the first 10 rows\nprint(train_df.head(10))\n\n# Get the total number of rows and columns\nprint(train_df.shape)\n\n# Provide  count, mean, std, min, etc.\nprint(train_df.describe())\n\n# Get info from dataframe (?)\n# print(train_df.info)\n\n# Find unique values\nprint(train_df['nativecountry'].unique())\nprint(train_df['relationship'].unique())\n\n# Find the counts of unique values\nprint(train_df['relationship'].value_counts())\n\n# Grouping data\nprint(train_df.groupby(['relationship'])['label'].value_counts(normalize=True))\nprint(train_df.groupby(['workclass'])['hoursperweek'].mean())\n\n\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="categorical_data.py"',children:"import pandas as pd\n\nnon_categorical_series = pd.Series(['male', 'female', 'male', 'female'])\n\ncategorical_series = non_categorical_series.astype('category')\n\n# Print the numeric code\nprint(categorical_series.cat.codes)\n\n# Print the category names\nprint(categorical_series.cat.categories)\n\nprint(pd.get_dummies(non_categorical_series))\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="missing_data.py"',children:'import numpy as np\nimport pandas as pd\n\n\npd_series = pd.Series([5, 10, np.nan, 15, 20, np.nan, 25, 50, np.nan])\nprint("Average of non-missing values:", round(pd_series.mean(), 2))\n\nfilla_pd_series = pd_series.fillna(pd_series.mean())\nprint(filla_pd_series)\n\nno_nan_pd_series = pd_series.dropna()\nprint(no_nan_pd_series)\n\nisnull_pd_series = pd_series.isnull()\nprint(isnull_pd_series)\n'})})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},1151:(n,e,a)=>{a.d(e,{Z:()=>l,a:()=>s});var t=a(7294);const i={},r=t.createContext(i);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);