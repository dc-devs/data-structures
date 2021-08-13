// O(n) Time
// O(1) Space
//
// [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
// [1, 5, 10, 1100, 1100, 1101, 1102, 9001];
//
// [1, 1, 1, 2, 2, 2, 5, 10, 1100, 1100, 1101, 1102, 9001];
// [-1, -1, -1, -2, -2, -2, -5, -10, -1100, -1100, -1101, -1102, -9001];
//
// [1, 1, 1, 2, 2, 2, 5, 10, 1100, 1100, 1101, 1102, 9001];
//              |
// previousValue = 1
// value = 2
const isMonotonic = (array: number[]): boolean => {
	let isIncreasing = null;
	let isMonotonicArray = true;
	let previousValue = array[0] as number;

	if (array.length < 2) {
		return isMonotonicArray;
	}

	for (let i = 2; i < array.length; i++) {
		const currentValue = array[i] as number;

		// Setting if increasing or not
		if (isIncreasing === null) {
			if (currentValue > previousValue) {
				isIncreasing = true;
			} else if (currentValue < previousValue) {
				isIncreasing = false;
			}
		} else if (isIncreasing && currentValue < previousValue) {
			isMonotonicArray = false;
			return isMonotonicArray;
		} else if (!isIncreasing && currentValue > previousValue) {
			isMonotonicArray = false;
			return isMonotonicArray;
		}

		previousValue = currentValue;
	}

	return isMonotonicArray;
};

export default isMonotonic;
