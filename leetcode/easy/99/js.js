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
var inorderTraversal = function (root) {
  /**
   * Time: O(n)
   * Space: O(n)
   * where n is the size of the tree
   */
  const arr = [];
  recursion(root, arr);
  return arr;
};
