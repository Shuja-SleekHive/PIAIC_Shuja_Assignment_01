// Assignment-01 < Q-6 >
var personNameWithWhitespace = "\t   \nShuja Uddin\t\n   ";
// name with whitespace
console.log("Original Name with Whitespace:");
console.log("\"".concat(personNameWithWhitespace, "\""));
// to strip whitespace from the name
var strippedName = personNameWithWhitespace.trim();
// the stripped name
console.log("\nName after Stripping Whitespace:");
console.log("\"".concat(strippedName, "\""));
