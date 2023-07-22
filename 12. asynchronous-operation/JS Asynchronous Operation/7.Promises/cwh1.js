// Promise constructor returns promise object:
    // promise object has two properties:
        // - state: either of one (Pending, Fulfilled, Rejected)
        // - result: either of one (undefined, value, error-object)
    // promise object can be one of them: Pending,Fulfilled, Rejected
    // You cannot access the Promise properties state and result.
    // promise object is constructed using new-Promise()-constructor
    // You must use a Promise method to handle promises: then, catch

// //-----------------------------------------------------------------------------------------------------------------------------------

// // Test_1: Promise Fullfill
// function func1(){
//     return new Promise(function(resolve, reject){
//         console.log("Promise producing code getting executed!");
//         setTimeout(()=>{
//             if(true){
//                 console.log("Promise Fulfilled!");
//                 resolve();
//             }else{
//                 console.log("Promise Rejected!");
//                 reject();
//             }
//         }, 3000)
//     })
// }
// func1()
//     .then(()=>console.log("Consuming code(then) executed as Promise is Fullfilled"))
//     .catch(()=>console.log("Consuming code(catch) executed as Promise is Rejected"))

// //-----------------------------------------------------------------------------------------------------------------------------------

// // Test_2: Promise Rejected
// function func2(){
//     return new Promise(function(resolve, reject){
//         console.log("Promise producing code getting executed!");
//         setTimeout(()=>{
//             if(false){
//                 console.log("Promise Fulfilled!");
//                 resolve();
//             }else{
//                 console.log("Promise Rejected!");
//                 reject();
//             }
//         }, 3000)
//     })
// }
// func2()
//     .then(()=>console.log("Consuming code(then) executed as Promise is Fullfilled"))
//     .catch(()=>console.log("Consuming code(catch) executed as Promise is Rejected"))

// //-----------------------------------------------------------------------------------------------------------------------------------

// Test_3: Promise Status and Value:
function func2(){
    console.log("Asynchronous Function")
    return new Promise(function(status_fulfilled, status_rejected){
        console.log("Promise producing code getting executed!");
        setTimeout(()=>{
            if(true){
                console.log("Promise Fulfilled!");
                status_fulfilled("Value_Data");
            }else{
                console.log("Promise Rejected!");
                status_rejected("Error_Object");
            }
        }, 3000)
    })
}
func2()
    .then((value)=>console.log("Consuming code(then) executed as Promise is Fullfilled:", value))
    .catch((error)=>console.log("Consuming code(catch) executed as Promise is Rejected:", error))
console.log("hi")
//-----------------------------------------------------------------------------------------------------------------------------------

// Some notes:
    // Pending is return untill Fullffill or Rejected status is returned while promise producing code is being excuted.
    // Here func1 is Asynchronous is it returns promise object.(WKT asynchronous function return promise)

//-----------------------------------------------------------------------------------------------------------------------------------
