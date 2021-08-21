// type Quadruplet = [number, number, number, number];
// const target = 16;
// const array = [7, 6, 4, -1, 1, 2];
//
// Average - O(n^2) Time
// Worst - O(n^3) Time
// When looping through pairs in diffsPairs, if alot of items here could be n^3
// O(n^2) Space
//
// 1. We will loop through all items in array
// - given the current logic below (tracking items before and after),
//   can skip first and last items since pointless
//   (1st Number: Nothing looped through before so no sums (diffs from target) in hash table
//   (last Number: Nothing to loop through after, to sum up and check if sums exist in has table)
//
// 2. Then loop through all numbers after current item
// - If diff of targetSum - pairSum (of current pairs) exists in diffsPairs hash table
//   loop through pairs in hash table, and combine with current pairs and add to quadruplets
//
// 3. Then loop through all numbers before current item
// - If pairSum is not in diffsPairs hash table, add it as new key: current pairs
//   else add the current pairs to existing sum prop in hash table

// Patterns:
// Using diffsPairs to keep track of info you need to make a future decision,
// in terms of sums arrays, usually store the "diff" of current item / current pairs
// to know if you'll see that number in the future
// or when in the futre can confirm if you've seen a number that sums up to target from before
//
//                      |
// const numArray = [7, 6, 4, -1, 1, 2]; targetSum = 16
//

interface DiffsPairs {
	[key: number]: number[][];
}

// const fourNumberSum = (array: number[], targetSum: number): number[][] => {
// 	const diffsPairs = {} as DiffsPairs;
// 	const quadruplets: number[][] = [];

// 	// Loop through all items (skip first and last)
// 	for (let i = 1; i < array.length - 1; i++) {
// 		// Loop through items after currrent item
// 		for (let j = i + 1; j < array.length; j++) {
// 			const currenItem = array[i] as number;
// 			const testItem = array[j] as number;
// 			const pairSum = currenItem + testItem;
// 			const diff = targetSum - pairSum;

// 			//
// 			if (diffsPairs[diff]) {
// 				const pairs = diffsPairs[diff];

// 				if (pairs) {
// 					for (const pair of pairs) {
// 						quadruplets.push([...pair, currenItem, testItem]);
// 					}
// 				}
// 			}
// 		}

// 		for (let k = 0; k < i; k++) {
// 			const currentItem = array[i] as number;
// 			const testItem = array[k] as number;
// 			const pairSum = currentItem + testItem;

// 			// If diff does not exist,
// 			// add new diff: pair
// 			if (!diffsPairs[pairSum]) {
// 				diffsPairs[pairSum] = [[testItem, currentItem]];

// 				// If diff does exist, add pair
// 			} else {
// 				diffsPairs[pairSum]?.push([testItem, currentItem]);
// 			}
// 		}
// 	}

// 	return quadruplets;
// };

const fourNumberSum = (array: number[], targetSum: number): number[][] => {
	const diffsPairs = {} as DiffsPairs;
	const quadruplets: number[][] = [];

	// Loop through all items (skip first and last)
	for (let i = 1; i < array.length - 1; i++) {
		// Loop through all items after current item
		// to see if the diff of targetSum - pair sum exits in hash table
		for (let j = i + 1; j < array.length; j++) {
			const currentItem = array[i] as number;
			const testItem = array[j] as number;
			const pairSum = currentItem + testItem;
			const diff = targetSum - pairSum;

			if (diffsPairs[diff]) {
				const pairs = diffsPairs[diff];

				pairs?.forEach((pair) => {
					quadruplets.push([...pair, currentItem, testItem]);
				});
			}
		}
		// Then loop through all items up to current item
		// And add their sums to the hash table
		// (these will be possible diffs for targetSum - pairSum in future iterations)
		for (let k = 0; k < i; k++) {
			const testItem = array[k] as number;
			const currentItem = array[i] as number;
			const pairSum = testItem + currentItem;

			if (!diffsPairs[pairSum]) {
				diffsPairs[pairSum] = [[testItem, currentItem]];
			} else {
				diffsPairs[pairSum]?.push([testItem, currentItem]);
			}
		}
	}

	return quadruplets;
};

export default fourNumberSum;
