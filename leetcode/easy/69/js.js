/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  /**
   * Time: O(Log n)
   * Space: O(1)
   * ✅
   */
  let left = 0;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sqr = mid * mid;
    if (sqr <= x) left = mid + 1;
    else right = mid - 1;
  }
  return right;
};

/**
 * result: 2
 */
console.log(mySqrt(8));
