/**
 * https://leetcode.com/problems/remove-element/description/
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *  Input: nums = [3,2,2,3], val = 3
    Output: 2, nums = [2,2,_,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 2.
    It does not matter what you leave beyond the returned k (hence they are underscores).
 */

const removeElement = (nums, val) => {
  let read = 0;
  let write = 0;

  while (read < nums.length) {
    if (nums[read] !== val) {
      nums[write] = nums[read];
      write++;
    }

    read++;
  }

  return write;
};

console.log(removeElement([3, 2, 2, 3], 3));
