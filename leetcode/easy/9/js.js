/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  /**
   * Time: O(logn)
   * Space: O(1)
   */
  if (x < 0) return false;

  const num = x.toString();
  let l = 0;
  let r = num.length - 1;
  while (l < r) {
    if (num.charAt(l) !== num.charAt(r)) return false;
    l += 1;
    r -= 1;
  }
  return true;
};
