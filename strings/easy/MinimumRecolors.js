/**
 * https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/
 * You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B', representing the color of
 * the ith block. The characters 'W' and 'B' denote the colors white and black, respectively. You are also given an
 * integer k, which is the desired number of consecutive black blocks. In one operation, you can recolor a white block
 * such that it becomes a black block. Return the minimum number of operations needed such that there is at least one
 * occurrence of k consecutive black blocks.
 * Input: blocks = "WBBWWBBWBW", k = 7
 * Output: 3
 */
const minimumRecolors = (blocks = "", k = 0) => {
  let map = {};
  let currentMinWhites;

  for (let i = 0; i < k; i++) {
    map[blocks[i]] = (map[blocks[i]] ?? 0) + 1;
  }

  if (map.B === k) return 0;

  currentMinWhites = map.W;

  let left = 1;
  let right = k;

  while (right < blocks.length) {
    map[blocks[left - 1]] = map[blocks[left - 1]] - 1;
    map[blocks[right]] = (map[blocks[right]] ?? 0) + 1;

    currentMinWhites = Math.min(currentMinWhites, map.W ?? 0);

    left++;
    right++;
  }

  return currentMinWhites;
};

console.log(minimumRecolors("WBWBBBW", 2));
