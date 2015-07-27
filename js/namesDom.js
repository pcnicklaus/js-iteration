
var allNames = document.getElementsByClassName("all-names")[0].value;


var allNamesButton = document.getElementById("all-names").onclick = displayFirstNames;

function displayFirstNames() {
  var firstNameAnswer = document.createElement("li");
  firstNameAnswer.innerHTML = a;
  document.getElementById("printFirstNames").appendChild(firstNameAnswer);
}
