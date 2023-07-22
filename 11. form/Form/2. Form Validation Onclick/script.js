function validate() {

    //alert("Here I am");
    var message = "";
    var error = false;
    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    var confirmpassword = document.getElementById("cpass").value;

    //alert(firstname+lastname+username+password+confirmpassword);

    if (firstname == "") {
        message += "first name is required.<br>";
        error = true;
    }
    if (username == "") {
        message += "user name is required.<br>";
        error = true;
    }
    if (password == "") {
        message += "password is required.<br>";
        error = true;
    }
    if (username == password) {
        message += "username and password shouldnot be same.<br>";
        error = true;
    }
    if (password != confirmpassword) {
        message += "password and confirm-password should be same.<br>";
        error = true;
    }
    if (password.length < 8) {
        message += "Password should be at least 8 character.<br>";
        error = true;
    }
    if (!username.match(/^[0-9a-zA-Z]+$/)) {
        message += "The username should be alpha-neumeric character only.<br>";
        error = true;
    }
    if (error == true) {
        document.getElementById("error-msg").innerHTML = message;
        return false;
    }
}
function clearAll() {
    document.getElementById("error-msg").innerHTML = "";
}