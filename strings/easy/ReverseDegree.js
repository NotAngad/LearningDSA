/**
 * https://leetcode.com/problems/reverse-degree-of-a-string/description/
 * Given a string s, calculate its reverse degree.
 * The reverse degree is calculated as follows:
 * For each character, multiply its position in the reversed alphabet ('a' = 26, 'b' = 25, ..., 'z' = 1) with its position
 * in the string (1-indexed).
 * Sum these products for all characters in the string.
 * Return the reverse degree of s.
 */
const reverseDegree = (s = "") => {
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    sum += (i + 1) * (26 - (s[i].charCodeAt(0) - "a".charCodeAt(0)));
  }

  return sum;
};
