/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /**
   * Time: O(n)
   * Space: O(n)
   *
   * where n = length of nums
   */
  const checkedNums = new Map();

  checkedNums.set(nums[0], 0);
  let idx = 1;

  while (idx < nums.length) {
    const x = target - nums[idx];
    if (checkedNums.has(x)) return [checkedNums.get(x), idx];
    else checkedNums.set(nums[idx], idx);
    idx += 1;
  }
};
