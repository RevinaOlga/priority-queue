class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left==null && this.right==null) {
			this.left = node;
			node.parent = this;

		} else if (this.left!=null && this.right==null) {
			this.right = node;
			node.parent = this;
		} 
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null;
			node.parent = null;
			return;
		}
		if (this.right == node) {
			this.right = null;
			node.parent = null;
			return;
		}
		throw Error;
	}

	remove() {
		if (this.parent != null) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent == null) {
			return;
		}
		if (this.parent != null && this.parent.parent != null) {
			let temp = this.parent;
			this.parent = this.parent.parent;
			this.parent.parent = temp;
		}
	}
}

module.exports = Node;
