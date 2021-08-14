// interface Seen {
// 	[key: number]: boolean;
// }

// O(n) Time
// O(n) Space
// const firstDuplicateValue = (array: number[]): number => {
// 	const seen: Seen = {};

// 	for (let i = 0; i < array.length; i++) {
// 		const value = array[i] as number;

// 		if (seen[value]) {
// 			return value;
// 		} else {
// 			seen[value] = true;
// 		}
// 	}

// 	return -1;
// };

// O(n) Time
// O(1) Space

// DEETS
// 1 -> n inclusisve
//
//   0   1   2   3   4   5   6
// [-2, -1,  5,  2, -3,  3,  4];
//
//
const firstDuplicateValue = (array: number[]): number => {
	for (let i = 0; i < array.length; i++) {
		const value = Math.abs(array[i] as number);
		const indexToCheck = value - 1;
		const valueToCheck = array[indexToCheck] as number;
		const checkedValyeIsNegative = valueToCheck < 0;

		if (checkedValyeIsNegative) {
			return value;
		} else {
			array[value - 1] *= -1;
		}
	}

	return -1;
};

export default firstDuplicateValue;
