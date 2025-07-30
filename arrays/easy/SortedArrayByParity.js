/**
 * https://leetcode.com/problems/sort-array-by-parity/description/
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd
 * integers. Return any array that satisfies this condition.
 * Input: nums = [3,1,2,4]
 * Output: [2,4,3,1]
 * Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 */
const sortArrayByParity = (nums = []) => {
  let evenIndex = 0;
  let oddIndex = nums.length - 1;
  let index = 0;

  let results = new Array(nums.length);

  while (index < nums.length) {
    if (nums[index] % 2 === 0) {
      results[evenIndex] = nums[index];
      evenIndex++;
    } else {
      results[oddIndex] = nums[index];
      oddIndex--;
    }

    index++;
  }

  return results;
};

console.log(sortArrayByParity([0]));
