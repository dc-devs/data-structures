import { expect } from 'chai';
import threeNumberSum from './three-number-sum';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('threeNumberSum', () => {
			it('exists', () => {
				expect(typeof threeNumberSum).to.be.equal('function');
			});

			describe('when provide an empty array', () => {
				it('should return an empty array', () => {
					const target = 0;
					const numArray = [] as number[];
					const result = threeNumberSum(numArray, target);

					expect(result).to.deep.equal([]);
				});
			});
			describe('when provied an array of numbers and a target', () => {
				describe('and the array has a set of three numbers that add up to target', () => {
					it('should return all sets of three numbers that add up to target', () => {
						const target = 0;
						const numArray = [12, 3, 1, 2, -6, 5, -8, 6];
						const result = threeNumberSum(numArray, target);

						expect(result).to.deep.equal([
							[-8, 2, 6],
							[-8, 3, 5],
							[-6, 1, 5],
						]);
					});
				});
			});
			describe('and the array does not have a set of three numbers that add up to target', () => {
				it('should return empty array', () => {
					const target = 33;
					const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
					const result = threeNumberSum(numArray, target);

					expect(result).to.deep.equal([]);
				});
			});
		});
	});
});
