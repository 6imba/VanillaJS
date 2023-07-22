console.log("Ajax Tutorial!");

let fetchButton = document.getElementById("fetchBtn"); // get button element
let backupButton = document.getElementById("backupBtn");

fetchButton.addEventListener("click", fetchButtonHandler) // add event listner to fetchButton.

//define handler-function(fetchButtonHandler) for events(click).
function fetchButtonHandler(){
    console.log("Fetch Button clicked!")
    const xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1000", true); // initializes a HTTP-request(GET) to sources(url) asynchronously(true).
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", false); // initializes a HTTP-request(GET) to sources(url) asynchronously(true).
    xhr.onload = function(){ //when resposne is ready.
        if(this.status === 200){
            console.log(this.responseText)
        }else{
            // console.log("Some Error Occuered!")
            console.error("Some Error Occuered!")
        }
    }
    xhr.send(); // Finally send HTTP request to server.
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
// fake json data