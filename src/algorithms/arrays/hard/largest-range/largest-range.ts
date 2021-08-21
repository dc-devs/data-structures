//[1, 1, 1, 3, 4]
// {
// 1: true,
// 1: true,
// 1: true,
// 3: true,
// 4: true,
// }

type Range = [number, number];

interface HashTable {
	[key: number]: boolean;
}

const largestRange = (array: number[]): Range => {
	const hashTable: HashTable = {};
	let currentRangeArray: number[] = [];
	let largestRangeArray: number[] = [];

	for (let i = 0; i < array.length; i++) {
		const number = array[i] as number;
		hashTable[number] = true;
	}

	for (let i = 0; i < array.length; i++) {
		let currentLeftNumber = array[i] as number;
		let currentRightNumber = array[i] as number;
		currentRangeArray = [];

		while (hashTable[currentLeftNumber]) {
			hashTable[currentLeftNumber] = false;
			currentRangeArray.unshift(currentLeftNumber);
			currentLeftNumber -= 1;
		}

		while (hashTable[currentRightNumber + 1]) {
			hashTable[currentRightNumber] = false;
			currentRangeArray.push(currentRightNumber + 1);
			currentRightNumber += 1;
		}

		if (currentRangeArray.length > largestRangeArray.length) {
			largestRangeArray = currentRangeArray;
		}
	}

	return [
		largestRangeArray[0] as number,
		largestRangeArray[largestRangeArray.length - 1] as number,
	];
};

export default largestRange;
