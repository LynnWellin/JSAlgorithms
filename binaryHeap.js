/* Binary Heap
 *
 * Conditions
 *  - Keys in nodes
 *  - Parent's key no smaller than children's keys
 *
 *  Array Representation
 *      - indices start at 1
 *      - take nodes in level order
 *
 *  Properties
 *      - arr[1] is the largest key
 *      - Parent of node is at k/2 (floor)
 *      - Children of node are at 2k and 2k+1
 *
 *  Scenarios
 *      - child key becomes larger than parent's key
 *          - exchange key in child w/ parent (repeat until heap order restored)
 *      -
 */

class BinaryHeap {
    constructor() {
        this.keys = [null];
        this.values = {};
    }

    peek() {
        const { keys } = this;
        if (this.isEmpty()) throw new Error('Cannot peek empty heap');
        return keys[keys[1]];
    }

    // Delete max element
    delMax() {
        const { keys, values } = this;
        if (keys.length < 2) throw new Error('Cannot delete from empty heap');
        const result = { key: keys[1], value: values[keys[1]] };
        delete values[keys[1]];

        // Remove the last key
        const temp = keys.pop();
        // If more than one key, replace the first key with last, and sink
        if (keys.length > 1) {
            keys[1] = temp;
            this.sink(1);
        }
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
            // if k smaller than its larger child, switch them
            this.exch(k, j);
            k = j;
        }
    }

    // At most 1 + lg N compares
    insert(key, val) {
        if (key == null || val == null) throw new Error('Must have key and value');
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
