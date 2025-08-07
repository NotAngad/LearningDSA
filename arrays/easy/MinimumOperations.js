/**
 * https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/
 * You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums. Return the
 * minimum number of operations to make all elements of nums divisible by 3.
 * Input: nums = [1,2,3,4]
 * Output: 3
 */
var minimumOperations = function (nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 !== 0) {
      counter++;
    }
  }

  return counter;
};

console.log(minimumOperations([1, 2, 3, 4]));
