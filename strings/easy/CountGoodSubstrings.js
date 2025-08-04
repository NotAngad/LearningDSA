/**
 * https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
 * Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
 * Input: s = "xyzzaz"
 * Output: 1
 */
const countGoodSubstrings = (s = "") => {
  if (s.length < 3) return 0;

  let count = 0;

  for (let i = 0; i < s.length - 2; i++) {
    const a = s[i],
      b = s[i + 1],
      c = s[i + 2];
    if (a !== b && b !== c && a !== c) {
      count++;
    }
  }

  return count;
};

console.log(countGoodSubstrings("aababcabc"));
