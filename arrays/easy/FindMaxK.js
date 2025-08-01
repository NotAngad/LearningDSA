/**
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/
 * Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also
 * exists in the array. Return the positive integer k. If there is no such integer, return -1.
 * Input: nums = [-1,2,-3,3]
 * Output: 3
 * Explanation: 3 is the only valid k we can find in the array.
 */
const findMaxK = (nums = []) => {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] >= 0 && nums[right] >= 0) {
      right--;
      left++;
      break;
    }

    let op = nums[left] + nums[right];
    if (op === 0) {
      return nums[right];
    } else if (op >= 0) {
      right--;
    } else {
      left++;
    }
  }

  return -1;
};

console.log(findMaxK([-5, -4, -3, -2, -1, 1, 2, 3, 4, 6]));
