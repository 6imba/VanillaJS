// In synchronous operations tasks are performed one at a time and only when one is completed, where following execution is blocked. In other words, you need to wait for a task to finish to move to the next one.
// In asynchronous operations, on the other hand, you can move to another task before the previous one finishes. (No wait, No block)

// Parent function or any function that takes function as argument is HOF.
// Function that takes ttime to complete execution is asynchronous function.
// Function that takes ttime to complete execution and for that it makes use of callback(passed as argument in it) is HOF asynchronous function.




// "I will finish later!"
// A functions running in parallel with other functions are called asynchronous.
// A good example of asynchronous is JavaScript setTimeout()

// In the real world, callbacks are most often used with asynchronous functions.
// A typical example is JavaScript setTimeout().

// // 1.Asynchronous along/parallel with callback:
// setTimeout(greet, 3000);
// function greet(){
//     console.log('I am callBack!')
// }
// // here setTimeout function is a asynchronous. -> which runs parallel with greet'callback'
// // and greet function is callback. -> which is passed into setTimeout'asynchronous' as argument.
// // When you pass a function as an argument, remember not to use parenthesis.



// // 2.Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
// setTimeout(function (){ console.log('I am callBack!')}, 3000);



// // 3. Pass Arrow-function as callback:
// setTimeout(() => console.log('I am callBack!'), 3000);



// // 4. setInterval: setInterval is asynchronous that execute callback for each interval:
// var second = 0;
// setInterval(callback, 1000);
// function callback(){
//     second += 1;
//     console.log('Second:', second);
// }



// // 5
// var second = 0;
// console.log(second += 1)


// // 6. setInterval asynchronous with Arrow-function;
// var second = 0;
// setInterval(() => console.log('Second:', second += 1), 1000);



// // 7 asynchronous~setInterval with Date() class
// setInterval(callback, 1000);
// function callback(){
//     let d = new Date();
//     console.log(d.getHours() + ":" +d.getMinutes() + ":" +d.getSeconds());
// }


// Waiting for a Timeout: setTimeout()
// Waiting for Intervals: setInterval()
// Waiting for Files: XMLHttpRequest()



// //Final:
// function later(){
//     setTimeout(() => console.log('I am callBack!'), 3000);
// }
// function firstFunction(callback){
//     console.log('Hi 1')
//     console.log('Hi 2')
//     callback();
//     console.log('Hi 3')
//     console.log('Hi 4')
//     console.log('Hi 5')
// }
// firstFunction(later);
// // you see callback will run when time comes: "I will call back later!"


// setTimeout(()=>console.log('I am callBack!'), 3000); // good way
// setTimeout(console.log('I am callBack!'), 3000); // not way




// //Final: combo of asychronous{setTimeout, setInterval} and callback
// var second = 0;
// function later(){
//     setTimeout(() => console.log('I am callBack!'), 3000);
// }
// function firstFunction(callback){
//     console.log('Hi 1')
//     console.log('Hi 2')
//     callback();
//     console.log('Hi 3')
//     console.log('Hi 4')
//     console.log('Hi 5')
//     if(second<10){setInterval(() => console.log('Second:', second += 1), 1000)} // console is run inside if condition so, condition doest matter even after second>10.
//     console.log('Hi 6')
//     console.log('Hi 7')
//     console.log('Hi 8')
// }
// firstFunction(later);
// // pass callback~later into asynchronous~firstFunction
// // callback~later itself contains asynchronous~setTimeout
// // asynchronous~firstFunction contains asynchronous~setInterval





// //Final: error solved
// var second = 0;
// function later(){
//     setTimeout(() => console.log('I am callBack!'), 3000);
// }
// function firstFunction(callback){
//     console.log('Hi 1')
//     console.log('Hi 2')
//     callback();
//     console.log('Hi 3')
//     console.log('Hi 4')
//     console.log('Hi 5')
//     setInterval(() => {if(second<10){console.log('Second:', second += 1)}}, 1000)
//     console.log('Hi 6')
//     console.log('Hi 7')
//     console.log('Hi 8')
// }
// firstFunction(later);



// // 1
// setInterval(
//     function (){
//         if(second<10){
//             console.log('Second:', second += 1)
//         }}, 1000)

// //2
// setInterval(() => {
//         if(second<10){
//             console.log('Second:', second += 1)
//         }}, 1000)

// // 3
// setInterval(() => {if(second<10){console.log('Second:', second += 1)}}, 1000)




// Waiting for Files: XMLHttpRequest()

// Non-blocking
// Asynchronous
// I/O module
