/**
 * https://leetcode.com/problems/destination-city/description/
 * You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from
 * cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.It
 * is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one
 * destination city.
 * Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
 * Output: "Sao Paulo"
 * Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city.
 * Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
 */
const destCity = (paths = []) => {
  let originSet = new Set();

  paths.forEach((path) => {
    originSet.add(path[0]);
  });

  for (let i = 0; i < paths.length; i++) {
    if (!originSet.has(paths[i][1])) {
      return paths[i][1];
    }
  }
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
