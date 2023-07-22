// JavaScript Closures
    // - JavaScript variables can belong to the local or global scope.
    // - Global variables can be made local (private) with closures.
    
    // - A function can access all variables defined inside the function.
    // - A function can also access variables defined outside the function.

    // -In browser, global variables belong to the window object.

    // Variable Lifetime:
        // Global variables live until the page is discarded, like when you navigate to another page or close the window.
        // Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

// # Example of closure with self invoking function:
    // const add = (function () {
    //     let counter = 0;
    //     return function () {counter += 1; return counter;}
    // })();
    // console.log(add())
    // console.log(add())
    // console.log(add())


    // Here:
        // first, this self invoking function runs first.
        // (function () {
        //     let counter = 0;
        //     return function () {counter += 1; return counter;}
        // })();
        // Then the returned value by this self_invoking function is hold by variable add.
        // this self invoking function return inner anonomous function which is hold by add variable.
        // Therefore add = function () {counter += 1; return counter;}
        // here counter is declare and assign only once, at a time when self invoking function get excuted at first.
        // the later calling add function just increment counter variable outside the this function returned by self invoking function as we know that Functions have access to the scope "above" them.



// const myArray = [10, 12, 15, 21];
// for (var i = 0; i < myArray.length; i++) {
//   setTimeout(function() {
//        console.log(`Current index is ${i} and the element is ${myArray[i]}`);
//   }, 3000);
// }

// const myArray = [10, 12, 15, 21];
// for (var i = 0; i < myArray.length; i++) {
//     function close(r){
//         setTimeout(function() {
//             console.log(`Current index is ${r} and the element is ${myArray[r]}`);
//        }, 3000);     
//     }
//     close(i)
// }
// This is because at the time for loop finish iterating, value of iterator is setted as 4 within fraction of milisecond. But our  callback in asynchronous setTimeout are placed in callstack which get execute after 3000 milisecond which prints 4 as value of i.
// That is because each iteration increases the value of iterator"i".
// So we can solve this problem by keep the asynchronous setTimeout inside a nested function and pass i as argument into that nested function.
// As we know that in Javascript function argument are passed by value. So in each iteration new increment value is passed.



const myArray = [10, 12, 15, 21];
for (let i = 0; i < myArray.length; i++) {
  setTimeout(function() {
       console.log(`Current index is ${i} and the element is ${myArray[i]}`);
  }, 3000);
}
// We can also solve this by replacing var keyword with let while assigning iterator"i" in For loop.
// As we know that variable defined with var keyword has block scope and variable defined with let keyword has block scope.
// So, value of i for each iteration is uniquely pass by value while incase of var it was pass by reference to i.