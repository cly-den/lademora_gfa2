function sum(){
	var num1 = parseInt(document.getElementById("Num1").value);
	var num2 = parseInt(document.getElementById("Num2").value);
	result = num1 + num2;
	document.getElementById("answer").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + result + ".";
}
function diff(){
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
	result = num1 - num2;
	document.getElementById("answer").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + result + ".";
}
function prod(){
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
	result = num1 * num2;
	document.getElementById("answer").innerHTML = "The product of " + num1 + " and " + num2 + " is " + result + ".";
}
function div(){
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
	result = num1 / num2;
	document.getElementById("answer").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + result + ".";
}
function mod(){
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);
	result = num1 % num2;
	document.getElementById("answer").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + result + ".";
}