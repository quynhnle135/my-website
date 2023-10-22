---
title: Day 5
---

### Sliding Windows

#### 643. Maximum Average Subarray I

- This problem is quite similar to the Maximum Sum K Subarray but there's one additional step is to divide the maximum sum with k to find the average
- Time complexity: O(n)
- Space complexity: O(1)

```python
def max_average_subarray_i(nums, k):
    max_sum = float("-inf")
    start = 0
    cur_sum = 0
    for end in range(len(nums)):
        cur_sum += nums[end]
        if end - start + 1 == k:
            max_sum = max(max_sum, cur_sum)
            cur_sum -= nums[start]
            start += 1
    return float(max_sum) / k


def main():
    nums1 = [1, 12, -5, -6, 50, 3]
    k1 = 4

    print(max_average_subarray_i(nums1, k1))

    nums2 = [5]
    k2 = 1

    print(max_average_subarray_i(nums2, k2))


if __name__ == "__main__":
    main()

```

#### 1456. Maximum Number of Vowels in a Substring of Given Length

```python
def max_vowels(s, k):
    vowels = "aeiou"
    start = 0
    count = 0
    res = 0
    for end in range(len(s)):
        if s[end] in vowels:
            count += 1
        if end - start + 1 == k:
            res = max(res, count)
            if s[start] in vowels:
                count -= 1
            start += 1
    return res


def main():
    print(max_vowels("abciiidef", 3))  # 3
    print(max_vowels("leetcode", 3))  # 2
    print(max_vowels("aeiou", 2))  # 2


if __name__ == "__main__":
    main()

```

#### 1004. Max Consecutive Ones III

```python
def longest_subarray(nums, k):
    max_len = 0
    start = 0

    for end in range(len(nums)):
        if nums[end] == 0:
            k -= 1
        while k < 0:
            if nums[start] == 0:
                k += 1
            start += 1
        cur_len = end - start + 1
        max_len = max(max_len, cur_len)
    return max_len



def main():
    nums1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
    k1 = 2

    nums2 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
    k2 = 3

    print(longest_subarray(nums1, k1))  # 6
    print(longest_subarray(nums2, k2))  # 10


if __name__ == "__main__":
    main()
```

#### 1493. Longest Subarray of 1's After Deleting One Element

```python
def longest_subarray(nums):
    k = 1
    start = 0
    max_len = 0
    for end in range(len(nums)):
        if nums[end] == 0:
            k -= 1
        while k < 0:
            if nums[start] == 0:
                k += 1
            start += 1
        max_len = max(max_len, end - start)
    return max_len


def main():
    nums1 = [1, 1, 0, 1]
    nums2 = [0, 1, 1, 1, 0, 1, 1, 0, 1]

    print(longest_subarray(nums1))
    print(longest_subarray(nums2))


if __name__ == "__main__":
    main()
```