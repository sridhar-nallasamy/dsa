/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {number[]} arr
 */
function prepareListNode(arr) {
  let result = new ListNode();
  let curr = result;
  for (const num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }
  return result.next;
}
/**
 *
 * @param {ListNode} head
 */
function printListNode(head) {
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  console.log(res);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  /**
   * Time: O(n)
   * Space: O(n)
   * where n is the length of the ListNode
   */
  let result = head;
  let prev = result;
  let curr = result?.next ?? null;
  while (curr) {
    while (curr && curr.val === prev.val) {
      curr = curr.next;
    }
    prev.next = curr;
    curr = curr?.next ?? null;
    prev = prev?.next ?? null;
  }
  return result;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates1 = function (head) {
  /**
   * Time: O(n)
   * Space: O(1)
   * where n is the length of the ListNode
   * ✅
   */
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

printListNode(deleteDuplicates1(prepareListNode([1, 1, 1, 1, 2, 3, 4, 4])));
