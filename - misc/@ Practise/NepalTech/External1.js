document.write("<h1>I am External JavaScript!!!</h1>");

//variable declaration
let a=10;
let b=17;
let sum=a+b;
//let a=10,b=17,sum=a+b;
document.write(" Sum of a("+a+")"+" and b("+b+")"+" is "+sum+".");
//alert ("Sum is "+sum+"!!!");//try it
console.log("Sum is "+sum+"!!!");//go to inspect and go to console

const pie=3.14;//constant remain during whole page
let r = 6;
let circm = 2*pie*r;
document.write("<br>Cirxumference "+circm);

let x=3.14*45*45;
document.write("<br>Decimal "+x);
document.write("<br>Decimal after toFixed() "+x.toFixed());
document.write("<br>Decimal after toFixed(0) "+x.toFixed(0));
document.write("<br>Decimal after toFixed(2) "+x.toFixed(2));

let fname="SimbA";
document.write("<br>"+fname)

//ifelse condition
let name="SimA";
if (name=="SimA") 
{
    document.write("<br>Here variabel(name) has stored value : "+name+"<br>");    
}

//Array
const days = ['Sunday','Monady','Tuesday','Wednusday','Thursday','Friday','Saturday']
console.log(days);//ctrl+shift+i see in on webpage
document.write(days+"<br>");
document.write(days[3]+"<br>");
document.write(days[0],days[5]+"<br>");
document.write(days[0,5,7]+"<br>");
days.forEach(function(abcd){console.log(abcd)});//??????//ctrl+shift+i see in cole on webpage
days.forEach(function(abcd){document.write(abcd +" ")});


document.write("<br>");

days.shift();
document.write("<br>");
days.forEach(function(abcd){document.write(abcd +" ")});

/*
days.unshift("Thapyo suruma");
document.write("<br>");
days.forEach(function(abcd){document.write(abcd +" ")});
*/
/*
days.pop();
document.write("<br>");
days.forEach(function(abcd){document.write(abcd +" ")});
*/
/*
days.push("Thapyo lastma");
document.write("<br>");
days.forEach(function(abcd){document.write(abcd +" ")});
*/
/*
days.splice(1,2,"bich ma thapyo");
document.write("<br>");
days.forEach(function(abcd){document.write(abcd +" ")});
*/
/*
days.splice(3,2,"bich ma thapyo");
document.write("<br>");
days.forEach(function(abcd){document.write(abcd +" ")});
*/

//Function

function Parichaya()
{
    document.write("Hi its simba.");
}
function PARICHAY()
{
    document.getElementById('lemo').innerHTML="Hi its SIMBA."
}
