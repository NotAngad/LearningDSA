/**
 * https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/
 * You are given a string s consisting of lowercase English letters.Your task is to find the maximum difference
 * diff = freq(a1) - freq(a2) between the frequency of characters a1 and a2 in the string such that:
 * a1 has an odd frequency in the string.
 * a2 has an even frequency in the string.
 * Input: s = "aaaaabbc"
 * Output: 3
 * Explanation:
 * The character 'a' has an odd frequency of 5, and 'b' has an even frequency of 2.
 * The maximum difference is 5 - 2 = 3.
 */
const maxDifference = (s = "") => {
  const frequencies = {};

  for (let i = 0; i < s.length; i++) {
    frequencies[s[i]] = (frequencies[s[i]] ?? 0) + 1;
  }

  let maximumOddNumber = -Infinity;
  let minimumEvenNumber = Infinity;

  for (let key in frequencies) {
    if (frequencies[key] % 2 !== 0 && frequencies[key] > maximumOddNumber) {
      maximumOddNumber = frequencies[key];
    } else if (
      frequencies[key] % 2 === 0 &&
      frequencies[key] < minimumEvenNumber
    ) {
      minimumEvenNumber = frequencies[key];
    }
  }

  return maximumOddNumber - minimumEvenNumber;
};

console.log(maxDifference("mmsmsym"));
