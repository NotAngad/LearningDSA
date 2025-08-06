const lengthOfLongestSubstring = (s = "") => {
  let max = 0;
  let low = 0;

  let sett = new Set();

  for (let high = 0; high < s.length; high++) {
    while (sett.has(s[high])) {
      sett.delete(s[low]);
      low++;
    }

    sett.add(s[high]);
    max = Math.max(max, high - low + 1);
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
