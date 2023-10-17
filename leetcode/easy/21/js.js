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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  /**
   * Time: O(m+n)
   * Space: O(m+n)
   *
   * where m is the length among of list1
   * where n is the length among of list2
   * ✅
   */
  if (!list1) return list2;
  if (!list2) return list1;
  let list3 = new ListNode();
  const result = list3;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      list3.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      list3.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    list3 = list3.next;
  }
  if (list1) list3.next = list1;
  if (list2) list3.next = list2;
  return result.next;
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists2 = function (list1, list2) {
  /**
   * Time: O(m+n)
   * Space: O(m+n)
   *
   * where m is the length among of list1
   * where n is the length among of list2
   */
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

const a = new ListNode(1, new ListNode(3, new ListNode(5)));
const b = new ListNode(2, new ListNode(4, new ListNode(6)));

function printListNode(a) {
  const res = [];
  while (a) {
    res.push(a.val);
    a = a.next;
  }
  return res;
}

console.log(printListNode(mergeTwoLists(a, b)));
console.log(printListNode(mergeTwoLists2(a, b)));
