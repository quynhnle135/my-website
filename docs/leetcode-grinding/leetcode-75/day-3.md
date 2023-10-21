---
title: Day3 
---

### Finish all exercises in Array/String category 

#### Greatest Common Divisor of Strings
- I actually tried to solve this by find the longest common prefix but it didn't work out. Based on the name of the problem, I should do something with the GCD. 
- Using either the math.gcd or implement gcd function are fine. It's better to implement the function yourself (and that's what Leetcode accepts as well)

```python
import math
def gcdOfStrings(str1, str2):
    len1 = len(str1)
    len2 = len(str2)

    gcd_len = gcd(len1, len2)
    # print(gcd_len)
    common_divisor = str1[:gcd_len]
    if str1 == common_divisor * (len1 // gcd_len) and str2 == common_divisor * (len2 // gcd_len):
        return common_divisor

    return ""


def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)


def main():
    print(gcdOfStrings(str1="ABC", str2="ABCABC"))
    print(gcdOfStrings(str1="ABABAB", str2="ABAB"))


if __name__ == "__main__":
    main()
```

#### Product of Array Except Self
 
- With the prefix/suffix approach, we're actually finding all the product before the current index value by going forward and backward. 


```python
def findProduct_i(nums):
    res = [0] * len(nums)
    for i in range(len(nums)):
        cur_product = 1
        for j in range(len(nums)):
            if i == j:
                continue
            else:
                cur_product *= nums[j]
        res[i] = cur_product
    return res


def findProduct_ii(nums):
    n = len(nums)
    pre = [1] * n
    post = [1] * n
    res = [1] * n
    pre_product = 1
    post_product = 1
    for i in range(n):
        pre[i] = pre_product
        pre_product *= nums[i]

    for i in range(n - 1, -1, -1):
        post[i] = post_product
        post_product *= nums[i]

    for i in range(n):
        res[i] = pre[i] * post[i]
    return res


def main():
    nums1 = [1, 2, 3, 4]
    nums2 = [-1, 1, 0, -3, 3]
    print(findProduct_i(nums1))
    print(findProduct_ii(nums1))
    print(findProduct_i(nums2))
    print(findProduct_ii(nums2))


if __name__ == "__main__":
    main()
```

#### String Compression

- This exercise confused me a little bit. They want user to update the given chars but also return the len of it as well. The tests cases (expected output) seem wrong and make no sense to me. 
- However, I can learn walker/runner (fast and slow pointers) technique in Array
- My intuitive thought to solve this problem is using a dictionary to keep track of a letter appearance and append them to the result string. At the end, I just need to return the length of that result string

```python
def compress_i(chars):
    char_dict = {}
    s = ""
    for char in chars:
        if char in char_dict:
            char_dict[char] += 1
        else:
            char_dict[char] = 1
    for c in char_dict:
        if char_dict[c] == 1:
            s += c
        else:
            s += c + str(char_dict[c])
    print(s)
    chars = list(s)
    print(chars)
    return len(s)


def compress_ii(chars):
    runner = 0
    walker = 0
    while runner < len(chars):
        chars[walker] = chars[runner]
        count = 1
        while runner + 1 < len(chars) and chars[runner] == chars[runner + 1]:
            runner += 1
            count += 1

        if count > 1:
            for c in str(count):
                chars[walker + 1] = c
                walker += 1
        runner += 1
        walker += 1
    return walker


def main():
    chars1 = ["a","a","b","b","c","c","c"]
    chars2 = ["a"]
    chars3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
    print(compress_i(chars1))  # 6
    print(compress_i(chars2))  # 1
    print(compress_i(chars3))  # 4


if __name__ == "__main__":
    main()
```

### Increasing Triplet Subsequence
- The first solution is simply using nested loops to check the condition, which is not effective since it takes up O(n^3) time complexity
- The second solution is using maxRight array and minLeft variables to keep track and compare. maxRight array is storing the maximum values before the current index value (but backward)
- The third solution with first and second variable to keep track of the minimum values are also great. As long first < second < nums, we find the triplet. This reminds me of finding second minimum value problem

```python
def increasingTriplet_i(nums):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            for k in range(j + 1, len(nums)):
                if i == j and i == k:
                    continue
                else:
                    if nums[i] < nums[j] and nums[j] < nums[k]:
                        return True
    return False


def increasingTriplet_ii(nums):
    n = len(nums)
    maxRight = [0] * n
    maxRight[-1] = nums[-1]
    for i in range(n - 2, -1, -1):
        maxRight[i] = max(maxRight[i + 1], nums[i + 1])

    minLeft = nums[0]
    for i in range(1, n - 1):
        if minLeft < nums[i] < maxRight[i]:
            return True
        minLeft = min(minLeft, nums[i])
    return False


def increasingTriplet_iii(nums):
    first = second = float("inf")
    for num in nums:
        if num <= first:
            first = num
        elif num <= second:
            second = num
        else:
            return True
    return False


def main():
    nums1 = [1, 2, 3, 4, 5]
    nums2 = [5, 4, 3, 2, 1]
    nums3 = [2, 1, 5, 0, 4, 6]

    print(increasingTriplet_i(nums1))  # True
    print(increasingTriplet_ii(nums1))
    print(increasingTriplet_iii(nums1))
    print(increasingTriplet_i(nums2))  # False
    print(increasingTriplet_ii(nums2))
    print(increasingTriplet_iii(nums2))
    print(increasingTriplet_i(nums3))  # True
    print(increasingTriplet_ii(nums3))
    print(increasingTriplet_iii(nums3))


if __name__ == "__main__":
    main()
```