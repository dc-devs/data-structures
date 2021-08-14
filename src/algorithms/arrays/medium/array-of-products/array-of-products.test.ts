import { expect } from 'chai';
import arrayOfProducts from './array-of-products';

describe.only('Algorithms', () => {
	describe('Arrays', () => {
		describe('arrayOfProducts', () => {
			it('exists', () => {
				expect(typeof arrayOfProducts).to.be.equal('function');
			});

			describe('when passed an array of numbers', () => {
				it('should return length of longest peak', () => {
					const array = [5, 1, 4, 2];
					const result = arrayOfProducts(array);

					expect(result).to.deep.equal([8, 40, 10, 20]);
				});
			});
		});
	});
});
