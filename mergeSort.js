module.exports = {
	mergeSort: function(array) {
		if (array.length === 1) {
			return array;
		}

		const first = this.mergeSort(array.slice(0, array.length / 2));
		const second = this.mergeSort(array.slice(array.length / 2));

		let result = [];
		let i = 0,
			j = 0;
		while (i < first.length && j < second.length) {
			if (first[i] <= second[j]) {
				result.push(first[i]);
				i++;
			} else {
				result.push(second[j]);
				j++;
			}
		}

		if (i < first.length) result.push(...first.slice(i));
		if (j < second.length) result.push(...second.slice(j));

		return result;
	},
};
