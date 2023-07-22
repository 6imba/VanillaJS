// #Object Destructuring:
// #Array Destructuring:

const person = {
    firstName: 'Amir',
    lastName: 'Shrestha',
    city: 'Kathmandu',
    age: 22
};

var {firstName, lastName} = person; //js object destructuring
console.log(`${firstName} ${lastName}`);


var {firstName: fName, lastName: lName} = person; //reassigning the property name of object in js object destructuring.
console.log(`${fName} ${lName}`);

// Therefore, The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.




// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // expected output: 10

// console.log(b);
// // expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// console.log(rest);
// // expected output: Array [30,40,50]

// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20

// // Stage 4(finished) proposal
// ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c: 30, d: 40}


// let a = 1;
// let b = 3;
// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1



// const arr = [1,2,3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1,3,2]


// Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment