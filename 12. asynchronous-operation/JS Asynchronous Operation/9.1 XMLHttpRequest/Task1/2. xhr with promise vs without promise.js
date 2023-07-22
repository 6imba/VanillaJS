console.log("XMLHttpRequest Object!")

// 1. get element:
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

// // --------------------------------------------------------------------------------------------------------------------------------------------------
// // A. Handle xhr-Response without promise *********************************
// // 2. define events_listener_method:
// const getData = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://reqres.in/api/users?page=2" ); //prepare HTTP-Request to be sent.
//     xhr.responseType = 'json'; // define the type in which response is to be received.
//     xhr.send(); // start connection to given server_url of API.
//     xhr.onload = () => { // define event_listener_method.
//         console.log("Onload: ",xhr.response);
//     };
// };

// // 3. add event listener to the respective elements:
// getBtn.addEventListener("click", getData);

// // --------------------------------------------------------------------------------------------------------------------------------------------------

// // B. Handle xhr-Response with promise *********************************
// // 1. define events_listener_method & use promise to hanlde the reponse.
// const getData = () => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://reqres.in/api/users?page=2" ); //prepare HTTP-Request to be sent.
//         xhr.responseType = 'json'; // define the type in which response is to be received.
//         xhr.send(); // start connection to given server_url of API.
//         xhr.onload = () => { // define event_listener_method.
//             fullfil(xhr.response);
//         };
//     })
//     .then( responseData => console.log("On Fulfilled: ",responseData))
// }
// // 3. add event listener to the respective elements:
// getBtn.addEventListener("click", getData);

// // --------------------------------------------------------------------------------------------------------------------------------------------------

// // B.1. Handle xhr-Response with promise *********************************
// const getData = () => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://reqres.in/api/users?page=2" );
//         xhr.responseType = 'json';
//         xhr.send();
//         xhr.onload = () => {
//             fullfil(xhr.response);
//             console.log("Onload: ",xhr.response);
//         };
//     })
//     .then( responseData => console.log("On Fulfilled: ",responseData))
// }
// // 3. add event listener to the respective elements:
// getBtn.addEventListener("click", getData);

// // --------------------------------------------------------------------------------------------------------------------------------------------------


// // # post_1:
// // 2. HTTP-Request to send data:
// // 1.5 Use XMLHttpRequest object to send HTTP-Request and get response-data of respective request. Also use promise to hanlde the reponse.
// const postData = () => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://reqres.in/api/register"); // what is its pesponse and how?
//         xhr.responseType = 'json';
//         // xhr.send({email: "test123@gmail.com", password:"test123"});
//         xhr.send(JSON.stringify({email: "test1233@gmail.com", password:"test123"}));
//         xhr.onload = () => {
//             fullfil(xhr.response);
//             console.log("Onload: ",xhr.response);
//         };
//     })
//     .then( responseData => console.log("On Fulfilled: ",responseData))
// }
// // 3.
// postBtn.addEventListener("click", postData);



// // # post_2:
// // 2.
// const postData = (data) => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://reqres.in/api/register"); // This API should register new object and response id&token but as we have set GET methods it returns list of pre-existing-object.
//         xhr.responseType = 'json';
//         xhr.send(JSON.stringify(data));
//         xhr.onload = () => {
//             fullfil(xhr.response);
//         };
//     })
//     .then( responseData => console.log("On Fulfilled: ",responseData))
// }
// // 3. add event listener to the respective elements:
// postBtn.addEventListener("click", () => postData({email: "test123@gmail.com", password:"test123"}));

