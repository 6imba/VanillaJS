// // const x; //declare
// const x = 1; //declare & assign
// // const x = 12; // re-declare
// // x = 3; //re-assign

// let y;//declare
// // let y = 1; // re-declare & assign
// // let y = 2; //re-declare  & re-assign
// y = 3; // re-assign

// var z; // declare
// var z = 1; // re-declare and assign
// var z = 2; // re-declare and re-assign
// z = 3; // re-assign


// Scope Chain: Chain of Lexical_Environment holding references to its parent Lexical_Environment ==> Scope -> Execution_Context -> Memory -> Lexical Environment -> Chaining.
    // Lexical_Environment is Local Memory Space alnog with Reference to its parent Lexical_Environment.
    // Lexical_Environment is created when ever Execution environment is created.
// func1()
// function func1(){
//     let x = 1;
//     func2()
//     function func2(){
//         // let x = 2;
//         func3()
//         function func3(){
//             // let x = 3;
//             console.log(x)
//         }
//     }
// }

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