
// Finally_1:
// 1. get element:
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");


// 2.1 define method to get data:
const getData = () => {
    return new Promise((fullfil, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://reqres.in/api/users?page=2" ); // .open doesnt start connection but prepare HTTP-Request to be sent. And for that .open takes 2 arguments(method & url:where to sent request)
        xhr.responseType = 'json'; //convert HTTP-Response(JSON-Data) into JS-Object using xhr.responseType property:
        xhr.onload = () => {
            fullfil(xhr.response);
            console.log("Onload: ",xhr.response); // get response data using xhr.response. // you will get a long string(JSON-Data) as data typically exchanged in JSON formate when talking to API. Here also we are talking to dummy API.
        }; // .onload event-listener will get trigger/fire when we get response of respective http-request.
        xhr.send(); // .send start connection and sends HTTP-Request.
    })
}

// 2.2 define method to send data along with HTTP-Request:
const sendData = (data) => {
    return new Promise((fullfil, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://reqres.in/api/register");
        xhr.responseType = 'json';
        if(data){
            xhr.setRequestHeader("Content-Type", "application/json");
        }
        xhr.onload = () => {
            fullfil(xhr.response); // if promise if fullfill send data-object.
            console.log("Onload XHR-Response: ",xhr.response);
        };
        xhr.onerror = () => {
            reject("Something went wrong!"); // if promise if rejected send error-value.
            console.log("OnError XHR-Response: ",xhr.response);
        };
        xhr.send(JSON.stringify(data)); // .send start connection and sends HTTP-Request.
    })
}

// 3. add event listener to the respective elements:
getBtn.addEventListener("click", () => {
    getData()
        .then( responseData => console.log("On Fulfilled: ",responseData));
});
postBtn.addEventListener("click", () => {
    sendData({email: "eve.holt@reqres.in", password:"test123"})
        .then( responseDataObject => console.log("Handle Response-Data-Object On Promise Fulfilled: ",responseDataObject)) // handle the the data-object returned after promise is fullfilled.
        .then( responseErrorObject => console.log("Handle Response-Error-Object On Promise Rejected: ",responseErrorObject)) // handle the the errro-object returned after promise is rejected.
});
