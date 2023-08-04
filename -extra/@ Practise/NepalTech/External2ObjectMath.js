document.write("I am 1 JavaScript!!!<br>")

//object class
let person={
             fname:"SimbA",
             lname:"HumaN",
             age:50,
             location:"Earth",
             fullname :function(){
                                   return this.fname+" "+ this.lname;
                                  }
            };
document.write("I am object oriented "+person.fname);
document.write("<br>Fullname is  "+person.fullname()+"<br>");

//Mathematics
document.write(Math.PI+"<br>");
document.write(Math.pow(2,3)+"<br>");
document.write(Math.sqrt(25)+"<br>");
document.write(Math.random()+"<br>");//print random number between 0-1
document.write(Math.random()*9+"<br>");
let z=2.79;
document.write(Math.round(z)+"<br>");
document.write(Math.round(9.999)+"<br>");
document.write(Math.round(9.44599)+"<br>");

//document.write(Math.random()*9).toFixed(3);//????