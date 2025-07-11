/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * Input: s = "leetcode"
 * Output: 0
 * Explanation:
 * The character 'l' at index 0 is the first character that does not occur at any other index.
 */
const firstUniqChar = (s) => {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]?.value) {
      map[s[i]].value++;
    } else {
      map[s[i]] = {
        value: 1,
        index: i,
      };
    }
  }

  for (let key in map) {
    if (map[key].value === 1) return map[key].index;
  }

  return -1;
};

console.log(firstUniqChar("lovelycode"));
