/**
 * https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/description/
 * In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was
 * supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the
 * list longer than usual. As the town detective, your task is to find these two sneaky numbers. Return an array of size
 * two containing the two numbers (in any order), so peace can return to Digitville.
 * Input: nums = [0,1,1,0]
 * Output: [0,1]
 */
var getSneakyNumbers = function (nums) {
  let sett = new Set();
  let duplicates = [];

  for (let num of nums) {
    if (sett.has(num)) {
      duplicates.push(num);
    } else {
      sett.add(num);
    }
  }

  return duplicates;
};

console.log(getSneakyNumbers([0, 1, 1, 0]));
