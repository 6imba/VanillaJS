function showData(){
    const table = document.getElementById("table")
    const row = table.insertRow(-1);
    const cell1 =  row.insertCell(0);
    const cell2 =  row.insertCell(1);
    const cell3 =  row.insertCell(2);
    const cell4 =  row.insertCell(3);
    cell1.innerHTML = "<b>UserId</b>";
    cell2.innerHTML = "<b>TaskId</b>";
    cell3.innerHTML = "<b>Title</b>";
    cell4.innerHTML = "<b>Body</b>";

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((responseObject) => responseObject.json())
            .then(responseData => {
                // document.getElementById("dataDiv").innerHTML = JSON.stringify(responseData.slice(0,10))
                // const table = document.getElementsByTagName("table")
                responseData.slice(0,15).forEach((dataObj) => {
                    const row = table.insertRow(-1);
                    const cell1 =  row.insertCell(0);
                    const cell2 =  row.insertCell(1);
                    const cell3 =  row.insertCell(2);
                    const cell4 =  row.insertCell(3);
                    cell1.innerHTML = dataObj.userId;
                    cell2.innerHTML = dataObj.id;
                    cell3.innerHTML = dataObj.title;
                    cell4.innerHTML = dataObj.body;
                })
            })
        .catch(error => {
            console.log(error)
        })
}