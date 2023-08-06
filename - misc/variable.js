// var x = 2;
// console.log(x)
// var x = 5;
// console.log(x)
// let x = 7;
// console.log(x)

// let x = 5;
// console.log(x)
// let x = 7;
// console.log(x)

// let x = 5;
// console.log(x)
// x = 7;
// console.log(x)

// const x = 3;
// x=2;

// // global scope
// {
//     var x= 5;
// }
// console.log(x)

// // global scope
// {
//     x= 5;
// }
// console.log(x)
// // global scope

// // block scope
// {
//     let x = 5;
// }
// console.log(x)

// // block scope
// {
//     const x = 5;
// }
// console.log(x)

// var x;
// console.log(x)

// var:
//     - re_declare
//     - re_assign
//     - global scope
    
// let:
//     - cannot re_declare
//     - but re_assign
//     - block scope
    
// const:
//     - cannot re_declare
//     - cannot re_assign
//     - declare and assign at the same time
//     - block scope
//     - CAPITALIZED identifier
//     - As a general rule, always declare a variable with const unless you know that the value will change.

// - re_declare ==> var x;
// - re_assign ==> x = value;

// - It does not define a constant value. It defines a constant reference to a value.

// - Global Scope
// - Block Scope
// - Function Scope

// - Variables defined with var are hoisted to the top and can be initialized at any time.
// - Variables defined with let are also hoisted to the top of the block, but not initialized.
// - Variables defined with const are also hoisted to the top, but not initialized.

// - Hoisting is JavaScript's default behavior of moving declarations to the top.

// Variables declared with var, let and const are quite similar(function scope) when declared inside a function.
// var x = 2
// function a(){
//     var x =3;
// }
// a()
// console.log(x)
// var x = 2

// - If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
// var x =2;
// function a(){
//     x=3;
// }
// a()
// console.log(x)


console.log("1")
setTimeout(()=>console.log("QE1"), 4000)
console.log("2")
setTimeout(()=>console.log("QE2"), 2000)
console.log("3")