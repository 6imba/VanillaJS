// getting all required element:
let inputTask = document.querySelector("#inputText");
let addButton = document.querySelector("#addButton");
let todoLists = document.querySelector(".todoList");
let clearBtn = document.querySelector(".clearBtn");
let taskNumber = document.querySelector(".taskNumber");
let clearAllBtn = document.querySelector(".footer button");

// activate|deactivate add-task-button:
function activateButton(){
    let inputedData = inputTask.value; //get every used inputted data
    if(inputedData.trim() != 0){ // if inputed data is not empty
        addButton.classList.add("addTask") // activate the add button
    }else{
        addButton.classList.remove("addTask"); // de-activate the add button
    }
}

// add task in localStorage when clicked button:
function addTask(){
    let inputedData = inputTask.value; //get every used inputted data
    let getLocalStorage = localStorage.getItem("tasks"); // get data in localStorage
    if(getLocalStorage == null){
        taskArray = [inputedData]; //Create
    }else{
        taskArray = JSON.parse(getLocalStorage)
        taskArray.push(inputedData); //Append
    }
    localStorage.setItem("tasks",JSON.stringify(taskArray)) // add data in localstorage
    inputTask.value = "" // empty the input field once data saved in localstorage
    addButton.classList.remove("addTask"); // as input is empty make add button disable
    showTasks()
}

// retrive all task list from localStorage and show it intht form of li inside ul:
function showTasks(){
    let getLocalStorage = JSON.parse(localStorage.getItem("tasks")); // get data in localStorage
    // console.log(getLocalStorage)
    if(getLocalStorage){
        var taskLists = "";
        getLocalStorage.forEach((item, index) => {
            taskLists += `<li>${item}<span><i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(${index})"></i></span></li>`;
        });
        todoLists.innerHTML= taskLists;
        taskNumber.innerHTML = getLocalStorage.length;
        clearAllBtn.classList.add("clearTask") // localstorage has task activate clearAll btn.
    }else{
        todoLists.innerHTML= '';
        taskNumber.innerHTML = "0";
        clearAllBtn.classList.remove("clearTask") // localstorage doesnt have task de-activate clearAll btn.
    }
}

// delete specific task from localStorage:
function deleteTask(id){
    let getLocalStorage = localStorage.getItem("tasks"); // get data in localStorage
    console.log(JSON.parse(getLocalStorage).length == 1)
    if(JSON.parse(getLocalStorage).length == 1){
        localStorage.removeItem("tasks");
    }else{
        let listArr = JSON.parse(getLocalStorage); // get data in localStorage
        listArr.splice(id, 1)
        localStorage.setItem("tasks",JSON.stringify(listArr)) // add data in localstorage
    }
    showTasks()
}

// clear all task from localStorage:
function clearAllTask(){
    localStorage.removeItem("tasks");
    showTasks()
}

showTasks();
addButton.onclick = addTask;
inputTask.onkeyup = activateButton;
clearBtn.onclick = clearAllTask;