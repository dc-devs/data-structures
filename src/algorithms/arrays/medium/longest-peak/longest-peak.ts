// Longest Peak
//

const longestPeak = (array: number[]): number => {
	let longestPeak = 0;

	for (let i = 1; i < array.length - 1; i++) {
		let prevValue = array[i - 1] as number;
		const currentValue = array[i] as number;
		let nextValue = array[i + 1] as number;

		const isPeak = prevValue < currentValue && currentValue > nextValue;

		if (isPeak) {
			console.log('--- PEAK ---');
			console.log(currentValue);

			console.log('--- Decreased Values ---');
			let decreaseIndex = 1;
			let decreaseCount = 0;
			let currentDecreaseValue = currentValue;

			while (
				prevValue < currentDecreaseValue &&
				prevValue !== currentDecreaseValue
			) {
				decreaseIndex += 1;
				decreaseCount += 1;

				console.log(prevValue);
				currentDecreaseValue = prevValue;
				prevValue = array[i - decreaseIndex] as number;
			}

			console.log('--- Increased Values ---');
			console.log(currentValue > nextValue, currentValue, nextValue);
			let increaseIndex = 1;
			let increaseCount = 0;
			let currentIncreaseValue = currentValue;

			while (
				currentIncreaseValue > nextValue &&
				currentIncreaseValue !== nextValue
			) {
				increaseIndex += 1;
				increaseCount += 1;

				console.log(nextValue);
				currentIncreaseValue = nextValue;
				nextValue = array[i + increaseIndex] as number;
				console.log(nextValue);
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
