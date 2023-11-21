---
title: Day 1
---

## LeetCode 75: Ace Coding Interview with 75 Questions

#### Notes:
\- This study plan of Leetcode provides 75 basic and important questions that I should know to prepare for the coding/technical interview. 
\- Not only these 75 questions cover the common and essential data structures but also the coding patterns when it comes to coding interviews. 
\- I first started this by doing some exercises here and there, jumping around all over. However, I wills stick to each category and try my best to finish it before moving on to the next one.
\- Most of the problems I solve on Day 1 are the ones that I've done before, so that's why I was able to do quite a lot (14 out of 75)

### What I did on Day 1?
\- Array/String review: 
    - Merge Strings Alternately
    - Kids With The Greatest Number of Candies
    - Can Place Flowers
    - Reverse Vowels of a String
    - Reverse Words in a String
\- Two Pointers:
    - Move Zeroes
    - Is Subsequence

\- HashMap/Set:
    - Find the difference of two arrays

\- Stack: 
    - Removing Stars From a String

\- Linked List (Finished)
    - Delete the Middle Node of a Linked List
    - Odd Even Linked List
    - Reverse Linked List
    - Maximum Twin Sum of a Linked List

\- Graph - DFS:
    - Number of Provinces


#### Notes:
\- Because I'm pretty familiar with Linked List problems on Leetcode and four Linked List problem in this study plan can be easily solved by applying Reverse or Fast and Slow pointers

##### Reverse Linked List
\- This is the most basic question in Linked List. 
\- What I understand is we are basically changing the way ListNode connected to each other. Therefore, we have three pointers to change the connection: prev, cur, and next_node
\- Traverse the linked list one node at a time and update the pointers


```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def reverse_linkedlist(head):
    prev = None
    cur = head
    while cur:
        next_node = cur.next
        cur.next = prev
        prev = cur
        cur = next_node
    return prev


def print_list(head):
    cur = head
    while cur.next:
        print(cur.val, end=" -> ")
        cur = cur.next
    print(cur.val, end=" -> null")


def main():
    h = ListNode(1)
    h.next = ListNode(2)
    h.next.next = ListNode(3)
    h.next.next.next = ListNode(4)

    print_list(head=reverse_linkedlist(h))


if __name__ == "__main__":
    main()
```

##### Delete the Middle Node of a Linked List
\- For this problem, we can apply the Fast and Slow pointers approach. 
\- By the time the Fast pointer reaches the end of the list, the Slow pointer will reach the middle node. However, because we need to delete the middle node, we need Prev pointer to keep track the one node before the Slow pointer.

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def print_list(head):
    cur = head
    while cur.next:
        print(cur.val, end=" -> ")
        cur = cur.next
    print(cur.val, end=" -> null")
    print()


def deleteMiddle(head):
    if head is None:
        return None

    if head.next is None:
        return None

    fast = slow = head
    prev = ListNode(0, head)
    dummy_head = prev.next

    # Traverse slow pointer to the middle node
    while fast and fast.next:
        fast = fast.next.next
        prev = slow
        slow = slow.next

    # Delete the middle node
    prev.next = prev.next.next
    return dummy_head


def main():
    h = ListNode(1)
    h.next = ListNode(2)
    h.next.next = ListNode(3)
    h.next.next.next = ListNode(4)
    print_list(deleteMiddle(h))


if __name__ == "__main__":
    main()
```


##### Maximum Twin Sum of a Linked List
\- To find the twin sum, you need to find the sum of the ith node and the (n - 1 - i)th node.
\- I can solve this problem by reversing the second half of the list, have one pointer at the head of the first half and another one at the head of the reversed second half. Then, we just need to add the value of each node of each half.

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def pairSum(head):
    fast = slow = head

    # Traverse slow pointer to the middle node
    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next

    # Reverse the second half
    prev = None
    while slow:
        next_node = slow.next
        slow.next = prev
        prev = slow
        slow = next_node
    slow = prev
    fast = head
    max_sum = float("-inf")
    while fast and slow:
        cur_sum = fast.val + slow.val
        max_sum = max(max_sum, cur_sum)
        fast = fast.next
        slow = slow.next
    return max_sum


def main():
    h = ListNode(5)
    h.next = ListNode(4)
    h.next.next = ListNode(2)
    h.next.next.next = ListNode(1)

    h1 = ListNode(4)
    h1.next = ListNode(2)
    h1.next.next = ListNode(2)
    h1.next.next.next = ListNode(3)

    print(pairSum(h))  # 6
    print(pairSum(h1))  # 7


if __name__ == "__main__":
    main()


```

##### Odd Even Linked List
\- The odd and even are based on the "index" of the node. The first node of the list will have index 1 and so on. 
\- We can easily solve it by having to pointer. One at the first even index and the other one at the first odd index.
\- The tricky part here is setting the codition for the while loop while connecting the even nodes and odd nodes. However, just by drafting some cases on the paper, I can know that making sure even and even.next is None would work

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def print_list(head):
    cur = head
    while cur.next:
        print(cur.val, end=" -> ")
        cur = cur.next
    print(cur.val, end=" -> null")
    print()


def oddEvenList(head):
    if not head:
        return head

    odd = head
    even = head.next
    evenHead = even

    while even and even.next:
        odd.next = odd.next.next
        even.next = even.next.next
        odd = odd.next
        even = even.next

    odd.next = evenHead
    return head


def main():
    h = ListNode(1)
    h.next = ListNode(2)
    h.next.next = ListNode(3)
    h.next.next.next = ListNode(4)
    h.next.next.next.next = ListNode(5)

    print_list(head=h)
    print_list(head=oddEvenList(h))


if __name__ == "__main__":
    main()
```