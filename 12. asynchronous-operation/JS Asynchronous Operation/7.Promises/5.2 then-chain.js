// // 1. Initial:
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj.then(responseData => responseData).then( responseData => console.log("Response: ",responseData))
// // then also return promise_object. So we can again use .then() method to handle promise object to handle promise_object returned by then() itself.

// // 2. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj.then(responseData => console.log(responseData))

// // 2. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj.then(responseData => responseData)

// // 2. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// console.log(promiseObj.then(responseData => responseData))


// // 3. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj.then(responseData => responseData) // return promise object
//     .then( responseData => console.log("Response: ",responseData))


// // 3. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj
    // .then(responseData => `Response: ${responseData}`) // return promise object
//     .then( responseData => console.log(responseData))


// // 3. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj
//     // .then(responseData => `Response: ${responseData}`) // return promise object
//     // .then(responseData => console.log(`Response: ${responseData}`)) // return promise object
//     // .then(responseData => console.log(responseData)) // return promise object
//     .then( responseData => console.log(responseData))

// // 3. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj
//     .then( responseData => console.log(responseData))



// // 3. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj
//     .then(responseData => console.log(`Response: ${responseData}`)) // return promise object
//     // .then( responseData => console.log(responseData))



// // 3. : .then() method returns Promise-Object.
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj
//     .then(responseData => `Response: ${responseData}`) // return promise object
//     .then( responseData => console.log(responseData))


// // 4. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
//     .then(responseData1 => responseData1) // this .then() is to handle promise retuened by promise-constructor: Promise(). // this .then() also returns promise object with responseData1 as response.
//         .then( responseData2 => console.log("Response: ",responseData2)) // this .then() is to handle promise retuened by  .then() above this .then(). // this .then() also returns promise object but with no response as nothing is returned inside  this .then() method, only console.


// // 4. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
//     .then(responseData1 => responseData1) // this .then() is to handle promise retuened by promise-constructor: Promise(). // this .then() also returns promise object with responseData1 as response.
//         .then( responseData2 => console.log(`Response: ${JSON.stringify(responseData2)}`)) // this .then() is to handle promise retuened by  .then() above this .then(). // this .then() also returns promise object but with no response as nothing is returned inside  this .then() method, only console.


