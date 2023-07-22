// // // 2.1. In Function -> hold return promise object in Function.(in case, arg needed to be passed)
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) => (num1 + num2 > 50) ? resolve(): reject());
// }
// myFun(70, 30)
//     .then(() => console.log("Number Is Greater then 50. Promise Resolved action!"))
//     .catch(() => console.log("Number is less then 50. Promise Rejected action!"));



// // 2.2. In Function -> hold return promise object in Function.(in case, arg needed to be passed)
// function myFun(num1, num2) {
//     return new Promise((resolve, reject) => (num1 + num2 > 50) ? resolve(): reject());
//   }
//   myFun(70, 30).then(() => console.log("Number Is Greater then 50. Promise Resolved action!"))
//   myFun(70, 30).catch(() => console.log("Number is less then 50. Promise Rejected action!"));


// // 2.3. Not way:
// function myFun(num1, num2) {
//     return new Promise((resolve, reject) => (num1 + num2 > 50) ? resolve(): reject());
//   }
// const promiseObj = myFun(10, 30); //myFun returns promise returned by Promise object.
// console.log(promiseObj)
// promiseObj
//     .catch((err) => console.log("Number is less then 50. Promise Rejected action!"))
//     .then(() => console.log("Number Is Greater then 50. Promise Resolved action!"));



// // way:
// function myFun(num1, num2) {
//     return new Promise((resolve, reject) => (num1 + num2 > 50) ? resolve(): reject());
//   }
// const promiseObj = myFun(10, 30); //myFun returns promise returned by Promise object.
// promiseObj
//     .then(() => console.log("Number Is Greater then 50. Promise Resolved action!"))
//     .catch((err) => console.log("Number is less then 50. Promise Rejected action!"));



// // Not thw way:
// function myFun(num1, num2) {
//     return new Promise((resolve, reject) => (num1 + num2 > 50) ? resolve(): reject());
//   }
// const promiseObj = myFun(10, 30); //myFun returns promise returned by Promise object.
// promiseObj.then(() => console.log("Number Is Greater then 50. Promise Resolved action!"));
// promiseObj.catch(() => console.log("Number is less then 50. Promise Rejected action!"));

// // way:
// function myFun(num1, num2) {
//     return new Promise((resolve, reject) => (num1 + num2 > 50) ? resolve(): reject());
//   }
// const promiseObj = myFun(10, 30); //myFun returns promise returned by Promise object.
// promiseObj
//     .then(() => console.log("Number Is Greater then 50. Promise Resolved action!"))
//     .catch(() => console.log("Number is less then 50. Promise Rejected action!"));


// // 3
// function myFun(num1, num2) {
//     return new Promise((resolve, reject) => num1 + num2 > 50 ? resolve() : reject());
//   }
// myFun(70, 30)
//     .then(
//       () => console.log("Number Is Greater then 50 "),
//       () => console.log("Number Is Less then 50 "),
//     );


// // 3
// function myFun(num1, num2) {
//     return new Promise((resolve, reject) => num1 + num2 > 50 ? resolve('value value value') : reject('errObj errObj errObj'));
//   }
// myFun(10, 30)
//   .then(
//     (value) => console.log("Number Is Greater then 50::: ", value),
//     (error) => console.log("Number Is Less then 50::: ", error),
//   );

// // 3
// function myFun(num1, num2) {
//     return new Promise((resolve, reject) => num1 + num2 > 50 ? resolve('value value value') : reject('errObj errObj errObj'));
//   }
// myFun(70, 30)
//   .then(
//     (value) => console.log("Number Is Greater then 50::: ", value),
//     (error) => console.log("Number Is Less then 50::: ", error),
//   );



// // 4
// function myFun(num1, num2) {
//     return new Promise((resolve, reject) => num1 + num2 > 50 ? resolve() : reject());
//   }
// myFun(70, 30)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .then(() => console.log("Number is less then 50"));

// // 5
// function myFun(num1, num2) {
//     return new Promise((resolve, reject) => num1 + num2 > 50 ? resolve() : reject());
//   }
// myFun(70, 30)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log("Number is less then 50"));



// // 1. In Variable -> hold return promise object in variable.(in case, no arg needed to be passed)
// const promiseObj = new Promise((resolve, reject) => true ? resolve(): reject());
// const x = promiseObj.then(() => console.log("Promise Resolved action!"));
// console.log(x)
// setInterval(()=>console.log(x), 1000)
// // you see not only Promise() reurns promise object but also .then() & .catch().




// // Promise(resolve, reject)
// // Promise.then();
// // Promise.catch();




// # Way to handle consuimg code:
    // - promiseObject()
    //     .then()
    //     .catch();

    // - promiseObject().then()
    // - promiseObject().catch();

    // - promiseObject().then(
    //     - callbackDefination_1
    //     - callbackDefination_2
    // )

    // - promiseObject()
    //     .then()
    //     .then()

// // # Confuse:
//     // 1
//         .then(callback)
//         .then(callback)

//     // 2
//         .then(
//             callback,
//             callback
//             )

//     // 3
//         .then(callback)
//         .catch(callback)