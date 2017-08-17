const Queue = require("../queue/queue");
function Graph() {
  let nodeLookup = []; // list of node
  this.getNode = id => {
    return nodeLookup[id];
  };

  this.addNode = id => {
    if (this.getNode(id)) {
      throw new Error('node "' + id + '" already added');
    } else {
      nodeLookup[id] = new Node(id);
    }
  };

  this.addEdge = (source, destination) => {
    let sourceNode = this.getNode(source);
    let destinationNode = this.getNode(destination);
    if (!sourceNode) {
      throw new Error('sourceNode "' + sourceNode + '" not present');
    }
    if (!destinationNode) {
      throw new Error('destinationNode "' + destinationNode + '" not present');
    }
    sourceNode.adjacent.push(destinationNode);
  };
  this.BFS = (source, destination) => {
    if (source === destination) return true;

    let frontiers = new Queue();
    frontiers.enqueue(source);
    let VisitedNodeList = [];

    while (frontiers.length() !== 0) {
      let currentNode = frontiers.dequeue();

      console.log(currentNode);
      if (currentNode === destination) return true;

      VisitedNodeList[currentNode]=true;
      let node = this.getNode(currentNode);

      for (let index = 0; index < node.adjacent.length; index++) {
        let adjacent = node.adjacent[index];

        if (VisitedNodeList[adjacent.id]) {
          continue;
        }
        frontiers.enqueue(adjacent.id);
      }
    }

    return false;
  };
}
function Node(nodeId) {
  this.id = nodeId;
  this.adjacent = []; // list of adjacent node;
}
/*
function VisitedNode(nodeId, parent, level) {
  this.id = nodeId;
  this.parent = parent;
  this.level = level;
}*/

module.exports = Graph;
