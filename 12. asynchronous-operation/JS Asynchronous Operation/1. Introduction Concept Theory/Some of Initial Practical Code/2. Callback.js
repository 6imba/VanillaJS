// # JavaScript Callbacks: "I will call back later!"
    // - A callback is a function passed as an argument to another function
    // - This technique allows a function to call another function in case of need.
    // - A callback function can run after another function has finished


// 3 Two NormalFunction, secondFunction passed as argument(callback) into firstFunction:
var sum;
function firstFunction(num1, num2, callback) {
        sum = num1+num2;
        callback();
    }

function secondFunction() {
    console.log('Sum: ', sum)
  }

// firstFunction(5, 5, secondFunction); // Solved: #1. The problem with the first example above, is that you have to call two functions(firstFunction before secondFunction) to display the result.
firstFunction(5, 5, ()=>{}); // Solved: #2. The problem with the second example, is that you cannot prevent the calculator firstFunction from displaying the result(as secondFunction is invoked inside firstFunction).
//   # here we are having {TypeError: callback is not a function} as we have not passed callback argument i.e firstFunction(5, 5);

setTimeout(()=>console.log("first"), 3000)

// // # So.
// var sum;
// function firstFunction(num1, num2, callback = () => console.log("Hi I am default callback.")) {
//         sum = num1+num2;
//         callback();
//     }
// function secondFunction() {
//     console.log('Sum: ', sum)
//   }
// firstFunction(5, 5, secondFunction);
// firstFunction(5, 5);


// *************************************************************************************************************
// # Still confuse?
    // When to Use a Callback?
    // The examples above are not very exciting.
    // They are simplified to teach you the callback syntax.
    // Where callbacks really shine are in asynchronous functions(while doing asynchronous operation), where one function has to wait for another function (like waiting for a file to load).
    // So, callback have to wait for flow of asynchronous functions.

// "I will call back later!"
// "I will be called later when i received data!"
// "I will render data later, when i received data!"
// so we have to pass callback as argument to another function that retrieve data.
// means, pass callback to asynchronous function as argument.
// A function passed as an argument to another function is callback.
// A function that takes another function as an argument is asynchronous function.

// setTimeout(()=>console.log('I am callBack!'), 3000); // good way
// setTimeout(console.log('I am callBack!'), 3000); // not way
// callback should always be a function.
// here, 
//   - setTimeout ==> is asynchronous function.
//   - ()=>console.log('I am callBack!') ==> is callback

// Usage:
//   - we can use callback syntax when we need to pass function(thats to be called later) inside another function .
//   - So when does such senario occurs like we need to pass function(thats to be called later) inside another function.
    // - thats senario is like asynchronous operation: fetching data, event handler,


// // 2.Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:
// setTimeout(function (){ console.log('I am callBack!')}, 3000);



// Extra:


// // 5.1
// setTimeout(myFunction(), 3000); //never use parenthesis in callback
// function myFunction() {
//   console.log("I love You !!!")
// }

// // 5.2
// setTimeout(myFunction, 3000);
// function myFunction() {
//   console.log("I love You !!!")
// }


// // 5.3
// setTimeout(myFunction("I love You !!!"), 3000); //never use parenthesis in callback But what do do when we need to pass argument into callback which itself is being passed as argument?
// function myFunction(value) {
//   console.log(value)
// }


// // 5.4
// setTimeout(function() { console.log("I love Me !!!")}, 3000); // pass function itself instead of passing function name.


// // 5.5
// setTimeout(function() { myFunction("I love Me !!!") }, 3000); // pass function inside function
// function myFunction(value) {
//   console.log(value)
// }


// // 5.6
// setTimeout(()=>myFunction("I love You !!!"), 3000); // pass function inside arrow-function
// function myFunction(value) {
//   console.log(value)
// }