// 1. functions only runs when we call it.
// 2. but how can we call a function who doesnt even have a name.
// 3. i.e: how do we call anonomous function?
// 4. solution_1 we can either assisgn anonomous function into a variable and later call varible with parenthesis.
// 5. solution_2 or pass anonomous function as callback to asynchronomous function which runs callback along paralally with it.
// 6. solution_3 or pass anonomous function as callback to promises.
// 7. solution_4 or make anonomous function as self-invoking function.


// Now lets get into depth:

// // 1. functions only runs when we call it.
// function add(x, y){
//     console.log(x+y)
// }
// add(3,5);



// 2. but how can we call a function who doesnt even have a name.
// 3. i.e: how do we call anonomous function?
// function (x, y){
//     console.log(x+y)
// }
// ??????





// // 4. solution_1 we can either assisgn anonomous function into a variable and later call varible with parenthesis. and arguments if needed.
// const myAdd = function add(x, y){
//                   console.log(x+y)
//                }
// myAdd(3,5);




// // 5. solution_2 or pass anonomous function as callback to asynchronomous function which runs calback along paralally with it.
// // Some of asynchronomous function: setTimeout, setInterval
// setTimeout(function add(){
//                   console.log(3+5)
//                }, 3000
// )


// setTimeout() ==> The setTimeout function is a native JavaScript function. It sets a timer (a countdown set in milliseconds) for an execution of a callback function, calling the function upon completion of the timer.

// // 5.  pass anonomous function as callback to asynchronomous function:
//     setTimeout(() => console.log("Hi"), 1000)
//     .then(() => console.log("Yes"))
//     .catch((err) => console.log("No"));

// here, setTimeout, then, catch all are asynchronomous

// // 5.  pass anonomous function as callback to asynchronomous function:
// setTimeout(function() { myFunction("I love me !!!"); }, 3000);
// function myFunction(value) {
//   console.log(value)
// }

// 6. solution_3 or pass anonomous function as callback to promises.

// 7. solution_4 or make anonomous function as self-invoking function.
(function myFunction(value = 99999) {
  console.log(value)
})()


