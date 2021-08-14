import { expect } from 'chai';
import firstDuplicateValue from './first-duplicate-value';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('firstDuplicateValue', () => {
			it('exists', () => {
				expect(typeof firstDuplicateValue).to.be.equal('function');
			});

			describe('when passed an array of numbers', () => {
				it('should return length of longest peak', () => {
					const array = [2, 1, 5, 2, 3, 3, 4];
					const result = firstDuplicateValue(array);

					expect(result).to.be.equal(2);
				});
			});
		});
	});
});
