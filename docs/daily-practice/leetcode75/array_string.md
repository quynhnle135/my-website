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
```


### Product of Array Except Self

```python
```
