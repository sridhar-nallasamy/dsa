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

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function (x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

  let reversed = 0;
  let temp = x;

  while (temp > 0) {
    const lastDigit = temp % 10;
    reversed = reversed * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }

  return reversed === x;
};
