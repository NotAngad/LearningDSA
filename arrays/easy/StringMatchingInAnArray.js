/**
 * https://leetcode.com/problems/string-matching-in-an-array/description/
 * Given an array of string words, return all strings in words that are a substring of another word. You can return the answer
 * in any order.
 * Input: words = ["mass","as","hero","superhero"]
 * Output: ["as","hero"]
 * Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
 * ["hero","as"] is also a valid answer.
 */
const stringMatching = (words) => {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(words[i])) {
        result.push(words[i]);
        break;
      }
    }
  }
  return result;
};

console.log(stringMatching(["blue", "green", "bu"]));
