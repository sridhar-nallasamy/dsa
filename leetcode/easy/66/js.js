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

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne1 = (digits) => {
  /**
   * Time: O(n)
   * Space: O(1)
   *
   * where n is the length of the digits
   * ✅
   */
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    }

    digits[i] = 0;
  }

  const result = new Array(digits.length + 1).fill(0);
  result[0] = 1;
  return result;
};

console.log(plusOne([9]));
