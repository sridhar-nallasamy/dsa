/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  /**
   * Time: O(n)
   * Space: O(n)
   *
   * where n is the length of s
   */
  const bracketsMap = { '(': ')', '{': '}', '[': ']' };
  const stack = [];
  let idx = 0;
  while (idx < s.length) {
    const currentBracket = s[idx];
    if (bracketsMap[currentBracket]) {
      stack.push(bracketsMap[currentBracket]);
    } else if (stack.at(-1) === currentBracket) {
      stack.pop();
    } else {
      return false;
    }
    idx += 1;
  }
  return stack.length === 0;
};
