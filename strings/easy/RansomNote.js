/**
 * https://leetcode.com/problems/ransom-note/description/
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from
 * magazine and false otherwise.Each letter in magazine can only be used once in ransomNote.
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 */
const canConstruct = (ransomNote, magazine) => {
  const noteMap = {};

  for (let i = 0; i < ransomNote.length; i++) {
    noteMap[ransomNote[i]] = (noteMap[ransomNote[i]] ?? 0) + 1;
  }

  for (let i = 0; i < magazine.length; i++) {
    noteMap[magazine[i]] ? noteMap[magazine[i]]-- : null;
    if (noteMap[magazine[i]] === 0) delete noteMap[magazine[i]];
  }

  return Object.keys(noteMap).length === 0;
};

console.log(canConstruct("aa", "xaab"));
