'use strict'

function rangeOfNumbers(startNum, endNum) {
	if (startNum < 0) {
		return [];
	}	else if (startNum === endNum) {
		return [startNum];
	} else {
		let range = rangeOfNumbers(startNum, endNum - 1)
		range.push(endNum);
		return range;
	}
};


console.log(rangeOfNumbers(6,9));
console.log(rangeOfNumbers(1,5));
console.log(rangeOfNumbers(4,4));

//We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

//st <= end -> end
//