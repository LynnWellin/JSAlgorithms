// A Simple BST

// TODO:
//      make it self balancing
//      add delete function

class BST {
	constructor() {
		this.root = null;
	}

	isEmpty() {
		return this.root == null;
	}

	find(value) {
		let node = this.root;
		while (node != null) {
			if (value < node.val) node = node.left;
			else if (value > node.val) node = node.right;
			else return node.val;
		}
		return null;
	}

	insert(value) {
		this.root = insert(this.root);

		function insert(node) {
			if (node == null) return new Node(value);
			if (value < node.val) node.left = insert(node.left);
			else if (value > node.val) node.right = insert(node.right);
			else throw new Error('Inserted values must be unique.');
			return node;
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
