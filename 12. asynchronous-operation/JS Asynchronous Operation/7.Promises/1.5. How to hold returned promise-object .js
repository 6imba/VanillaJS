// #. Ways to hold returned promise-object:
//     1. In Variable -> hold return promise object in variable.(in case, no arg needed to be passed)
//         - const PromiseObject = new Promise(resolve, reject){}
//         - PromiseObject
                // .then()
                // .catch();
//     2. In Function -> hold return promise object in Function.(in case, arg needed to be passed)
//         - function myFun(num1, num2) {
//             return new Promise((resolve, reject) =>{});
//           }
//           myFun(70, 30)
                // .then()
                // .catch();

// // 1. In Variable -> hold return promise object in variable.(in case, no arg needed to be passed)
// const promiseObj = new Promise((resolve, reject) => true ? resolve(): reject());
// promiseObj
//     .then(() => console.log("Promise Resolved action!"))
//     .catch((err) => console.log("Promise Rejected action!"));

// // 2. In Function -> hold return promise object in Function.(in case, arg needed to be passed)
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) => (num1 + num2 > 50) ? resolve(): reject());
// }
// myFun(70, 30)
//     .then(() => console.log("Number Is Greater then 50. Promise Resolved action!"))
//     .catch(() => console.log("Number is less then 50. Promise Rejected action!"));