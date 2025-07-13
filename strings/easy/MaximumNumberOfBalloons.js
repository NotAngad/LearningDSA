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
