/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)*/


//inputs or parameters: array of numbers representing grades

//return a number that represents the average of all the numbers in the array 
//use mathFloor to round down the nearest integer 

//average is calced by sum total of array values/array.length 
//brute force 
//1.declare a variable to hold the sum, intialize at zero, 
//2. iterate through the array, adding to sum cumulatively
//end of loop return divide the sum var/array.length 
//optimized method 
//reduce array method


function getAverage(grades) {
    const sumGrades = grades.reduce((prev, next) => prev + next, 0)
    console.log(Math.floor(sumGrades / grades.length));
    return Math.floor(sumGrades/grades.length)
}


getAverage([1, 2, 3, 4, 5])