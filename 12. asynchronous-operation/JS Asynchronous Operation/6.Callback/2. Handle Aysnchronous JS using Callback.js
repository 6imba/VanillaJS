// // 1
// var x
// console.log(1)
// setTimeout(()=> x=2, 2000) //asynchronous function that takes some time
// console.log(x)
// console.log(3)

// // 2
// var x;
// console.log(1);
// setTimeout(()=> x=2, 2000); //asynchronous function that takes some time
// var xx = () => console.log(x);
// xx()
// console.log(3);

// // 3
// var x;
// console.log(1);

// setTimeout(()=> { //asynchronous function that takes some time
//     x=2;
//     xx() // callback call
//     }, 2000);

// var xx = () => console.log(x); // callback defination
// console.log(3);

// // 4
// console.log(1);

// setTimeout(xx("data"), 2000);

// function xx(x){
//     console.log(x); // callback defination
// }
// console.log(3);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // 5
console.log(1);

setTimeout(() => xx("data"), 2000);

function xx(x){// callback defination
    console.log(x); 
}
console.log(3);

// // // here:
// //     - setTimeout: asynchronous function
// //     - () => {} inside setTimeout: Higer Order Function
// //     - xx: Callback
