// 1 Promise fullfill:
const promiseObj = new Promise((fullfil, reject) => {
    // operation or data processing (produnction code)
    fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false});
})

console.log(promiseObj)
console.log(typeof(promiseObj))
console.log(promiseObj instanceof Promise)
// promiseObj.then((responseData)=> console.log(responseData));


// --------------------------------------------------------------------------------------------------------------------------------

// // 2 Promise rejected:
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     reject({err_desc: "Promise error!"});
// })
// console.log(promiseObj);
// console.log(typeof(promiseObj));
// console.log(promiseObj instanceof Promise);
// // promiseObj.catch((responsError)=> console.log(responsError));

// --------------------------------------------------------------------------------------------------------------------------------

// // 3 Promise pending:
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })

// console.log(promiseObj)
// console.log(typeof(promiseObj))
// console.log(promiseObj instanceof Promise)

// --------------------------------------------------------------------------------------------------------------------------------
