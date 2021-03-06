const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (this.root ==null) {
			return;
		} else {
			return this.root;
		}
	}

	detachRoot() {
		this.root = null;

	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {

	}

	isEmpty() {
		if (this.root == null) {
			return true;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (this.root == null) {
			this.root = node;
		}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
