/*Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.*/

function fizBuzz(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
    if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    }
  }
}
