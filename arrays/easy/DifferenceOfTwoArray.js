/**
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/description/
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
 * answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
 * answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
 * Input: nums1 = [1,2,3], nums2 = [2,4,6]
 * Output: [[1,3],[4,6]]
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
const findDifference = (nums1, nums2) => {
  const nums1Map = new Set(nums1);
  const nums2Map = new Set(nums2);

  const distinct1 = [];
  const distinct2 = [];

  for (const value of nums1Map) {
    if (!nums2Map.has(value)) distinct1.push(value);
  }

  for (const value of nums2Map) {
    if (!nums1Map.has(value)) distinct2.push(value);
  }

  return [distinct1, distinct2];
};

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
