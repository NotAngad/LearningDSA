/**
 * https://leetcode.com/problems/defuse-the-bomb/description/
 * You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of
 * length of n and a key k. To decrypt the code, you must replace every number. All the numbers are replaced
 * simultaneously. If k > 0, replace the ith number with the sum of the next k numbers. If k < 0, replace the ith number
 * with the sum of the previous k numbers. If k == 0, replace the ith number with 0. As code is circular, the next element
 * of code[n-1] is code[0], and the previous element of code[0] is code[n-1].
 * Input: code = [5,7,1,4], k = 3
 * Output: [12,10,16,13]
 * Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+
 * +1]. Notice that the numbers wrap around.
 */
const decrypt = (code = [], k = 0) => {
  const n = code.length;
  if (k === 0) return code.map(() => 0);

  const newNums = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      let steps = 0;

      let pointer = k > 0 ? (i + 1) % n : (i - 1 + n) % n;
      while (steps < Math.abs(k)) {
        sum += code[pointer];
        pointer = k > 0 ? (pointer + 1) % n : (pointer - 1 + n) % n;
        steps++;
      }

      newNums.push(sum);
    } else {
      let prevIndex, lastIndex;
      prevIndex = k > 0 ? i % n : (i - 1 - Math.abs(k) + n) % n;
      lastIndex = k > 0 ? (i + k) % n : (i - 1 + n) % n;

      sum = sum - code[prevIndex] + code[lastIndex];
      newNums.push(sum);
    }
  }

  return newNums;
};

console.log(decrypt([2, 4, 9, 3], -2));
