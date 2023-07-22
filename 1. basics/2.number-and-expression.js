<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Numbers</h2>

<p>Floating point arithmetic is not always 100% accurate:</p>
<p id="demo"></p>

<p>But it helps to multiply and divide:</p>

<p id="demo1"></p>
<p id="demo2"></p>
<p id="lemo1"></p>
<p id="lemo2"></p>

<script>
let x = 0.2 + 0.1;
document.getElementById("demo").innerHTML = "0.2 + 0.1 = " + x;

let z = Number('(0.2*10 + 0.1*10) +0.5');
let y = (0.2*10 + 0.1*10) +0.5;

document.getElementById("demo1").innerHTML = "0.2 + 0.1 = " + y;
document.getElementById("demo2").innerHTML = "0.2 + 0.1 = " + typeof(y);

document.getElementById("lemo1").innerHTML = "0.2 + 0.1 = " + z;
document.getElementById("lemo2").innerHTML = "0.2 + 0.1 = " + typeof(z);
</script>

</body>
</html>


