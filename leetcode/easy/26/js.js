/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  /**
   * Time: O(n)
   * Space: O(1)
   * where n is the length of nums array.
   * ✅
   */
  let pointer = 1;
  let uniquePointer = pointer;
  while (pointer < nums.length) {
    if (nums[pointer] !== nums[pointer - 1]) {
      nums[uniquePointer] = nums[pointer];
      uniquePointer += 1;
    }
    pointer += 1;
  }
  console.log(nums);
  return uniquePointer;
};
