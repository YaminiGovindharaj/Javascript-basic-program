<!DOCTYPE html>

<html>

<head>

</head>

<body style = "text-align: center; font-size: 20px;">

<h1> Factorial Program </h1>

Enter a particular number: <input id = "num">

<br><br>

<button onclick = "fact()"> please provide any Factorial number </button>

<p id = "res"></p>

<script>

function fact(){

var i, num, f;

f = 1;

num = document.getElementById("num").value;

for(i = 1; i <= num; i++)  

{

f = f * i;

}

i = i - 1;  

document.getElementById("res").innerHTML = "The factorial of the number " + i + " is: " + f ;

}

</script>

</body>

</html>
