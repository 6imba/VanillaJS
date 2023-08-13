// // > let: no re-declare same scope
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

// > var: re-declare in same scope
    // let x = 5;
    // console.log(x)
    // x = 7;
    // console.log(x)

// const: no re-assigned.
    // const x = 3;
    // x=2;

// // var: global-scope in block scope(not incase of function)
//     if(true){
//         var x= 5;
//     }
//     console.log(x)

// // var: global-scope(not incase of function)
// function test()
//     {
//         var var1= 5;
//     }
// console.log(var1)

// // default var: global-scope (variable defined with no keyword)
// if(true){
//     x= 5;
// }
// console.log(x)

// // let: block scope
//     {
//         let x = 5;
//     }
//     console.log(x)

// // var: possible to declare only.
//     var x;
//     console.log(x)

// // const x; //declare
// const x = 1; //declare & assign
// // const x = 12; // re-declare
// x = 3; //re-assign

// let y;//declare
// let y = 1; // re-declare & assign (to define value you dont need to write keyword again, if you write keyword the it means you to declaring variable)
// let y = 2; //re-declare  & re-assign
// y = 3; // re-assign

// var z; // declare
// var z = 1; // re-declare and assign
// var z = 2; // re-declare and re-assign
// z = 3; // re-assign

// var:
//     - re_declare
//     - re_assign
//     - global-scope(not incase of function)
    
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
