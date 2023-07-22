// 1
// function getData(){
//     setTimeout(()=>[1,2,3,4,5,6], 3000)
// }
// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')

// // 2
// function getData(){
//     return [1,2,3,4,5,6];
// }
// console.log('1')
// console.log('2')
// setTimeout(()=>console.log(getData()), 3000)
// console.log('3')
// console.log('4')

// // 3 Synchronous
// console.log('1')
// for(let i=0; i<=10; i++){
//     console.log("OOO")
// }
// console.log('2')

// 4 Asynchronous
console.log('Hello worl 1')
setTimeout(()=> {for(let i=0; i<=10; i++){
    console.log("*")
}})
console.log('Hello worl 2')