/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and
 * initial word order.
 * Input: s = "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 */
const reverseWords = (s = "") => {
  const chars = s.split("");

  let left = 0;

  for (let right = 0; right <= s.length; right++) {
    if (right === chars.length || chars[right] === " ") {
      let tempL = left;
      let tempRight = right - 1;

      while (tempL < tempRight) {
        [chars[tempL], chars[tempRight]] = [chars[tempRight], chars[tempL]];
        tempL++;
        tempRight--;
      }

      left = right + 1;
    }
  }

  return chars.join("");
};

console.log(reverseWords("Let's take LeetCode contest"));
