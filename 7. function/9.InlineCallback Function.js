// // # 1.Here func1 is inline_nested_function(function inside other function).
//     function func1(){
//         console.log("Function1")
//     }
//     function func2(){
//         console.log("Function2")
//         func1()
//     }
//     func2()

// // # 2.Here func1 is callback(function thats called later.).
//     function func1(){
//         console.log("Function1")
//     }
//     function func2(){
//         console.log("Function2")
//         setTimeout(()=>func1(), 3000)
//     }
//     func2()
//     // callback: call me back later.
//     // But this is not how we use callback by hard-coding it inside HOF function, instead we pass callback as an argument to HOF and call/invoke it later.

// # 3. So:
    function func1(){
        console.log("Function1")
    }
    function func2(callback){
        console.log("Function2")
        setTimeout(()=>callback(), 3000)
    }
    func2(func1)

// Therefore callback is a function that is passed to another function as argument and invoked later.



// ********************************************************************************************************************




// // 1 Two NormalFunction, call seperately :
// var sum;
// function firstFunction(num1, num2) {
//         sum = num1+num2;
//     }
// function secondFunction() {
//     console.log('Sum: ', sum)
//   }
// firstFunction(5, 5);
// secondFunction();



// // 2 Two NormalFunction, secondFunction call inside firstFunction:
// var sum;
// function firstFunction(num1, num2) {
//         sum = num1+num2;
//         secondFunction();
//     }
// function secondFunction() {
//     console.log('Sum: ', sum)
//   }
// firstFunction(5, 5);



// Here,
// The problem with the first example above, is that you have to call two functions to display the result.
// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.
// Now it is time to bring in a callback.



// JavaScript Callbacks:
// // 3 Two NormalFunction, secondFunction passed as argument(callback) into firstFunction:
var sum;
function firstFunction(num1, num2, callback) {
        sum = num1+num2;
        callback();
    }
function secondFunction() {
    console.log('Sum: ', sum)
  }
firstFunction(5, 5, secondFunction);


// When to Use a Callback?
// The examples above are not very exciting.
// They are simplified to teach you the callback syntax.
// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

// "I will call back later!"
//A function passed as an argument to another function is callback.