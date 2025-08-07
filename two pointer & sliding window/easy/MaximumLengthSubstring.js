/**
 * https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/description/
 * Given a string s, return the maximum length of a substring such that it contains at most two occurrences of each
 * character.
 * Input: s = "bcbbbcba"
 * Output: 4
 */
const maximumLengthSubstring = (s = "") => {
  let low = 0;
  let map = {};
  let maxLen = 0;

  for (let high = 0; high < s.length; high++) {
    map[s[high]] = (map[s[high]] ?? 0) + 1;

    while (map[s[high]] > 2) {
      map[s[low]] = map[s[low]] - 1;
      low++;
    }

    maxLen = Math.max(maxLen, high - low + 1);
  }

  return maxLen;
};

console.log(maximumLengthSubstring("aaaa"));
