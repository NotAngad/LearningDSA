/**
 * https://leetcode.com/problems/merge-sorted-array/description/
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 */
// const merge = (nums1 = [], m = 0, nums2 = [], n = 0) => {
//   for (let i = 0; i < n; i++) {
//     nums1[i + m] = nums2[i];
//   }
//   return nums1.sort((a, b) => a - b);
// };

const merge = (nums1 = [], m = 0, nums2 = [], n = 0) => {
  let left = m - 1;
  let right = n - 1;
  let mergePointer = m + n - 1;

  while (right >= 0) {
    if (left >= 0 && nums1[left] > nums2[right]) {
      nums1[mergePointer--] = nums1[left--];
    } else {
      nums1[mergePointer--] = nums2[right--];
    }
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
