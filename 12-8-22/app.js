// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 


function findMaxChar(chars) {
    const map = {}
    let count = 0

    for (const char of chars) {
         map[char] = true
 }

    for (const char of chars) {
        if (map[char]) {
            count++
        } 
    }
    console.log(map)
}

findMaxChar("Hello World!")