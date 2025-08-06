const countKConstraintSubstrings = (s = "", k = 1) => {
  let map = {};
  let subString = 0;

  let low = 0;

  for (let high = 0; high < s.length; high++) {
    map[s[high]] = (map[s[high]] ?? 0) + 1;

    while (map["1"] > k && map["0"] > k) {
      map[s[low]] = map[s[low]] - 1;
      low++;
    }

    subString += high - low + 1;
  }

  return subString;
};

console.log(countKConstraintSubstrings("10101", 1));
