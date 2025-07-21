/**
 * https://leetcode.com/problems/find-lucky-integer-in-an-array/description/
 * Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
 * Return the largest lucky integer in the array. If there is no lucky integer return -1.
 * Input: arr = [2,2,3,4]
 * Output: 2
 * Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
 */
const findLucky = (arr = []) => {
  const counterMap = {};

  for (let i = 0; i < arr.length; i++) {
    counterMap[arr[i]] = (counterMap[arr[i]] ?? 0) + 1;
  }

  let luckyNumber = -1;

  for (let key in counterMap) {
    if (Number(key) === counterMap[key] && counterMap[key] > luckyNumber) {
      luckyNumber = Number(key);
    }
  }

  return luckyNumber;
};

console.log(findLucky([2, 2, 2, 3, 3]));
