/**
 * https://leetcode.com/problems/number-of-good-pairs/
 * Given an array of integers nums, return the number of good pairs.
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 */
var numIdenticalPairs = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] ?? 0) + 1;
  }

  let counter = 0;

  for (let key in map) {
    const freq = map[key];
    if (freq > 1) {
      counter += (freq * (freq - 1)) / 2;
    }
  }

  return counter;
};

console.log(numIdenticalPairs([1, 1, 1, 1]));
