/**
 * https://leetcode.com/problems/maximum-number-of-balloons/description/
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible
 * You can use each character in text at most once. Return the maximum number of instances that can be formed.
 * Input: text = "nlaebolko"
 * Output: 1
 */
const maxNumberOfBalloons = (text = "") => {
  const map = {
    b: { count: 0, required: 1 },
    a: { count: 0, required: 1 },
    l: { count: 0, required: 2 },
    o: { count: 0, required: 2 },
    n: { count: 0, required: 1 },
  };

  for (const char of text) {
    if (map.hasOwnProperty(char)) {
      map[char].count++;
    }
  }

  let min = Infinity;

  for (const key in map) {
    const total = Math.floor(map[key].count / map[key].required);
    if (total === 0) return 0;
    if (total < min) min = total;
  }

  return min;
};

console.log(maxNumberOfBalloons("leetcode"));
