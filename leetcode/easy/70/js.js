const { assertion } = require('../../assertion');

/**
 * @param {number} n
 * @return {number}
 *
 ** RECURSION
 */
var climbStairs = function (n) {
  /**
   * Time: O(n)
   * Space: O(n)
   */
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 *
 * @param {number} n
 * @param {Map} memo
 */
var climbStairs1Memo = function (n, memo) {
  if (n <= 2) return n;

  if (!memo.get(n))
    memo.set(n, climbStairs1Memo(n - 1, memo) + climbStairs1Memo(n - 2, memo));

  return memo.get(n);
};

/**
 * @param {number} n
 * @return {number}
 *
 ** RECURSION WITH MEMO
 */
var climbStairs1 = function (n) {
  /**
   * Time: O(n)
   * Space: O(n)
   */
  const memo = new Map();
  return climbStairs1Memo(n, memo);
};

/**
 * @param {number} n
 * @return {number}
 *
 ** DP TABLE
 */
var climbStairs2 = function (n) {
  /**
   * Time: O(n)
   * Space: O(n)
   */
  if (n <= 2) return n;
  const dp = [1, 1];
  for (let i = 2; i <= n; i += 1) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp.pop();
};

/**
 * @param {number} n
 * @return {number}
 *
 ** TWO POINTERS
 */
var climbStairs3 = function (n) {
  /**
   * Time: O(n)
   * Space: O(1)
   *
   * ✅
   */
  if (n <= 2) return n;
  let prev = 1;
  let curr = 1;
  for (let i = 2; i <= n; i += 1) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};

assertion(
  [
    { inputs: [1], output: 1 },
    { inputs: [2], output: 2 },
    { inputs: [45], output: 1836311903 },
  ],
  climbStairs3
);
