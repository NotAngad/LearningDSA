/**
 * https://leetcode.com/problems/height-checker/
 * A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line
 * in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is
 * the expected height of the ith student in line.You are given an integer array heights representing the current order that
 * the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).
 * Input: heights = [1,1,4,2,1,3]
 * Output: 3
 * Explanation:
 * heights:  [1,1,4,2,1,3]
 * expected: [1,1,1,2,3,4]
 * Indices 2, 4, and 5 do not match.
 */
const heightChecker = (heights = []) => {
  if (heights.length === 1) return 0;

  const sortedHeights = [...heights].sort((a, b) => a - b);
  let wrongPlaces = 0;

  for (let i = 0; i < sortedHeights.length; i++) {
    if (sortedHeights[i] !== heights[i]) {
      wrongPlaces++;
    }
  }

  return wrongPlaces;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
