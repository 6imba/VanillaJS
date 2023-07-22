// // # 1
// function submitForm() {
//     const username = document.getElementById("naamId").value;
//     if (username == null) {
//         document.getElementById("name_err").innerHTML = "Invalid UserName";
//     } else {
//         document.getElementById("name_err").innerHTML = "Successfully UserName added!";
//     }
// }



// // # 1
// function submitForm() {
//     const username = document.getElementById("naamId").value;
//     if (username == "") {
//         document.getElementById("name_err").innerHTML = "Invalid UserName";
//     } else {
//         document.getElementById("name_err").innerHTML = "Successfully UserName added!";
//     }
// }



// // # 1
// function submitForm() {
//     const username = document.getElementById("naamId").value;
//     if (username == "") {
//         document.getElementById("name_err").innerHTML = "Invalid UserName";
//     } else {
//         document.getElementById("name_err").innerHTML = "Successfully UserName added!";
//     }
//     return false
// }



// // # 2
// function submitForm() {
//     const username = document.getElementById("naamId").value;
//     const error1 = document.getElementById("name_err");
//     const success1 = document.getElementById("name_suc");
//     if (username == "") {
//         error1.innerHTML = "Invalid UserName";
//         success1.innerHTML = "";
//         return false
//     } else {
//         success1.innerHTML = "Successfully UserName added!";
//         error1.innerHTML = "";
//         return false
//     }
// }



// // # 3
// function submitForm() {
//     const username = document.getElementById("naamId").value;
//     if (username == "") {
//         document.getElementById("name_err").innerHTML = "Invalid UserName";
//         return false
//     } else {
//         document.getElementById("name_err").innerHTML = "Successfully UserName added!";
//         alert("Succefully added!")
//         return true
//     }
// }



// // # 4
// function submitForm() {
//     const username = document.getElementById("naamId").value;
//     const validCharactersRegex = /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/;
//     if (username.match(validCharactersRegex) != null || username=="") {
//         document.getElementById("name_err").innerHTML = "Invalid UserName";
//         return false
//     } else {
//         document.getElementById("name_err").innerHTML = "Successfully UserName added!";
//         alert("Succefully added!")
//         return false
//     }
// }