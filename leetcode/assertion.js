/**
 * @param {{inputs: any, output: any}[]} tc
 * @param {Function} fn
 */
function assertion(tc, fn) {
  tc.forEach(({ inputs, output }) => {
    const res = fn(...inputs);
    console.log(
      res === output
        ? `✅ Passed for input: ${inputs}, output: ${res}`
        : `❌ Failed for input: ${inputs}, output: ${res}`
    );
  });
}

module.exports = { assertion };
