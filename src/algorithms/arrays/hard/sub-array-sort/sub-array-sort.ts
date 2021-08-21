type Range = [number, number];

//   0  1  2  3   4   5  6   7  8  9  10  11  12
// [ 1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19 ]
//   |
//
// O(n) Time : Just multiple linear loops
// O(1) Space : Not saving any memory
const isOutOfOrder = (i: number, number: number, array: number[]): boolean => {
	const nextNumber = array[i + 1] as number;
	const previousNumber = array[i - 1] as number;

	if (i === 0) {
		return number > nextNumber;
	}

	if (i === array.length - 1) {
		return number < previousNumber;
	}

	return number < previousNumber || number > nextNumber;
};

const subArraySort = (array: number[]): Range => {
	let minOutOfOrder = Infinity;
	let maxOutOfOrder = -Infinity;

	// Loop through all items in array
	for (let i = 0; i < array.length; i++) {
		const number = array[i] as number;

		// Check is current item is out of order
		// If its out of order
		//  Update the min / max out of order numbers
		if (isOutOfOrder(i, number, array)) {
			minOutOfOrder = Math.min(minOutOfOrder, number);
			maxOutOfOrder = Math.max(maxOutOfOrder, number);
		}
	}

	// Once we've set all min/max out of order numbers find
	// the index of each min/max number

	// If the min/max never changed, then the array is already sorted
	// return [-1,-1]
	if (maxOutOfOrder === -Infinity) {
		return [-1, -1];
	}

	// Else loop through array and find the indices of
	// where min/max should be placed in order to sort sub array
	let subArrayMinIndex = 0;
	let subArrayMaxIndex = array.length - 1;

	while (minOutOfOrder >= (array[subArrayMinIndex] as number)) {
		subArrayMinIndex += 1;
	}
	while (maxOutOfOrder <= (array[subArrayMaxIndex] as number)) {
		subArrayMaxIndex -= 1;
	}

	return [subArrayMinIndex, subArrayMaxIndex];
};

export default subArraySort;
