// The then() method deals with promise fulfill state only and itself returns a Promise-object.
// The catch() method deals with promise rejected state only and itself returns a Promise-object.


// // 1
// function func1(bool){
//     return new Promise((resolve, reject) => {
//         if(bool == true){
//             console.log("Resolved !")
//             resolve();
//         }
//         else{
//             console.log("Rejected !")
//             reject();
//         }
//     })
// }
// // func1(true);
// func1(false);


// Here, func1 is async function
// SourceBuffer, as we threw have not inside of an async function without a catch block
// ie:func1(false); instead of func1(true).catch();
// as reject occur only if error on promise


// // 2
// function func1(bool){
//     return new Promise((resolve, reject) => {
//         if(bool == true){
//             console.log("Resolved !")
//             resolve();
//         }
//         else{
//             console.log("Rejected !")
//             reject();
//         }
//     })
// }
// // func1(true)
// func1(false)
// .catch(err => console.log(err));
// // The catch() method returns a Promise and deals with rejected cases only.



// // 2.1
// function func1(bool){
//     return new Promise((resolve, reject) => {
//         if(bool == true){
//             console.log("Resolved !")
//             resolve();
//         }
//         else{
//             console.log("Rejected !")
//             reject();
//         }
//     })
// }
// // func1(true)
// func1(false)
// .then(res => console.log(res))
// .catch(err => console.log(err));
// // The catch() method returns a Promise and deals with rejected cases only.



// // 3
// function func1(bool){
//     return new Promise((resolve, reject) => {
//         if(bool == true){
//             console.log("Resolved !")
//             resolve();
//         }
//         else{
//             console.log("Rejected !")
//             reject();
//         }
//     })
// }
// func1(true)
//     .then(() => console.log("Consuming Code Resolved !"))
//     .catch((err) => console.log("Consuming Code Rejected !"));



// // 3.2
// function func1(bool){
//     return new Promise((resolve, reject) => {
//         if(bool == true){
//             console.log("Resolved !")
//             resolve("myData");
//         }
//         else{
//             console.log("Rejected !")
//             reject("myError");
//         }
//     })
// }
// func1(true)
//     .then((res) => console.log("Consuming Code Resolved !", res))
//     .catch((err) => console.log("Consuming Code Rejected !", err));




// // 3.3
// function func1(bool){
//     return new Promise((resolve, reject) => {
//         if(bool == true){
//             console.log("Resolved !")
//             resolve({a:1, b:2});
//         }
//         else{
//             console.log("Rejected !")
//             reject("myError");
//         }
//     })
// }
// func1(true)
//     .then((res) => console.log("Consuming Code Resolved !", res))
//     .catch((err) => console.log("Consuming Code Rejected !", err));




// // 4
// function func1(bool){
//     return new Promise((resolve, reject) => {
//         if(bool == true){
//             console.log("Resolved !")
//             resolve('Yes');
//         }
//         else{
//             console.log("Rejected !")
//             reject('No');
//         }
//     })
// }
// func1(true)
//     .then((succcess) => console.log("Consuming Code Resolved !" + succcess))
//     .catch((error) => console.log("Consuming Code Resolved !"));
// // Here, if promise resolved, runs .then() whereas if promise reject runs .catch()





// // 5
// function func1(bool){
//     return new Promise((resolve, reject) => {
//         if(bool == true){
//             console.log("Resolved !")
//             resolve('Yes');
//         }
//         else{
//             console.log("Rejected !")
//             reject('No');
//         }
//     })
// }
// func1(false)
//     .then()
//     .catch((error) => console.log("Consuming Code Rejected !"+error));



// // final_1:
// function func1(bool){
//     return new Promise((resolve, reject) => {
//         if(bool == true){
//             console.log("Resolved !")
//             resolve('Yes');
//         }
//         else{
//             console.log("Rejected !")
//             reject('No');
//         }
//     })
// }
// func1(true)
//     .then((succcess) => console.log("Consuming Code Resolved !" + succcess))
//     .catch((error) => console.log("Consuming Code Resolved !"));
// // Here, if promise resolved, runs .then() whereas if promise reject runs .catch()

// final_2:
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => console.log(response))
    .catch((error) => console.log("Consuming Code Resolved !"));
// Here, if promise resolved, runs .then() whereas if promise reject runs .catch()
