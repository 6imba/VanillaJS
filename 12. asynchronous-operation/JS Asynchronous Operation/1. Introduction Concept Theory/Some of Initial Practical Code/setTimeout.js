setTimeout(() => 25, 3000);

// setTimeout() ==> asynchronous
// () => 25 ==> callback

// // 1
// x = setTimeout(() => 25, 3000);
// console.log(x)

// // 2
// var x;
// setTimeout(() => 25, 3000);
// console.log(x)

// // 3
// var x;
// setTimeout(() => x=25, 3000);
// console.log(x)


// asynchronous function execute callback after some time, and that callback return some value what if need that reurned value by callback for other operation.



// setTimeout is an asynchronous funtion which takes time to return resopnse but doesnt stop the program execution flow.


// 1
function fun(){
    setTimeout(()=> console.log('2'), 3000)
}
console.log('1')
fun()
console.log('3')


// // 2
// async function fun(){
//     await setTimeout(()=> console.log('2'), 3000)
// }
// console.log('1')
// fun()
// console.log('3')