/**
 * https://leetcode.com/problems/monotonic-array/description/
 * An array is monotonic if it is either monotone increasing or monotone decreasing.An array nums is monotone
 * increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j,
 * nums[i] >= nums[j]. Given an integer array nums, return true if the given array is monotonic, or false otherwise.
 * Input: nums = [1,2,2,3]
 * Output: true
 */
const isMonotonic = (nums = []) => {
  if (nums.length === 1) return true;

  let inital = "";

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) continue;

    const current = nums[i + 1] >= nums[i] ? "inc" : "dec";

    if (!inital) {
      inital = current;
    } else if (current !== inital) {
      return false;
    }
  }

  return true;
};

console.log(isMonotonic([1, 3, 2]));
