/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" */

//string, capital and lowercase 
//case insensitive
//return string with equal characters with either a ( or )

//determine how many times a letter appears in a string
//once that is determined then you can replace those letters with a count > 0 with )
//convert evrything to upper or lowercase for simplicity 
//split the string into an array 
//initiliaze a counter
//need count of each letter 
function encodeDupes(str) {
    const newArr = str.toLowerCase().split('')
  
    console.log(
      newArr.map((l, i, a) => a.indexOf(l) === a.lastIndexOf(l) ? "(" : ")").join()
    )
  

}

encodeDupes('recede');