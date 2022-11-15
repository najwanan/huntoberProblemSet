/*You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])*/

//parameters is an array compromised of integers
//assuming there will always be an input of an array with at least one element
//no negatives, no letters, no special characters 
//may be all even numbers or all odd numbers 

//objective to return an array with all the odd numbers sorted in ascending order and all the even numbers remaining in original place 
//[9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
//odd numbers = [9, 7, 5, 3, 1]
//even numbers = [8, 1], [6, 3], [4, 5], [2, 7] ,[0, 9]
//[1, 3, 5, 7, 9 ]
//[] when populating the new array, check the even number array, to see if that index should be occupied by an even number, if not fill it in with an odd number 
//in example for index 0, there is no even number assigned to that, for index 1, 8 is assigned, push 8 into the array 
//[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//evaluate for odd and even numbers 
//push even numbers into object with value pair [even num, index]
//odd numbers into oddNum arr, sort by ascending 
// loop through odd num arr and insert evenNum at correct indices?

//method two, pull out all odd numbers into seperate array, use map to replace each odd int with int from sorted oddNum 


function sortOdd(arr) {
    let oddArr =[]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0) {
            oddArr.push(arr[i])
        }
    }
    console.log(oddArr.sort(function(a,b){return a-b}))
    //sorted oddarr

    arr.map((x, i)=>x%2!==0?:null) 
}

sortOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])