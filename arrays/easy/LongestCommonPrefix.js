/**
 * https://leetcode.com/problems/longest-common-prefix/
 * Write a function to find the longest common prefix string amongst an array of strings.
   If there is no common prefix, return an empty string "".
 * Input: strs = ["flower","flow","flight"]
   Output: "fl"
 */

const longestCommonPrefix = (strs) => {
  const sortedArray = strs.sort();
  let newStr = "";

  for (let i = 0; i < sortedArray[sortedArray.length - 1]?.length; i++) {
    if (sortedArray[0][i] === sortedArray[sortedArray.length - 1][i]) {
      newStr += sortedArray[sortedArray.length - 1][i];
    } else {
      break;
    }
  }

  return newStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
