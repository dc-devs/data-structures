import { expect } from 'chai';
import sortedSquaredArray from './sorted-squared-array';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('sortedSquaredArray', () => {
			it('exists', () => {
				expect(typeof sortedSquaredArray).to.be.equal('function');
			});

			describe('when called with an arary of numbers that are sorted, in asc order', () => {
				describe('and all of the numbers are positive', () => {
					it('should return an array of the sqaured numbers in sorted asc order', () => {
						const array = [1, 2, 3, 5, 6, 8, 9];
						const result = sortedSquaredArray(array);

						expect(result).to.deep.equal([1, 4, 9, 25, 36, 64, 81]);
					});
				});

				describe('and some of the numbers are negative case 1', () => {
					it('should return an array of the sqaured numbers in sorted asc order', () => {
						const array = [-10, -5, 0, 5, 10];
						const result = sortedSquaredArray(array);

						expect(result).to.deep.equal([0, 25, 25, 100, 100]);
					});
				});

				describe('and some of the numbers are negative case 2', () => {
					it('should return an array of the sqaured numbers in sorted asc order', () => {
						const array = [-7, -3, 1, 9, 22, 30];
						const result = sortedSquaredArray(array);

						expect(result).to.deep.equal([1, 9, 49, 81, 484, 900]);
					});
				});

				describe('and all of the numbers are negative', () => {
					describe('and the input array length is 2', () => {
						it('should return an array of the sqaured numbers in sorted asc order', () => {
							const array = [-2, -1];
							const result = sortedSquaredArray(array);

							expect(result).to.deep.equal([1, 4]);
						});
					});
					describe('and the input array length is 5', () => {
						it('should return an array of the sqaured numbers in sorted asc order', () => {
							const array = [-5, -4, -3, -2, -1];
							const result = sortedSquaredArray(array);

							expect(result).to.deep.equal([1, 4, 9, 16, 25]);
						});
					});
				});
			});
		});
	});
});
