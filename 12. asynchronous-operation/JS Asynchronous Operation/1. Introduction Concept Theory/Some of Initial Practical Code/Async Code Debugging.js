// // 1
// setTimeout(function add(x, y){
//     console.log(x+y)
//  }, 3000
// )

// // 2
// setTimeout(function (x, y){
//     console.log(x+y)
//  }, 3000
// )

// // 3
// console.log(setTimeout((x, y)=>console.log(x+y) , 3000))

// // 4
// console.log(setTimeout((x, y)=>console.log(x+y), 3000))
// setTimeout(() => console.log('Hi'), 1000)


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
