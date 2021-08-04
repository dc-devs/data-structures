import { expect } from 'chai';
import DoublyLinkedList from './doubly-linked-list';

describe.only('DoublyLinkedList', () => {
	it('is a class', () => {
		expect(typeof DoublyLinkedList).to.be.equal('function');
	});

	it('can be instantiated', () => {
		const doublyLinkedList = new DoublyLinkedList(0);

		expect(doublyLinkedList.length).to.be.equal(1);
		expect(doublyLinkedList.head?.value).to.deep.equal(0);
		expect(doublyLinkedList.head?.next).to.deep.equal(null);
		expect(doublyLinkedList.head?.prev).to.deep.equal(null);
		expect(doublyLinkedList.head).to.deep.equal(doublyLinkedList.tail);
	});

	describe('get', () => {
		it('exists', () => {
			const doublyLinkedList = new DoublyLinkedList(0);
			expect(typeof doublyLinkedList.get).to.be.equal('function');
		});

		describe('when called with a valid index', () => {
			describe('and the node is in the first half of the list', () => {
				it('should return a node at that index', () => {
					const doublyLinkedList = new DoublyLinkedList(0);
					doublyLinkedList.push(1);
					doublyLinkedList.push(2);
					doublyLinkedList.push(3);
					doublyLinkedList.push(4);

					const selectedNode = doublyLinkedList.get(2);
					const node1 = doublyLinkedList.get(1);
					const node3 = doublyLinkedList.get(3);

					expect(selectedNode?.value).to.be.equal(2);
					expect(selectedNode?.prev).to.be.equal(node1);
					expect(selectedNode?.next).to.be.equal(node3);
				});
			});

			describe('and the node is in the second half of the list', () => {
				it('should return a node at that index', () => {
					const doublyLinkedList = new DoublyLinkedList(0);
					doublyLinkedList.push(1);
					doublyLinkedList.push(2);
					doublyLinkedList.push(3);
					doublyLinkedList.push(4);

					const selectedNode = doublyLinkedList.get(3);
					const node2 = doublyLinkedList.get(2);
					const node4 = doublyLinkedList.get(4);

					expect(selectedNode?.value).to.be.equal(3);
					expect(selectedNode?.prev).to.be.equal(node2);
					expect(selectedNode?.next).to.be.equal(node4);
				});
			});
		});

		describe('when called with an invalid index', () => {
			describe('and the index is -1', () => {
				it('should return undefined', () => {
					const doublyLinkedList = new DoublyLinkedList(0);
					const selectedNode = doublyLinkedList.get(-1);

					expect(selectedNode).to.be.undefined;
				});
			});

			describe('and the index is equal to the length', () => {
				it('should return undefined', () => {
					const doublyLinkedList = new DoublyLinkedList(0);
					const selectedNode = doublyLinkedList.get(1);

					expect(selectedNode).to.be.undefined;
				});
			});

			describe('and the index greater than the length', () => {
				it('should return undefined', () => {
					const doublyLinkedList = new DoublyLinkedList(0);
					const selectedNode = doublyLinkedList.get(2);

					expect(selectedNode).to.be.undefined;
				});
			});
		});
	});

	// describe('set', () => {
	// 	it('exists', () => {
	// 		const doublyLinkedList = new DoublyLinkedList(0);
	// 		expect(typeof doublyLinkedList.set).to.be.equal('function');
	// 	});

	// 	describe('when called with a valid index', () => {
	// 		it('should update the node value at that index', () => {
	// 			const doublyLinkedList = new DoublyLinkedList(0);
	// 			doublyLinkedList.push(1);
	// 			doublyLinkedList.push(2);
	// 			doublyLinkedList.push(3);

	// 			doublyLinkedList.set(2, 5);

	// 			const selectedNode = doublyLinkedList.get(2);

	// 			expect(selectedNode?.value).to.be.equal(5);
	// 		});
	// 	});
	// });

	// describe('insert', () => {
	// 	it('exists', () => {
	// 		const doublyLinkedList = new DoublyLinkedList(0);
	// 		expect(typeof doublyLinkedList.insert).to.be.equal('function');
	// 	});

	// 	describe('when called', () => {
	// 		describe('with an invalid index', () => {
	// 			describe('and the index is less than 0', () => {
	// 				it('should return false', () => {
	// 					const doublyLinkedList = new DoublyLinkedList(0);
	// 					const result = doublyLinkedList.insert(-1, 1);

	// 					expect(result).to.be.false;
	// 				});
	// 			});
	// 			describe('and the index is greater than the length', () => {
	// 				it('should return false', () => {
	// 					const doublyLinkedList = new DoublyLinkedList(0);
	// 					const result = doublyLinkedList.insert(5, 1);

	// 					expect(result).to.be.false;
	// 				});
	// 			});
	// 		});
	// 		describe('with a valid index', () => {
	// 			describe('and the index is equal to 0', () => {
	// 				it('should insert a node at the begining of the linked list', () => {
	// 					const doublyLinkedList = new DoublyLinkedList(0);
	// 					doublyLinkedList.push(1);
	// 					doublyLinkedList.push(2);
	// 					doublyLinkedList.push(3);

	// 					doublyLinkedList.insert(0, 5);

	// 					const node1 = doublyLinkedList.get(1);

	// 					expect(doublyLinkedList.length).to.be.equal(5);
	// 					expect(doublyLinkedList.head?.value).to.be.equal(5);
	// 					expect(doublyLinkedList.head?.next).to.deep.equal(node1);
	// 				});
	// 			});

	// 			describe('and the index is equal to the length', () => {
	// 				it('should insert a node at the end of the linked list', () => {
	// 					const doublyLinkedList = new DoublyLinkedList(0);
	// 					doublyLinkedList.push(1);
	// 					doublyLinkedList.push(2);
	// 					doublyLinkedList.push(3);

	// 					doublyLinkedList.insert(4, 5);

	// 					const node3 = doublyLinkedList.get(3);

	// 					expect(doublyLinkedList.length).to.be.equal(5);
	// 					expect(doublyLinkedList.tail?.value).to.be.equal(5);
	// 					expect(doublyLinkedList.tail?.next).to.be.equal(null);
	// 					expect(node3?.next).to.deep.equal(doublyLinkedList.tail);
	// 				});
	// 			});

	// 			describe('and the index falls inside bounds of linked list', () => {
	// 				it('should insert a node at index', () => {
	// 					const doublyLinkedList = new DoublyLinkedList(0);
	// 					doublyLinkedList.push(1);
	// 					doublyLinkedList.push(3);
	// 					doublyLinkedList.push(4);

	// 					doublyLinkedList.insert(2, 2);

	// 					const node1 = doublyLinkedList.get(1);
	// 					const node2 = doublyLinkedList.get(2);
	// 					const node3 = doublyLinkedList.get(3);

	// 					expect(doublyLinkedList.length).to.be.equal(5);
	// 					expect(node2?.value).to.be.equal(2);
	// 					expect(node2?.next).to.deep.equal(node3);
	// 					expect(node1?.next).to.deep.equal(node2);
	// 				});
	// 			});
	// 		});
	// 	});
	// });

	// describe('remove', () => {
	// 	it('exists', () => {
	// 		const doublyLinkedList = new DoublyLinkedList(0);
	// 		expect(typeof doublyLinkedList.insert).to.be.equal('function');
	// 	});

	// 	describe('when called', () => {
	// 		describe('with an invalid index', () => {
	// 			describe('and the index is less than 0', () => {
	// 				it('should return false', () => {
	// 					const doublyLinkedList = new DoublyLinkedList(0);
	// 					const result = doublyLinkedList.remove(-1);

	// 					expect(result).to.be.false;
	// 				});
	// 			});
	// 			describe('and the index is greater than the length', () => {
	// 				it('should return false', () => {
	// 					const doublyLinkedList = new DoublyLinkedList(0);
	// 					const result = doublyLinkedList.remove(5);

	// 					expect(result).to.be.false;
	// 				});
	// 			});
	// 		});

	// 		describe('with a valid index', () => {
	// 			describe('and the index is equal to 0', () => {
	// 				it('should remove a node at the begining of the linked list', () => {
	// 					const doublyLinkedList = new DoublyLinkedList(0);
	// 					doublyLinkedList.push(1);
	// 					doublyLinkedList.push(2);
	// 					doublyLinkedList.push(3);

	// 					doublyLinkedList.remove(0);

	// 					expect(doublyLinkedList.length).to.be.equal(3);
	// 					expect(doublyLinkedList.head?.value).to.be.equal(1);
	// 				});
	// 			});

	// 			describe('and the index is equal to the length', () => {
	// 				it('should remove a node at the end of the linked list', () => {
	// 					const doublyLinkedList = new DoublyLinkedList(0);
	// 					doublyLinkedList.push(1);
	// 					doublyLinkedList.push(2);
	// 					doublyLinkedList.push(3);

	// 					doublyLinkedList.remove(4);

	// 					expect(doublyLinkedList.length).to.be.equal(3);
	// 					expect(doublyLinkedList.tail?.value).to.be.equal(2);
	// 					expect(doublyLinkedList.tail?.next).to.be.equal(null);
	// 				});
	// 			});

	// 			describe('and the index falls inside bounds of linked list', () => {
	// 				it('should remove a node at index', () => {
	// 					const doublyLinkedList = new DoublyLinkedList(0);
	// 					doublyLinkedList.push(1);
	// 					doublyLinkedList.push(2);
	// 					doublyLinkedList.push(3);

	// 					const node1 = doublyLinkedList.get(1);
	// 					const node2 = doublyLinkedList.get(2);
	// 					const node3 = doublyLinkedList.get(3);

	// 					doublyLinkedList.remove(2);

	// 					expect(doublyLinkedList.length).to.be.equal(3);
	// 					expect(node2?.value).to.deep.equal(2);
	// 					expect(node2?.next).to.deep.equal(null);
	// 					expect(node1?.next).to.deep.equal(node3);
	// 				});
	// 			});
	// 		});
	// 	});
	// });

	describe('push', () => {
		it('exists', () => {
			const doublyLinkedList = new DoublyLinkedList(0);
			expect(typeof doublyLinkedList.push).to.be.equal('function');
		});

		describe('when called', () => {
			describe('and linked list has nodes', () => {
				it('should push new a node onto linked list', () => {
					const doublyLinkedList = new DoublyLinkedList(0);
					let pushResult;
					let node2;

					doublyLinkedList.push(1);
					doublyLinkedList.push(2);
					pushResult = doublyLinkedList.push(3);

					node2 = doublyLinkedList.get(2);

					expect(doublyLinkedList.length).to.be.equal(4);
					expect(doublyLinkedList.head?.value).to.be.equal(0);
					expect(doublyLinkedList.tail?.value).to.be.equal(3);
					expect(doublyLinkedList.tail?.prev).to.be.equal(node2);
					expect(doublyLinkedList.tail?.next).to.be.equal(null);
					expect(pushResult).to.deep.equal(doublyLinkedList);
				});
			});

			describe('and linked list does not have nodes', () => {
				it('should push new node onto linked list', () => {
					const doublyLinkedList = new DoublyLinkedList(0);

					doublyLinkedList.pop();
					expect(doublyLinkedList.length).to.be.equal(0);

					doublyLinkedList.push(1);

					expect(doublyLinkedList.length).to.be.equal(1);
					expect(doublyLinkedList.head?.value).to.be.equal(1);
					expect(doublyLinkedList.head?.next).to.be.equal(null);
					expect(doublyLinkedList.head?.prev).to.be.equal(null);
					expect(doublyLinkedList.head).to.deep.equal(
						doublyLinkedList.tail
					);
				});
			});
		});
	});

	describe('pop', () => {
		it('exists', () => {
			const doublyLinkedList = new DoublyLinkedList(0);
			expect(typeof doublyLinkedList.pop).to.be.equal('function');
		});

		describe('when called', () => {
			describe('and linked list has more than one nodes', () => {
				it('should pop the last node off the linked list', () => {
					let popResult;
					const doublyLinkedList = new DoublyLinkedList(0);
					doublyLinkedList.push(1);
					doublyLinkedList.push(2);
					doublyLinkedList.push(3);

					popResult = doublyLinkedList.pop();

					expect(popResult?.value).to.be.equal(3);
					expect(popResult?.prev).to.be.equal(null);
					expect(popResult?.next).to.be.equal(null);
					expect(doublyLinkedList.length).to.be.equal(3);

					const node2 = doublyLinkedList.get(2);
					expect(node2?.next).to.be.equal(null);
				});
			});

			describe('and linked list has one node', () => {
				it('should pop the last node off the linked list', () => {
					const doublyLinkedList = new DoublyLinkedList(0);
					const popResult = doublyLinkedList.pop();

					expect(popResult?.value).to.be.equal(0);
					expect(popResult?.next).to.be.equal(null);
					expect(popResult?.prev).to.be.equal(null);

					expect(doublyLinkedList.tail).to.be.equal(null);
					expect(doublyLinkedList.head).to.be.equal(null);
					expect(doublyLinkedList.length).to.be.equal(0);
				});
			});

			describe('and linked list has zero nodes', () => {
				it('should pop the last node off the linked list', () => {
					const doublyLinkedList = new DoublyLinkedList(0);
					doublyLinkedList.pop();

					const popResult = doublyLinkedList.pop();

					expect(popResult).to.be.equal(undefined);

					expect(doublyLinkedList.length).to.be.equal(0);
					expect(doublyLinkedList.head).to.be.equal(null);
					expect(doublyLinkedList.tail).to.be.equal(null);
				});
			});
		});
	});

	// describe('unshift', () => {
	// 	it('exists', () => {
	// 		const doublyLinkedList = new DoublyLinkedList(0);
	// 		expect(typeof doublyLinkedList.unshift).to.be.equal('function');
	// 	});

	// 	describe('when called', () => {
	// 		describe('and linked list has nodes', () => {
	// 			it('should unshift a new node onto the front of the linked list', () => {
	// 				const doublyLinkedList = new DoublyLinkedList(1);
	// 				doublyLinkedList.push(2);
	// 				doublyLinkedList.push(3);

	// 				doublyLinkedList.unshift(0);

	// 				const node1 = doublyLinkedList.get(1);

	// 				expect(doublyLinkedList.length).to.be.equal(4);
	// 				expect(doublyLinkedList.head?.value).to.be.equal(0);
	// 				expect(doublyLinkedList.head?.next).to.deep.equal(node1);
	// 			});
	// 		});

	// 		describe('and linked list does not have nodes', () => {
	// 			it('should unshift a new node onto the front of the linked list', () => {
	// 				const doublyLinkedList = new DoublyLinkedList(0);

	// 				doublyLinkedList.pop();
	// 				expect(doublyLinkedList.length).to.be.equal(0);

	// 				doublyLinkedList.unshift(1);
	// 				expect(doublyLinkedList.head?.value).to.be.equal(1);
	// 				expect(doublyLinkedList.head).to.deep.equal(doublyLinkedList.tail);
	// 			});
	// 		});
	// 	});
	// });

	// describe('shift', () => {
	// 	it('exists', () => {
	// 		const doublyLinkedList = new DoublyLinkedList(0);
	// 		expect(typeof doublyLinkedList.shift).to.be.equal('function');
	// 	});

	// 	describe('when called', () => {
	// 		describe('and linked list has more than one nodes', () => {
	// 			it('should shift a node off the front of the linked list', () => {
	// 				const doublyLinkedList = new DoublyLinkedList(0);

	// 				doublyLinkedList.push(1);
	// 				doublyLinkedList.push(2);
	// 				doublyLinkedList.push(3);

	// 				const node1 = doublyLinkedList.get(1);
	// 				const shiftResult = doublyLinkedList.shift();

	// 				expect(doublyLinkedList.length).to.be.equal(3);
	// 				expect(doublyLinkedList.head).to.deep.equal(node1);
	// 				expect(shiftResult?.value).to.be.equal(0);
	// 				expect(shiftResult?.next).to.be.equal(null);
	// 			});
	// 		});

	// 		describe('and linked list has one node', () => {
	// 			it('should shift a node off the front of the linked list', () => {
	// 				let shiftResult;
	// 				const doublyLinkedList = new DoublyLinkedList(0);

	// 				shiftResult = doublyLinkedList.shift();
	// 				expect(shiftResult?.value).to.be.equal(0);
	// 				expect(shiftResult?.next).to.be.equal(null);
	// 				expect(doublyLinkedList.length).to.be.equal(0);
	// 				expect(doublyLinkedList.head).to.be.equal(null);
	// 				expect(doublyLinkedList.tail).to.be.equal(null);
	// 			});
	// 		});

	// 		describe('and linked list has zero nodes', () => {
	// 			it('should shift a node off the front of the linked list', () => {
	// 				let shiftResult;
	// 				const doublyLinkedList = new DoublyLinkedList(0);

	// 				doublyLinkedList.pop();
	// 				expect(doublyLinkedList.length).to.be.equal(0);
	// 				expect(doublyLinkedList.head).to.be.equal(null);

	// 				shiftResult = doublyLinkedList.shift();
	// 				expect(shiftResult).to.be.undefined;
	// 				expect(doublyLinkedList.length).to.be.equal(0);
	// 			});
	// 		});
	// 	});
	// });
});
