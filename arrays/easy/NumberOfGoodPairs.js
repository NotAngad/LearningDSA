/**
 *
 * @param {number[]} nums
 */
var numIdenticalPairs = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] ?? 0) + 1;
  }

  let counter = 0;

  for (let key in map) {
    const freq = map[key];
    if (freq > 1) {
      counter += (freq * (freq - 1)) / 2;
    }
  }

  return counter;
};

console.log(numIdenticalPairs([1, 1, 1, 1]));
