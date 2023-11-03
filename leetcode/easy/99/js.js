/**
 * Definition for a binary tree node.
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @returns
 */
function recursion(root, arr) {
  if (!root) return;
  if (root.left) recursion(root.left, arr);
  arr.push(root.val);
  if (root.right) recursion(root.right, arr);
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalRec = function (root) {
  /**
   * Time: O(n)
   * Space: O(n)
   * where n is the size of the tree
   */
  const arr = [];
  recursion(root, arr);
  return arr;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalItr = function (root) {
  /**
   * Time: O(n)
   * Space: O(n)
   * where n is the size of the tree
   * ✅
   */
  const res = [];
  const stack = [];
  let node = root;
  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      const stackedNode = stack.pop();
      res.push(stackedNode.val);
      node = stackedNode.right;
    }
  }
  return res;
};
