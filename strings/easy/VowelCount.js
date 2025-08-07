/**
 * https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/
 * You are given a string s consisting of lowercase English letters ('a' to 'z'). Your task is to:
 * Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
 * Find the consonant (all other letters excluding vowels) with the maximum frequency.
 * Return the sum of the two frequencies.
 * Input: s = "successes"
 * Output: 6
 */
const maxFreqSum = (s = "") => {
  let vowelFreq = {},
    consonantFreq = {},
    maxVowelFreq = 0,
    maxConsonantFreq = 0,
    vowelSet = new Set("aeiou");

  for (let i = 0; i < s.length; i++) {
    if (vowelSet.has(s[i])) {
      vowelFreq[s[i]] = (vowelFreq[s[i]] ?? 0) + 1;
      maxVowelFreq = Math.max(maxVowelFreq, vowelFreq[s[i]]);
    } else {
      consonantFreq[s[i]] = (consonantFreq[s[i]] ?? 0) + 1;
      maxConsonantFreq = Math.max(maxConsonantFreq, consonantFreq[s[i]]);
    }
  }

  return maxVowelFreq + maxConsonantFreq;
};

console.log(maxFreqSum("successes"));
