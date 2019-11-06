class BinaryHeap {
	constructor() {
		// Sorted array to keep track of keys
		// Array starts at 1 (root) for simpler traversal
		// Nodes are in level order
		// Parent of node k is at k/2; children of node k are 2k and 2k+1
		this.keys = [null];
		this.values = {};
	}

	// Delete max element
	delMax() {
		let { keys, values } = this;
		const result = values[keys[1]];
		delete values[keys[1]];

		keys[1] = keys.pop();
		console.log('New max key: ', keys[1]);
		this.sink(1);
		return result;
	}

	// Move larger key up the tree
	swim(k) {
		// While key is not at root and key is larger than its parent
		while (k > 1 && this.less(Math.floor(k / 2), k)) {
			const sm = Math.floor(k / 2);
			this.exch(k, sm);
			k = sm;
		}
	}

	// Move smaller key down the tree
	sink(k) {
		const l = this.keys.length;
		while (k * 2 <= l - 1) {
			let j = k * 2;
			// select the larger child
			if (j < l - 1 && this.less(j, j + 1)) j++;
			if (!this.less(k, j)) break;
			this.exch(k, j);
			k = j;
		}
	}

	insert(key, val) {
		this.keys.push(key);
		this.values[key] = val;
		this.swim(this.keys.length - 1);
	}

	isEmpty() {
		return Object.keys(this.values) === 0;
	}

	exch(i, j) {
		const temp = this.keys[i];
		this.keys[i] = this.keys[j];
		this.keys[j] = temp;
	}

	less(i, j) {
		return this.keys[i] < this.keys[j];
	}
}

module.exports = BinaryHeap;
