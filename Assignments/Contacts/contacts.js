var arr = [];

function addButtonClicked() {
  console.log("add button clicked");
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  if (name === "" || name.length < 3){
    alert("name cannot be less than 2 characters");
  } else {
    if (isNaN(number) || number.length < 10) {
      alert("Number can't be less than 10 digits");
    } else {
      var table = document.getElementById("myTable");
      var row = table.insertRow(0);
      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      //create a button
      var button = document.createElement("BUTTON");
      button.innerHTML = "Delete";
      button.setAttribute('onclick', 'deleteButtonClicked(this)');
      button.classList = "btn btn-default btn-danger";
      cell1.innerHTML = name;
      cell2.innerHTML = number;
      cell3.appendChild(button);
      arr.push({"name": name, "number": number});
      document.getElementById("name").value = "";
      document.getElementById("number").value = "";
    }
  }
}

function deleteButtonClicked(btn) {
  console.log(btn.parentElement.parentElement);
  var row = btn.parentElement.parentElement;
  row.parentNode.removeChild(row);
  // document.getElementById("myTable").deleteRow(0);
  console.log(arr);
}
