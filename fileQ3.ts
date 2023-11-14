// Assignment-01 < Q-3 >

// to store a word in a variable
let theWord:string = "sHUja";

// lowercase
let lowercaseWord:string = theWord.toLowerCase();

// uppercase
let uppercaseWord:string = theWord.toUpperCase();

// title case
let titleCaseWord:string = theWord.charAt(0).toUpperCase() + theWord.slice(1).toLowerCase();

// the output
console.log(`Original Word: ${theWord}`);
console.log(`Lowercase Word: ${lowercaseWord}`);
console.log(`Uppercase Word: ${uppercaseWord}`);
console.log(`Title Case Word: ${titleCaseWord}`);

