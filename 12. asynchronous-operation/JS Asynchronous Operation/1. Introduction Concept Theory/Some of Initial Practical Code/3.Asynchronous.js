// Asynchronous funtion:
    // - takes function as parameter,
    // - return response after sometime but doesnt stop the flow of other code

// 1
// // # Asynchronous JavaScript:
//     // "I will finish later!"
//     // A functions running in parallel with other functions are called asynchronous.
//     // A good example of asynchronous is JavaScript setTimeout()

// Asynchronous are the function that runs in parallel with other functions and makes-callback-wait-for/run-callback-after some period.

// // In the real world, callbacks are most often used with asynchronous functions.
// // Asynchronous along/parallel with callback.
// // A typical example is JavaScript setTimeout().

// setTimeout(greet, 3000);
// function greet(){
//     console.log('I am callBack!')
// }
// // // here setTimeout function is a asynchronous. -> which runs parallel with greet'callback'
// // // and greet function is callback. -> which is passed into setTimeout'asynchronous' as argument.
// // // & setTimeout(asynchronous) makes greet(callback) wait for 3000 milisecond for execution.
// // // When you pass a function as an argument, remember not to use parenthesis.


// 2
// //Final:
// function later(){
//     setTimeout(() => console.log('I am callBack!'), 3000);
// }
// function firstFunction(callback){
//     console.log('Hi 1')
//     console.log('Hi 2')
//     callback(); //callback call
//     console.log('Hi 3')
//     console.log('Hi 4')
//     console.log('Hi 5')
// }
// firstFunction(later);
// // you see callback will run when time comes: "I will call back later!"
// // callback is call later inside asynchronomous
// // here, firstFunction is 1st level of asynchronous and later is 1st level of callback.
// // & setTimeout is 2nd level of asynchronous and () => console.log('I am callBack!') is 2nd level of callback
// // here, firstFunction is 1st level of asynchronous and later is 1st level of callback but firstFunction is not making later run after 3000 milisecond. Its later defination thats making to run after 3000 milisecond. Which has setTimeoutas asynchronous and  console.log('I am callBack!') as callback.


// 3
// //we can also prevent the execution callback.
// function later(){
//     setTimeout(() => console.log('I am callBack!'), 3000);
// }
// function firstFunction(callback){
//     console.log('Hi 1')
//     console.log('Hi 2')
//     // callback(); //callback call
//     console.log('Hi 3')
//     console.log('Hi 4')
//     console.log('Hi 5')
// }
// firstFunction(later);
// // you see callback will run when time comes: "I will call back later!"
// // callback is call later inside asynchronomous


// // 4.1 Bug
// // Final: combo of asychronous{setTimeout, setInterval} and callback
// var second = 0;
// function callbackCallLater(){
//     setTimeout(() => console.log('I am callBack!'), 3000); //setTimeout(asynchronous) with callback
// }
// function asynchronousFinishLater(callback){ //setTimeout(asynchronous) with callback
//     console.log('Hi 1')
//     console.log('Hi 2')
//     callback();
//     console.log('Hi 3')
//     console.log('Hi 4')
//     console.log('Hi 5')
//     if(second<13){setInterval(() => console.log('Second:', second += 1), 1000)} //setInterval(asynchronous) with callback
//     console.log('Hi 6')
//     console.log('Hi 7')
//     console.log('Hi 8')
// }
// asynchronousFinishLater(callbackCallLater);


// // 4.2 Fix
// // Final: combo of asychronous{setTimeout, setInterval} and callback
// var second = 0;
// function callbackCallLater(){
//     setTimeout(() => console.log('I am callBack!'), 3000); //setTimeout(asynchronous) with callback
// }
// function asynchronousFinishLater(callback){ //setTimeout(asynchronous) with callback
//     console.log('Hi 1')
//     console.log('Hi 2')
//     callback();
//     console.log('Hi 3')
//     console.log('Hi 4')
//     console.log('Hi 5')
//     setInterval(() => {if(second<13){console.log('Second:', second += 1)}}, 1000) //setInterval(asynchronous) with callback
//     console.log('Hi 6')
//     console.log('Hi 7')
//     console.log('Hi 8')
// }
// asynchronousFinishLater(callbackCallLater);


// // 4.2 Fix.2 Bug
// // Final: combo of asychronous{setTimeout, setInterval} and callback
// var second = 0;
// function callbackCallLater(){
//     setTimeout(() => console.log('I am callBack!'), 3000); //setTimeout(asynchronous) with callback
// }
// function asynchronousFinishLater(callback){ //setTimeout(asynchronous) with callback
//     console.log('Hi 1')
//     console.log('Hi 2')
//     callback();
//     console.log('Hi 3')
//     console.log('Hi 4')
//     console.log('Hi 5')
//     setInterval(() => {if(second<13){console.log('Second:', second += 1)}else{ console.log("Break Interval")}}, 1000) //setInterval(asynchronous) with callback
//     console.log('Hi 6')
//     console.log('Hi 7')
//     console.log('Hi 8')
// }
// asynchronousFinishLater(callbackCallLater);


// // 4.2 Fix.2 Fix
// // Final: combo of asychronous{setTimeout, setInterval} and callback
// var second = 0;
// function callbackCallLater(){
//     setTimeout(() => console.log('I am callBack!'), 3000); //setTimeout(asynchronous) with callback
// }
// function asynchronousFinishLater(callback){ //setTimeout(asynchronous) with callback
//     console.log('Hi 1')
//     console.log('Hi 2')
//     callback();
//     console.log('Hi 3')
//     console.log('Hi 4')
//     console.log('Hi 5')
//     setInterval(() => {if(second<13){console.log('Second:', second += 1)}else{ console.log("Break Interval")}}, 1000) //setInterval(asynchronous) with callback
//     console.log('Hi 6')
//     console.log('Hi 7')
//     console.log('Hi 8')
// }
// asynchronousFinishLater(callbackCallLater);



// // Extra 1
// var second = 0;
// function callbackCallLater(){
//     setTimeout(() => second+=5, 3000); //setTimeout(asynchronous) with callback

// }
// function asynchronousFinishLater(callback){ //setTimeout(asynchronous) with callback
//     callback()
// }
// asynchronousFinishLater(callbackCallLater);
// setInterval(()=>console.log(second), 1000)


// // Extra 2
// var second = 0;
// function callbackCallLater(){
//     setInterval(() => setTimeout(() => second+=5, 3000), 7000); //setTimeout(asynchronous) with callback
// }
// function asynchronousFinishLater(callback){ //setTimeout(asynchronous) with callback
//     callback()
// }
// asynchronousFinishLater(callbackCallLater);
// setInterval(()=>console.log(second), 1000)




// Some of predefined asynchronous:
    // - Waiting for a Timeout: setTimeout() ==> run code after given time period
    // - Waiting for Intervals: setInterval() ==> run code in every given time interval
    // - Waiting for Files: XMLHttpRequest()
        // - callback to wait for asynchronous for some period of time.

// https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous




// // Test 1
// function retrivePostFromServer(){
//     console.log('Callback !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
// }
// function createPostFromServer(callback){
//     setTimeout(() => {
//         console.log("Asynchronous function finised !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//         callback()
//         }, 5000)
// }
// createPostFromServer(retrivePostFromServer)
// var second = 0;
// setInterval(()=>{
//     second+=1;
//     console.log("Second:"+second);
// }, 1000)





// // Test 2
// function retrivePostFromServer(){
//     setTimeout(() => console.log('Callback !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'), 3000)
// }
// function createPostFromServer(callback){
//     setTimeout(() => {
//         console.log("Asynchronous function finised !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//         callback()
//         }, 5000)
// }
// createPostFromServer(retrivePostFromServer)
// var second = 0;
// setInterval(()=>{
//     second+=1;
//     console.log("Second:"+second);
// }, 1000)