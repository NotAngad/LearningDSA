/**
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/
 * You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent
 * if all characters in the string appear in the string allowed. Return the number of consistent strings in the array
 * words.
 * Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
 * Output: 2
 * Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
 */
const countConsistentStrings = (allowed, words) => {
  let allowedSet = new Set(allowed);
  let counter = 0;

  for (let word of words) {
    let valid = true;
    for (let char of word) {
      if (!allowedSet.has(char)) {
        valid = false;
        break;
      }
    }

    if (valid) counter++;
  }

  return counter;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
