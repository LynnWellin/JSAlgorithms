// A Simple BST

// TODO
// 	add range, min, max

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root == null;
  }

  //   Find node
  find(value) {
    let node = this.root;
    while (node != null) {
      if (value < node.val) node = node.left;
      else if (value > node.val) node = node.right;
      else return node.val;
    }
    return null;
  }

  //   Insert Node
  insert(value) {
    this.root = insert(this.root);

    function insert(node) {
      if (node == null) return new Node(value);
      if (value < node.val) node.left = insert(node.left);
      else if (value > node.val) node.right = insert(node.right);
      else throw new Error("Inserted values must be unique.");
      return node;
    }
  }

  //   Delete Node
  delete(key) {
    console.log(`Deleting ${key}`);
    this.root = remove(this.root);
    // this.root;

    // Hibbard Deletion
    function remove(node) {
      if (node == null) return null;
      if (key < node.key) node.left = remove(node.left);
      else if (key > node.key) node.right = remove(node.right);
      else {
        //   the node to be deleted; if one child, return the other child
        if (node.right == null) return node.left;
        if (node.left == null) return node.right;

        // Replace current node with successor
        const temp = node;
        node = node.right;
        while (node.left != null) {
          node = node.left;
        }
        this.deleteMin(temp.right);
        node.left = temp.left;
      }
      return node;
    }
  }

  //   Find min of tree
  min() {
    let node = this.root;
    while (node.left != null) {
      node = node.left;
    }
    return node;
  }

  //   Delete min of subtree (or root if no node provided)
  deleteMin(node) {
    node = node == null ? this.root : node;
    node = deleteM(node);

    function deleteM(n) {
      if (n.left == null) return n.right;
      n.left = deleteM(n.left);
      return n;
    }
  }
}

class Node {
  constructor(value) {
    this.val = value;
    this.right = null;
    this.left = null;
  }
}

module.exports = BST;
