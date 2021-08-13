import { expect } from 'chai';
import moveToEnd from './move-to-end';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('moveToEnd', () => {
			it('exists', () => {
				expect(typeof moveToEnd).to.be.equal('function');
			});

			describe('when passing in an array and a target', () => {
				describe('and is test case #1', () => {
					it('should return smallest diff pairs', () => {
						const target = 2;
						const arrayOne = [2, 1, 2, 2, 2, 3, 4, 2];
						const result = moveToEnd(arrayOne, target);

						expect(result).to.deep.equal([4, 1, 3, 2, 2, 2, 2, 2]);
					});
				});
				describe('and is test case #2', () => {
					it('should return smallest diff pairs', () => {
						const target = 3;
						const arrayOne = [] as number[];
						const result = moveToEnd(arrayOne, target);

						expect(result).to.deep.equal([]);
					});
				});
				describe('and is test case #3', () => {
					it('should return smallest diff pairs', () => {
						const target = 3;
						const arrayOne = [1, 2, 4, 5, 6];
						const result = moveToEnd(arrayOne, target);

						expect(result).to.deep.equal([1, 2, 4, 5, 6]);
					});
				});
				describe('and is test case #4', () => {
					it('should return smallest diff pairs', () => {
						const target = 3;
						const arrayOne = [3, 3, 3, 3, 3];
						const result = moveToEnd(arrayOne, target);

						expect(result).to.deep.equal([3, 3, 3, 3, 3]);
					});
				});
				describe('and is test case #5', () => {
					it('should return smallest diff pairs', () => {
						const target = 3;
						const arrayOne = [3, 1, 2, 4, 5];
						const result = moveToEnd(arrayOne, target);

						expect(result).to.deep.equal([5, 1, 2, 4, 3]);
					});
				});
			});
		});
	});
});
