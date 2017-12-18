var AVLTree = require("./AVLTree");
var tree = new AVLTree();
tree.add(10);
tree.add(20);
tree.add(30);
tree.add(40);
tree.add(50);
tree.add(25);
tree.add(40);
tree.add(40);
tree.add(35);

console.log(tree.getAll());

console.log(tree.search(40));
console.log(tree.search(35));
