/**
 * https://leetcode.com/problems/concatenation-of-array/
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] ==
 * nums[i] for 0 <= i < n (0-indexed). Specifically, ans is the concatenation of two nums arrays.
 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * Explanation: The array ans is formed as follows:
 * ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
 * ans = [1,2,1,1,2,1]
 */
function getConcatenation(nums) {
  let originalLength = nums.length;
  let iterations = nums.length * 2;

  for (let i = 0; i < iterations; i++) {
    if (i > originalLength - 1) {
      nums[i] = nums[i - originalLength];
    }
  }

  return nums;
}

console.log(getConcatenation([1, 2, 1]));
