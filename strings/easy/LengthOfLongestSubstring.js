/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * Given a string s, find the length of the longest substring without duplicate characters.
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */
const lengthOfLongestSubstring = (s = "") => {
  let max = 0;
  let low = 0;

  let sett = new Set();

  for (let high = 0; high < s.length; high++) {
    while (sett.has(s[high])) {
      sett.delete(s[low]);
      low++;
    }

    sett.add(s[high]);
    max = Math.max(max, high - low + 1);
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
