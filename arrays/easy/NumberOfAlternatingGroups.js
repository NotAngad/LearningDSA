/**
 * https://leetcode.com/problems/alternating-groups-i/description/
 * There is a circle of red and blue tiles. You are given an array of integers colors. The color of tile i is represented
 * by colors[i]: colors[i] == 0 means that tile i is red. colors[i] == 1 means that tile i is blue. Every 3 contiguous
 * tiles in the circle with alternating colors (the middle tile has a different color from its left and right tiles) is
 * called an alternating group. Return the number of alternating groups.
 * Input: colors = [0,1,0,0,1]
 * Output: 3
 */
const numberOfAlternatingGroups = (colors) => {
  let counter = 0;
  let n = colors.length;

  for (let i = 0; i < n; i++) {
    const current = colors[i];
    const next = colors[(i + 1) % n];
    const nextNext = colors[(i + 2) % n];

    if (current !== next && next !== nextNext) {
      counter++;
    }
  }

  return counter;
};

console.log(numberOfAlternatingGroups([0, 1, 0, 1]));
