console.log("Ajax Tutorial!");

let fetchButton = document.getElementById("fetchBtn"); // get button element
let backupButton = document.getElementById("backupBtn");

fetchButton.addEventListener("click", fetchButtonHandler) // add event listner to fetchButton.

//define handler-function(fetchButtonHandler) for events(click).
function fetchButtonHandler(){
    console.log("Fetch Button clicked!")
    const xhr = new XMLHttpRequest(); // instanciate XMLHttpRequest object.
    xhr.open("POST", "http://dummy.restapiexample.com/create", true); // initializes a HTTP-request(POST) along with data to sources(url) asynchronously(true).
    xhr.getAllResponseHeaders('Content-type', 'application/json');

    xhr.onprogress = function(){ // optional: when response is in on progress
        console.log("Task on progress!");
    }
    xhr.onload = function(){ //when resposne is ready.
        if(this.status === 200){
            console.log(this.responseText)
        }else{
            console.error("Some Error Occuered!")
        }
    }
    params = {"name":"test356h","salary":"123","age":"23"};
    xhr.send(params); // Finally send HTTP request to server.
    console.log("HTTP Request Send.")
}
console.log("We are done !")

// 1. instanciate XMLHttpRequest object.
// 2. initializes a HTTP-request to sources(url) asynchronously(true).
    // - GET: means retrive data/response.
    // - POST: means send some data and retrive response/data according to send data.
// 3. Optional what to on progresss.
// 4. onload
// 5. ready state code value in xhr: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
// 6. xhr.send(): Finally send HTTP request to server.

// fake json data: https://jsonplaceholder.typicode.com/
    // - My JSON Server.

// dummy rest api: http://dummy.restapiexample.com/
    // - http://dummy.restapiexample.com/create

