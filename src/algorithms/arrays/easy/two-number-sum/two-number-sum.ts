interface SeenNumbers {
	[key:number]: boolean;
}

// const array = [3, 5, -4, 8, 11, 1, -1, 6];
// const target = 10;

// seenNumbers = {
//  3: true
//  5: true
//  -4: true
//  8: true
//  11: true
//  1: true
//  4: true
// }

// sums: [-1,11]

// Questions to ask:
// 1. Can you add up two of the same number? No
// 2. At most how many pairs could their be? 1

// O(n) Time | Where n is the number of items in the array
// O(n) Space | Where n is the number of items in the memory object
const twoNumberSum = (numbers: number[], target: number): number[] => {
	const sums: number[] = [];
	const seenNumbers = {} as SeenNumbers;

	numbers.forEach((number) => {
		const difference = target - number;

		if (seenNumbers[difference]) {
			sums.push(number);
			sums.push(difference);
		}

		seenNumbers[number] = true;
	});

	return sums;
};

export default twoNumberSum;
