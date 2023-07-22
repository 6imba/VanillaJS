// // 1:
// function resolvedAfter3Second(){
//     console.log('2')
//     return new Promise((fullfil, reject) => {
//         console.log('3')
//         setTimeout(fullfil("Response-Resolved-Result-Data"), 3000)
//         console.log('4')
//     }
//     )
// }
// function getResolvedData(){
//     console.log('1')
//     const rrrd = resolvedAfter3Second();
//     console.log(rrrd)
//     console.log('5')
// }
// getResolvedData()

// // ------------------------------------------------------------------------------------------------------------------------------------


// // 2.1:
// function resolvedAfter3Second(){
//     console.log('2')
//     return new Promise((fullfil, reject) => {
//         console.log('3')
//         setTimeout(() => fullfil("Response-Resolved-Result-Data"), 3000)
//         console.log('4')
//     }
//     )
// }
// function getResolvedData(){
//     console.log('1')
//     const rrrd = resolvedAfter3Second();
//     console.log(rrrd)
//     console.log('5')
// }
// getResolvedData()



// // 2.2:
// function resolvedAfter3Second(){
//     console.log('2')
//     return new Promise((fullfil, reject) => {
//         console.log('3')
//         setTimeout(() => fullfil("Response-Resolved-Result-Data"), 3000)
//         console.log('4')
//     }
//     )
// }
// function getResolvedData(){
//     console.log('1')
//     const rrrd = resolvedAfter3Second();
//     console.log(rrrd)
//     setTimeout(()=>console.log(rrrd), 5000)
//     console.log('5')
// }
// getResolvedData()



// 3: use of asyn and await:
function resolvedAfter3Second(){
    console.log('2')
    return new Promise((fullfil, reject) => {
        console.log('3')
        setTimeout(() => fullfil("Response-Resolved-Result-Data"), 3000)
        console.log('4')
    }
    )
}
async function getResolvedData(){
    console.log('1')
    const rrrd = await resolvedAfter3Second();
    console.log(rrrd)
    console.log('5')
}
getResolvedData()


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// async is the keyword that indicates a function will contain the promise-object return by an asynchronous, inside it.
// annd await is the keyword that indicate the statement that will call asynchronous and hold the promise-object when return.

