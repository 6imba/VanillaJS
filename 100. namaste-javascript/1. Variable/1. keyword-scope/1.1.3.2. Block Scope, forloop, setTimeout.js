// // Global Scope:
//     for(i=1;i<5;i++){
//         console.log(i)
//         x = 100;
//     }
//     console.log("*************")
//     console.log(i)
//     console.log("*************")
//     console.log(x)
//     console.log("*************")



// // Global Scope:
// for(var i=1;i<5;i++){
//     console.log(i)
//     var x = 100;
// }
// console.log("*************")
// console.log(i)
// console.log("*************")
// console.log(x)
// console.log("*************")



// // Block Scope:
// for(let i=1;i<5;i++){
//     console.log(i)
//     let x = 100;
// }
// console.log("*************")
// console.log(i)
// console.log("*************")
// console.log(x)
// console.log("*************")



// // Block Scope:
// for(let i=1;i<5;i++){
//     console.log(i)
//     let x = 100;
// }
// console.log("*************")
// try{
//     console.log(i,x)
//     console.log("*************")
//     console.log(x)
//     console.log("*************")
// }catch(errorObj){
//     console.log(errorObj.message)
// }




// // Block Scope:
// for(let i=1;i<5;i++){
//     console.log(i)
//     const x = 100;
// }
// console.log("*************")
// console.log(x)
// console.log("*************")


// // # 1:
// for(i=0;i<5;i++){
//     console.log(i)
// }

// // # 2:
// for(var i=0;i<5;i++){
//     console.log(i)
// }

// // # 3:
// for(var i=0;i<5;i++){
//     setTimeout(()=>console.log(i), 2000)
// }

// // # 4:
// for(var i=0;i<5;i++){
//     setTimeout(()=>console.log(i), `${i}000`)
// }

// // # 5:
// for(let i=0;i<5;i++){
//     setTimeout(()=>console.log(i), `${i}000`)
// }


// // # 6:
// for(var i=0;i<5;i++){
//     (function(j){
//         setTimeout(()=>console.log(j), `${i}000`)
//     })(i)
// }

// // # 7:
// for(var i=0;i<5;i++){
//     (function(j){
//         setTimeout(()=>console.log(j), `${j}000`)
//     })(i)
// }

// // # 8:
// for(var i=0;i<5;i++){
//     (function(j){
//         setTimeout(()=>console.log(i), `${j}000`)
//     })(i)
// }

// // # 8:
// for(var i=0;i<5;i++){
//     (function(j){
//         setTimeout(()=>console.log(i), `${i}000`)
//     })(i)
// }
