const { BFSAlgorithm } = require("./bfs/BFSAlgorithm");
const { DFSAlgorithm } = require("./bfs/DFSAlgorithm");

let algorithm = new BFSAlgorithm();
let dfsAlgorithm = new DFSAlgorithm();

let g = {
  name: "g",
  children: [],
};
let f = {
  name: "f",
  children: [g],
};
let e = {
  name: "e",
  children: [g],
};
let d = {
  name: "d",
  children: [g],
};
let c = {
  name: "c",
  children: [f],
};
let b = {
  name: "b",
  children: [e],
};
let a = {
  name: "a",
  children: [d],
};
let root = {
  name: "s",
  children: [a,b,c],
};
g.children.push(d,e,f);
e.children.push(b);
f.children.push(c);

console.log('BFS');
algorithm.traverse(root);
console.log('DFS');
dfsAlgorithm.traverse(root);
