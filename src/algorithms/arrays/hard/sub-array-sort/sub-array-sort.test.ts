import { expect } from 'chai';
import subArraySort from './sub-array-sort';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('subArraySort', () => {
			it('exists', () => {
				expect(typeof subArraySort).to.be.equal('function');
			});

			describe('when provide an array or numbers', () => {
				describe('and is test case #1', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [
							1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19,
						];
						const result = subArraySort(numArray);

						expect(result).to.deep.equal([3, 9]);
					});
				});

				describe('and is test case #2', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [1, 2];
						const result = subArraySort(numArray);

						expect(result).to.deep.equal([-1, -1]);
					});
				});
			});
		});
	});
});
