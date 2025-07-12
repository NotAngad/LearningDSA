/**
 * https://leetcode.com/problems/sign-of-the-product-of-an-array/description/
 * Implement a function signFunc(x) that returns:
 * 1 if x is positive.
 * -1 if x is negative.
 * 0 if x is equal to 0.
 * You are given an integer array nums. Let product be the product of all values in the array nums.
 * Return signFunc(product).
 * Input: nums = [-1,-2,-3,-4,3,2,1]
 * Output: 1
 * Explanation: The product of all values in the array is 144, and signFunc(144) = 1
 */
const signFunc = (product) => (product < 0 ? -1 : product > 0 ? 1 : 0);

var arraySign = function (nums) {
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
  }

  return signFunc(product);
};
