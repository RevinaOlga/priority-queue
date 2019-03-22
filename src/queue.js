const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.heap = new MaxHeap;
		this.maxSize = maxSize;
	}

	push(data, priority) {
		this.heap.push(data, priority);
		if (this.heap.size() == 30) {
			throw Error;
		}
	}

	shift() {
		this.heap.pop();
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return this.heap.parentNodes.length == 0;
	}
}

module.exports = PriorityQueue;
