const { BFSAlgorithm } = require("./bfs/BFSAlgorithm");

let algorithm = new BFSAlgorithm();

let b = {
  name: "b",
  children: [],
};
let root = {
  name: "a",
  children: [b],
};

algorithm.traverse(root);
