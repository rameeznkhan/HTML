var calculations = "";

function buttonClicked(value) {
  calculations += value;
  document.getElementById("calculations").innerHTML = calculations;
  document.getElementById("total").innerHTML = calculate(calculations);
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
