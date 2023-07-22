function outerFunction(){
    let counter = 0;
    innerFunction()
    function innerFunction(){
        console.log(counter) // Functions have access to the scope "above" them.
    }
}
outerFunction()

// JavaScript supports nested functions. Nested functions have access to the scope "above" them.
// Inner,Inner,Nested function.

// function innerFunction(){
//     console.log(counter) // Functions have access to the scope "above" them.
// }
// function outerFunction(){
//     let counter = 0;
//     innerFunction()
// }
// outerFunction()