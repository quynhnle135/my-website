---
title: Linked List
---

### Delete the Middle Node of a Linked List

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


def delete_node_in_middle_list(head):
    if not head or not head.next:
        return head

    # Traverse to the middle node
    fast = head
    slow = head
    prev = None
    while fast and fast.next:
        fast = fast.next.next
        prev = slow
        slow = slow.next
    prev.next = slow.next
    return head


def main():
    h = ListNode(1)
    h.next = ListNode(2)
    h.next.next = ListNode(3)
    h.next.next.next = ListNode(4)
    print_list(delete_node_in_middle_list(head=h))

    h1 = ListNode(1)
    h1.next = ListNode(2)
    h1.next.next = ListNode(3)
    h1.next.next.next = ListNode(4)
    h1.next.next.next.next = ListNode(5)
    print_list(delete_node_in_middle_list(h1))


if __name__ == "__main__":
    main()
```


### Odd Even Linked List

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


def odd_even_list(head):
    if not head:
        return

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
    print_list(head=odd_even_list(h))


if __name__ == "__main__":
    main()
```


### Reverse Linked List

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


### Maximum Twin Sum of a Linked List

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


def reverse_linkedlist(head):
    prev = ListNode()
    while head:
        next_node = head.next
        head.next = prev
        prev = head
        head = next_node
    return prev


def pair_sum(head):
    max_sum = float("-inf")
    # Traverse to the middle node
    fast = head
    slow = head
    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next
    fast = head
    slow = reverse_linkedlist(slow)
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

    # print(pairSum(h))  # 6
    print(pair_sum(h))
    # print(pairSum(h1))  # 7
    print(pair_sum(h1))


if __name__ == "__main__":
    main()

```