/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in
 * non-decreasing order.
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * Explanation: After squaring, the array becomes [16,1,0,9,100].
 * After sorting, it becomes [0,1,9,16,100].
 */
const sortedSquares = (nums = []) => {
  let left = 0;
  let right = nums.length - 1;
  let result = [];
  let i = right;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] ** 2;
      left++;
    } else {
      result[i] = nums[right] ** 2;
      right--;
    }

    i--;
  }

  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
