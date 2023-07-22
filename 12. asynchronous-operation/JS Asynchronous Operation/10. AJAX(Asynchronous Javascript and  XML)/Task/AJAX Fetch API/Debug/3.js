function showData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((responseObject) => responseObject.json())
            .then(responseData => {
                document.getElementById("dataDiv").innerHTML = responseData
                // document.getElementById("dataDiv").innerHTML = responseData[0]
                // document.getElementById("dataDiv").innerHTML = responseData[0].title
                // document.getElementById("dataDiv").innerHTML = JSON.stringify(responseData[0].title)
                // document.getElementById("dataDiv").innerHTML = JSON.stringify(responseData)
                // document.getElementById("dataDiv").innerHTML = JSON.stringify(responseData[0])
                // document.getElementById("dataDiv").innerHTML = JSON.stringify(responseData[0].title)
                // document.getElementById("dataDiv").innerHTML = JSON.stringify(responseData.slice(0,10))
            })
        .catch(error => {
            console.log(error)
        })
}