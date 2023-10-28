/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  /**
   * Time: O(m + n)
   * Space: O(1)
   *
   * where m = length of a & n = length of b
   * ✅
   */
  let result = '';
  let carry = 0;
  let idx = 0;
  const aLen = a.length - 1;
  const bLen = b.length - 1;
  const maxLen = Math.max(aLen, bLen);

  while (idx <= maxLen) {
    let x = 0;
    let y = 0;

    if (aLen - idx >= 0) {
      x = parseInt(a[aLen - idx], 2);
    }

    if (bLen - idx >= 0) {
      y = parseInt(b[bLen - idx], 2);
    }

    const sum = x + y + carry;
    console.log({ sum });

    if (sum > 1) {
      carry = 1;
      result = `${sum % 2}${result}`;
    } else {
      carry = 0;
      result = `${sum}${result}`;
    }
    idx += 1;
  }

  if (carry) result = `1${result}`;

  return result;
};

/**
 * result: 11110
 */
console.log(addBinary('1111', '1111'));
