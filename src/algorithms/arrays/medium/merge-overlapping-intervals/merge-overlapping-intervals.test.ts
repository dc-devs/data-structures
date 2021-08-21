import { expect } from 'chai';
import mergeOverlappinngIntervals from './merge-overlapping-intervals';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('mergeOverlappinngIntervals', () => {
			it('exists', () => {
				expect(typeof mergeOverlappinngIntervals).to.be.equal(
					'function'
				);
			});

			describe('when passed an array of intervals', () => {
				describe('and test case #1', () => {
					it('should merge overlapping intervals and return intervals', () => {
						const array = [
							[1, 2],
							[3, 5],
							[4, 7],
							[6, 8],
							[9, 10],
						];
						const result = mergeOverlappinngIntervals(array);

						expect(result).to.deep.equal([
							[1, 2],
							[3, 8],
							[9, 10],
						]);
					});
				});
				describe('and test case #2', () => {
					it('should merge overlapping intervals and return intervals', () => {
						const array = [
							[1, 22],
							[-20, 30],
						];
						const result = mergeOverlappinngIntervals(array);

						expect(result).to.deep.equal([[-20, 30]]);
					});
				});
				describe('and test case #3', () => {
					it('should merge overlapping intervals and return intervals', () => {
						const array = [
							[2, 3],
							[4, 5],
							[6, 7],
							[8, 9],
							[1, 10],
						];
						const result = mergeOverlappinngIntervals(array);

						expect(result).to.deep.equal([[1, 10]]);
					});
				});
			});
		});
	});
});
