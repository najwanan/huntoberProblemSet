
/*You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers.

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.*/

//input is an array of three numbers
//return an integer that represents the index of the number that has the middle value in the array 

//for example [0, 30, 15] would return 2 because 15 is the middle number and the index of 15 is 2 

//first thing we can copy the array and sort it, once we pull the middle index which will always be one, since we have a set of three numbers
//something to think about is writing the function so it finds the middle value regardless of the elemenst in the array
//once we get the value of the middle index,store it as a variable we look for it in the orginal array and return the index, 
//methods that we can use indexOf()
//copy array 
//sort array
//store copyArr[1] as variable middleNum
//find indexOf middleNum is orginal array 


function findMidNum(arr) {
 
    let newArr = arr.sort(function (a, b) {
      return a - b;
    });
    let middleNum = newArr[1]

    console.log(arr, newArr, middleNum)
    console.log(arr.indexOf(middleNum));
    return arr.indexOf(middleNum)
    
}


findMidNum([5, 14, 10]);