import { expect } from 'chai';
import nonConstructibleChange from './non-constructable-change';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('nonConstructibleChange', () => {
			it('exists', () => {
				expect(typeof nonConstructibleChange).to.be.equal('function');
			});

			describe('when provied an array of coins', () => {
				describe('and the array is empty', () => {
					it('should return minimum sum cannot create', () => {
						const coins = [] as number[];
						const result = nonConstructibleChange(coins);

						expect(result).to.be.equal(1);
					});
				});
				describe('and the array is not empty', () => {
					it('should return minimum sum cannot create', () => {
						const coins = [5, 7, 1, 1, 2, 3, 22];
						const result = nonConstructibleChange(coins);

						expect(result).to.be.equal(20);
					});
				});
			});
		});
	});
});
