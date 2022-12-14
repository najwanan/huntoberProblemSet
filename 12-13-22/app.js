
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


//create the object with each element in the arr and a count of how many times it appears
//once the object is created 

function majorElement(arr) {

    const eleArr = {}
    let counter = 0; 
    let major = Math.ceil(arr.length/2)

    for (let i = 0; i < arr.length; i++){
        const number = arr[i]
      
        eleArr[number] = eleArr[number]+1||1
        
    }

    for (const n in eleArr) {
        if (eleArr[n] > counter) {
            counter = eleArr[n]
            major = n
        }
    }
     console.log(eleArr, major, counter);
    return major;

 
    
}


majorElement([2, 2, 1, 1, 1, 2, 2]);