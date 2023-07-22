// // 1.Promise Fullfill
// const promiseObj = new Promise((resolve, reject) => {
//     if (true) {
//         console.log(
//             "Return promise-object that has Fullfill state with data|value!"
//         );
//         resolve(); // Return promise-object that has Fullfill state with data|value!
//     } else {
//         console.log(
//             "Return promise-object that has Rejected state with error-object!"
//         );
//         reject(); // Return promise-object that has Rejected state with error-object!
//     }
// });
// promiseObj.then(() => console.log("Promise Resolved action!"))
// promiseObj.catch((err) => console.log("Promise Rejected action!"));

// ------------------------------------------------------------------------------------------------------------------

// 2.Promise Rejected
const promiseObj = new Promise((resolve, reject) => {
    if (false) {
        console.log(
            "Return promise-object that has Fullfill state with data|value!"
        );
        resolve(); // Return promise-object that has Fullfill state with data|value!
    } else {
        console.log(
            "Return promise-object that has Rejected state with error-object!"
        );
        reject(); // Return promise-object that has Rejected state with error-object!
    }
});

// // Not the way1:
// promiseObj.then(() => console.log("Promise Resolved action!"))
// promiseObj.catch(() => console.log("Promise Rejected action!"));

// // Not the way2:
// promiseObj.then(() => console.log("Promise Resolved action!"));
// .catch(() => console.log("Promise Rejected action!"));

// // Way1:
// promiseObj.then(() => console.log("Promise Resolved action!"))
// promiseObj.catch(() => console.log("Promise Rejected action!"));

// // Way2:
// promiseObj.then(() => console.log("Promise Resolved action!"))
// .catch(() => console.log("Promise Rejected action!"));

// Way3:
promiseObj
    .then(() => console.log("Promise Resolved action!"))
    .catch(() => console.log("Promise Rejected action!"));

// ------------------------------------------------------------------------------------------------------------------
