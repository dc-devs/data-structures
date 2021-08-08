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

export default Node;