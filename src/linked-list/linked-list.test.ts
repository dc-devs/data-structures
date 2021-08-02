import { expect } from 'chai';
import LinkedList from './linked-list';

describe('Linked List', () => {
	it('is a class', () => {
		expect(typeof LinkedList).to.be.equal('function');
	});

	it('can be instantiated', () => {
		const linkedList = new LinkedList(0);

		expect(linkedList.length).to.be.equal(1);
		expect(linkedList.head?.value).to.deep.equal(0);
		expect(linkedList.head?.next).to.deep.equal(null);
		expect(linkedList.head).to.deep.equal(linkedList.tail);
	});

	describe('get', () => {
		it('exists', () => {
			const linkedList = new LinkedList(0);
			expect(typeof linkedList.get).to.be.equal('function');
		});

		describe('when called with a valid index', () => {
			it('should return a node at that index', () => {
				const linkedList = new LinkedList(0);
				linkedList.push(1);
				linkedList.push(2);
				linkedList.push(3);

				const selectedNode = linkedList.get(3);

				expect(selectedNode?.value).to.be.equal(3);
				expect(selectedNode?.next).to.be.equal(null);
			});
		});

		describe('when called with an invalid index', () => {
			describe('and the index is -1', () => {
				it('should return undefined', () => {
					const linkedList = new LinkedList(0);
					const selectedNode = linkedList.get(-1);

					expect(selectedNode).to.be.undefined;
				});
			});

			describe('and the index is equal to the length', () => {
				it('should return undefined', () => {
					const linkedList = new LinkedList(0);
					const selectedNode = linkedList.get(1);

					expect(selectedNode).to.be.undefined;
				});
			});

			describe('and the index greater than the length', () => {
				it('should return undefined', () => {
					const linkedList = new LinkedList(0);
					const selectedNode = linkedList.get(2);

					expect(selectedNode).to.be.undefined;
				});
			});
		});
	});

	describe('push', () => {
		it('exists', () => {
			const linkedList = new LinkedList(4);
			expect(typeof linkedList.push).to.be.equal('function');
		});

		describe('when called', () => {
			describe('and linked list has nodes', () => {
				it('should push new a node onto linked list', () => {
					let pushResult;
					const linkedList = new LinkedList(0);

					linkedList.push(1);
					linkedList.push(2);
					pushResult = linkedList.push(3);

					expect(linkedList.length).to.be.equal(4);
					expect(linkedList.head?.value).to.be.equal(0);
					expect(linkedList.tail?.value).to.be.equal(3);
					expect(linkedList.tail?.next).to.be.equal(null);
					expect(pushResult).to.deep.equal(linkedList);
				});
			});

			describe('and linked list does not have nodes', () => {
				it('should push new node onto linked list', () => {
					const linkedList = new LinkedList(0);

					linkedList.pop();
					expect(linkedList.length).to.be.equal(0);

					linkedList.push(1);
					expect(linkedList.length).to.be.equal(1);
					expect(linkedList.head?.value).to.be.equal(1);
					expect(linkedList.head?.next).to.be.equal(null);
					expect(linkedList.head).to.deep.equal(linkedList.tail);
				});
			});
		});
	});
});
