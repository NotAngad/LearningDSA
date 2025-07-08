/**
 * https://leetcode.com/problems/single-number/
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * Input: nums = [2,2,1]
 * Output: 1
 */
const singleNumber = (nums = []) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else if (map[nums[i]] >= 1) {
      delete map[nums[i]];
    }
  }

  return Object.keys(map)[0];
};

console.log(singleNumber([4, 1, 2, 1, 2]));
