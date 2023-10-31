---
title: Day 6
---

# Hashmap and Set

#### 2215. Find the Difference of Two Arrays

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