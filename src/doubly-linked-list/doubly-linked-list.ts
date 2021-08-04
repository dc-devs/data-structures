class Node {
	constructor(value: number | string) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}

	value;
	next: Node | null;
	prev: Node | null;
}

class DoublyLinkedList {
	constructor(value: number | string) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
	}

	// Big O(n) - Linear Time
	// Iterating through list
	get(index: number) {
		if (index < 0 || index >= this.length) {
			return undefined;
		}

		const nodeInFirstHalf = index < this.length / 2;
		let currentNode: Node;

		if (nodeInFirstHalf) {
			currentNode = this.head as Node;

			for (let i = 0; i < index; i++) {
				currentNode = currentNode.next as Node;
			}
		} else {
			currentNode = this.tail as Node;

			for (let i = this.length - 1; i > index; i--) {
				currentNode = currentNode.prev as Node;
			}
		}

		return currentNode;
	}

	// Big O(n) - Linear Time
	// Iterating through list
	set(index: number, value: number | string) {
		const node = this.get(index);

		if (node) {
			node.value = value;
		}

		return node;
	}

	// Big O(n) - Linear Time
	// Iterating through list
	insert(index: number, value: number | string) {
		if (index === 0) {
			return !!this.unshift(value);
		}

		if (index === this.length) {
			return !!this.push(value);
		}

		if (index < 0 || index > this.length) {
			return false;
		}

		const newNode = new Node(value);
		const previousNode = this.get(index - 1);
		const nextNode = previousNode?.next;

		if (previousNode && newNode && nextNode) {
			previousNode.next = newNode;
			newNode.next = nextNode;
		}

		this.length += 1;

		return true;
	}

	// Big O(n) - Linear Time
	// Iterating through list
	remove(index: number) {
		if (index === 0) {
			return !!this.shift();
		}

		if (index === this.length) {
			return !!this.pop();
		}

		if (index < 0 || index > this.length) {
			return false;
		}

		const previousNode = this.get(index - 1);
		const removedNode = previousNode?.next;
		const nextNode = removedNode?.next;

		if (previousNode && removedNode && nextNode) {
			previousNode.next = nextNode;
			removedNode.next = null;
		}

		this.length -= 1;

		return removedNode;
	}

	// Big O(1) - Constant Time
	push(value: number | string) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else if (this.tail) {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length += 1;

		return this;
	}

	// Big O(n) - Linear Time
	// Iterating through list
	pop() {
		if (this.length === 0) {
			return undefined;
		}

		const poppedNode = this.tail as Node;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev as Node;
			this.tail.next = null;

			poppedNode.prev = null;
		}

		this.length -= 1;

		return poppedNode;
	}

	// Big O(1) - Constant Time
	unshift(value: number | string) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length += 1;

		return this;
	}

	// Big O(1) - Constant Time
	shift() {
		if (!this.head) {
			return undefined;
		}

		const newFirstNode = this.head.next;
		const shiftedNode = this.head;

		shiftedNode.next = null;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = newFirstNode;
		}

		this.length -= 1;

		return shiftedNode;
	}

	head: Node | null;
	tail: Node | null;
	length: number;
}

export default DoublyLinkedList;
