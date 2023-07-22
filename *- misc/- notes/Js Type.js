function add(){
    return true
}

console.log(add) // [Function: add]
console.log(String) // [Function: String]
console.log(Number) // [Function: Number]
console.log(Boolean) // [Function: Boolean]

console.log(typeof(Boolean))


// Create a string
const string1 = "A string primitive"; // Strings can be created as primitives, from string literals.
const string2 = 'Also a string primitive'; // Strings can be created as primitives, from string literals.
const string3 = `Yet another string primitive`; // Strings can be created as primitives, from string literals.
const string4 = new String("A String object"); //  // Strings can be created as objects, using the String() constructor.
console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

console.log(typeof(string3))
console.log(typeof(string4))


// is every thing in js is function?