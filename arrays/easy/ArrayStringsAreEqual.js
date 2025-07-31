/**
 * https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
 * A string is represented by an array if the array elements concatenated in order forms the string.
 * Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
 * Output: true
 */
const arrayStringsAreEqual = (word1 = [], word2 = []) => {
  let str1 = "";
  let str2 = "";

  let left = 0;
  let right = 0;

  while (left < word1.length || right < word2.length) {
    if (left < word1.length) {
      str1 += word1[left];
      left++;
    }

    if (right < word2.length) {
      str2 += word2[right];
      right++;
    }
  }

  return str1 === str2;
};

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
