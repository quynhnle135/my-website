---
title: Data Analysis and Visualization
---

# Data Analysis and Visualization in Python 


# 1. Purpose of this course: 

- Help you know how to analyze and visualize data

- This course covers Python Basic for Analytics, reading data, describing data, cleaning data, and visualizing data.

# 2. Questions I Have:

#### What is NumPy and why do we use it instead of list or array? 

- NumPy is a Python library used for working with arrays

- It has functions for working in domain of linear algebra, fourier transform, and matrices (provide built-in functions to calculate std, min, max, mean, etc.), or you can a shape of matrix (2D Array) with NumPy built-in function (shape)

- NumPy is faster that list because NumPy are stored at one continuous place.

- However, NumPy array size is fixed. 

- NumPy array is more optimized for numerical computations or scientific computing, meanwhile, list is used as general-purpose data structures.

- So basically, lists are used if flexibility is needed because list can store multiple different types of data and the size of normal lists/arrays are adjustable.

- NumPy is used if memory efficiency is important and need advanced mathematical functions.

#### What is Pandas? 

- Pandas is popular Python library in data science and analytics. Pandas can be used to create data tables such as Series, DataFrame. Also we can search, sort, or group data with Pandas as well. 

#### What is correlation? 

- Correlation is a statistical method used to measure the strength of the linear relationship between two variables and computer their association. 

#### Why do we need to scale data? 

- Scaling the data can help to balance the impact of all variables on the distance calculation and improve the performance of the algorithm. 


# 3. What I Found Challenging? 

The course itself doesn't provide any data or available files for me to work with. I can only work with JSON string and two CSV files. The whole packet of data for visualization isn't available to code along. However, the last two exercises can help me practice data visualization using CSV files.

# 4. Code I Wrote Today

#### Basic For Analytics

```python title="control_flow.py"
def age_check(age):
    if age > 40:
        print("Older than 40")
    elif age > 30 and age <= 40:
        print("Between 30 and 40")
    else:
        print("Other")

age_check(22)
age_check(41)

names = ["tyler", "karen", "jill"]
for i, name in enumerate(names):
    print("Index:", i)
    print("Value:", name)
    print()


numbers_gt_5 = [x for x in range(1, 15) if x > 5]
print(numbers_gt_5)

nums_plus_one = [x + 1 for x in range(1, 10)]
print(nums_plus_one)

my_list = [2, 10, 1, -5, 22]
my_list.sort()
print(my_list)


another_list = [1, -10, 20, 3, -5, 11]
another_list_sorted = sorted(another_list, key=abs, reverse=True)
print(another_list_sorted)

# Zip function
list1 = [1, 2, 3]
list2 = ['x', 'y', 'z']
print(list(zip(list1, list2)))

pairs = [('x', 1), ('y', 2), ('z', 3)]
letters, numbers = zip(*pairs)
print(letters)
print(numbers)

list_of_tuples = [('a', 1, "!"), ("b", 2, "@")]
letters, numbers, chars = zip(*list_of_tuples)
print(letters)
print(numbers)
print(chars)

```

```python title="data_structure_dictionary.py"
from collections import defaultdict


# Initialize the dictionary
my_dict = {"age": 22, "birth_year": 1999, "name": "jack", "siblings": ["jill", "jen"]}

# Get the value for the key age
print("---0---")
print("Age:", my_dict["age"])

# Check if age is a key
print("---1---")
print("age" in my_dict)

# Check if company is a key
print("---2---")
print("key" in my_dict)

# Get teh value for key age
print("---3---")
print("Age:", my_dict.get("age"))

# Get the value for the key company
# If it doesn't exist, return 1'
print("--4--")
if not my_dict.get("key"):
    print(1)
else:
    print(my_dict.get("key"))

print(my_dict.get("key", 1))

# Return all the values
print("---5---")
print(my_dict.values())

# Return all the key, value pairs
print("---6---")
print(my_dict.items())

# Default dict
my_default_dict = defaultdict(int)
my_default_dict["age"] = 22
print(my_default_dict["company"])
print(my_default_dict["age"])
```

```python title="data_structure_list
# List in Python
p1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
p2 = p1[0: 5]
p3 = p1[::-1]
print(p1)
print(p2)
print(p3)

depths = [1, 5, 3, 6, 4, 7, 10, 12]
first_5_depths = depths[:5]

print("---0---")
print(first_5_depths)

# You can easily sum
print("---1---")
print(sum(depths))

# Slicing with negative starts from the end, so this returns the last element
print("---2---")
print(depths[-1])


# Print the second to the last element
print("---3---")
print(depths[-2])

# Return the second, third, and forth elements
print("---4---")
print(depths[2:5])

# Check if values in the list
print("---5---")
print(22 in depths)
print(1 in depths)

# Return the maximum value in the list
print("---6---")
print(max(depths))

# Add another value to the list
depths.append(44)
print("---7---")
print(depths)

# Extend the list with another list
print("--8---")
depths.extend([100, 200])
print(depths)

# Replace the 4th value with 100
depths[4] = 100
print("---9---")
print(depths)

# Insert to accomplish the same thing
print("---10---")
depths.insert(1, 500)
print(depths)


```

```python title="data_structure_set.py"
my_set = set()
my_set.add(1)
my_set.add(2)
my_set.add(3)

print("---0---")
print(my_set)

my_set2 = set()
my_set2.add(1)
my_set2.add(2)
my_set2.add(3)
my_set2.add(4)
print("---1---")
print(my_set2)


# Prints the overlap
print(my_set.intersection(my_set2))

# Print the combination
print(my_set.union(my_set2))

# Print the difference
print(my_set.difference(my_set2))
print(my_set2.difference(my_set))
```

```python title="numpy_2d_array.py"
import numpy as np


np_2d_array = np.array([[1, 2, 3], [4, 5, 6]])
print(np_2d_array)
print(np_2d_array.shape)
print("Sum:", np.sum(np_2d_array))

# Calculate the transpose, which is when you swap the columns and rows
np_2d_array_T = np_2d_array.T
print(np_2d_array_T)

# Access 2D array
print(np_2d_array[1, 1])
print(np_2d_array[0, 0])
```

```python title="numpy_practice.py"
import numpy as np


np_2d_array = np.array([[1, 2, 3], [4, 5, 6]])
print(np_2d_array)
print(np_2d_array.shape)
print("Sum:", np.sum(np_2d_array))

# Calculate the transpose, which is when you swap the columns and rows
np_2d_array_T = np_2d_array.T
print(np_2d_array_T)

# Access 2D array
print(np_2d_array[1, 1])
print(np_2d_array[0, 0])
```

```python title="numpy_scipy_practice.py"
import numpy as np
from scipy import stats

def perform_calculations(array):
    np_array = np.array(array)
    max_val = np.max(np_array)
    np_std = np.std(np_array)
    np_sum = np.sum(np_array)
    np_dot = np.dot(np_array, np_array)

    return max_val, np_std, np_sum, np_dot


def correlation(array1, array2):
    return stats.pearsonr(array1, array2)


def main():
    print(perform_calculations([1, 4, 6, 5, 2]))
    print(correlation(np.random.rand(5), np.random.rand(5)))


if __name__ == "__main__":
    main()
```

#### Reading Data

```python title="reading_csv.py"
import pandas as pd

csv_file = "/Users/quinnle/PycharmProjects/python-data-analysis-and-visualization/adult/adult.data"
names = ['age', 'workclass', 'fnlwgt', 'education', 'educationnum', 'maritalstatus', 'occupation', 'relationship', 'race',
        'sex', 'capitalgain', 'capitalloss', 'hoursperweek', 'nativecountry', 'label']
df = pd.read_csv(csv_file, header=None, names=names)
print(df.head())
```

```python title="reading_json"
import json

json_string = """{
    "glossary": {
        "title": "example glossary",
        "GlossDiv": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossTerm": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": ["GML", "XML"]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
}"""

json_data = json.loads(json_string)
print(json_data)
print(type(json_data))
print(type(json_string))
```

### Describing Data

```python title="group_by_aggregation.py"
import pandas as pd


def read_csv():
    names = ["mpg", "cylinders", "displacement", "horsepower", "weight", "acceleration", "model_year", "origin", "car_name"]
    auto_mpg_file = "/Users/quinnle/PycharmProjects/python-data-analysis-and-visualization/auto+mpg/auto-mpg.data"
    df = pd.read_csv(auto_mpg_file, header=None, names=names, delim_whitespace=True)
    return df


def group_aggregation(df, group_var, agg_var):
    grouped_df = df.groupby([group_var])[agg_var].mean()
    return grouped_df


df = read_csv()
print(group_aggregation(df, "cylinders", "mpg"))
```


```python title="reshaping_data.py"
import numpy as np
import pandas as pd


names = ['age', 'workclass', 'fnlwgt', 'education', 'educationnum', 'maritalstatus', 'occupation', 'relationship', 'race',
        'sex', 'capitalgain', 'capitalloss', 'hoursperweek', 'nativecountry', 'label']
adult_csv_file = "/Users/quinnle/PycharmProjects/python-data-analysis-and-visualization/adult/adult.data"
train_df = pd.read_csv(adult_csv_file, header=None, names=names)

# print(pd.pivot_table(train_df, values="hoursperweek", index=['relationship', 'workclass'], columns=['label'], aggfunc=np.mean).round(2))
print(pd.crosstab(train_df['label'], train_df.relationship))
print(pd.crosstab(train_df['label'], train_df.relationship, normalize=True))
```

```python title="statistics_and_count.py"
import pandas as pd


names = ['age', 'workclass', 'fnlwgt', 'education', 'educationnum', 'maritalstatus', 'occupation', 'relationship', 'race',
        'sex', 'capitalgain', 'capitalloss', 'hoursperweek', 'nativecountry', 'label']
adult_csv_file = "/Users/quinnle/PycharmProjects/python-data-analysis-and-visualization/adult/adult.data"
train_df = pd.read_csv(adult_csv_file, header=None, names=names)

# Get the first 10 rows
print(train_df.head(10))

# Get the total number of rows and columns
print(train_df.shape)

# Provide  count, mean, std, min, etc.
print(train_df.describe())

# Get info from dataframe (?)
# print(train_df.info)

# Find unique values
print(train_df['nativecountry'].unique())
print(train_df['relationship'].unique())

# Find the counts of unique values
print(train_df['relationship'].value_counts())

# Grouping data
print(train_df.groupby(['relationship'])['label'].value_counts(normalize=True))
print(train_df.groupby(['workclass'])['hoursperweek'].mean())


```

```python title="categorical_data.py"
import pandas as pd

non_categorical_series = pd.Series(['male', 'female', 'male', 'female'])

categorical_series = non_categorical_series.astype('category')

# Print the numeric code
print(categorical_series.cat.codes)

# Print the category names
print(categorical_series.cat.categories)

print(pd.get_dummies(non_categorical_series))
```

```python title="missing_data.py"
import numpy as np
import pandas as pd


pd_series = pd.Series([5, 10, np.nan, 15, 20, np.nan, 25, 50, np.nan])
print("Average of non-missing values:", round(pd_series.mean(), 2))

filla_pd_series = pd_series.fillna(pd_series.mean())
print(filla_pd_series)

no_nan_pd_series = pd_series.dropna()
print(no_nan_pd_series)

isnull_pd_series = pd_series.isnull()
print(isnull_pd_series)
```