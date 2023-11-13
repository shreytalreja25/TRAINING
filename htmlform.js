function addition() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    alert("Strings not accepted");
  } else {
    document.getElementById("result").innerHTML = num1 + num2;
  }
}
function substract() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    alert("Strings not accepted");
  } else {
    document.getElementById("result").innerHTML = num1 - num2;
  }
  // var num3 = parseInt(num1 + num2, 10)
  // document.getElementById("result").innerHTML = num1 - num2;
}
function multiply() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  // var num3 = parseInt(num1 + num2, 10)
  // document.getElementById("result").innerHTML = num1 * num2;
  if (isNaN(num1) || isNaN(num2)) {
    alert("Strings not accepted");
  } else {
    document.getElementById("result").innerHTML = num1 * num2;
  }
}
function divide() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  // var num3 = parseInt(num1 + num2, 10)
  // document.getElementById("result").innerHTML = num1 / num2;
  if (isNaN(num1) || isNaN(num2)) {
    alert("Strings not accepted");
  } else {
    document.getElementById("result").innerHTML = num1 / num2;
  }
}
