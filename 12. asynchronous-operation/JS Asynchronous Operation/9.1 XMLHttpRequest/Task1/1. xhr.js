console.log("XMLHttpRequest Object!")

// 1. get element:
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

// // --------------------------------------------------------------------------------------------------------------------------------------------------
// // Aaaaaaaaaaa
// // 2. define events_listener_method that sent HTTP-Request asking for data.
// const getData = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://reqres.in/api/users?page=2" ); // .open doesnt start connection but prepare HTTP-Request to be sent. And for that .open takes 2 arguments(method & url:where to sent request)
//     xhr.send(); // .send start connection and sends HTTP-Request to targeted url. // See in browser-inspect-network.
// };// here we have got the response, see it in network tab. But havent handled the response yet. So handle the response-object onload.

// // 3
// // add event listener to the respective elements:
// getBtn.addEventListener("click", getData);

// // --------------------------------------------------------------------------------------------------------------------------------------------------
// // Bbbbbbbbbb
// // 2. define events_listener_method:getData that sent HTTP-Request asking for data AND use|handle the response of respective http-resuest by adding built-int_event-listen:load on xhr object: xhr.onload or xhr.addEventListener('load')
// const getData = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://reqres.in/api/users?page=2" ); //prepare HTTP-Request to be sent
//     xhr.send(); // .send start connection and sends HTTP-Request.
//     xhr.onload = () => {//handle the http-response when loaded.
//         console.log(xhr.response); // get response-data of requested HTTP-Request using property of xhr object called xhr.response. // you will get a long string(JSON-Data) as data typically exchanged in JSON formate when talking to API. Here also we are talking to dummy API: "https://reqres.in/api/users?page=2".
//     }; // .onload event-listener will get trigger/fire when we get response of respective http-request.
// };

// // 3
// // add event listener to the respective elements:
// getBtn.addEventListener("click", getData);

// // --------------------------------------------------------------------------------------------------------------------------------------------------
// // Cccccccccccc:
// // 2. define events: convert HTTP-Response(JSON-Data) into JS-Object using JSON.parse():
// const getData = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://reqres.in/api/users?page=2" ); // .open doesnt start connection but prepare HTTP-Request to be sent. And for that .open takes 2 arguments(method & url:where to sent request)
//     xhr.onload = () => {
//         console.log(JSON.parse(xhr.response)); // get response data using xhr.response. // you will get a long string(JSON-Data) as data typically exchanged in JSON formate when talking to API. Here also we are talking to dummy API.
//     }; // .onload event-listener will get trigger/fire when we get response of respective http-request.
//     xhr.send(); // .send start connection and sends HTTP-Request.
// };

// // 3
// // add event listener to the respective elements:
// getBtn.addEventListener("click", getData);

// --------------------------------------------------------------------------------------------------------------------------------------------------
// // Dddddddddd:
// // 1.4. convert HTTP-Response(JSON-Data) into JS-Object using xhr.responseType property:
// const getData = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://reqres.in/api/users?page=2" ); // .open doesnt start connection but prepare HTTP-Request to be sent. And for that .open takes 2 arguments(method & url:where to sent request)
//     xhr.responseType = 'json'; //convert HTTP-Response(JSON-Data) into JS-Object using xhr.responseType property:
//     xhr.onload = () => {
//         console.log(xhr.response); // get response data using xhr.response. // you will get a long string(JSON-Data) as data typically exchanged in JSON formate when talking to API. Here also we are talking to dummy API.
//     }; // .onload event-listener will get trigger/fire when we get response of respective http-request.
//     xhr.send(); // .send start connection and sends HTTP-Request.
// };

// // 3. add event listener to the respective elements:
// getBtn.addEventListener("click", getData);

// --------------------------------------------------------------------------------------------------------------------------------------------------
// Eeeeeeeee:
// 2. define events: Use XMLHttpRequest object to send HTTP-Request and get response-data of respective request. Also use promise to hanlde the reponse.
const getData = () => {
    return new Promise((fullfil, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://reqres.in/api/users?page=2" );
        xhr.responseType = 'json';
        xhr.onload = () => {
            fullfil(xhr.response);
            console.log("Onload: ",xhr.response);
        };
        xhr.send();
    })
    .then( responseData => console.log("On Fulfilled: ",responseData))
}
// 3. add event listener to the respective elements:
getBtn.addEventListener("click", getData);

// here we used promise to return value outside the callback inside onload(), so that we can prevent callback hell
// // --------------------------------------------------------------------------------------------------------------------------------------------------
