/**
 * https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/
 * You are given a binary string s and an integer k. A binary string satisfies the k-constraint if either of the following
 * conditions holds: The number of 0's in the string is at most k. The number of 1's in the string is at most k. Return an
 * integer denoting the number of substrings of s that satisfy the k-constraint.
 * Input: s = "10101", k = 1
 * Output: 12
 */
const countKConstraintSubstrings = (s = "", k = 1) => {
  let map = {};
  let subString = 0;

  let low = 0;

  for (let high = 0; high < s.length; high++) {
    map[s[high]] = (map[s[high]] ?? 0) + 1;

    while (map["1"] > k && map["0"] > k) {
      map[s[low]] = map[s[low]] - 1;
      low++;
    }

    subString += high - low + 1;
  }

  return subString;
};

console.log(countKConstraintSubstrings("10101", 1));
