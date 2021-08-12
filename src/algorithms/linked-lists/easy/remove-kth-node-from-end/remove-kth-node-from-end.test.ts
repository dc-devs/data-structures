import { expect } from 'chai';
import removeKthNodeFromEnd from './remove-kth-node-from-end';
import LinkedList from '../../../../data-structures/linked-list';

describe('Algorithms', () => {
	describe('Linked Lists', () => {
		describe('removeKthNodeFromEnd', () => {
			let linkedList: LinkedList;

			it('exists', () => {
				expect(typeof removeKthNodeFromEnd).to.be.equal('function');
			});

			beforeEach(() => {
				linkedList = new LinkedList(0);
				linkedList.push(1);
				linkedList.push(2);
				linkedList.push(3);
				linkedList.push(4);
				linkedList.push(5);
				linkedList.push(6);
				linkedList.push(7);
				linkedList.push(8);
				linkedList.push(9);
			});

			describe('when called', () => {
				describe('and k is 4', () => {
					it('should remove the correct item', () => {
						removeKthNodeFromEnd(linkedList.head, 4);

						expect(linkedList.get(5)?.value).to.be.equal(5);
						expect(linkedList.get(6)?.value).to.be.equal(7);
						expect(linkedList.get(7)?.value).to.be.equal(8);
					});
				});

				describe('and k is 1', () => {
					it('should remove the correct item', () => {
						removeKthNodeFromEnd(linkedList.head, 1);

						expect(linkedList.get(8)?.value).to.be.equal(8);
						expect(linkedList.get(9)).to.be.null;
					});
				});

				describe('and k is 2', () => {
					it('should remove the correct item', () => {
						removeKthNodeFromEnd(linkedList.head, 2);

						expect(linkedList.get(7)?.value).to.be.equal(7);
						expect(linkedList.get(8)?.value).to.be.equal(9);
						expect(linkedList.get(9)).to.be.null;
					});
				});

				describe('and k is 8', () => {
					it('should remove the correct item', () => {
						removeKthNodeFromEnd(linkedList.head, 8);

						expect(linkedList.get(0)?.value).to.be.equal(0);
						expect(linkedList.get(1)?.value).to.be.equal(1);
						expect(linkedList.get(2)?.value).to.be.equal(3);
					});
				});

				describe('and k is 9', () => {
					it('should remove the correct item', () => {
						removeKthNodeFromEnd(linkedList.head, 9);

						expect(linkedList.get(0)?.value).to.be.equal(0);
						expect(linkedList.get(1)?.value).to.be.equal(2);
						expect(linkedList.get(2)?.value).to.be.equal(3);
					});
				});

				describe('and k is 10', () => {
					it('should remove the correct item', () => {
						removeKthNodeFromEnd(linkedList.head, 10);

						expect(linkedList.get(0)?.value).to.be.equal(1);
						expect(linkedList.get(1)?.value).to.be.equal(2);
						expect(linkedList.get(2)?.value).to.be.equal(3);
					});
				});
			});
		});
	});
});
