/**
 * https://leetcode.com/problems/contains-duplicate/
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is
 * distinct.
 * Input: nums = [1,2,3,1]
 * Output: true
 * Explanation: The element 1 occurs at the indices 0 and 3.
 */
const containsDuplicate = (nums) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    } else {
      map[nums[i]] = 1;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
