
// print First Names
var printFirstNames = document.getElementById("printFirstNames");

var firstNamesButton = document.getElementById("first-names").onclick = displayFirstNames;

function displayFirstNames() {
  var firstNameAnswer = document.createElement("LI");
  firstNameAnswer.innerHTML = a;
  printFirstNames.appendChild(firstNameAnswer);
};

//print all names
var printAllNames = document.getElementById("printAllNames");

var printAllNamesButton = document.getElementById("all-names").onclick = displayAllNames;

function displayAllNames() {
  var allNamesAnswer = document.createElement("LI");
  allNamesAnswer.innerHTML = allNames;
  printAllNames.appendChild(allNamesAnswer)
}



// Last Names
var printLastNames = document.getElementById("printLastNames");

var lastNamesButton = document.getElementById("last-names").onclick = displayLastNames;

function displayLastNames() {
  var lastNameAnswer = document.createElement("LI");
  lastNameAnswer.innerHTML = p;
  printLastNames.appendChild(lastNameAnswer);
}
// (displayLastNames);


// Names with lengths
var printNamesWithLengths = document.getElementById("printNamesWithLengths");

var namesLengthButton = document.getElementById("names-with-lengths").onclick = displayNamesWithLengths;

function displayNamesWithLengths() {
  var namesWithLengthsAnswer = document.createElement("LI");
  namesWithLengthsAnswer.innerHTML = nameLengthList;
  printNamesWithLengths.appendChild(namesWithLengthsAnswer);
}
// displayNamesWithLengths();




