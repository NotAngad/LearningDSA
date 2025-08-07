/**
 * https://leetcode.com/problems/find-the-k-beauty-of-a-number/
 * The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the
 * following conditions:
 * It has a length of k.
 * It is a divisor of num.
 * Given integers num and k, return the k-beauty of num.
 * Input: num = 240, k = 2
 * Output: 2
 */
const divisorSubstrings = (num = 0, k = 0) => {
  let counter = 0;
  let numStr = String(num);
  let window = [];
  let right = k - 1;

  for (let i = 0; i < k; i++) {
    window.push(numStr[i]);
  }

  if (num % Number(window.join("")) === 0) counter++;

  let left = 1;
  right++;

  while (right < numStr.length) {
    window[left - 1] = 0;
    window[right] = numStr[right];

    if (num % Number(window.join("")) === 0) counter++;

    left++;
    right++;
  }

  return counter;
};

console.log(divisorSubstrings(430043, 2));
