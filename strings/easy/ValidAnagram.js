/**
 * https://leetcode.com/problems/valid-anagram/description/
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sMap = {};
  const tMap = {};

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = sMap[s[i]] ? sMap[s[i]] + 1 : 1;
    tMap[t[i]] = tMap[t[i]] ? tMap[t[i]] + 1 : 1;
  }

  for (let key in sMap) {
    if (sMap[key] !== tMap[key]) return false;
  }

  return true;
};

console.log(isAnagram("cat", "car"));
