/**
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace
 * the last element with -1. After doing so, return the array.
 * Input: arr = [17,18,5,4,6,1]
 * Output: [18,6,6,6,1,-1]
 */
const replaceElements = (arr) => {
  let n = arr.length;
  let ans = new Array(n);
  let rightMax = -1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] = rightMax;
    rightMax = Math.max(rightMax, arr[i]);
  }
  return ans;
};

console.log(replaceElements([400]));
