---
title: Day 8
---

## Finish Stack category

#### Decode String

```python 
class Solution(object):
    def decodeString(self, s):
        nums = []
        num = 0
        strs = []
        curr_str = ""
        for c in s:
            if c.isdigit():
                num = num * 10 + int(c)
            elif c == "[":
                nums.append(num)
                strs.append(curr_str)
                num = 0
                curr_str = ""
            elif c == "]":
                prev_str = strs.pop()
                repeat = nums.pop()
                curr_str = prev_str + repeat * curr_str
            else:
                curr_str += c
        return curr_str


def main():
    solution = Solution()
    # print(solution.decodeString("3[a]2[b]"))
    print(solution.decodeString("3[a2[c]]"))


if __name__ == "__main__":
    main()

```

# Binary Tree (DFS)

### Maximum Depth of Binary Tree

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def find_max_depth(root):
    if not root:
        return 0
    left_depth = find_max_depth(root.left)
    right_depth = find_max_depth(root.right)

    return 1 + max(left_depth, right_depth)


def find_max_depth_iterative(root):
    stack = [(root, 1)]
    max_depth = 0
    while stack:
        node = stack.pop()
        depth = node[1]
        cur_node = node[0]
        max_depth = max(max_depth, depth)
        if cur_node.left:
            stack.append((cur_node.left, depth + 1))
        if cur_node.right:
            stack.append((cur_node.right, depth + 1))
    return max_depth


def main():
    root = TreeNode(5)
    root.left = TreeNode(3)
    root.left.left = TreeNode(1)
    root.left.left.left = TreeNode(7)
    root.left.right = TreeNode(4)
    root.right = TreeNode(6)
    print(find_max_depth(root))
    print(find_max_depth_iterative(root))


if __name__ == "__main__":
    main()

```

### Leaf Similar Tree

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def leaf_similar(root1, root2):
    leaves1 = dfs(root1, [])
    leaves2 = dfs(root2, [])

    return leaves1 == leaves2


def leaf_similar_iterative(root1, root2):
    def get_leaves(node):
        if not node:
            return
        stack = [node]
        leaves = []
        while stack:
            cur_node = stack.pop()
            if not cur_node.left and not cur_node.right:
                leaves.append(cur_node.val)
            if cur_node.left:
                stack.append(cur_node.left)
            if cur_node.right:
                stack.append(cur_node.right)
        return leaves
    leaves1 = get_leaves(root1)
    leaves2 = get_leaves(root2)

    return leaves1 == leaves2


def dfs(node, leaves):
    if not node:
        return
    if not node.left and not node.right:
        leaves.append(node.val)
    else:
        dfs(node.left, leaves)
        dfs(node.right, leaves)
    return leaves


def main():
    root1 = TreeNode(1)
    root1.left = TreeNode(2)
    root1.right = TreeNode(3)

    root2 = TreeNode(1)
    root2.left = TreeNode(3)
    root2.right = TreeNode(2)

    print(leaf_similar(root1, root2))
    print(leaf_similar_iterative(root1, root2))


if __name__ == "__main__":
    main()

```

### Count Good Nodes

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def count_good_nodes(root):
    def dfs(node, max_val):
        if not node:
            return 0
        count = 0
        if node.val >= max_val:
            max_val = node.val
            count += 1
        count += dfs(node.left, max_val)
        count += dfs(node.right, max_val)

        return count
    return dfs(root, float("-inf"))


def main():
    root = TreeNode(3)
    root.left = TreeNode(3)
    root.left.left = TreeNode(4)
    root.left.right = TreeNode(2)

    print(count_good_nodes(root))


if __name__ == "__main__":
    main()

```