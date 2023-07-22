
//     // <title>ArrowFunction</title>

//       // alert("Hi"); //In this node.js IDE you can display output only in the console.
//       //The alert() function is a property of browser window objects. It is not really part of JavaScript; it's just a facility available to JavaScript code in that environment.


//       function add1() {
//         return 2 + 3;
//       }
//       alert(add1());

//       //   let arrowAdd11 = () => {
//       //     return 2 + 3;
//       //   };
//       //   alert(arrowAdd11()); previous needed {curly brackets} & return but not now

//       let arrowAdd1 = () => 2 + 3; //arrow function without prameters //Arrow Functions Return Value by Default // This works only if the function has only one statement
//       alert(arrowAdd1());

//       function show(x) {
//         return x;
//       }
//       alert(show(1010101010));

//       let arrowAhow1 = (x) => x;
//       alert(arrowAhow1(2));

//       let arrowAhow2 = (x) => x; // if you have only one parameter, you can skip the parentheses
//       alert(arrowAhow2(20202020202200));

//       function add2(x, y) {
//         return x + y;
//       }
//       alert(add2(4, 7));

//       let arrowAdd2 = (x, y) => x + y; //arrow function with prameters
//       alert(arrowAdd2(8, 7));

//       function sub(x, y) {
//         let z = x - y;
//         alert(z);
//       }
//       sub(99, 6);

// // <!-- note -->
// // <!-- normalFunction doesnt ends with ;(semi-column) but arrowFunctom need to end with ;(semi-column) -->
// // <!-- syntax -->
// // <!-- let funcName = (arg1, arg2, ..., argN) => expression -->
// // <!-- If we have only one argument, then parentheses around parameters can be omitted -->
// // <!-- If there are no arguments, parentheses will be empty (but they should be present) -->
// // <!-- Define function using functionDeclaration(normal_function), functionExpressionWithCurly&Return, functionExpressionWithArowNoCurly&Return, functionConstructor. -->
// // <!-- use switch syntax if needed condition in arrowFunction -->
// // <!-- Multiline arrow functions i.e function with multiple expressions or statements, needs {statements and also return(if need to return any value)}; enclosed in curly braces -->
// // <!-- Arrow functions are handy for one-liners. They come in two flavors: -->
// // <!-- Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. -->
// // <!-- With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something. -->

// // <!-- https://javascript.info/arrow-functions-basics -->
// // <!-- see task portion of this url -->

// // <!-- if you need to store return or call value by arrowFunction:let arrowAdd2 = (x, y) => x + y; -->
// // <!-- if you just need to execute arrowFunction somewhere: (x, y) => x + y; -->



// function add(...nums) {
//   let total = nums.reduce(function(x,y){
//     return x+y;
//   })
//   console.log(total);
//   console.log(typeof(total));
// }
// add(2,4,6,8);




// ***************************************************************************************************************************


// 1
// normal function with multiple_parameter & multiple_statement assigned into function_name add1.
function add1(x, y){
  let z = x + y;
  return z;
}
console.log(add1(2,5));

// arrow function with multiple_parameter & multiple_statement assigned into variable_name add2.
let add2 = (x, y) =>{
  let z = x + y;
  return z;
}
console.log(add2(2,5));
// *remove function name.


// 2
// normal function with multiple_parameter & single_statement assigned into function_name add3.
function add3(x, y){
  return x + y;
}
console.log(add3(2,5));

// arrow function with multiple_parameter & single_statement(needs no return) assigned into variable_name add4.
let add4 = (x, y) => x + y;
console.log(add4(2,5));
// *remove return keyword.


// 3
// normal function with single_parameter.
function greet1(name){
  console.log('Namaste,',name, '.');
}
greet1('Ali');

// arrow function with single_parameter.
let greet2 = name => console.log('Namaste,',name, '.');
greet2('Ali');
// console.log(greet2('Ali')); //undefined //as we know that if return has not been defined in function explicitly, function return undefined implicitly.
// *removed parenthesis.


// 4
// normal function with no_parameter.
function func1(){
  console.log('Welcome !');
}
func1();

// arrow function with no_parameter.
let func2 = () => console.log('Welcome !');
func2();


// // 5
// // anonomous function in addEventListener:
// document.addEventListener('click', function(){
//   console.log('Click');
// })

// // arrow function of anonomous function in addEventListener:
// document.addEventListener('click', () => console.log('Click'))



// 6
// anonomous function in object methods:
// const person1 = {
//   fName: "Amir",
//   lName: "Shrestha",
//   fullName: function (){
//     return this.fName + ' ' + this.lName;
//   }
// }
// let result1 = person1.fullName();
// console.log(result1);

// // arrow function of anonomous function:
// const person2 = {
//   fName: "Amir",
//   lName: "Shrestha",
//   fullName: () => this.fName + ' ' + this.lName
// }
// let result2 = person2.fullName();
// console.log(result2);

// *arrow function takes this keyword as normal




// Differences & Limitations:
// Does not have its own bindings to this or super, and should not be used as methods.
// Does not have new.target keyword.
// Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Can not be used as constructors.
// Can not use yield, within its body.


//https://www.w3schools.com/js/js_arrow_function.asp