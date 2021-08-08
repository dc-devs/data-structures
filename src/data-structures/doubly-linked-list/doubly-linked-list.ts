import Node from '../node';

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
		if (index < 0 || index > this.length) {
			return false;
		}

		if (index === 0) {
			this.unshift(value);
			return true;
		}

		if (index === this.length) {
			this.push(value);
			return true;
		}

		const prevNode = this.get(index - 1);

		if (prevNode) {
			const newNode = new Node(value);
			const nextNode = prevNode?.next as Node;

			prevNode.next = newNode;

			newNode.next = nextNode;
			newNode.prev = prevNode;

			nextNode.prev = newNode;
		} else {
			return false;
		}

		this.length += 1;

		return true;
	}

	containsNodeWithValue(value: number | string) {
		let foundValue = false;
		let currentNode = this.head;

		while (currentNode && !foundValue) {
			if (currentNode.value === value) {
				foundValue = true;
			}

			currentNode = currentNode.next;
		}

		return foundValue;
	}

	// Big O(n) - Linear Time
	// Iterating through list
	remove(index: number) {
		if (index < 0 || index >= this.length) {
			return false;
		}

		if (index === 0) {
			return this.shift();
		}

		if (index === this.length - 1) {
			return this.pop();
		}

		const removedNode = this.get(index) as Node;

		if (removedNode) {
			const prevNode = removedNode.prev as Node;
			const nextNode = removedNode.next as Node;

			prevNode.next = nextNode;
			nextNode.prev = prevNode;

			removedNode.next = null;
			removedNode.prev = null;
		} else {
			return false;
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

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			const nextNode = this.head as Node;

			this.head = newNode;
			this.head.next = nextNode;

			nextNode.prev = newNode;
		}

		this.length += 1;

		return this;
	}

	// Big O(1) - Constant Time
	shift() {
		if (this.length === 0) {
			return undefined;
		}

		const shiftedNode = this.head as Node;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = shiftedNode.next as Node;
			this.head.prev = null;

			shiftedNode.next = null;
		}

		this.length -= 1;

		return shiftedNode;
	}

	head: Node | null;
	tail: Node | null;
	length: number;
}

export default DoublyLinkedList;
