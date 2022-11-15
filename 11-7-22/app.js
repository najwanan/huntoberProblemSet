/*An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')*/

//getting an array of numbers 
//someArr.indexOf(value) === -1 
//sort the numbers
//iterate through the numbers, as the index increases + 1 so should the value of the element
//

function findDeletedNum(arr) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });

    let answer
    for (let i = arr.length - 1; i >= 0; i--){
        arr[i]-arr[i-1]>1? answer=arr[i]-1:null
    }
 
    if (answer === null || answer === undefined) {
        console.log("no deletions")
    } else {
        console.log(answer)
    }
}

//return arr.filter(n=> mixArr.indexOf(n)===-1)
//if you sum both array sets and subtract you'll find the missing number 
findDeletedNum([3, 4, 1, 5]);
//sort [1, 3, 4, 5]
//if you subtract arr[i+1]-arr[i] and it's more than 1 then return that number as soon as you find it
//once you find the index of the missing num how to return the missing value? in this case you'd return arr[i]-1 or 3-1 = 2
/* if(arr.length===mixArr.length){
  return 0
}else{
    let arrSum = arr.reduce((a, c)=> a+c)
    let mixSum = mixArr.reduce((a, c)=> a+c, 0)
    return arrSum = mixSum

}*/



findDeletedNum([5, 7, 6, 9, 4, 8, 1, 2, 3]);