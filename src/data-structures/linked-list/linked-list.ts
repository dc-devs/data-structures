import Node from '../node';

class LinkedList {
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

		let currentNode: Node | null | undefined = this.head;

		// Since currentNode already set,
		// and i starts at 0
		// only increment if index is above this value
		for (let i = 0; i < index; i++) {
			currentNode = currentNode?.next;
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
		if (index < 0 || index > this.length) {
			return false;
		}

		if (index === 0) {
			return !!this.shift();
		}

		if (index === this.length - 1) {
			return !!this.pop();
		}

		const previousNode = this.get(index - 1);
		const removedNode = previousNode?.next;
		const nextNode = removedNode?.next;

		if (previousNode && removedNode && nextNode) {
			previousNode.next = nextNode;
			removedNode.next = null;
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

		let lastNode = this.head as Node;
		let previousNode = this.head as Node;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			while (lastNode.next) {
				previousNode = lastNode;
				lastNode = lastNode.next;
			}

			this.tail = previousNode;
			this.tail.next = null;
		}

		this.length -= 1;

		return lastNode;
	}

	// Big O(1) - Constant Time
	unshift(value: number | string) {
		const newNode = new Node(value);

		if (this.length === 0) {
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
		if (this.length === 0) {
			return undefined;
		}

		const newFirstNode = this.head?.next as Node;
		const shiftedNode = this.head as Node;

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

	// Big O(n) - Linear Time
	// Iterating through list
	reverse() {
		const tempHead = this.head;

		// Reverse head and tail
		this.head = this.tail;
		this.tail = tempHead;

		// Set Pointers
		let previousNode = null;
		let currentNode = tempHead;
		let nextNode = tempHead?.next;

		for (let i = 0; i < this.length; i++) {
			if (currentNode) {
				// Move next pointer one node forward
				nextNode = currentNode.next;
				// Flip Pointer to previous node
				currentNode.next = previousNode;
				// Move previous pointer one node forward
				previousNode = currentNode;
				// Move current pointer one node forward
				currentNode = nextNode;
			}
		}

		return this;
	}

	head: Node | null;
	tail: Node | null;
	length: number;
}

export default LinkedList;
