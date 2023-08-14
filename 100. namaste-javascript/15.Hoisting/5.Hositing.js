//invoke variable&function //output
console.log(x); //undefined
// console.log(y); //ReferenceError: Cannot access 'y' before initialization at Object.<anonymous>
// console.log(z); //ReferenceError: Cannot access 'z' before initialization at Object.<anonymous>
// console.log(func1); //[Function: func1]
// console.log(func2); //undefined
// console.log(func3); // ReferenceError: Cannot access 'func3' before initialization at Object.<anonymous>
// console.log(func4); // ReferenceError: Cannot access 'func4' before initialization at Object.<anonymous>
// console.log(func5); //undefined
// console.log(func6); //ReferenceError: Cannot access 'func6' before initialization at Object.<anonymous>
// console.log(func7); //ReferenceError: Cannot access 'func7' before initialization at Object.<anonymous>
console.log(Apple); //ReferenceError: Cannot access 'Apple' before initialization at Object.<anonymous>
var x = 11;
let y = 12;
const z = 13;
function func1(){
    console.log("Hi function_1 !");
}
var func2 = function (){
    console.log("Hi function_2 !");
}
let func3 = function(){
    console.log("Hi function_3 !");
}
const func4 = function(){
    console.log("Hi function_4 !");
}
var func5 = () => {
    console.log("Hi function_5 !");
}
let func6 = () => {
    console.log("Hi function_6 !");
}
const func7 = () => {
    console.log("Hi function_7 !");
}
class Apple{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}