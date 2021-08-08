// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]
// result = true

// O(n) Linear Time - Where n is the number of items in array
// O(1) Constant Space
const validateSubsequence = (array: number[], sequence: number[]): boolean => {
	let sequencePointer = 0;
	let isSubsequence = false;
	let sequenceNumber = sequence[sequencePointer];

	for (let i = 0; i < array.length; i++) {
		const arrayNumber = array[i];

		if (arrayNumber === sequenceNumber) {
			sequencePointer += 1;
			sequenceNumber = sequence[sequencePointer];
		}
	}

	isSubsequence = sequencePointer === sequence.length;

	return isSubsequence;
};

export default validateSubsequence;
