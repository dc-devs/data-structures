type Triplet = [number, number, number];
// const numArray = [12, 3, 1, 2, -6, 5, -8, 6]
// result = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
//
// O(nlogn + n^2) Time
// O(n) Space
//
const threeNumberSum = (numArray: number[], targetSum: number): Triplet[] => {
	const sums: Triplet[] = [];

	// Sort In Place
	numArray.sort((a, b) => {
		return a - b;
	});

	for (let i = 0; i < numArray.length; i++) {
		let baseNumber = numArray[i] as number;
		let leftPointer = (i + 1) as number;
		let rightPointer = (numArray.length - 1) as number;

		while (leftPointer < rightPointer) {
			const currentSum =
				baseNumber +
				(numArray[leftPointer] as number) +
				(numArray[rightPointer] as number);

			if (currentSum === targetSum) {
				sums.push([
					baseNumber,
					numArray[leftPointer] as number,
					numArray[rightPointer] as number,
				]);

				leftPointer += 1;
				rightPointer -= 1;
			} else if (currentSum < targetSum) {
				leftPointer += 1;
			} else if (currentSum > targetSum) {
				rightPointer -= 1;
			}
		}
	}

	return sums;
};

export default threeNumberSum;
