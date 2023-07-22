function a(){
    const promise = fetch("https://jsonplaceholder.typicode.com/posts")
    promise
        .then((responseObject) => responseObject.json())
            .then(data => data)
        .catch(error => {
            console.log(error)
        })
        return promise
    }
    
    function b(){
        console.log(a())
    }
    // Here second then is return, but why?
    // here we are playing with consuming code so its not way to keep get return response from inside function.