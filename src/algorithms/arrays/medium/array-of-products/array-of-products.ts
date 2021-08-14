// Array of Products
// [5, 1, 4, 2]
//
// [8, 40, 10, 20]
//
//
//
// BRUTE FORCE
// O(n2) Time | O(1) Space
// const arrayOfProducts = (array: number[]): number[] => {
// 	const outputArray: number[] = [];

// 	array.forEach((firstValue) => {
// 		let product = 1;

// 		array.forEach((secondValue) => {
// 			if (firstValue !== secondValue) {
// 				console.log(secondValue);
// 				product *= secondValue;
// 			}
// 		});

// 		outputArray.push(product);
// 	});

// 	return outputArray;
// };

// BETTER
// [5, 1, 4, 2]
//
// LEFT  [1, 5, 5, 20]
// RIGHT [8, 8, 2, 1]
// OUT   [8, 40, 10, 20]
//
// O(n) Time | O(n) Space
// const arrayOfProducts = (array: number[]): number[] => {
// 	const output = new Array(array.length).fill(1);
// 	const leftProducts = new Array(array.length).fill(1);
// 	const rightProducts = new Array(array.length).fill(1);

// 	// [5, 1, 4, 2]
// 	// [1, 5, 5, 20]
// 	for (let i = 0; i < array.length; i++) {
// 		const value = array[i] as number;
// 		const leftValue = leftProducts[i] as number;
// 		const product = leftValue * value;

// 		if (leftProducts[i + 1]) {
// 			leftProducts[i + 1] = product;
// 		}
// 	}

// 	// [5, 1, 4, 2]
// 	// [10, 2, 2, 1]
// 	for (let i = array.length - 1; i >= 0; i--) {
// 		const value = array[i] as number;
// 		const rightValue = rightProducts[i] as number;
// 		const product = rightValue * value;

// 		if (rightProducts[i - 1]) {
// 			rightProducts[i - 1] = product;
// 		}
// 	}

// 	for (let i = 0; i < array.length; i++) {
// 		const leftVal = leftProducts[i];
// 		const rightVal = rightProducts[i];

// 		output[i] = leftVal * rightVal;
// 	}

// 	return output;
// };

// BEST
// O(n) Time | O(n) Space
const arrayOfProducts = (array: number[]): number[] => {
	const output = new Array(array.length).fill(1);
	const leftProducts = new Array(array.length).fill(1);
	const rightProducts = new Array(array.length).fill(1);

	// [5, 1, 4, 2]
	//
	// [1, 5, 5, 20]
	for (let i = 0; i < array.length; i++) {
		const value = array[i] as number;
		const leftValue = leftProducts[i] as number;
		const product = leftValue * value;

		if (leftProducts[i + 1]) {
			leftProducts[i + 1] = product;
		}
	}

	// [5, 1, 4, 2]
	// [10, 2, 2, 1]
	for (let i = array.length - 1; i >= 0; i--) {
		const value = array[i] as number;
		const rightValue = rightProducts[i] as number;
		const product = rightValue * value;

		if (rightProducts[i - 1]) {
			rightProducts[i - 1] = product;
		}

		output[i] = leftProducts[i] * rightProducts[i];
	}

	// for (let i = 0; i < array.length; i++) {
	// 	const leftVal = leftProducts[i];
	// 	const rightVal = rightProducts[i];

	// 	output[i] = leftVal * rightVal;
	// }

	return output;
};

export default arrayOfProducts;
