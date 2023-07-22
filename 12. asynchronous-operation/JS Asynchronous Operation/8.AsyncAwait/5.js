// - simply, async keyword before any function makes that function return promise_object.
// - whereas, await keyword before any function makes that function wait for a Promise_object.

// // # Syntax:
//     async function myFunction() {
//         return "Hello";
//         await apple();
//     }

// An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
// Async functions may also be defined as expressions.

// // 1:
// function myFunction() {
//     return Promise.resolve("Hello");
//   }
// console.log(myFunction())
// myFunction().then((res)=>console.log(res))

// // 2:
// function myFunction() {
//     return new Promise((resolve, reject) => resolve("Hello"));
//   }
// console.log(myFunction())
// myFunction().then((res)=>console.log(res))

// // 3:
// async function myFunction() {
//     return "Hello";
//   }
// console.log(myFunction())
// myFunction().then((res)=>console.log(res))

// // 4:
// async function myFunction() {
//     return "Hello";
//   }
// async function final(){
//   const data = await myFunction
//   return data;
// }
// const final_data = final()
// console.log(final_data)

// // 5:
// async function myFunction() {
//     return "Hello";
//   }
// async function final(){
//   const data = await myFunction()
//   return data;
// }
// const final_data = final()
// console.log(final_data)

// 6:
async function myFunction() {
    return "Hello";
  }
async function final(){
  const data = await myFunction()
  console.log(data)
}
final()