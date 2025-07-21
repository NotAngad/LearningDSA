/**
 * https://leetcode.com/problems/special-array-i/
 * An array is considered special if the parity of every pair of adjacent elements is different. In other words, one
 * element in each pair must be even, and the other must be odd. You are given an array of integers nums. Return true if
 * nums is a special array, otherwise, return false.
 * Input: nums = [1]
 * Output: true
 * Explanation:
 * There is only one element. So the answer is true.
 */
const isArraySpecial = (nums = []) => {
  if (nums.length === 1) return true;

  for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i] + nums[[i + 1]]) % 2 === 0) return false;
  }

  return true;
};

console.log(isArraySpecial([2, 1, 4]));
