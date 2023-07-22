function sortArr(base){
    console.log(base)
    let sortName = arr1.map(obj=>obj[base]).sort()
    let sortList = sortName.map((name) => arr1.find((obj1) => obj1[base] == name))
    return sortList
}

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

console.log(arr1)
// const sortList = sortArr('fname')
const sortList = sortArr('lname')
console.log(sortList)

