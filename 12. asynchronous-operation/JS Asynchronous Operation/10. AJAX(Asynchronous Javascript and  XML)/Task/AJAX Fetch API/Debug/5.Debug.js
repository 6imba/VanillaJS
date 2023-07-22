const promise = fetch("https://jsonplaceholder.typicode.com/posts")
// console.log(promise) //debug
promise
    .then((responseObject) => {
        // console.log(responseObject) //debug
        // console.log(typeof(responseObject)) //debug
        // console.log(responseObject instanceof Object) //debug
        return responseObject.json() // .json() method of ResponseObject parse JSON into JS object.
    })
        .then(data => {
            console.log(data)
            console.log(data instanceof Array) //array of objects
            console.log(data[1])
            console.log(data[1] instanceof Array)
            console.log(data[1] instanceof Object) //object
            console.log(data[1].title)
            console.log(typeof(data[1].title)) //string
        })
    .catch(error => {
        console.log(error)
    })