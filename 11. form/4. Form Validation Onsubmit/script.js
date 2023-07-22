function validate() {
    var message = "";
    var error = 0;

    //alert("Here i am");

    var firstname = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    var cpassword = document.getElementById("cpass").value;

    //alert(firstname + lastname + username + password + cpassword);

    if (firstname == "") {
        message += "The FirstName is required.<br>";
        error = 1;
    }

    if (lastname == "") {
        message += "The LastName is required.<br>";
        error = 1;
    }

    if (username == "") {
        message += "The UserName is required.<br>";
        error = 1;
    }

    if (username == password) {
        message += "The UserName and Password should not be same.<br>";
        error = 1;
    }


    if (password == "") {
        message += "The Password is required.<br>";
        error = 1;
    }

    if (cpassword != password) {
        message += "The Password should match with Confirm Password.<br>";
        error = 1;
    }

    if (error == 1) {
        document.getElementById("error").innerHTML = message;
        return false;
        // return true;
        // return none;
    }
}