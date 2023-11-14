// Assignment-01 < Q-6 >

let personNameWithWhitespace: string = "\t   \nShuja Uddin\t\n   ";

// name with whitespace
console.log("Original Name with Whitespace:");
console.log(`"${personNameWithWhitespace}"`);

// to strip whitespace from the name
let strippedName: string = personNameWithWhitespace.trim();

// the stripped name
console.log("\nName after Stripping Whitespace:");
console.log(`"${strippedName}"`);
