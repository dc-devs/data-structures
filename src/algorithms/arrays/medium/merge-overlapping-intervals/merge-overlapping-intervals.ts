// Merge Overlapping Intervals
//
// O(nlog(n)) Time | Sorting Quick/Merge
// O(n) Space
//
// array = [ [ 1, 10 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 9 ] ]
const mergeOverlappingIntervals = (array: number[][]): number[][] => {
	const sortedIntervals = array.sort((a: number[], b: number[]) => {
		return (a[0] as number) - (b[0] as number);
	});

	const mergedIntervals: number[][] = [];
	let currentInterval = sortedIntervals[0] as number[];

	mergedIntervals.push(currentInterval);

	for (const nextInterval of sortedIntervals) {
		const [_, currentIntervalEnd] = currentInterval;
		const [nextIntervalStart, nextIntervalEnd] = nextInterval;

		if ((currentIntervalEnd as number) >= (nextIntervalStart as number)) {
			currentInterval[1] = Math.max(
				currentIntervalEnd as number,
				nextIntervalEnd as number
			);
		} else {
			currentInterval = nextInterval;
			mergedIntervals.push(currentInterval);
		}
	}

	return mergedIntervals;
};

export default mergeOverlappingIntervals;
