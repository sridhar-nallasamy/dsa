/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  /**
   * Time: O(n)
   * Space: O(1)
   *
   * where n is the length of the digits
   */
  let carry = 0;
  let digitsLen = digits.length - 1;

  for (let i = digitsLen; i >= 0; i -= 1) {
    let digit = digits[i];

    if (i === digitsLen) digit += 1;

    if (carry) digit += 1;

    if (digit > 9) {
      digits[i] = 0;
      carry = 1;
    } else {
      digits[i] = digit;
      carry = 0;
      break;
    }
  }

  if (carry) digits.unshift(1);

  return digits;
};
