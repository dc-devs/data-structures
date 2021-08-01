import { expect } from 'chai';
import LinkedList from './linked-list';

describe('Linked List', () => {
	it('is a class', () => {
		expect(typeof LinkedList).to.be.equal('function');
	});

	it('can be instantiated', () => {
		const linkedList = new LinkedList(4);

		expect(linkedList.head.value).to.deep.equal(4);
		expect(linkedList.head.next).to.deep.equal(null);
		expect(linkedList.head).to.deep.equal(linkedList.tail);
		expect(linkedList.length).to.be.equal(1);
	});

	describe('push', () => {
		it('exists', () => {
			const linkedList = new LinkedList(4);
			expect(typeof linkedList.push).to.be.equal('function');
		});

		describe('when called', () => {
			describe('and linked list has nodes', () => {
				// it('should push new node onto linked list', () => {
				// 	const linkedList = new LinkedList(1);
				// 	linkedList.push(2);
				// 	expect(typeof linkedList.push).to.be.equal('function');
				// 	expect(typeof linkedList.push).to.be.equal('function');
				// });
			});
			// describe('and linked list does not have nodes', () => {
			// 	it('should push new node onto linked list', () => {
			// 		const linkedList = new LinkedList(4);
			// 		expect(typeof linkedList.push).to.be.equal('function');
			// 	});
			// });
		});
	});
});
