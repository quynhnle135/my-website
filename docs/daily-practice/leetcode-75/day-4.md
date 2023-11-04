---
title: Day 4
---

### Two Pointers

#### 283. Move Zeroes

- The first solution is:
    - Create a result array containing all zero values and its length is equal to nums' length. 
    - Traverse through every element in the nums array, append the non-zero values to the result array and update the curren index of result array. 
    - Time complexity: O(n)
    - Space complexity: O(n)

- The second solution is:
    - Have an index zero at the start of the index, if nums[zero] == 0 and current value in the array is not 0, we swap
    - If the nums[zero] is not 0, we increment the zero index
    - Time complexity: O(n)
    - Space complexity: O(1)


```python
def move_zero_i(nums):
    res = [0] * len(nums)
    index = 0
    for num in nums:
        if num != 0:
            res[index] = num
            index += 1
    return res


def move_zero_ii(nums):
    zero = 0
    for i in range(len(nums)):
        if nums[i] != 0 and nums[zero] == 0:
            # Swap
            nums[i], nums[zero] = nums[zero], nums[i]
            zero += 1
        if nums[zero] != 0:
            zero += 1
    return nums


def main():
    nums = [0, 1, 0, 3, 12]
    nums1 = [1, 2, 3, 0, 0, 5]
    print(move_zero_i(nums))
    print(move_zero_ii(nums))

    print(move_zero_i(nums1))
    print(move_zero_ii(nums1))

    print(move_zero_i([0]))
    print(move_zero_ii([0]))


if __name__ == "__main__":
    main()

```

#### 392. Is Subsequence

- I create two pointers, s_ptr starts at index 0 of s string, and p_ptr starts at index 0 of t string.
- Compare the value of these two index of s and p strings. If s[s_ptr] == t[t_ptr], we increment both of the index. Else, we increment the t_ptr to traverse every element in t string
- Time complexity: O(n), which n is the length of t_string
- Space complexity: O(1)

```python
def isSubsequence(s, t):
    if not s:
        return True
    if not t:
        return False
    s_ptr = 0
    t_ptr = 0
    while t_ptr < len(t):
        if t[t_ptr] == s[s_ptr]:
            s_ptr += 1
            if s_ptr == len(s):
                return True
        t_ptr += 1
    return s_ptr == len(s)


def main():
    print(isSubsequence("abc", "ahbgdc"))
    print(isSubsequence("axc", "ahbgdc"))


if __name__ == "__main__":
    main()
```


#### 11. Container With the Most Water

- To find the max area, we need to have the maximum width and length. The maximum width we can have is the length between the first indedx and the last index. Therefore, it's the best to have to pointers and each starts at the other end of the array

```python
def contain_most_water_i(height):
    maxArea = 1
    for i in range(len(height)):
        for j in range(i + 1, len(height)):
            cur_area = (j - i) * (min(height[i], height[j]))
            maxArea = max(maxArea, cur_area)
    return maxArea


def contain_most_water_ii(height):
    maxArea = 0
    i = 0
    j = len(height) - 1
    while i < j:
        curArea = (j - i) * (min(height[i], height[j]))
        maxArea = max(maxArea, curArea)
        if height[i] < height[j]:
            i += 1
        else:
            j -= 1
    return maxArea


def main():
    h1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    print(contain_most_water_i(h1))
    print(contain_most_water_ii(h1))

    h2 = [1, 1]
    print(contain_most_water_i(h2))
    print(contain_most_water_ii(h2))


if __name__ == "__main__":
    main()
```

#### 1679. Max Number of K-Sum Pairs

- There are two ways that I can solve thsi problem:
    - Sort the give array and apply binary search to find the target sum and update the count variable
        - Time Complexity: O(nlogn) because we use sort() function
        - Space Complexity: O(1)
    - Using default dictionary to store the value and appearance of the values in the array.    
        - Time complexity: O(n), because we just traverse through every element of the array
        - Space complexity: O(n), becasue we use defaultdict and may store up to n elements of the give array. 


```python
from collections import defaultdict


def find_max_pairs_i(nums, k):
    left = 0
    right = len(nums) - 1
    nums.sort()
    pairs = 0
    while left < right:
        cur_sum = nums[left] + nums[right]
        if cur_sum == k:
            pairs += 1
            left += 1
            right -= 1
        elif cur_sum < k:
            left += 1
        else:
            right -= 1
    return pairs


# Using default dict
def find_max_pairs_ii(nums, k):
    d = defaultdict(int)
    pairs = 0
    for num in nums:
        a = k - num
        if d[a] > 0:
            d[a] -= 1
            pairs += 1
        else:
            d[num] = +1
    return pairs


def main():
    nums1 = [1, 2, 3, 4]
    k1 = 5
    nums2 = [3, 1, 3, 4, 3]
    k2 = 6

    nums3 = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4]
    k3 = 2

    print(find_max_pairs_i(nums1, k1))  # 2
    print(find_max_pairs_ii(nums1, k1))

    print(find_max_pairs_i(nums2, k2))  # 1
    print(find_max_pairs_ii(nums2, k2))

    print(find_max_pairs_i(nums3, k3))  # 2
    print(find_max_pairs_ii(nums3, k3))


if __name__ == "__main__":
    main()
```