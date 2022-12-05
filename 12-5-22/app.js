// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function countChar(str) {
    
    let strArr = str.split("")
    const letterCount = new Map()

    for (let i = 0; i <= str.length; i++){
        if (letterCount.has(strArr[i])) {
            letterCount.set(strArr[i], letterCount.get(strArr[i]) + 1);
            
        } else {
            letterCount.set(strArr[i], 1);
        }
    }
    console.log(letterCount)
}

countChar("holliday")