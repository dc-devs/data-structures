import { expect } from 'chai';
import largestRange from './largest-range';

// Added all test cases
describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('largestRange', () => {
			it('exists', () => {
				expect(typeof largestRange).to.be.equal('function');
			});

			describe('when provide an array of numbers', () => {
				describe('and is test case #1', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [
							1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6,
						];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([0, 7]);
					});
				});
				describe('and is test case #2', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [1];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([1, 1]);
					});
				});
				describe('and is test case #3', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [1, 2];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([1, 2]);
					});
				});
				describe('and is test case #4', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [4, 2, 1, 3];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([1, 4]);
					});
				});
				describe('and is test case #5', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [4, 2, 1, 3, 6];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([1, 4]);
					});
				});
				describe('and is test case #6', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [8, 4, 2, 10, 3, 6, 7, 9, 1];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([6, 10]);
					});
				});
				describe('and is test case #7', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [
							19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6,
							15, 12, 12, 2, 1, 6, 13, 14,
						];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([10, 19]);
					});
				});
				describe('and is test case #8', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [
							0, 9, 19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8,
							7, 6, 15, 12, 12, 2, 1, 6, 13, 14,
						];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([-1, 19]);
					});
				});
				describe('and is test case #9', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [
							0, -5, 9, 19, -1, 18, 17, 2, -4, -3, 10, 3, 12, 5,
							16, 4, 11, 7, -6, -7, 6, 15, 12, 12, 2, 1, 6, 13,
							14, -2,
						];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([-7, 7]);
					});
				});
				describe('and is test case #10', () => {
					it('should returns two indices of smallest sub array that needs to be sorted for array to be sorted', () => {
						const numArray = [
							-7, -7, -7, -7, 8, -8, 0, 9, 19, -1, -3, 18, 17, 2,
							10, 3, 12, 5, 16, 4, 11, -6, 8, 7, 6, 15, 12, 12,
							-5, 2, 1, 6, 13, 14, -4, -2,
						];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([-8, 19]);
					});
				});
				describe('and is test case #11', () => {
					it('should return array of smallest and largest number largest range', () => {
						const numArray = [1, 1, 1, 3, 4];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([3, 4]);
					});
				});
				describe('and is test case #12', () => {
					it('should return array of smallest and largest number largest range', () => {
						const numArray = [-1, 0, 1];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([-1, 1]);
					});
				});
				describe('and is test case #13', () => {
					it('should return array of smallest and largest number largest range', () => {
						const numArray = [10, 0, 1];
						const result = largestRange(numArray);

						expect(result).to.deep.equal([0, 1]);
					});
				});
			});
		});
	});
});
