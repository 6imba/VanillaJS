// 1. get element:
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");



// // Handle return Promise-Object inside EventHandler-Function:
// // 2.
// const getData = (data) => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://reqres.in/api/users/2"); // This API should register new object and response id&token but as we have set GET methods it returns list of pre-existing-object.
//         xhr.responseType = 'json';
//         xhr.onload = () => {
//             fullfil(xhr.response);
//         };
//         xhr.send(JSON.stringify(data));
//     })
//     .then( responseData => console.log("On Fulfilled: ",responseData)) // handle promise response
// }
// // 3. add event listener to the respective elements:
// getBtn.addEventListener("click", () => getData({email: "test123@gmail.com", password:"test123"}));

// // --------------------------------------------------------------------------------------------------------------------------------------------------------
// // Handle return Promise-Object outside EventHandler-Function:
// // 2.
// const getData = (data) => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://reqres.in/api/users/2");
//         xhr.responseType = 'json';
//         xhr.onload = () => {
//             fullfil(xhr.response);
//         };
//         xhr.send(JSON.stringify(data));
//     })
// }
// // 3. add event listener to the respective elements:
// getBtn.addEventListener("click", () => {
//     getData({email: "test123@gmail.com", password:"test123"})
//         .then( responseData => console.log("On Fulfilled: ",responseData)) // handle promise response
// });

// // --------------------------------------------------------------------------------------------------------------------------------------------------------



















// // --------------------------------------------------------------------------------------------------------------------------------------------------------
// // Handle return Promise-Object outside EventHandler-Function: Error; Not the way
// // 2.
// const getData = (data) => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://reqres.in/api/users/2");
//         xhr.responseType = 'json';
//         xhr.onload = () => {
//             fullfil(xhr.response);
//         };
//         xhr.send(JSON.stringify(data));
//     })
// }
// getData.then( responseData => console.log("On Fulfilled: ",responseData)) //error

// // 3. add event listener to the respective elements:
// getBtn.addEventListener("click", () => getData({email: "test123@gmail.com", password:"test123"}));

// // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Handle return Promise-Object outside EventHandler-Function: Error; Not the way
// // 2.
// const getData = (data) => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://reqres.in/api/users/2");
//         xhr.responseType = 'json';
//         xhr.send(JSON.stringify(data));
//         xhr.onload = () => {
//             fullfil(xhr.response);
//         };
//     })
// }
// // 3. add event listener to the respective elements:
// getBtn.addEventListener("click", () => {
//     var promise = getData({email: "test123@gmail.com", password:"test123"})
// });
// promise.then( responseData => console.log("On Fulfilled: ",responseData)) // handle promise response


// // -------------------------------------------------------

// // Handle return Promise-Object outside EventHandler-Function:
// // 2.
// const getData = (data) => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://reqres.in/api/users/2");
//         xhr.responseType = 'json';
//         xhr.onload = () => {
//             fullfil(xhr.response);
//         };
//         xhr.send(JSON.stringify(data));
//     })
// }
// // 3. add event listener to the respective elements:
// getBtn.addEventListener("click", () => {
//     var promise = getData({email: "test123@gmail.com", password:"test123"})
//     promise.then( responseData => console.log("On Fulfilled: ",responseData)) // handle promise response
// });

// // -------------------------------------------------------




// // Its the way:
// const postData = (data) => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://reqres.in/api/register");
//         xhr.responseType = 'json';
//         xhr.send(JSON.stringify(data));
//         xhr.onload = () => {
//             fullfil(xhr.response);
//         };
//     })
// }
// // add event listener to the respective elements:
// // postBtn.addEventListener("click", () => postData({email: "test123@gmail.com", password:"test123"}).then( responseData => console.log("On Fulfilled: ",responseData)));
// postBtn.addEventListener("click", () => {
//     postData({email: "test123@gmail.com", password:"test123"})
//         .then( responseData => console.log("On Fulfilled: ",responseData))
// });