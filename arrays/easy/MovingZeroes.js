/**
 * https://leetcode.com/problems/move-zeroes/description/
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 */
const moveZeroes = (nums) => {
  let zP = -1; // Zero Pointer to remember where the last zero is
  let left = 0;

  while (left < nums.length) {
    if (zP === -1 && nums[left] === 0) {
      zP = left;
    }

    if (nums[left] !== 0 && zP > -1) {
      nums[zP] = nums[zP] + nums[left];
      nums[left] = nums[zP] - nums[left];
      nums[zP] = nums[zP] - nums[left];
      zP++;
    }

    left++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 2, 3, 4, 5, 0, 11, 12, 0]));
