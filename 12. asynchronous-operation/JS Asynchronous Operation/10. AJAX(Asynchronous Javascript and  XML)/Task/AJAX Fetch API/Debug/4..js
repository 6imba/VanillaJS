function getData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((responseObject) => responseObject.json())
            .then(responseData => console.log(responseData))
        .catch(error => {
            console.log(error)
        })
}