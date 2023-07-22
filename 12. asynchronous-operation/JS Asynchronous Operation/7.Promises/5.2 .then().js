// // .then() methods returns Fullfilled-PromiseObject.

// // 1. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj.then(responseData => responseData)



// 2. :
const promiseObj = new Promise((fullfil, reject) => {
    // operation or data processing (produnction code)
    setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
})
promiseObj.then(responseData => console.log(responseData))



// // 3. :
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// console.log(promiseObj.then(responseData => responseData))



// // 4:
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj.then(responseData => responseData).then( responseData => console.log("Response: ",responseData))
// // then also return ptomise object



// // 4:
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj.then(responseData => "123" ).then( responseData => console.log("Response: ",responseData))
// // then also return ptomise object



// // 5:
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj.then(responseData => console.log(responseData)).then( responseData => console.log("Response: ",responseData))
// // then also return ptomise object

// // 5:
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj.then(responseData => JSON.stringify(responseData)).then( responseData => console.log("Response: ",responseData))
// // then also return ptomise object

// // 5:
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false}), 3000)
// })
// promiseObj.then(responseData => responseData).then( responseData => console.log("Response: ",responseData))
// // then also return ptomise object



// // 6. : See the promise state in each interval, you can see in browser.
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> {
//         console.log("1")
//         fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false})
//     }, 3000)
// })
// console.log("2")
// setInterval(()=> {
//     // console.log(promiseObj)
//     promiseObj.then(x=>console.log(x))
// }, 1000);


// // 6. : See the promise state in each interval, you can see in browser.
// const promiseObj = new Promise((fullfil, reject) => {
//     // operation or data processing (produnction code)
//     setTimeout(()=> {
//         console.log("1")
//         fullfil({location: "Kathmandu", temperature: "15 Celcius", rain: false})
//     }, 3000)
// })
// console.log("2")
// setInterval(()=> {
//     console.log(promiseObj.then(responseData => responseData))
// }, 1000);
