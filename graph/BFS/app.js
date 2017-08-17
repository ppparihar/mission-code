const Graph = require("../graph");
main();

function main() {
  let graph = new Graph();
  init(graph);
  let found = graph.BFS('A','B');
  console.log(found);
}
function init(graph) {
  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  graph.addNode("E");
  graph.addNode("F");
  graph.addNode("G");
  graph.addNode("H");

  graph.addEdge('A','B');
  graph.addEdge('A','C');
  graph.addEdge('B','G');
  graph.addEdge('C','D');
  graph.addEdge('D','B');
  graph.addEdge('D','F');
  graph.addEdge('G','E');
  graph.addEdge('E','H');
  graph.addEdge('H','F');
}
