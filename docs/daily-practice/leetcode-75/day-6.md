---
title: Day 6
---

# Hashmap and Set

#### 2215. Find the Difference of Two Arrays

- The first solution of mine is a little bit lengthy because I need to check for unique number in nums1 compared to nums2 and vice versa.
- The second solution helps me learn about the "-" operation in list to find the unique values between two lists.

```python
def find_differences_i(nums1, nums2):
    res = []
    nums1 = set(nums1)
    first = []
    second = []
    for num in nums1:
        if num not in nums2:
            first.append(num)

    nums2 = set(nums2)
    for num in nums2:
        if num not in nums1:
            second.append(num)
    res.append(first)
    res.append(second)
    return res


def find_differences_ii(nums1, nums2):
    nums1 = set(nums1)
    nums2 = set(nums2)
    return [list(nums1 - nums2), list(nums2 - nums1)]


def main():
    print(find_differences_i(nums1=[1, 2, 3], nums2=[2, 4, 6]))
    print(find_differences_ii(nums1=[1, 2, 3], nums2=[2, 4, 6]))

    print(find_differences_i(nums1=[1, 2, 3, 3], nums2=[1, 1, 2, 2]))
    print(find_differences_ii(nums1=[1, 2, 3, 3], nums2=[1, 1, 2, 2]))


if __name__ == "__main__":
     main()
     

```

#### 1207. Unique Number of Occurences

```python
from collections import defaultdict


def uniqueOccurrences(arr):
    numbers = set(arr)
    occurrences = defaultdict(int)
    count = set()
    for num in arr:
        occurrences[num] += 1
    for key in occurrences:
        count.add(occurrences[key])
    return len(numbers) == len(count)


def main():
    print(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
    print(uniqueOccurrences([1, 2]))
    print(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))


if __name__ == "__main__":
    main()


```

#### 1657. Determine if Two Strings Are Close

```python
from collections import Counter


def closeStrings(word1, word2):
    if len(word1) < len(word2) or len(word1) > len(word2):
        return False

    char_dict_1 = {}
    char_dict_2 = {}
    for c in word1:
        if c in char_dict_1:
            char_dict_1[c] += 1
        else:
            char_dict_1[c] = 1

    occurrences_1 = []
    chars1 = []
    for key in char_dict_1:
        chars1.append(key)
        occurrences_1.append(char_dict_1[key])

    for c in word2:
        if c in char_dict_2:
            char_dict_2[c] += 1
        else:
            char_dict_2[c] = 1

    occurrences_2 = []
    chars2 = []
    for key in char_dict_2:
        chars2.append(key)
        occurrences_2.append(char_dict_2[key])

    chars1.sort()
    chars2.sort()
    occurrences_1.sort()
    occurrences_2.sort()

    if chars1 != chars2:
        return False

    for i in range(len(occurrences_1)):
        if occurrences_1[i] != occurrences_2[i]:
            return False
    return True


def closeStrings_ii(word1, word2):
    return sorted(Counter(word1).values()) == sorted(Counter(word2).values()) and set(word1) == set(word2)


def main():
    # print(closeStrings("abc", "acb"))  # True
    # print(closeStrings("a", "aa"))  # False
    # print(closeStrings("cabbba", "abbccc"))  # True

    print(closeStrings_ii("abc", "acb"))  # True
    # print(closeStrings_ii("a", "aa"))  # False
    # print(closeStrings_ii("cabbba", "abbccc"))  # True




if __name__ == "__main__":
    main()
```

#### 2352. Equal Row and Column Pairs

```python
from collections import defaultdict


def find_equal_rows_columns(grid):
    rows = []
    columns = []
    n = len(grid)
    count = 0

    # Add rows
    for i in range(n):
        cur_row = []
        for j in range(n):
            cur_row.append(grid[i][j])
        rows.append(cur_row)

    # Add columns
    for i in range(n):
        cur_col = []
        for j in range(n):
            cur_col.append(grid[j][i])
        columns.append(cur_col)

    for row in rows:
        for column in columns:
            if row == column:
                count += 1
    return count


def find_equal_rows_columns_ii(grid):
    rows = [str(row) for row in grid]
    row_dict = {}
    for row in rows:
        if row in row_dict:
            row_dict[row] += 1
        else:
            row_dict[row] = 1

    count = 0
    # Check column
    n = len(grid)

    for i in range(n):
        cur_col = []
        for j in range(n):
            cur_col.append(grid[j][i])
        cur_col = str(cur_col)
        if cur_col in rows:
            count += row_dict[cur_col]
    return count


def main():
    print(find_equal_rows_columns(grid=[[3, 2, 1], [1, 7, 6], [2, 7, 7]]))  # 1
    print(find_equal_rows_columns_ii(grid=[[3, 2, 1], [1, 7, 6], [2, 7, 7]]))  # 1
    print(find_equal_rows_columns(grid=[[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]))
    print(find_equal_rows_columns_ii(grid=[[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]))


if __name__ == "__main__":
    main()

```