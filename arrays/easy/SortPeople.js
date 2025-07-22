/**
 * https://leetcode.com/problems/sort-the-people/
 * You are given an array of strings names, and an array heights that consists of distinct positive integers. Both
 * arrays are of length n. For each index i, names[i] and heights[i] denote the name and height of the ith person.
 * Return names sorted in descending order by the people's heights.
 * Input: names = ["Mary","John","Emma"], heights = [180,165,170]
 * Output: ["Mary","Emma","John"]
 * Explanation: Mary is the tallest, followed by Emma and John.
 */
const sortPeople = (names, heights) => {
  const heightPeopleMapping = {};

  for (let i = 0; i < heights.length; i++) {
    heightPeopleMapping[heights[i]] = names[i];
  }

  let arrangedNames = [];

  for (let key in heightPeopleMapping) {
    arrangedNames.push(heightPeopleMapping[key]);
  }

  return arrangedNames.reverse();
};

console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
