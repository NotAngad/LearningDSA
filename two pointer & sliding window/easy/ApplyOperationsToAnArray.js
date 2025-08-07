/**
 * https://leetcode.com/problems/apply-operations-to-an-array/description/
 * You are given a 0-indexed array nums of size n consisting of non-negative integers. You need to apply n - 1 operations
 * to this array where, in the ith operation (0-indexed), you will apply the following on the ith element of nums: If
 * nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation. After
 * performing all the operations, shift all the 0's to the end of the array.
 * Input: nums = [1,2,2,1,1,0]
 * Output: [1,4,2,0,0,0]
 */
const applyOperations = (nums = []) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }

    right++;
  }

  return nums;
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
