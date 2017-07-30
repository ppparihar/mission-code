const Node = require("./Node.js");
const Map = require("./Map.js");

function DisjointSet() {
  let map = new Map();

  this.makeSet = data => {
    let node = new Node();
    node.data = data;
    node.parent = node;
    node.rank = 0;
    map.add(data, node);
  };

  this.findSet = data => {
    let node = map.get(data);
    if (node.parent === node) {
      return node;
    }

    node.parent = this.findSet(node.parent.data);
    return node.parent;
  };
  this.union = (data1, data2) => {
    let node1 = this.findSet(data1);
    let node2 = this.findSet(data2);
    if (node1 === node2) return;

    if (node1.rank === node2.rank) {
      node1.rank++;
      node2.parent = node1;
    } else if (node1.rank > node2.rank) {
      node2.parent = node1;
    } else {
      node1.parent = node2;
    }
  };
}

module.exports = DisjointSet;
