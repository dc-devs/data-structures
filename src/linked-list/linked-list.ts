class Node {
	constructor(value: number | string) {
		this.value = value;
		this.next = null;
	}

	value;
	next: null | Node;
}

class LinkedList {
	constructor(value: number | string) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
	}

	push(value: number | string) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else if (this.tail) {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length += 1;

		return this;
	}

	pop() {
		if (!this.head) {
			return undefined;
		}

		let previousNode = this.head;
		let lastNode = this.head;

		while (lastNode.next) {
			previousNode = lastNode;
			lastNode = lastNode.next;
		}

		this.tail = previousNode;
		this.tail.next = null;
		this.length -= 1;

		if (length === 0) {
			this.head = null;
			this.tail = null;
		}

		return lastNode;
	}

	// unshift(value) {}

	// insert(value) {}

	head: Node | null;
	tail: Node | null;
	length: number;
}

// const linkedList = new LinkedList(4);

export default LinkedList;
