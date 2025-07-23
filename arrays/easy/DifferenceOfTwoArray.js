/**
 *
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
