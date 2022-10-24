
/*Make sure you understand these before taking a look at the question:
Filter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
Slice(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)


DON'T WORRY ABOUT COMPLEXITY - we are using this one to practice our array methods!

Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]*/

//given an array and a target integer number
//the array will be of positive and neg integers
//the number will represent the number of elements in the array to be returned
//return an array with x amount of even integers found in the array 

//immutable method that copies the array and creates a new one with only even integers
//map method
//use splice or another method to splice out the array with the correct length at x


function evenNum(arr, i) {
    const evenArr = arr.filter(x => x % 2 === 0)
    console.log(evenArr, i)
    evenArr.slice(evenArr.length-i, i)
    console.log(evenArr.slice(evenArr.length-i))
    console.log('this is a test')
}

evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

evenNum([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2);