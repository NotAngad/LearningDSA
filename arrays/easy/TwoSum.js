/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * Input: nums = [2,7,11,15], target = 9
   Output: [0,1]
   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (map[difference] >= 0) {
      return [map[difference], i];
    }

    map[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
