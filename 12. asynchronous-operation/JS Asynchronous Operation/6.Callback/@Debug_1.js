// // # get data from server takes some time. That why we are mimicing it.

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




// // 2
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
// setInterval(()=>console.log(x), 1000)
// // You see server takes send data after 3 second. This is an issue if we need that data before 3 second






// // 1 Debiug1
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
//     console.log(data)
// }
// getPostFromServer()



// // 1 Debiug2
// const posts = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function getPostFromServer(){
//     const data = [];
//     setTimeout(() => {
//         posts.forEach((item)=>data.push(item));
//         console.log(data);
//     }, 3000)
// }
// getPostFromServer()



// // 1 Debiug3
// const posts = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function getPostFromServer(){
//     const data = [];
//     setTimeout(() => {
//         posts.forEach((item)=>data.push(item));
//         console.log(data);
//     }, 3000)
// }
// console.log(getPostFromServer())



// // 1 Debiug4
// const posts = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function getPostFromServer(){
//     const data = [];
//     setTimeout(() => {
//         posts.forEach((item)=>data.push(item));
//         console.log(data);
//     }, 3000)
//     return data;
// }
// console.log(getPostFromServer())


// // 1 Debiug4
// const posts = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function getPostFromServer(){
//     setTimeout(() => {
//         return posts;
//     }, 3000)
// }
// console.log(getPostFromServer())


// // 1 Debiug4
// const posts = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function getPostFromServer(){
//     return setTimeout(() => {
//         return posts;
//     }, 3000)
// }
// console.log(getPostFromServer())
