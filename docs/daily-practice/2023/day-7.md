---
title: Day 7
---

# Stack - FILO!!!!

#### 2390. Removing Stars From a String

```python
class Solution(object):
    def removeStars(self, s):
        stack = []
        for c in s:
            if c == "*":
                stack.pop()
            else:
                stack.append(c)
        return "".join(stack)


def main():
    solution = Solution()
    print(solution.removeStars("leet**cod*e"))
    print(solution.removeStars("erase*****"))


if __name__ == "__main__":
    main()

```

#### 735. Asteroid Collision

```python
class Solution(object):
    def asteroidCollision(self, asteroids):
        stack = []
        for a in asteroids:
            if not stack or a > 0:
                stack.append(a)
            else:
                while stack and stack[-1] > 0 and stack[-1] < -a:
                    stack.pop()
                if not stack or stack[-1] < 0:
                    stack.append(a)
                elif stack and stack[-1] == -a:
                    stack.pop()
        return stack


def main():
    solution = Solution()
    print(solution.asteroidCollision([5, 10, -5]))  # [5, 10]
    print(solution.asteroidCollision([8, -8]))  # []
    print(solution.asteroidCollision([10, 2, -5]))  # [10]


if __name__ == "__main__":
    main()
```

#### 394. Decode String

```python
```