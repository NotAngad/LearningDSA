/**
 * https://leetcode.com/problems/contains-duplicate-ii/description/
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such
 * that nums[i] == nums[j] and abs(i - j) <= k.
 * Input: nums = [1,2,3,1], k = 3
 * Output: true
 */
const containsNearbyDuplicate = (nums, k) => {
  let numsSet = new Set();
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (right - left > k) {
      numsSet.delete(nums[left]);
      left++;
    }

    if (numsSet.has(nums[right])) {
      return true;
    }

    numsSet.add(nums[right]);
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
