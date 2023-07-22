// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise
// async is used to make a function asynchronous.



// // 1
// function printa(){
//     return "Hi";
// }
// let z = printa();
// console.log(z)



// // 2
// async function printa(){
//     console.log("Producing code!")
// }
// let z = printa();
// console.log(z)
// // async is used to make a function asynchronous & WKT asynchronous function always returns promise objet.


// // 2
// async function printa(){
//     console.log("Producing code!")
//     return 1;
// }
// let z = printa();
// console.log(z)
// // async is used to make a function asynchronous & WKT asynchronous function always returns promise objet.


// // 3
// async function printa(){
//     console.log("Producing code!")
//     return "Value";
// }
// let z = printa();
// console.log(z)



// // 4
// async function printa(){
//     console.log('2')
//     console.log("Producing code!")
//     return "Value";
// }
// console.log('1')
// let z = printa();
// console.log('3')
// console.log(z)
// console.log('4')





// // Extra:
// async function printa(){
//     return "Hi";
// }
// let z = printa();
// console.log(z)
// console.log(z.state)
// console.log(z.result)
// console.log(z.xyz)
// console.log(z.apple)
// // You cannot access the Promise properties state and result.