/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 * 
 *  Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
 */

const removeDuplicates = (nums = []) => {
  if (!nums.length) return 0;

  let right = 1;
  let left = 1;

  while (right < nums.length) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }

    right++;
  }

  return left;
};

console.log(removeDuplicates([1, 1, 2]));
