/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  /**
   * Time: O(n)
   * Space: O(1)
   *
   * where n is the length of nums
   * ✅
   */
  let result = 0;
  for (let n of nums) {
    if (n !== val) {
      nums[result] = n;
      result += 1;
    }
  }
  return result;
};
