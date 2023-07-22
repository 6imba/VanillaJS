// Destructuring assignment:
    //- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// Destructuring Array using Destructuring assignment:
// let a, b, rest;
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a)
// console.log(b)
// console.log(rest)

// Destructuring Object using Destructuring assignment:
let a, b, rest;
({a, b, ...rest} = {a:1,b:2,c:3,d:4,e:5,f:6});
console.log(a)
console.log(b)
console.log(rest)