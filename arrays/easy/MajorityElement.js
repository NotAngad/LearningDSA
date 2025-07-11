/**
 * https://leetcode.com/problems/majority-element/
 * Given an array nums of size n, return the majority element.The majority element is the element that appears
 * more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 * Input: nums = [3,2,3]
 * Output: 3
 */
const majorityElement = (nums = []) => {
  if (nums.length === 1) return nums[0];

  const map = {};
  const majorityCount = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map[num] = (map[num] || 0) + 1;

    if (map[num] > majorityCount) {
      return num;
    }
  }
};

console.log(majorityElement([3, 2, 3]));
