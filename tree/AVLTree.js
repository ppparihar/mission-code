function Node(key) {
  this.key = key;
  this.height = 1;
  this.left = null;
  this.right = null;
}

function AVLTree() {
  this.root = null;
  this.add = function(key) {
    this.root = insert(this.root, key);
  };
  // A utility function to print preorder traversal
  // of the tree.
  // The function also prints height of every node
  this.getAll = function() {
    return preOrder(this.root);
  };
  this.search = function(key) {
   return find(this.root, key);
  };

  // A utility function to get height of the tree
  function height(N) {
    if (N === null) return 0;
    return N.height;
  }

  // A utility function to right rotate subtree rooted with y
  // See the diagram given above.
  function rightRotate(node) {
    var x = node.left;
    var y = x.right;

    // Perform rotation
    x.right = node;
    node.left = y;

    // Update heights
    node.height = Math.max(height(node.left), height(node.right)) + 1;
    x.height = Math.max(height(x.left), height(x.right)) + 1;

    // Return new root
    return x;
  }

  // A utility function to left rotate subtree rooted with x
  // See the diagram given above.
  function leftRotate(node) {
    var y = node.right;
    var x = y.left;

    // Perform rotation
    y.left = node;
    node.right = x;

    //  Update heights
    node.height = Math.max(height(node.left), height(node.right)) + 1;
    y.height = Math.max(height(y.left), height(y.right)) + 1;

    // Return new root
    return y;
  }

  // Get Balance factor of node N
  function getBalance(N) {
    if (N == null) return 0;

    return height(N.left) - height(N.right);
  }

  function insert(node, key) {
    /* 1.  Perform the normal BST insertion */
    if (node === null) {
      return new Node(key);
    }

    if (key > node.key) {
      node.right = insert(node.right, key);
    } else {
      node.left = insert(node.left, key);
    }

    /* 2. Update height of this ancestor node */
    node.height = 1 + Math.max(height(node.left), height(node.right));

    /* 3. Get the balance factor of this ancestor
                     node to check whether this node became
                     unbalanced */
    var balance = getBalance(node);

    // If this node becomes unbalanced, then there
    // are 4 cases Left Left Case
    if (balance > 1 && key < node.left.key) {
      return rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && key > node.right.key) {
      return leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && key > node.left.key) {
      node.left = leftRotate(node.left);
      return rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right.key) {
      node.right = rightRotate(node.right);
      return leftRotate(node);
    }

    /* return the (unchanged) node pointer */
    return node;
  }

  function preOrder(node) {
    var list = [];
    if (node !== null) {
      // list.push(node.key);
      var list1 = preOrder(node.left);
      list1.push(node.key);
      var list2 = preOrder(node.right);
      list = list.concat(list1, list2);
    }
    return list;
  }

  function find(node, key) {
    if (node === null) {
      return null;
    }

    if (node.key === key) {
      return node.key;
    }

    if (node.key > key) {
      return find(node.left, key);
    } else {
      return find(node.right, key);
    }
  }
}

module.exports = AVLTree;
