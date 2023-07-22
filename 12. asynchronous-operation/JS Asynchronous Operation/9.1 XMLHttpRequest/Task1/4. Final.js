// // 1. get element:
// const getBtn = document.getElementById("get-btn");
// const postBtn = document.getElementById("post-btn");


// // 2.1 define method to get data:
// const getData = () => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://reqres.in/api/users?page=2" ); // .open doesnt start connection but prepare HTTP-Request to be sent. And for that .open takes 2 arguments(method & url:where to sent request)
//         xhr.responseType = 'json'; //convert HTTP-Response(JSON-Data) into JS-Object using xhr.responseType property:
//         xhr.send(); // .send start connection and sends HTTP-Request.
//         xhr.onload = () => {
//             fullfil(xhr.response);
//             console.log("Onload: ",xhr.response); // get response data using xhr.response. // you will get a long string(JSON-Data) as data typically exchanged in JSON formate when talking to API. Here also we are talking to dummy API.
//         }; // .onload event-listener will get trigger/fire when we get response of respective http-request.
//     })
// }

// // 2.2 define method to send data along with HTTP-Request:
// const sendData = (data) => {
//     return new Promise((fullfil, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open("POST", "https://reqres.in/api/register"); //API call
//         // xhr.open("POST", "https://reqres.isdfsdfn/api/register");
//         xhr.responseType = 'json';
//         if(data){
//             xhr.setRequestHeader("Content-Type", "application/json");
//         }
//         xhr.send(JSON.stringify(data)); // Stringify data before sending into server.

//         xhr.onload = () => {
//             if(xhr.status >=400){
//                 console.log("Error-Object Returned !!!!!!!!!!!!!!!!!!!!!!!!")
//                 reject(xhr.response); // Reject Promise on reponse-error-object
//             }else{
//                 fullfil(xhr.response); // if promise if fullfill send data-object.
//                 console.log("Onload XHR-Response: ",xhr.response);
//             }
//         };

//         xhr.onerror = (error) => {
//             console.log("Network Error Returned !!!!!!!!!!!!!!!!!!!!!!!!")
//             reject("Something went wrong!"); // Reject Promise on network-error.
//             console.log("OnNetworkError XHR-Response: ",xhr.response);//server hit nai vako xaina so no rejected response from server
//             console.log("OnNetworkError XHR-Error: ",error);
//         };
//     })
// }

// // 3. add event listener to the respective elements:
// getBtn.addEventListener("click", () => {
//     getData()
//         .then( responseData => console.log("On Fulfilled: ",responseData));
// });
// postBtn.addEventListener("click", () => {
//     // sendData({email: "eve.holt@reqres.in", password:"test123"}) // fullfill
//     // sendData({email: "eve.holt@reqres.in"}) // reject: check error-object
//     sendData({password:"test123"}) // reject: check error-object
//         .then( responseDataObject => console.log("Handle Response-Data-Object On Promise Fulfilled: ",responseDataObject)) // handle the the data-object returned after promise is fullfilled.
//         .catch( responseErrorObject => console.log("Handle Response-Error-Object On Promise Rejected: ",responseErrorObject)) // handle the the errro-object returned after promise is rejected.
// });

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Status code:
// not include: xhr.setRequestHeader("Content-Type", "application/json");
// status code: 400
// HTTP Status 204 (No Content) indicates that the server has successfully fulfilled the request and that there is no content to send in the response payload body.
// The HTTP 200 OK success status response code indicates that the request has succeeded.

// API actually fails to parse the incomming request because we are not saying it that we are sending json-data.
// So, tell API that we are sending JSON-data by setting extra header ==> xhr.setRequestHeader("Content-Type", "application/json"); --> whoch signals we are appending JSON data.

// before xhr.send() we are setting/preparing the HTTP-Request to be sent.

// onerror this events gets trigger only when there is techinical-error/request-techincally-fails: no-network-connections,
// In above example even when we dont have password, we get error-response(400) which actually is succefull connection. Thats why .onerror is not triggered.
// So onerror get hits only if HTTP-Request fails.



// @Reference: https://www.youtube.com/watch?v=4K33w-0-p2c&t=4s

// XMLHttpRequest API to handle asynchronous Http-Request operations using Promise.

// But what if we had an API that would use promises out of the box so that we dont have to create wrapper like in XMLHttpRequest.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
