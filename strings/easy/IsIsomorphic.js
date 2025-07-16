/**
 * https://leetcode.com/problems/isomorphic-strings/description/
 * Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be
 * replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of
 * characters. No two characters may map to the same character, but a character may map to itself.
 * Input: s = "egg", t = "add"
 * Output: true
 * Explanation:
 * The strings s and t can be made identical by:
 * Mapping 'e' to 'a'.
 * Mapping 'g' to 'd'.
 */
const isIsomorphic = (s, t) => {
  const s_To_T = {};
  const t_To_S = {};

  for (let i = 0; i < s.length; i++) {
    if (s_To_T[s[i]] && t_To_S[t[i]] !== s[i]) {
      return false;
    }

    if (t_To_S[t[i]] && s_To_T[s[i]] !== t[i]) {
      return false;
    }

    s_To_T[s[i]] = t[i];
    t_To_S[t[i]] = s[i];
  }

  return true;
};

console.log(isIsomorphic("foo", "bar"));
