/**
 *
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
