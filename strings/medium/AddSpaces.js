/**
 * https://leetcode.com/problems/adding-spaces-to-a-string/description/
 * You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the indices in the original
 * string where spaces will be added. Each space should be inserted before the character at the given index.
 * Input: s = "LeetcodeHelpsMeLearn", spaces = [8,13,15]
 * Output: "Leetcode Helps Me Learn"
 */
const addSpaces = (s = "", spaces = []) => {
  let newStr = "";

  let left = 0;
  let right = 0;

  while (right < spaces.length || left < s.length) {
    if (right < spaces.length) {
      newStr += `${s.slice(left, spaces[right])} `;
      left = spaces[right];
      right++;
    } else {
      newStr += `${s.slice(left)}`;
      left = s.length;
    }
  }

  return newStr;
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]));
