// # https://youtu.be/V2NeK5UT5Oc

// // 1.1 Promise resolved
// function myFun(num1, num2) {
//     return new Promise((resolve, reject) =>
//       {
//         // - Do Asynchronous operation
//           resolve(response_data)
//           reject(response_error)
//     );
//   }
//   myFun(70, 30)
//     .then((response_data) => {})
//     .catch((response_error) => {}));
//   // here to handle Asynchronous operation we use promise.
//   // So the asynchronos code and promise code is wrapped inside a function called myFun.
//   // therefore myFun is asynchronous.
//   // it will take time and return promise object.

// Promise is a constructor that takes executor fucntion as a parameter.
// where that executor function also takes two higher order function: resolve & reject.
// Code from line 2-9 is called promising code.
// Code from line 10-12 is called consuming code.

// .then() method of promise object takes upto two arguments: callback for success and callback for failure state of promise.
// .then(resolved_callback, rejected_callback).
// here both resolved_callback & rejected_callback has one argument as value, resolved_data for resolved_callback and error_object for rejected_callback
// .then() methods also returns promise_object.
// as .then() methods also returns promise_object, we can do then_method chaining,
// then_method chaining ==> producing code behave as a consuming code and vise versa.

// .catch() method deals with rejected promise only.


// // 1.1 Promise resolved
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) =>
//     {
//       if(num1 + num2 > 50){
//         resolve()
//       }
//       else{
//         reject()
//       }
//     }
//   );
// }s
// myFun(70, 30)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log("Number is less then 50"));
// // here myFun is asynchronous as it takes time and return promise.



// // 1.1 Promise resolved
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) =>
//     {
//       if(num1 + num2 > 50){
//         console.log("Resolved !")
//         resolve()
//       }
//       else{
//         console.log("Rejected !")
//         reject()
//       }
//     }
//   );
// }
// myFun(70, 30)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log("Number is less then 50"));
// // here myFun is asynchronous as it takes time and return promise.




// // 1.1 Promise resolved
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) =>
//     {
//       if(num1 + num2 > 50){
//         console.log("Resolved !")
//         resolve()
//       }
//       else{
//         console.log("Rejected !")
//         reject()
//       }
//     }
//   );
// }
// myFun(70, 30)



// // 1.2 Promise Rejected
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) =>
//     {
//       if(num1 + num2 > 50){
//         resolve()
//       }
//       else{
//         reject()
//       }
//     }
//   );
// }
// myFun(10, 30)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log("Number is less then 50"));



// // 1
// function myFun() {
//   return new Promise((resolve, reject) =>
//     {
//       if(2 > 1){
//         console.log("Resolved !")
//         resolve()
//       }
//       else{
//         console.log("Rejected !")
//         reject()
//       }
//     }
//   );
// }
// myFun()
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log("Number is less then 50"));


// // 1
// function myFun() {
//   return new Promise((resolve, reject) =>
//     {
//       if(2 > 1){
//         resolve()
//       }
//       else{
//         reject()
//       }
//     }
//   );
// }
// myFun()
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log("Number is less then 50"));



// // 1
// function myFun() {
//   return new Promise((resolve, reject) =>
//     {
//       if(1 > 2){
//         resolve()
//       }
//       else{
//         reject()
//       }
//     }
//   );
// }
// myFun()
//   .then(() => console.log("Task Resolved!"))
//   .catch((err) => console.log("Task Rejected!"));



// // 1
// function myFun() {
//   return new Promise((resolve, reject) =>
//     {
//       // Promise Producing Code: (May take some time)
//       if(1 > 2){
//         resolve()
//       }
//       else{
//         reject()
//       }
//     }
//   );
// }
// // Promise Consuming Code: (Must wait for a fulfilled Promise)
// myFun()
//   .then(() => console.log("Task Resolved!")) // execute if task successfully resolved
//   .catch((err) => console.log("Task Rejected!")); // execute if task is rejected/ error occur.



// // 2.1 Conditional (ternary) operator:
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) =>
//     num1 + num2 > 50 ? resolve() : reject()
//   );
// }
// myFun(70, 30)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log("Number is less then 50"));



// // 2.2
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) =>
//     num1 + num2 > 50 ? resolve() : reject()
//   );
// }
// myFun(10, 30)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log("Number is less then 50"));



// // 2.3
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) => resolve());
// }
// myFun(10, 30)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log("Number is less then 50"));



// // 2.4
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) => resolve());
// }
// myFun(10, 30)
//   .then(() => console.log("Resolved!!!"))
//   .catch((err) => console.log("Reject!!!"));



// // 3
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) => num1 + num2 > 50 ? resolve() : reject());
// }

// // 3.1
// myFun(70, 30)
//   .then(
//     () => console.log("Number Is Greater then 50 "),
//     () => console.log("Number Is Less then 50 "),
//   );

// // 3.1
// myFun(10, 30)
//   .then(
//     () => console.log("Number Is Greater then 50 "),
//     () => console.log("Number Is Less then 50 "),
//   );

// // 3.1
// myFun(10, 30)
//   .then(
//     (value) => console.log("Number Is Greater then 50 "),
//     (error) => console.log("Number Is Less then 50 "),
//   );

// //3.1
// myFun(10, 30)
//   .then(
//     (value) => console.log("Number Is Greater then 50 ", value),
//     (error) => console.log("Number Is Less then 50 ", error),
//   );

// // 3.1
// myFun(70, 30)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .then(() => console.log("Number is less then 50"));

// // 3.1
// myFun(70, 30)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log("Number is less then 50"));

// // 3.2
// myFun(31, 12)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log("Number is less then 50"));

// // 3.3
// myFun(31, 12)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log(err));


// // 3' not solution
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if(num1 + num2 > 50){
//       resolve()
//     }else{
//       var err = "hi";
//       reject()
//     }
//   })
// }
// myFun(31, 12)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log(err));

// // 3'
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if(num1 + num2 > 50){
//       resolve("My Value!")
//     }else{
//       reject("My Error!") // we can return value using promise but not in callback
//     }
//   })
// }
// myFun(31, 12)
//   .then(() => console.log("Number Is Greater then 50 "))
//   .catch((err) => console.log(err));

// // 3'
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if(num1 + num2 > 50){
//       resolve("My Value!")
//     }else{
//       reject("My Error!")
//     }
//   })
// }
// myFun(31, 22) //try-1
// // myFun(31, 12) //try-2
//   .then(responseData => console.log(responseData))
//   .catch(responseError => console.log(responseError));

// // 4.1
// setTimeout(function() { myFunction("I love me !!!"); }, 3000);
// function myFunction(value) {
//   console.log(value)
// }



// // 4.2
// const myPromise = new Promise(function(myResolve, myReject) {
//   setTimeout(() => myResolve("I love You !!"), 1000);
// });
// myPromise.then((value) => console.log(value));



// // Promise(resolve, reject)
// // Promise.then();
// // Promise.catch();