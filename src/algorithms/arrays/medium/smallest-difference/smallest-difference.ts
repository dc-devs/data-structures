// O(nlog(n) + mlog(m)) Time // Sorting Arrays Quick Sort, Merge Sort
// O(1) Space
const smallestDifference = (
	arrayOne: number[],
	arrayTwo: number[]
): number[] => {
	arrayOne.sort((a, b) => {
		return a - b;
	});

	arrayTwo.sort((a, b) => {
		return a - b;
	});

	let arrayOneIndex = 0;
	let arrayTwoIndex = 0;
	let smallestPair: number[] = [Infinity, Infinity];
	let smallestDiff = Infinity;
	let currentDiff = Infinity;

	while (arrayOneIndex < arrayOne.length && arrayTwoIndex < arrayTwo.length) {
		const arrayOneValue = arrayOne[arrayOneIndex] as number;
		const arrayTwoValue = arrayTwo[arrayTwoIndex] as number;

		if (arrayOneValue === arrayTwoValue) {
			smallestPair = [arrayOneValue, arrayTwoValue];
			smallestDiff = 0;
			currentDiff = 0;

			return smallestPair;
		}

		currentDiff = Math.abs(arrayOneValue - arrayTwoValue);
		const isCurrentDiffLessThaSmallestDiff = currentDiff < smallestDiff;

		if (isCurrentDiffLessThaSmallestDiff) {
			smallestDiff = currentDiff;
			smallestPair = [arrayOneValue, arrayTwoValue];
		}

		// 28
		// 134
		// currentDiff: 106
		//
		// smallestPairs [28, 26]
		// smallestDiff: 2
		//
		//						            |
		// const arrayOne = [-1, 5, 10, 20, 28, 3];
		// const arrayTwo = [26, 134, 135, 15, 17];
		// 					      |

		if (arrayOneValue < arrayTwoValue) {
			arrayOneIndex += 1;
		} else if (arrayOneValue > arrayTwoValue) {
			arrayTwoIndex += 1;
		}
	}

	return smallestPair;
};

export default smallestDifference;
