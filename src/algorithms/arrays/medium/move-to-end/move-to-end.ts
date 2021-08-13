// O(n) Time
// O(1) Space
//
// [3, 1, 4, 2, 2, 2, 2, 2]
//           ||
const moveToEnd = (array: number[], target: number): number[] => {
	let leftPointer = 0;
	let rightPointer = array.length - 1;

	while (leftPointer < rightPointer) {
		const leftValue = array[leftPointer] as number;
		const rightValue = array[rightPointer] as number;

		if (leftValue !== target) {
			leftPointer += 1;
		} else if (leftValue === target && rightValue === target) {
			rightPointer -= 1;
		} else if (leftValue === target && rightValue !== target) {
			array[rightPointer] = leftValue;
			array[leftPointer] = rightValue;

			rightPointer -= 1;
			leftPointer += 1;
		}
	}

	return array;
};

export default moveToEnd;
