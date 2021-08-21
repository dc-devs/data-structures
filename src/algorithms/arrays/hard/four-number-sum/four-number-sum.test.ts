import { expect } from 'chai';
import fourNumberSum from './four-number-sum';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('fourNumberSum', () => {
			it('exists', () => {
				expect(typeof fourNumberSum).to.be.equal('function');
			});

			describe('when provide an array or numbers', () => {
				describe('and is test case #1', () => {
					it('should return a two dimensional array of all quadruplet numbers that add up to tagert', () => {
						const target = 16;
						const numArray = [7, 6, 4, -1, 1, 2];
						const result = fourNumberSum(numArray, target);

						expect(result).to.deep.equal([
							[7, 6, 4, -1],
							[7, 6, 1, 2],
						]);
					});
				});
			});
		});
	});
});
