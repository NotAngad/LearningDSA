/**
 * https://leetcode.com/problems/plus-one/
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The
 * digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any
 * leading 0's.
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 */
const plusOne = (digits) => {
  if (digits[[digits.length - 1]] !== 9) {
    digits[[digits.length - 1]]++;
    return digits;
  }

  let right = digits.length - 1;

  while (right >= 0) {
    if (digits[right] < 9) {
      digits[right]++;
      return digits;
    } else {
      digits[right] = 0;
      right--;
    }
  }

  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 9]));
