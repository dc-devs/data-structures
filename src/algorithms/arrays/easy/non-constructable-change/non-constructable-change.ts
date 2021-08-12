// To Ask:
// - Is Array Sorted
// - Can there be duplicates?
// - Can you add up the same number multiple times?
//
// coins = [5, 7, 1, 1, 2, 3, 22];
//
//
// Actual time:
// O(nlogn) Sort
// O(nlogn + n) iterate through array "+ n"
// But you drop the '+ n' since less than nlogn, and you get the below
//
// O(nlogn) Time
//
// Ask if we can sort in place, otherwise it affects space
// O(1) Space
const nonConstructibleChange = (coins: number[]): number => {
	// Sort In Place
	coins.sort((a, b) => {
		return a - b;
	});

	let currentChangeCreated = 0;

	for (const coin of coins) {
		if (coin > currentChangeCreated + 1) {
			return currentChangeCreated + 1;
		}

		currentChangeCreated += coin;
	}

	return currentChangeCreated + 1;
};

export default nonConstructibleChange;
