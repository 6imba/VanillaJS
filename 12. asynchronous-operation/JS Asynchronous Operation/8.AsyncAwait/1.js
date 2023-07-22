// get data from server takes some time. That why we are mimicing it.

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

// // 1
// const posts = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// async function getPostFromServer(){
//     const data = [];
//     setTimeout(() => {
//         posts.forEach((item)=>data.push(item))
//     }, 3000)
//     return data;
// }
// var x = getPostFromServer()
// console.log(x)



// // 1
// const posts = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// async function getPostFromServer(){
//     const data = [];
//     await setTimeout(() => {
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
// console.log(x)
// setTimeout(()=>console.log(x), 4000)
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



// // 3.1
// const serverPostData = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function retrivePostFromServer(){
//     const data = [];
//     setTimeout(() => {
//         serverPostData.forEach((item)=>data.push(item))
//     }, 3000)
//     return data; //here data is loaded after 3000 milisecond but data is return before given time period
// }
// var serverData = retrivePostFromServer()
// console.log(serverData)
// setInterval(()=>console.log(serverData), 5000) // we cannot get updated data


// // 3.2
// const serverPostData = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function retrivePostFromServer(){
//     const data = [];
//     setTimeout(() => {
//         serverPostData.forEach((item)=>data.push(item));
//         return data; //here data is loaded after 3000 milisecond & also data is return after given time period (3000 milisecond)
//     }, 3000)
// }
// var serverData = retrivePostFromServer()
// setInterval(()=>console.log(serverData), 1000) // we cannot get updated data


// // 3.3
// const serverPostData = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function retrivePostFromServer(){
//     console.log("2")
//     const data = [];
//     setTimeout(() => {
//         serverPostData.forEach((item)=>data.push(item));
//         console.log("7")
//         return data; //here data is loaded after 3000 milisecond & also data is return after given time period (3000 milisecond)
//     }, 3000)
//     console.log("3")
// }
// console.log("1")
// var serverData = retrivePostFromServer()
// console.log("4")
// setInterval(()=>console.log(serverData, "***********6"), 1000) // we cannot get updated data
// console.log("5")


// // 3.4
// const serverPostData = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function retrivePostFromServer(){
//     console.log("2")
//     const data = [];
//     setTimeout(() => {
//         serverPostData.forEach((item)=>data.push(item));
//         console.log("7")
//         return data;
//     }, 3000)
//     console.log("3")
// }
// console.log("1")
// var serverData = retrivePostFromServer() // here before data is returned by a function(retrivePostFromServer) after 3000 milisecond code excution comes out of the function and even when function returns data after 3000 milisecond this variable(serverData) cant hold that return value.
// console.log("4")
// setInterval(()=>console.log(serverData, "***********6"), 1000) // we cannot get updated data
// console.log("5")



// $ here before data is returned by a function(retrivePostFromServer) after 3000 milisecond,
// code excution comes out of the function and even when function returns data after 3000 milisecond,
// this variable(serverData) cant hold that return value.
// So here come the use of await and async

// // 3.5
// const serverPostData = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// async function retrivePostFromServer(){
//     console.log("2")
//     const data = [];
//     setTimeout(() => {
//         serverPostData.forEach((item)=>data.push(item));
//         console.log("7")
//         return data;
//     }, 3000)
//     console.log("3")
// }
// console.log("1")
// var serverData = retrivePostFromServer() // here before data is returned by a function(retrivePostFromServer) after 3000 milisecond code excution comes out of the function and even when function returns data after 3000 milisecond this variable(serverData) cant hold that return value.
// console.log("4")
// setInterval(()=>console.log(serverData, "***********6"), 1000) // we cannot get updated data
// console.log("5")


// // 3.6
// const serverPostData = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// async function retrivePostFromServer(){
//     console.log("2")
//     const data = [];
//     await setTimeout(() => {
//         serverPostData.forEach((item)=>data.push(item));
//         console.log("7")
//         return data;
//     }, 3000)
//     console.log("3")
// }
// console.log("1")
// var serverData = retrivePostFromServer() // here before data is returned by a function(retrivePostFromServer) after 3000 milisecond code excution comes out of the function and even when function returns data after 3000 milisecond this variable(serverData) cant hold that return value.
// console.log("4")
// setInterval(()=>console.log(serverData, "***********6"), 1000) // we cannot get updated data
// console.log("5")


// // 3.7
// const serverPostData = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// async function retrivePostFromServer(){
//     console.log("2")
//     const data = [];
//     await setTimeout(() => {
//         serverPostData.forEach((item)=>data.push(item));
//         console.log("7")
//         return data;
//     }, 6000)
//     console.log("3")
// }
// console.log("1")
// console.log(retrivePostFromServer()) //Promise { <pending> }
// // var serverData = retrivePostFromServer() // here before data is returned by a function(retrivePostFromServer) after 3000 milisecond code excution comes out of the function and even when function returns data after 3000 milisecond this variable(serverData) cant hold that return value.
// console.log("4")
// // setInterval(()=>console.log(serverData, "***********6"), 1000) // we cannot get updated data
// console.log("5")



// // Then try this?
// // 3.8
// const serverPostData = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function retrivePostFromServer(){
//     const data = [];
//     setTimeout(() => {
//         serverPostData.forEach((item)=>data.push(item));
//         return data; //here data is loaded after 3000 milisecond & also data is return after given time period
//     }, 3000)
// }
// function createPostIntoServer(post){
//     setTimeout(() => serverPostData.push(post), 5000)
// }
// var serverData = retrivePostFromServer()
// createPostIntoServer({id: 4, title: "Post_4"}) // create data takes 5 second time
// setInterval(()=>console.log(serverData), 1000) // we cannot get updated data



// // 4
// const serverPostData = [
//     {id: 1, title: "Post_1"},
//     {id: 2, title: "Post_2"},
//     {id: 3, title: "Post_3"}
// ]
// function retrivePostFromServer(){
//     const data = [];
//     setTimeout(() => {
//         serverPostData.forEach((item)=>data.push(item))
//     }, 3000)
//     console.log('callback')
//     console.log(data)
// }
// function createPostIntoServer(post, callback){
//     setTimeout(() => {
//         serverPostData.push(post);
//         callback()
//         console.log("Asynchronous function finised!")
//         }, 5000)
// }
// createPostIntoServer({id: 4, title: "Post_4"}, retrivePostFromServer) // create data after 5 second
// // var serverData = retrivePostFromServer()
// // setInterval(()=>console.log(serverData), 1000) // we cannot get updated data


// // Test 1
// function retrivePostFromServer(){
//     console.log('Callback !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
// }
// function createPostFromServer(callback){
//     setTimeout(() => {
//         console.log("Asynchronous function finised !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//         callback()
//         }, 5000)
// }
// createPostFromServer(retrivePostFromServer)
// var second = 0;
// setInterval(()=>{
//     second+=1;
//     console.log("Second:"+second);
// }, 1000)



// // Test 1.1
// function retrivePostFromServer(){
//     setTimeout(() => {
//         console.log('Callback !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//         }, 3000)
// }
// function createPostFromServer(callback){
//     setTimeout(() => {
//         console.log("Asynchronous function finised !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//         callback()
//         }, 5000)
// }
// createPostFromServer(retrivePostFromServer)
// var second = 0;
// setInterval(()=>{
//     second+=1;
//     console.log("Second:"+second);
// }, 1000)




// https://www.youtube.com/watch?v=PoRJizFvM7s
// https://www.youtube.com/watch?v=ZYb_ZU8LNxs