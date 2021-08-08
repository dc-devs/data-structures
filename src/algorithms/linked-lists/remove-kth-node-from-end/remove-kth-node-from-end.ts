import Node from '../../../data-structures/node';

// Kth from the end would be the last number: k-1
// const removeKthNodeFromEnd = (head: Node | null, k: number) => {
// 	if (!head) {
// 		return;
// 	}

// 	let count = 0;
// 	let currentNode = head;
// 	let removalNode = head;
// 	let removalNodePrev = head;

// 	while (currentNode) {
// 		if (count > k) {
// 			removalNodePrev = removalNodePrev.next as Node;
// 		}

// 		if (count >= k) {
// 			removalNode = removalNode.next as Node;
// 		}

// 		console.log(count, removalNodePrev?.value, removalNode?.value);

// 		count += 1;
// 		currentNode = currentNode.next as Node;
// 	}

// 	if (removalNode === head) {
// 		const nextNode = removalNode.next as Node;

// 		head.value = nextNode.value;
// 		head.next = nextNode.next;
// 	} else if (removalNodePrev === head) {
// 		const nextNode = removalNode.next as Node;

// 		head.next = nextNode;
// 	} else {
// 		const removalNode = removalNodePrev.next as Node;
// 		const removalNodeNext = removalNode.next as Node;

// 		removalNodePrev.next = removalNodeNext;
// 		removalNode.next = null;
// 	}
// };

// 0-1-2-3-4-null // k=5

const removeKthNodeFromEnd = (head: Node | null, k: number) => {
	if (!head) {
		return;
	}

	let counter = 0;
	let removalNodePrev = head;
	let lastNode = head;

	// Getting k 4 nodes ahead of head
	// Create the distance between lastNode and removalNodePrev
	while (counter < k) {
		lastNode = lastNode.next as Node;
		counter += 1;
	}

	// lastNode has gone past the last item in list
	if (lastNode === null) {
		const nextNode = head?.next as Node;

		head.value = nextNode?.value as string;
		head.next = nextNode?.next as Node;

		return;
	}

	// Since getting lastNode.next,
	// Stopping one node before end,
	// so the removalNodePrev is the prev node
	while (lastNode.next !== null) {
		removalNodePrev = removalNodePrev.next as Node;
		lastNode = lastNode.next as Node;
	}

	removalNodePrev.next = removalNodePrev?.next?.next as Node;
};

export default removeKthNodeFromEnd;
