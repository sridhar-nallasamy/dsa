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
 * @return {number}
 */
const recursive = (root) => {
  /**
   * Time: O(n)
   * Space: O(n)
   * where n is the number of nodes in the tree
   */
  if (!root) return 0;
  return Math.max(recursive(root.left), recursive(root.right)) + 1;
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
const iterative = (root) => {
  /**
   * Time: O(n)
   * Space: O(n)
   * where n is the number of nodes in the tree
   * ✅
   */
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length) {
    depth += 1;
    const len = queue.length;
    for (let i = 0; i < length; i += 1) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
  }
  return depth;
};
