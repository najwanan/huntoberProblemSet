/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

methods to know, map, reduce and number
*/

//parameters include strings and numbers, individually and within arrays 
//return a number that represents the summation of all the numeric values provided in the parameters 
//all strings need to be converted to numbers via the number method
//either use reduce method or use a loop to get the sum and return that as final answer

function sumMix(num) {
    const numArr = num.map((x)=> Number(x))
    console.log(numArr)
    const answer = numArr.reduce((prevVal, currVal) => prevVal + currVal)
    console.log(answer)
    
}

sumMix([9, 3, '7', '3'])