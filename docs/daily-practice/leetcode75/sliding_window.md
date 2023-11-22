---
title: Sliding Window
---

### Maximum Average Subarray I

```python
def max_average_subarray(nums, k):
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
    nums2 = [5]
    k1 = 4
    k2 = 1
    print(max_average_subarray(nums1, k1))
    print(max_average_subarray(nums2, k2))


if __name__ == "__main__":
    main()

```


### Maximum Number of Vowels in a Substring of Given Length

```python
def maxVowels(s, k):
    vowels = "aeiou"
    max_vowels = 0
    start = 0
    cur_vowels = 0
    for end in range(len(s)):
        if s[end] in vowels:
            cur_vowels += 1
        if end - start + 1 == k:
            max_vowels = max(max_vowels, cur_vowels)
            if s[start] in vowels:
                cur_vowels -= 1
            start += 1
    return max_vowels


def main():
    print(maxVowels("abciiidef", 3))  # 3
    print(maxVowels("leetcode", 3))  # 2
    print(maxVowels("aeiou", 2))  # 2


if __name__ == "__main__":
    main()

```


### Max Consecutives Ones III

```python
def longest_ones(nums, k):
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
    print(longest_ones([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))  # 6


if __name__ == "__main__":
    main()
```

### Longest Subarray of 1's After Deleting One 

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