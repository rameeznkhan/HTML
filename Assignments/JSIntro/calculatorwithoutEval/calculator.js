var runningNumber = "";
var leftValue = "";
var rightValue = "";
var currentOperation = "";

function buttonClicked(value) {
  calculations += value;
  document.getElementById("calculations").innerHTML = calculations;
  document.getElementById("total").innerHTML = performCalculation(value);
}

function performCalculation(value) {
  result = 0;
  if (currentOperation != "") {
    if (runningNumber != "") {
      switch (currentOperation) {
        case "+":
          result = Number(leftValue) + Number(rightValue);
          break;
        case "-":
            result = Number(leftValue) - Number(rightValue);
            break;
        case "*":
              result = Number(leftValue) * Number(rightValue);
              break;
        case "/":
            result = Number(leftValue) / Number(rightValue);
            break;
      }
      rightValue = runningNumber;
      runningNumber="";
      currentOperation = value;
    }
  } else {
    leftValue = runningNumber;
    runningNumber = ""
  }
}

function calculate(calculations) {
  return eval(calculations);
}

function equalsClicked(value) {
  document.getElementById("total").innerHTML = calculate(calculations);
}

function clearClicked(value) {
  document.getElementById("calculations").innerHTML = "";
  document.getElementById("total").innerHTML = "0";
  calculations = "";
}
