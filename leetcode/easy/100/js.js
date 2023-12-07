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
 * @param {TreeNode} n
 * @returns {string}
 */
function preOrder(n) {
  if (!n) return 'X';
  let s = `${n.val}`;
  s = `${s}${preOrder(n.left)}`;
  s = `${s}${preOrder(n.right)}`;
  return s;
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  /**
   * Time: O(m + n)
   * Space: O(m + n)
   * when m = size of p & n = size of q
   */
  const pV = preOrder(p);
  const qV = preOrder(q);
  return pV === qV;
};
