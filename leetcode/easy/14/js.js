/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  /**
   * Time: O(n log n)
   * Space: O(m)
   *
   * where n is the length of the array &
   * m is the length of 1st word after sorting
   */
  strs.sort();
  const leftWord = strs[0];
  const rightWord = strs.at(-1);
  let idx = 0;
  let res = '';
  while (idx < leftWord.length) {
    if (leftWord[idx] === rightWord[idx]) {
      res += leftWord[idx];
      idx += 1;
    } else {
      break;
    }
  }
  return res;
};
