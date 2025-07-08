/**
 * https://leetcode.com/problems/valid-palindrome/
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing
 * all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include
 * letters and numbers.
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 */

var isPalindrome = function (s = "") {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  const isAlphaNumeric = (char) => /[a-z0-9]/.test(char);

  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
    } else if (!isAlphaNumeric(s[right])) {
      right--;
    } else if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

console.log(isPalindrome("0P"));
