/**
 * https://leetcode.com/problems/length-of-last-word/
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 */
const lengthOfLastWord = (s) => {
  s = s.trim();

  let right = s.length - 1;
  let lastWordLength = 0;

  while (s[right] !== " " && right >= 0) {
    lastWordLength++;
    right--;
  }

  return lastWordLength;
};
