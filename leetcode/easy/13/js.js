/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  /**
   * Time: O(n)
   * Space: O(1)
   *
   * where n = s length
   */
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let idx = s.length - 1;

  while (idx >= 0) {
    result += symbols[s.charAt(idx)];
    idx -= 1;

    let leftIdx = idx;
    let rightIdx = leftIdx + 1;

    while (
      leftIdx >= 0 &&
      rightIdx < s.length &&
      symbols[s.charAt(leftIdx)] < symbols[s.charAt(rightIdx)]
    ) {
      result -= symbols[s.charAt(leftIdx)];
      leftIdx -= 1;
      idx = leftIdx;
    }
  }

  return result;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt2 = function (s) {
  /**
   * Time: O(n)
   * Space: O(1)
   *
   * where n = s length
   * ✅
   */
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let idx = 0; idx < s.length - 1; idx += 1) {
    const val = symbols[s[idx]];
    if (val < symbols[s[idx + 1]]) {
      result -= val;
    } else {
      result += val;
    }
  }
  result += symbols[s[s.length - 1]];

  return result;
};
