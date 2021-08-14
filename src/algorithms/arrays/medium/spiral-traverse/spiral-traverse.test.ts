import { expect } from 'chai';
import spiralTraverse from './spiral-traverse';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('spiralTraverse', () => {
			it('exists', () => {
				expect(typeof spiralTraverse).to.be.equal('function');
			});

			describe('when passed two demensional array', () => {
				describe('and is test case #1', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [
							[1, 2, 3, 4],
							[12, 13, 14, 5],
							[11, 16, 15, 6],
							[10, 9, 8, 7],
						];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([
							1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
							16,
						]);
					});
				});
				describe('and is test case #2', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [[1]];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([1]);
					});
				});
				describe('and is test case #3', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [
							[1, 2],
							[4, 3],
						];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([1, 2, 3, 4]);
					});
				});
				describe('and is test case #4', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [
							[1, 2, 3],
							[8, 9, 4],
							[7, 6, 5],
						];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([
							1, 2, 3, 4, 5, 6, 7, 8, 9,
						]);
					});
				});
				describe('and is test case #5', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [
							[19, 32, 33, 34, 25, 8],
							[16, 15, 14, 13, 12, 11],
							[18, 31, 36, 35, 26, 9],
							[1, 2, 3, 4, 5, 6],
							[20, 21, 22, 23, 24, 7],
							[17, 30, 29, 28, 27, 10],
						];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([
							19, 32, 33, 34, 25, 8, 11, 9, 6, 7, 10, 27, 28, 29,
							30, 17, 20, 1, 18, 16, 15, 14, 13, 12, 26, 5, 24,
							23, 22, 21, 2, 31, 36, 35, 4, 3,
						]);
					});
				});
				describe('and is test case #6', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [
							[4, 2, 3, 6, 7, 8, 1, 9, 5, 10],
							[12, 19, 15, 16, 20, 18, 13, 17, 11, 14],
						];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([
							4, 2, 3, 6, 7, 8, 1, 9, 5, 10, 14, 11, 17, 13, 18,
							20, 16, 15, 19, 12,
						]);
					});
				});
				describe('and is test case #7', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [
							[27, 12, 35, 26],
							[25, 21, 94, 11],
							[19, 96, 43, 56],
							[55, 36, 10, 18],
							[96, 83, 31, 94],
							[93, 11, 90, 16],
						];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([
							27, 12, 35, 26, 11, 56, 18, 94, 16, 90, 11, 93, 96,
							55, 19, 25, 21, 94, 43, 10, 31, 83, 36, 96,
						]);
					});
				});
				describe('and is test case #8', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [
							[1, 2, 3, 4],
							[10, 11, 12, 5],
							[9, 8, 7, 6],
						];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([
							1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
						]);
					});
				});
				describe('and is test case #9', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [
							[1, 2, 3],
							[12, 13, 4],
							[11, 14, 5],
							[10, 15, 6],
							[9, 8, 7],
						];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([
							1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
						]);
					});
				});
				describe('and is test case #10', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [
							[1, 11],
							[2, 12],
							[3, 13],
							[4, 14],
							[5, 15],
							[6, 16],
							[7, 17],
							[8, 18],
							[9, 19],
							[10, 20],
						];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([
							1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 10, 9, 8,
							7, 6, 5, 4, 3, 2,
						]);
					});
				});
				describe('and is test case #11', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [[1, 3, 2, 5, 4, 7, 6]];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([1, 3, 2, 5, 4, 7, 6]);
					});
				});
				describe('and is test case #12', () => {
					it("should return one dimensional array that is in spiral order of two demensional array's elements", () => {
						const array = [[1], [3], [2], [5], [4], [7], [6]];
						const result = spiralTraverse(array);

						expect(result).to.deep.equal([1, 3, 2, 5, 4, 7, 6]);
					});
				});
			});
		});
	});
});
