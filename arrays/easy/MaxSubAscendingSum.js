/**
 * https://leetcode.com/problems/maximum-ascending-subarray-sum/description/
 * Given an array of positive integers nums, return the maximum possible sum of an strictly increasing subarray in nums.
 * A subarray is defined as a contiguous sequence of numbers in an array.
 * Input: nums = [10,20,30,5,10,50]
 * Output: 65
 * Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
 */
const maxAscendingSum = (nums = []) => {
  let max = 0;
  let sum = nums[0] || 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      sum += nums[i];
    } else {
      max = Math.max(max, sum);
      sum = nums[i];
    }
  }

  return Math.max(max, sum);
};

maxAscendingSum([12, 17, 15, 13, 10, 11, 12]);
