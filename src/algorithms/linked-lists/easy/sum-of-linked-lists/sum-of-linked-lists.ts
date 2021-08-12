import Node from '../../../../data-structures/node';
import LinkedList from '../../../../data-structures/linked-list';

// linkedListTwo = 9 -> 4 -> 5 -> null
// linkedListOne = 2 -> 4 -> 7 -> 1 -> null

// finalList = 1-9-2-2-
// carry = 0

// O(max(n,m)) Time - n,m are the linked lists we iterate through
// O(max(n,m)) Space - since we are creating a new linked list
const sumOfLinkedLists = (
	linkedListOne: LinkedList,
	linkedListTwo: LinkedList
) => {
	const finalLinkedList = new LinkedList(0);
	// let finalLinkedlistNode = finalLinkedList.head as Node;
	let listOneNode = linkedListOne.head;
	let listTwoNode = linkedListTwo.head;
	let carry = 0;

	while (listOneNode || listTwoNode || carry) {
		const listOneNodeOneValue = listOneNode && Number(listOneNode.value);
		const listOneNodeTwoValue = listTwoNode && Number(listTwoNode.value);
		const valueOne = listOneNodeOneValue || 0;
		const valueTwo = listOneNodeTwoValue || 0;
		const sumOfValues = valueOne + valueTwo + carry;

		// remainder for new value
		// as everything over 10 will go into carry
		const newValue = sumOfValues % 10;
		carry = Math.floor(sumOfValues / 10);

		// Move pointer on new final list
		// finalLinkedlistNode.next = new Node(newValue);
		// finalLinkedlistNode = finalLinkedlistNode.next;
		finalLinkedList.push(newValue);

		// Move pointer on other linked lists
		listOneNode = listOneNode?.next as Node | null;
		listTwoNode = listTwoNode?.next as Node | null;
	}

	return finalLinkedList;
};

export default sumOfLinkedLists;
