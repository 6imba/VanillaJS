// - JavaScript only hoists declarations, not initializations.

// // 1.1
// var x = 1;
// var y = 2;
// console.log(`x = ${x} & y= ${y}.`)

// // 1.2
// var x = 1;
// console.log(`x = ${x} & y= ${y}.`)
// var y = 2;
// // In JavaScript variables declaerd with var keyword is hoisted to the top of their global scope and initialized with undefined.


// // 2.1
// let x = 1;
// let y = 2;
// console.log(`x = ${x} & y= ${y}.`)

// // 2.2
// let x = 1;
// console.log(`x = ${x} & y= ${y}.`)
// let y = 2;
// // In JavaScript variable declared with let and const keyword are hoisted to the top of their block scope, but not initialized(so gives error).
// // ReferenceError: Cannot access 'carName' before initialization

// // 3.1
// const x = 1;
// const y = 2;
// console.log(`x = ${x} & y= ${y}.`)

// // 2.2
// const x = 1;
// console.log(`x = ${x} & y= ${y}.`)
// const y = 2;
// // In JavaScript variable declared with let and const keyword are hoisted to the top of their block scope, but not initialized(so gives error).
// // ReferenceError: Cannot access 'carName' before initialization


// // Hoisting1:
// function func3(){
//     console.log(x)
//     let x = 3;
// }
// func3()

// // Hoisting2:
// function func3(){
//     let x = 3;
//     console.log(x)
// }
// func3()


// Hoisting1:
function func3(){
    console.log(x)
    let x = 3;
}
func3()

// Hoisting2:
function func4(){
    let x = 3;
    console.log(x)
}
func4()