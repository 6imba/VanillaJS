// To demonstrate the use of promises, we will use the callback

// // Waiting for a Timeout
// //1. Example Using Callback
// setTimeout(() => console.log("I am callback output!"), 2000);

// Waiting for a Timeout
//1. Example Using Promise



// // 1
// let myPromise = new Promise(function (myResolve, myReject) {
//   setTimeout(() => myResolve("I am callback output!!"), 3000);
// });
// myPromise.then(function (value) {
//   console.log(value);
// });
// // function callBack(value){
// //   console.log(value);
// // }
// here act as callback that wait untill promise is fulfill.



// 2
let myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(() => myResolve("I am callback output!!"), 3000);
});
myPromise.then(higher_order_function);

function higher_order_function(value){
  console.log(value);
}

// Promise with then&catch is used as substitute to callback in asynchronous.