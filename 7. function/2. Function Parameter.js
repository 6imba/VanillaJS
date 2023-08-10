// - Function Parameters and Arguments
// - No specify data types for parameters, No check the number of parameters.
// - If a function is called with missing arguments (less than declared), the missing values are set to undefined.
// - ECMAScript 2015 allows default parameter values in the function declaration: const fun1 = (x, y = 2) => // function code
// - The Arguments Object: JavaScript functions have a built-in object called the arguments object.
// - In JavaScript function is an object. And this function object has a property of object type called argument.
// - The argument object contains an array of the arguments used when the function was called (invoked).

const fun1 = function (a, b, c) {
    console.log(arguments)
    console.log(typeof(arguments))
    console.log(arguments instanceof Array)
    console.log(arguments instanceof Object)
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(a)
    console.log(b)
    console.log(c)
}
fun1(2,4,8)

// - JavaScript arguments are Passed by Value:
// - JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations. If a function changes an argument's value, it does not change the parameter's original value.
