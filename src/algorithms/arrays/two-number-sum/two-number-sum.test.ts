import { expect } from 'chai';
import twoNumberSum from './two-number-sum';

describe('twoNumberSum', () => {
	it('exists', () => {
		expect(typeof twoNumberSum).to.be.equal('function');
	});

	describe('when called with an arary of numbers and a target', () => {
		describe('and a sum does exist in the numebr array', () => {
			it('should return an array of two numbers that sum up to target', () => {
				const array = [3, 5, -4, 8, 11, 1, -1, 6];
				const target = 10;

				const result = twoNumberSum(array, target);

				expect(result).to.deep.equal([-1, 11]);
			});
		});
		describe('and a sum does not exist in the numebr array', () => {
			it('should return an empty arrayt', () => {
				const array = [3, 5, -4, 8, 12, 1, -1, 6];
				const target = 10;

				const result = twoNumberSum(array, target);

				expect(result).to.deep.equal([]);
			});
		});
	});
});
