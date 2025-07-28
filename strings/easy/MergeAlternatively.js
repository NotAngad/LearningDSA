/**
 * https://leetcode.com/problems/merge-strings-alternately/description/
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with
 * word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 */
const mergeAlternately = (word1 = "", word2 = "") => {
  let left = 0;
  let right = 0;
  let str = "";

  while (left < word1.length || right < word2.length) {
    if (left > word1.length - 1 && right <= word2.length - 1) {
      str += word2[right];
    } else if (right > word2.length - 1 && left <= word1.length - 1) {
      str += word1[left];
    } else {
      str += `${word1[left]}${word2[right]}`;
    }

    left++;
    right++;
  }

  return str;
};

console.log(mergeAlternately("fb", "ce"));
