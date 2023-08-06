// // 1 Block Scope:

// 1.1 if condition:
if (true){ // block of if statement.
    var x = 1; // global variable with global scope
    // let x = 2; // local variables with block scope.
    // const x = 3; // local variables with block scope.
    // x = 4; // global variable with global scope
}
console.log(x);



// // 1.2 switch condition:
// switch (true) {
//   case true:
//     x = "Off";
//     // var x = "Off";
//     // let x = "Off";
//     // const x = "Off";
//     break;
// }
// console.log(x);



// // 1.3 for loop:
// for (let i = 0; i < 5; i++) { // block of for loop.
//     x = 1; // global variable with global scope
//     // let x = 2; // local variables with block scope.
//     // const x = 3; // local variables with block scope.
//     // var x = 4; // global variable with global scope
//   }
// console.log(x);



// // 1.4 while loop:
// let i = 0;
// while (i < 10) {
//     x = 1; // global variable with global scope
//     // let x = 2; // local variables with block scope.
//     // const x = 3; // local variables with block scope.
//     // var x = 4; // global variable with global scope
//     i++;
//   }
// console.log(x);



// // 1.5 do while loop:
// let i = 0;
// do {
//     x = 1; // global variable with global scope
//     // let x = 2; // local variables with block scope.
//     // const x = 3; // local variables with block scope.
//     // var x = 4; // global variable with global scope
//     i++;
//   }
// while (i < 10);
// console.log(x);

// *******************************************************************************************************************************************************************************

// # JS Scope:
// 	- Scope determines the accessibility (visibility) of variables.
// 	- JavaScript has 3 types of scope: Global Scope, Block Scope, Function Scope.

// # Block Scope:
// 	- Variables declared inside a { } block cannot be accessed from outside the block.
// 	- A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop.

// # Who have Block Scope?
// 	- Varible declare with let, const keyword,
// 	- Varible declare inside block{} with let, const keyword,
// 	- Varible declare within a JavaScript function,

// 	- Variables declared with the var keyword inside block{}, can NOT have block scope instead has has global scope.
// 	- Block Scope: variable:let,const && condition:if(){},switch(){} && loop:for(){},while(){},do{}.

// # What determinses the scope of any variable?
// 	- Where it is declared? (inside function, within block{}, outside any kind of block|function)?
// 	- What keyword is used while declaring corresponding variable?
