// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

function numTwo(arr) {
    const numMap = {}
    let count = 0;

    for (let i = 0; i <= arr.length; i++) {
        let num = arr[i]
        if (numMap[num]) {
            console.log(numMap[num])
            return true

        } else {
            console.log(numMap[num]);
            numMap[num] =true
        }
    }
    console.log(numMap)
    return false
     
}


numTwo([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);