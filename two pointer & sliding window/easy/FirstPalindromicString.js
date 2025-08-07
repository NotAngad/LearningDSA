/**
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
 * Given an array of strings words, return the first palindromic string in the array. If there is no such string, return
 * an empty string "". A string is palindromic if it reads the same forward and backward.
 * Input: words = ["abc","car","ada","racecar","cool"]
 * Output: "ada"
 * Explanation: The first string that is palindromic is "ada".
 * Note that "racecar" is also palindromic, but it is not the first.
 */
const firstPalindrome = (words = []) => {
  for (let i = 0; i < words.length; i++) {
    let left = 0;
    let right = words[i].length - 1;
    let isPalindrome = true;

    while (left < right) {
      if (words[i][left] !== words[i][right]) {
        isPalindrome = false;
        break;
      }
      left++;
      right--;
    }

    if (isPalindrome) return words[i];
  }

  return "";
};

console.log(firstPalindrome(["def", "ghi"]));
