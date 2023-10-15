/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  /**
   * ✅
   *
   * Time: O(1)
   * Space: O(1)
   */
  if (k <= numOnes) return k;

  if (k <= numOnes + numZeros) return numOnes;

  return numOnes + (k - (numOnes + numZeros)) * -1;
};
