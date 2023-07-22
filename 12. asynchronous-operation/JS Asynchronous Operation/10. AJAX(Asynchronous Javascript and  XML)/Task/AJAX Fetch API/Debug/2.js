function showData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((responseObject) => responseObject.json())
            .then(responseData => {
                document.getElementById("dataDiv").innerHTML = JSON.stringify(responseData.slice(0,10))
            })
        .catch(error => {
            console.log(error)
        })
}