// // 1
// function myFun() {
//     return new Promise();
// }
// console.log(myFun())



// // 2
// function myFun() {
//   return new Promise(()=>{});
// }
// console.log(myFun())



// // 3
// function myFun() {
//   return new Promise((resolved, reject)=>{});
// }
// console.log(myFun())

// // 4
// function myFun() {
//   return new Promise((resolved, reject)=> 'Hi');
// }
// console.log(myFun())

// // 5
// function myFun() {
//   return new Promise(()=> 'Hi');
// }
// console.log(myFun())

// // 6
// function myFun() {
//   return new Promise((resolved, reject)=> 'Hi');
// }
// console.log(myFun())

// // 7
//   function myFun(num1, num2) {
//     return new Promise((resolve, reject) => 'Hi'
//     );
//   }
//   console.log(myFun((70, 30)))


// // 8
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
// console.log(myFun(70, 30))



// // 8.2
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
// console.log(myFun(70, 30))



// // 9
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) =>
//     {
//       if(num1 + num2 > 50){
//         console.log('Hi')
//         resolve()
//       }
//       else{
//         console.log('Bye')
//         reject()
//       }
//     }
//   );
// }
// console.log(myFun(70, 30))



// // 10
// function myFun(num1, num2) {
//   return new Promise((resolve, reject) =>
//     {
//       if(num1 + num2 > 50){
//         console.log('Hi')
//         resolve("Resolved DataValue")
//       }
//       else{
//         console.log('Bye')
//         reject("Rejected ErrorObject")
//       }
//     }
//   );
// }
// console.log(myFun(70, 30))



// # Promise consuming code debug: 1.6