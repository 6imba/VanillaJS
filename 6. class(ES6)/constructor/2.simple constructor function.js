// # Custome module simple constructor:
function Constructor_1(){
    this.name = "Homo Sapiens";
    method_1 = function(){
        console.log("Hi")
    }
    this.method_2 = function(){
        console.log("Hi")
    }
}
const obj1 = new Constructor_1()
console.log(obj1)
console.log(typeof(obj1))
console.log(obj1 instanceof Object)
// console.log(obj1.method_1)
// console.log(obj1.method_1())
console.log(obj1.method_2)
console.log(obj1.method_2())

// // # Built-in global simple constructor:
// var a = new Object(); 
// var b = new String();
// var c = new String('Bob')
// var d = new Number();
// var e = new Number(25);
// var f = new Boolean();
// var g = new Boolean(true);
// console.log(a)
// console.log(typeof(a))
// console.log(a instanceof Object)
// console.log(b)
// console.log(typeof(b))
// console.log(b instanceof String)
// console.log(c)
// console.log(typeof(c))
// console.log(c instanceof String)
// console.log(d)
// console.log(typeof(d))
// console.log(d instanceof Number)
// console.log(e)
// console.log(typeof(e))
// console.log(e instanceof Number)
// console.log(f)
// console.log(typeof(f))
// console.log(f instanceof Boolean)
// console.log(g)
// console.log(typeof(g))
// console.log(g instanceof Boolean)

// - primitive data types vs Constructor.
// - object literals vs Object Constructor.
// - class vs Object Constructor.