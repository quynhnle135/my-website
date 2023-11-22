---
title: Array and String
---

### Merge String Alternately

```python
from itertools import zip_longest


def mergeAlternately(word1, word2):
    result = ""
    while word1 and word2:
        result += word1[0] + word2[0]
        word1 = word1[1:]
        word2 = word2[1:]
    while word1:
        result += word1
        word1 = ""
    while word2:
        result += word2
        word2 = ""
    return result


def mergeAlternately_ii(word1, word2):
    result = []
    i, j = 0, 0
    while i < len(word1) and j < len(word2):
        result.append(word1[i])
        result.append(word2[j])
        i += 1
        j += 1
    result.extend(word1[i:])
    result.extend(word2[j:])
    return "".join(result)


def mergeAlternately_iii(word1, word2):
    tuples = zip_longest(word1, word2, fillvalue="")
    res = ""
    for t in tuples:
        res += str(t[0]) + str(t[1])
    return res


def mergeAlternately_iv(word1, word2):
    ptr1 = 0
    ptr2 = 0
    new_string = ""
    while ptr1 < len(word1) and ptr2 < len(word2):
        new_string += word1[ptr1] + word2[ptr2]
        ptr1 += 1
        ptr2 += 1
    while ptr1 < len(word1):
        new_string += word1[ptr1]
        ptr1 += 1
    while ptr2 < len(word2):
        new_string += word2[ptr2]
        ptr2 += 1
    return new_string


def main():
    print(mergeAlternately("abc", "pqr"))
    print(mergeAlternately_ii("abc", "pqr"))
    print(mergeAlternately_iii("abc", "pqr"))
    print(mergeAlternately_iv("abc", "pqr"))
    print("--")
    print(mergeAlternately("ab", "pqrs"))
    print(mergeAlternately_ii("ab", "pqrs"))
    print(mergeAlternately_iii("ab", "pqrs"))
    print(mergeAlternately_iv("ab", "pqrs"))
    print("--")
    print(mergeAlternately("abcd", "pq"))
    print(mergeAlternately_ii("abcd", "pq"))
    print(mergeAlternately_iii("abcd", "pq"))
    print(mergeAlternately_iv("abcd", "pq"))


if __name__ == "__main__":
    main()
```


### Greatest Commmon Divisor of Strings

```python
import math
def gcdOfStrings(str1, str2):
    len1 = len(str1)
    len2 = len(str2)

    gcd_len = gcd(len1, len2)
    print(gcd_len)
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


### Kids With the Greatest Number of Candies

```python
def kids_with_the_greatest_number_of_candies(candies, extra_candies):
    max_candies = max(candies)
    for i in range(len(candies)):
        if candies[i] + extra_candies >= max_candies:
            candies[i] = True
        else:
            candies[i] = False
    return candies


def kids_with_the_greatest_number_of_candies_ii(candies, extra_candies):
    max_candies = max(candies)
    for i in range(len(candies)):
        if max_candies - candies[i] <= extra_candies:
            candies[i] = True
        else:
            candies[i] = False
    return candies


def main():
    print(kids_with_the_greatest_number_of_candies([2, 3, 5, 1, 3], 3))
    print(kids_with_the_greatest_number_of_candies_ii([2, 3, 5, 1, 3], 3))


if __name__ == "__main__":
    main()

```


### Can Place Flowers

```python
def canPlaceFlowers(flowerbed, n):
    if n == 0:
        return True
    count = 0
    for i in range(len(flowerbed)):
        if flowerbed[i] == 0:
            leftSpot = (i == 0) or (flowerbed[i - 1] == 0)
            rightSpot = (i == len(flowerbed) - 1) or (flowerbed[i + 1] == 0)

            if leftSpot and rightSpot:
                count += 1
                flowerbed[i] = 1
                if count == n:
                    return True
    return False


def main():
    print(canPlaceFlowers([1, 0, 0, 0, 1], 1))  # True
    print(canPlaceFlowers([1, 0, 0, 0, 1], 2))  # False
    print(canPlaceFlowers([1, 0, 0], 1))  # True


if __name__ == "__main__":
    main()

```


### Reverse Vowels in a String

```python
def reverse_vowels(s):
    vowels = "aeiouAEIOU"
    start = 0
    end = len(s) - 1
    s = list(s)
    while start < end:
        if s[start] in vowels and s[end] in vowels:
            # Swap
            s[start], s[end] = s[end], s[start]
            start += 1
            end -= 1
        elif s[start] in vowels:
            end -= 1
        else:
            start += 1
    return "".join(s)


def main():
    print(reverse_vowels("hello"))
    print(reverseVowels("hello"))
    print(reverse_vowels("leetcode"))
    print(reverseVowels("leetcode"))


if __name__ == "__main__":
    main()
```

### Reverse Words in a String

```python
import re


def reverse_words(s):
    s = re.sub(" +", " ", s.strip())
    words = []
    start = 0
    res = ""
    for end in range(len(s)):
        if s[end] == " ":
            word = s[start: end]
            words.append(word)
            start = end + 1

    # Connect last word
    words.append(s[start: len(s)])

    # Reverse words
    for i in range(len(words) - 1, -1, -1):
        res += words[i] + " "

    return res.strip()


def reverseWords(s):
    stack = []
    s = re.sub(" +", " ", s.strip())
    word = ""
    for i in range(len(s)):
        if s[i] != " ":
            word += s[i]
        else:
            stack.append(word)
            word = ""
    stack.append(word)
    reversed_s = ""
    while stack:
        reversed_s += stack.pop() + " "
    return reversed_s.strip()


def main():
    print(reverse_words("the sky is blue"))  # blue is sky the
    print(reverse_words("    harry    potter"))  # potter harry
    print(reverseWords("the sky is blue"))
    print(reverseWords("     harry    potter "))


if __name__ == "__main__":
    main()
```


### Product of Array Except Self

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
