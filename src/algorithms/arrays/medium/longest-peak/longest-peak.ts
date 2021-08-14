// Longest Peak
//
// O(n) Time
// O(1) Space
//
const longestPeak = (array: number[]): number => {
	let longestPeak = 0;

	for (let i = 1; i < array.length - 1; i++) {
		const currentValue = array[i] as number;
		let prevValue = array[i - 1] as number;
		let nextValue = array[i + 1] as number;

		const isPeak = prevValue < currentValue && currentValue > nextValue;

		if (isPeak) {
			let decreaseIndex = 1;
			let decreaseCount = 0;
			let currentDecreaseValue = currentValue;

			while (prevValue < currentDecreaseValue) {
				decreaseIndex += 1;
				decreaseCount += 1;

				currentDecreaseValue = prevValue;
				prevValue = array[i - decreaseIndex] as number;
			}

			let increaseIndex = 1;
			let increaseCount = 0;
			let currentIncreaseValue = currentValue;

			while (currentIncreaseValue > nextValue) {
				increaseIndex += 1;
				increaseCount += 1;

				currentIncreaseValue = nextValue;
				nextValue = array[i + increaseIndex] as number;
			}

			const peakSize = 1 + decreaseCount + increaseCount;

			if (peakSize > longestPeak) {
				longestPeak = peakSize;
			}
		}
	}

	return longestPeak;
};

export default longestPeak;
