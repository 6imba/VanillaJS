// function sortArr1(){
//     let test = arr1.map(obj=>obj.fname).sort()
//     return test.map(fname=>arr1.reduce()).sort()
// }

const arr1 = [
    {
        id: 1,
        fname: 'Hari',
        lname: 'Upadya',
    },
    {
        id: 2,
        fname: 'Amir',
        lname: 'Shrestha',
    },
    {
        id: 3,
        fname: 'Roman',
        lname: 'Reinge',
    },
]

// console.log(arr1)
// const arr2 = sortArr1()
// console.log(arr2)

let x = arr1.reduce(obj1 => obj1.fname == "Amir")
console.log(x)
