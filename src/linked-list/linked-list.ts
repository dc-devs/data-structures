class Node {
	constructor(value: number | string) {
		this.value = value;
		this.next = null;
	}

	value;
	next: Node | null;
}

class LinkedList {
	constructor(value: number | string) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
	}

	get(index: number) {
		if (index >= this.length || index < 0) {
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

	set(index: number, value: number | string) {
		const node = this.get(index);

		if (node) {
			node.value = value;
		}

		return node;
	}

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

		let lastNode = this.head;
		let previousNode = this.head;

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

// const linkedList = new LinkedList(4);

export default LinkedList;
