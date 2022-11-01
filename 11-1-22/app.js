/*Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.*/


//input is going to have only alphabet characters and spaces 
//lower or upper case 

//objective is to return a string that converts all the lowercase to uppercase and viceversa
//additionally the words must be reversed in the string //define word as anything seperated by a space 

//reverse the words, split the string into an array and starting from the last element, rejoin the string in reverse, decrementing the length
//using either map array method or a loop
//regex to determine case sensitivity 
//each letter has to be evaluated for lower or uppercase using regex and then converted to the opposite case if(i.match(/[a-z])/i) then i.toUpperCase


function transformStr(str) {

    let wordArr = str.split("")
    let revArr = []

    for (let i = 0; i <= str.length; i++){
        if (str.charAt(i).match(/[a-z]/i)) {
            console.log(str.charAt(i).toUpperCase(), "this was lower case")

        } else if (/[A-Z]/.test(str.charAt(i))) {
          console.log(str.charAt(i).toLowerCase(), "this was upper case");
        } 
        
   
    }


    for (let i = wordArr.length-1; i >=0; i--){
         revArr.push(wordArr[i])
    }

  
    
}

transformStr("Example Input")