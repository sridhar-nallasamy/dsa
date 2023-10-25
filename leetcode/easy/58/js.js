/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  /**
   * Time: O(n)
   * Space: O(1)
   *
   * where n is the length the string
   */
  if (!s.length) return 0;

  let result = 0;
  let count = 0;

  for (let idx = 0; idx < s.length; idx += 1) {
    if (s[idx] === ' ') {
      if (count) result = count;
      count = 0;
    } else {
      count += 1;
    }
  }

  return count ? count : result;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord1 = (s) => {
  /**
   * Time: O(n)
   * Space: O(1)
   *
   * where n is the length of the string
   * ✅
   */
  let result = 0;

  for (let idx = s.length - 1; idx >= 0; idx -= 1) {
    if (s[idx] === ' ' && result) break;

    if (s[idx] !== ' ') {
      result += 1;
    }
  }

  return result;
};

console.log(lengthOfLastWord1('   fly me   to   the moon   sridhar '));
