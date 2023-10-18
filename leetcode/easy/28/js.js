/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  /**
   * Time: O(m+n)
   * Space: O(1)
   *
   * where m = haystack length & n = needle length
   * ✅
   */
  let idx = 0;
  while (idx < haystack.length) {
    if (haystack[idx] === needle[0]) {
      let i = 0;
      while (
        i < needle.length &&
        idx + i < haystack.length &&
        needle[i] === haystack[idx + i]
      ) {
        i += 1;
      }
      if (i === needle.length) return idx;
    }
    idx += 1;
  }
  return -1;
};
