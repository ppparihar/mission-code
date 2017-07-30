function Node(data, parent, rank) {
  this.parent = parent;
  this.data = data;
  this.rank = rank !== undefined ? rank : 0;
}

module.exports = Node; 