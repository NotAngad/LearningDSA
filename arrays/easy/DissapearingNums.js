/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 * Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the
 * range [1, n] that do not appear in nums.
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 */
const findDisappearedNumbers = (nums) => {
  const seen = new Set(nums);
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!seen.has(i)) result.push(i);
  }

  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
