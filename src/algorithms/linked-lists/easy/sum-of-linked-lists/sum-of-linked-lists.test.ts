import { expect } from 'chai';
import sumOfLinkedLists from './sum-of-linked-lists';
import LinkedList from '../../../../data-structures/linked-list';

describe('Algorithms', () => {
	describe('Linked Lists', () => {
		describe('sumOfLinkedLists', () => {
			it('exists', () => {
				expect(typeof sumOfLinkedLists).to.be.equal('function');
			});

			describe('when called with two linkedLists', () => {
				it('should return the sum of the linkedLists', () => {
					const linkedList1 = new LinkedList(2);
					linkedList1.push(4);
					linkedList1.push(7);
					linkedList1.push(1);

					const linkedList2 = new LinkedList(9);
					linkedList2.push(4);
					linkedList2.push(5);

					const summedLinkedList = sumOfLinkedLists(
						linkedList1,
						linkedList2
					);

					expect(summedLinkedList?.get(0)?.value).to.be.equal(0);
					expect(summedLinkedList?.get(1)?.value).to.be.equal(1);
					expect(summedLinkedList?.get(2)?.value).to.be.equal(9);
					expect(summedLinkedList?.get(3)?.value).to.be.equal(2);
					expect(summedLinkedList?.get(4)?.value).to.be.equal(2);
				});
			});
		});
	});
});
