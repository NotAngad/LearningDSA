/**
 * https://leetcode.com/problems/transform-array-by-parity/description/
 * You are given an integer array nums. Transform nums by performing the following operations in the exact order
 * specified: Replace each even number with 0. Replace each odd numbers with 1. Sort the modified array in non-decreasing
 * order. Return the resulting array after performing these operations.
 * Input: nums = [4,3,2,1]
 * Output: [0,0,1,1]
 */
const transformArray = (nums) => {
  let zeroes = [];
  let ones = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      zeroes.push(0);
    } else {
      ones.push(1);
    }
  }

  return zeroes.concat(ones);
};

console.log(transformArray([1, 5, 1, 4, 2]));
