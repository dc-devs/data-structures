import { expect } from 'chai';
import smallestDifference from './smallest-difference';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('smallestDifference', () => {
			it('exists', () => {
				expect(typeof smallestDifference).to.be.equal('function');
			});

			describe('when passing in two valid arrays', () => {
				describe('and test case #1', () => {
					it('should return smallest diff pairs', () => {
						const arrayOne = [-1, 5, 10, 20, 28, 3];
						const arrayTwo = [26, 134, 135, 15, 17];
						const result = smallestDifference(arrayOne, arrayTwo);

						expect(result).to.deep.equal([28, 26]);
					});
				});
				describe('and test case #2', () => {
					it('should return smallest diff pairs', () => {
						const arrayOne = [-1, 5, 10, 20, 3];
						const arrayTwo = [26, 134, 135, 15, 17];
						const result = smallestDifference(arrayOne, arrayTwo);

						expect(result).to.deep.equal([20, 17]);
					});
				});
				describe('and test case #3', () => {
					it('should return smallest diff pairs', () => {
						const arrayOne = [10, 0, 20, 25];
						const arrayTwo = [1005, 1006, 1014, 1032, 1031];
						const result = smallestDifference(arrayOne, arrayTwo);

						expect(result).to.deep.equal([25, 1005]);
					});
				});
				describe('and test case #4', () => {
					it('should return smallest diff pairs', () => {
						const arrayOne = [10, 0, 20, 25, 2200];
						const arrayTwo = [1005, 1006, 1014, 1032, 1031];
						const result = smallestDifference(arrayOne, arrayTwo);

						expect(result).to.deep.equal([25, 1005]);
					});
				});
			});
		});
	});
});
