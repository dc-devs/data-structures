import LinkedList from './linked-list';

const linkedList = new LinkedList(0);

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);

// Instantiate
console.log(linkedList);

const node5 = linkedList.get(5);
console.log(node5);
