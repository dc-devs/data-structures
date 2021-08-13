import { expect } from 'chai';
import isMonotonic from './is-monotonic';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('isMonotonic', () => {
			it('exists', () => {
				expect(typeof isMonotonic).to.be.equal('function');
			});

			describe('when passing in an array', () => {
				describe('and that array is empty', () => {
					it('should return true', () => {
						const array = [] as number[];
						const result = isMonotonic(array);

						expect(result).to.be.true;
					});
				});
				describe('and that array has one item', () => {
					it('should return true', () => {
						const array = [0] as number[];
						const result = isMonotonic(array);

						expect(result).to.be.true;
					});
				});
				describe('and that array has all of the same numbers', () => {
					it('should return true', () => {
						const array = [
							-1, -1, -1, -1, -1, -1, -1, -1,
						] as number[];
						const result = isMonotonic(array);

						expect(result).to.be.true;
					});
				});
				describe('and array is decreasing with no initial repeating numbers', () => {
					it('should return true', () => {
						const array = [
							-1, -5, -10, -1100, -1100, -1101, -1102, -9001,
						];
						const result = isMonotonic(array);

						expect(result).to.be.true;
					});
					describe('and array is decreasing with initial repeating numbers', () => {
						it('should return true', () => {
							const array = [
								-1, -1, -1, -5, -10, -1100, -1100, -1101, -1102,
								-9001,
							];
							const result = isMonotonic(array);

							expect(result).to.be.true;
						});
					});
				});
				describe('and array is increasing with no initial repeating numbers', () => {
					it('should return true', () => {
						const array = [1, 5, 10, 1100, 1100, 1101, 1102, 9001];
						const result = isMonotonic(array);

						expect(result).to.be.true;
					});
					describe('and array is increasing with initial repeating numbers', () => {
						it('should return true', () => {
							const array = [
								1, 1, 1, 5, 10, 1100, 1100, 1101, 1102, 9001,
							];
							const result = isMonotonic(array);

							expect(result).to.be.true;
						});
					});
				});
			});
		});
	});
});
