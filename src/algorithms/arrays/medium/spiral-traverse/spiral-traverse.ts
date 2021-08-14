// O(n) Time
// O(1) Space
//  array = [
//
//             SCEC
//          [1, 2, 3],
//       SR [12, 13, 4],
//          [11, 14, 5],
//       ER [10, 15, 6],
//          [9, 8, 7]
//
// ]
//
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

interface AddOuterSpiralArgs {
	array: number[][];
	result: number[];
	startRowIndex: number;
	endColumnIndex: number;
	endRowIndex: number;
	startColumnIndex: number;
}

const addOuterSpiral = ({
	array,
	result,
	startRowIndex,
	endColumnIndex,
	endRowIndex,
	startColumnIndex,
}: AddOuterSpiralArgs) => {
	const startRow = array[startRowIndex] as number[];
	for (let i = startColumnIndex; i <= endColumnIndex; i++) {
		const item = startRow[i] as number;
		result.push(item);
	}

	// loop through array, grab last items
	// start at index one, as not not double add last item in first array (index 0)
	for (let i = startRowIndex + 1; i <= endRowIndex; i++) {
		const currentRow = array[i] as number[];
		const item = currentRow[endColumnIndex] as number;
		result.push(item);
	}

	if (endRowIndex === startRowIndex) {
		return;
	}

	const endRow = array[endRowIndex] as number[];
	for (let i = endColumnIndex - 1; i >= startColumnIndex; i--) {
		const item = endRow[i] as number;
		result.push(item);
	}

	if (endColumnIndex === startColumnIndex) {
		return;
	}

	for (let i = endRowIndex - 1; i > startRowIndex; i--) {
		const currentRow = array[i] as number[];
		const item = currentRow[startColumnIndex] as number;
		result.push(item);
	}
};

const spiralTraverse = (array: number[][]): number[] => {
	const result: number[] = [];
	let startRowIndex = 0;
	let startColumnIndex = 0;
	let endRowIndex = array.length - 1;
	let endColumnIndex = (array[0]?.length as number) - 1;

	while (startRowIndex <= endRowIndex && startColumnIndex <= endColumnIndex) {
		addOuterSpiral({
			array,
			result,
			startRowIndex,
			endRowIndex,
			startColumnIndex,
			endColumnIndex,
		});

		startRowIndex += 1;
		endRowIndex -= 1;
		startColumnIndex += 1;
		endColumnIndex -= 1;
	}

	return result;
};

export default spiralTraverse;
