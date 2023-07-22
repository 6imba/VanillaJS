// // 1
// const posts = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function getPostFromServer(){
//     const data = [];
//     setTimeout(() => {
//         posts.forEach((item)=>data.push(item))
//     }, 3000)
//     return data;
// }
// var x = getPostFromServer()
// console.log(x)




// // extra dont see now. (return & await)
const posts = [
    {id: 1, title: "Post_1"},
    {id: 2, title: "Post_2"},
    {id: 3, title: "Post_3"}
]
async function getPostFromServer(){
    const data = [];
    setTimeout(() => {
        posts.forEach((item)=>data.push(item))
    }, 3000)
    return await data;
}
var x = getPostFromServer()
x.then((resData)=> console.log(resData))

