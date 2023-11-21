---
title: Day 2
---

## Let's finish Array and String today!!!

### 1768. Merge Strings Alternately

\- There are three ways I can use to solve this problem
\- The first one is my intuitive thought by connecting the first letters of word1 and word2 to the result string, then  I slice the two words starting from index 1
\- The second one is a little similar but I use two pointers for two words. I will append the rest of the words to the result if there're any letters left
\- The third one is very intersting with the use of zip_longest. With this built-in function, we can connect two words alternately with the fillvalue="" which means there's no space connecting. However, the result of the zip_longest is a list of tuples. so I have to use a for loop to connect the values.

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


def main():
    print(mergeAlternately("abc", "pqr"))
    print(mergeAlternately_ii("abc", "pqr"))
    print(mergeAlternately_iii("abc", "pqr"))
    print("--")
    print(mergeAlternately("ab", "pqrs"))
    print(mergeAlternately_ii("ab", "pqrs"))
    print(mergeAlternately_iii("ab", "pqrs"))
    print("--")
    print(mergeAlternately("abcd", "pq"))
    print(mergeAlternately_ii("abcd", "pq"))
    print(mergeAlternately_iii("abcd", "pq"))


if __name__ == "__main__":
    main()
```

### Kids With the Greatest Number of Candies

\- This can be easily solved by finding the maximum candies value in the array then traversing the array, with every value adding the extraCandies, if that current value is equal to bigger than the maximum candies value, it will be True. 
\- The second solution is quite similar, we still need to find the maximum value. Instead of checking the "sum" like the first solution, we just check the result after subtract the current candies from the maximum candies value. If the result is smaller or equal to the extraCandies, return True and vice versa.

```python
def kidsWithCandies(candies, extraCandies):
    max_candies = 0
    res = []
    for c in candies:
        max_candies = max(max_candies, c)

    for c in candies:
        if c + extraCandies >= max_candies:
            res.append(True)
        else:
            res.append(False)
    return res


def kidsWithCandies_ii(candies, extraCandies):
    max_candies = 0
    for i in range(len(candies)):
        max_candies = max(max_candies, candies[i])

    for i in range(len(candies)):
        if max_candies - candies[i] <= extraCandies:
            candies[i] = True
        else:
            candies[i] = False
    return candies


def main():
    print(kidsWithCandies([2, 3, 5, 1, 3], 3))
    print(kidsWithCandies_ii([2, 3, 5, 1, 3], 3))


if __name__ == "__main__":
    main()

```

### Can Place Flower
\- For the current position in the flowerbed, if the current value is empty, we need to check the left position and the right position to make sure that they are both empty so that we can place a flower. 
\- Checking the read ends (i == 0, i == len(flowerbed) - 1) is important as well because if those two spots are empty, we can place our flower as well. 

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

### Reverse Vowels of a String

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
    print(reverse_vowels("leetcode"))


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


def main():
    print(reverse_words("the sky is blue"))  # blue is sky the
    print(reverse_words("    harry    potter"))  # potter harry


if __name__ == "__main__":
    main()

```

### Product of Array Except Self
\- For this problem, I can learn about the prefix/suffix calculations to solve this problem. However, I still haven't comprehended the prefix/suffix approach, so I'll definitely check out more exercises to practice

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

#### Notes:
\- Haven't able to finish all problems in Array/String. Will finish them all tomorrow
\- Check out and prefix/suffix calculation approach
