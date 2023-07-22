// // 1.1 Promise Fullfill State:
// const promiseObj = new Promise((resolve, reject) => {
//     if (true) {
//         resolve(); // Return promise-object that has Fullfill state with data|value!
//     } else {
//         reject(); // Return promise-object that has Rejected state with error-object!
//     }
// });
// promiseObj.then(() => console.log("Promise Resolved action!"))
// promiseObj.catch((err) => console.log("Promise Rejected action!"));



// // 1.2 Promise Fullfill State & Value:
// const promiseObj = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("promise Fullfill state value."); // Return promise-object that has Fullfill state with data|value!
//     } else {
//         reject(); // Return promise-object that has Rejected state with error-object!
//     }
// });
// promiseObj.then((value) => console.log("Promise Resolved action! ", value))
// promiseObj.catch(() => console.log("Promise Rejected action!"));



// // 2.1 Promise Reject State:
// const promiseObj = new Promise((resolve, reject) => {
//     if (false) {
//         resolve(); // Return promise-object that has Fullfill state with data|value!
//     } else {
//         reject(); // Return promise-object that has Rejected state with error-object!
//     }
// });
// promiseObj
//     .then(() => console.log("Promise Resolved action!"))
//     .catch((err) => console.log("Promise Rejected action!"));



// // 2.2 Promise Reject State & ErrorObject:
// const promiseObj = new Promise((resolve, reject) => {
//     if (false) {
//         resolve(); // Return promise-object that has Fullfill state with data|value!
//     } else {
//         reject("promise Rejected state errorObject."); // Return promise-object that has Rejected state with error-object!
//     }
// });
// promiseObj
//     .then(() => console.log("Promise Resolved action!"))
//     .catch((error) => console.log("Promise Rejected action! ", error));



// 3.1 Promise State & Result:
const promiseObj = new Promise((resolve, reject) => {
    if (false) {
        resolve("Result: DataValue"); // Return promise-object that has Fullfill state with data|value!
    } else {
        reject("Result: ErrorObject"); // Return promise-object that has Rejected state with error-object!
    }
});
promiseObj
    .then((value) => console.log("Promise Resolved action: ", value))
    .catch((error) => console.log("Promise Rejected action: ", error));

