/**
 * https://leetcode.com/problems/max-consecutive-ones/description/
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
 */
const findMaxConsecutiveOnes = (nums) => {
  let currentMax = 0;
  let countingMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      countingMax++;
    } else if (nums[i] === 0 && countingMax !== 0) {
      if (countingMax > currentMax) {
        currentMax = countingMax;
      }
      countingMax = 0;
    }
  }

  return countingMax > currentMax ? countingMax : currentMax;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
