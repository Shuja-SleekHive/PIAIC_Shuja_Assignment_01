// Assignment-01 < Q-3 >
// to store a word in a variable
var theWord = "sHUja";
// lowercase
var lowercaseWord = theWord.toLowerCase();
// uppercase
var uppercaseWord = theWord.toUpperCase();
// title case
var titleCaseWord = theWord.charAt(0).toUpperCase() + theWord.slice(1).toLowerCase();
// the output
console.log("Original Word: ".concat(theWord));
console.log("Lowercase Word: ".concat(lowercaseWord));
console.log("Uppercase Word: ".concat(uppercaseWord));
console.log("Title Case Word: ".concat(titleCaseWord));
