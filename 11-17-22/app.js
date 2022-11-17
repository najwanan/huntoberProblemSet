/*Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1 */

//input is array of strings
//return the same array, but change it so that each string length is as long as the average length of all the strings 

//calc average length of strings, use Math.round to round up 
//reduce method to count the length of each element in array, sum the total and divide by length of the array

//store the average in a variable
//iterate through the array and check each element for length 

function getLength(arr) {

    let sumArr = 0

    for (let i = 0; i <= arr.length; i++){
        sumArr +=arr[i].length
    }
    let average = sumArr/arr.length
    console.log(sumArr)
}