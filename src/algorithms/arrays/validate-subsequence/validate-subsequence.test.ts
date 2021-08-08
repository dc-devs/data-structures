import { expect } from 'chai';
import validateSubsequence from './validate-subsequence';

describe.only('validateSubsequence', () => {
	it('exists', () => {
		expect(typeof validateSubsequence).to.be.equal('function');
	});

	describe('when called with an arary of numbers and a sequence of numbers', () => {
		describe('and the sequence is a subsequence of the array', () => {
			it('should return true', () => {
				const array = [5, 1, 22, 25, 6, -1, 8, 10];
				const sequence = [1, 6, -1, 10];

				const result = validateSubsequence(array, sequence);

				expect(result).to.be.true;
			});
		});
		describe('and the sequence is not a subsequence of the array', () => {
			it('should return false', () => {
				const array = [5, 1, 22, 25, 6, -1, 8, 10];
				const sequence = [10, 1, 6, -1, 10];

				const result = validateSubsequence(array, sequence);

				expect(result).to.be.false;
			});
		});
	});
});
