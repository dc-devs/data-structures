// Questions to ask:
// 1. Can the array be empty
// 2. Can there be negative numbers?

// Brute Force | array.sort()
// O(nlogn) Time
// O(n) Space

// Case 1
// aray = [-2, -1]

// O(n) Time - Where n is the number of items in the array
// O(n) Space - Where n is the number of items in the array
const sortedSquaredArray = (array: number[]): number[] => {
	const squaredArray = new Array(array.length).fill(0);
	let smallerNumberIndex = 0;
	let largerNumberIndex = array.length - 1;

	for (let i = array.length - 1; i >= 0; i--) {
		const smallerNumber = array[smallerNumberIndex] as number;
		const largerNumber = array[largerNumberIndex] as number;

		if (Math.abs(largerNumber) > Math.abs(smallerNumber)) {
			squaredArray[i] = largerNumber * largerNumber;
			largerNumberIndex -= 1;
		} else {
			squaredArray[i] = smallerNumber * smallerNumber;
			smallerNumberIndex += 1;
		}
	}

	return squaredArray;
};

export default sortedSquaredArray;
