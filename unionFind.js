// Implementation  of Weighted QuckUnion
// constructed with
class UnionFind {
	constructor(n) {
		if (n == null)
			throw new Error(
				'Must provide int argument representing the number of nodes'
			);
		let elements = [];
		let size = [];
		for (let i = 0; i < n; i++) {
			elements.push(i);
			size.push(1);
		}
		this.elements = elements;
		this.size = size;
	}

	union(p, q) {
		let { elements, size } = this;
		let i = this.root(p);
		let j = this.root(q);
		if (i === j) return;
		if (size[i] < size[j]) {
			elements[i] = j;
			size[i] += size[j];
		} else {
			elements[j] = i;
			size[j] += size[i];
		}
	}

	connected(p, q) {
		return this.root(p) == this.root(q);
	}

	root(i) {
		const el = this.elements;
		while (el[i] != i) i = el[i];
		return i;
	}
}

module.exports = UnionFind;
