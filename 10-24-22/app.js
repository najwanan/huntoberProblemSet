/*Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)*/

//parameters an array of arrays
//return an integer that represents the number of unique subarrays that can be formed with the given arguments

//each subarray has to include an element from each of the given subarrays

//brute force solution - each unique subarray is comprised of combinations
//need to know the length of each subarray
// need a place to store all of the combinations created from the subarray [map object]
