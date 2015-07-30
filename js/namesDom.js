// //print all names
// var printAllNames = document.getElementById("nameLocation");
var namesHandle = document.getElementById("answer-list");
// console.log(namesHandle)
var printAllNamesButton = document.getElementById("all-names").onclick = displayAllNames;

function displayAllNames() {
  // console.log("inside function");
  // console.log(namesArray);
  document.getElementById('answer-list').innerHTML = null;
  for (var i = 0; i < namesArray.length; i++) {
    var q = document.createElement("li");
    q.innerHTML = namesArray[i];
    // console.log(p);
    namesHandle.appendChild(q);
  }
}

// print First Names - not working
// var printFirstNames = document.getElementById("printFirstNames");

var firstNamesButton = document.getElementById("first-names").onclick = displayFirstNames;

function displayFirstNames() {
  document.getElementById('answer-list').innerHTML = null;
  for (var i = 0; i < namesArray.length; i++) {
    var q = document.createElement('li');
    q.innerHTML = document.createElement("li");
    q.innerHTML = foo[i];
    // console.log(p);
    namesHandle.appendChild(q);
  }
}

// Last Names
// var printLastNames = document.getElementById("printLastNames");

var lastNamesButton = document.getElementById("last-names").onclick = displayLastNames;


function displayLastNames() {
  document.getElementById('answer-list').innerHTML = null;
  for (var i = 0; i < namesArray.length; i++) {
    var q = document.createElement('li');
    q.innerHTML = document.createElement("li");
    q.innerHTML = e[i];
    // console.log(q);
    namesHandle.appendChild(q);
  }
}
// displayNamesWithLengths();


// // Names with lengths
// var printNamesWithLengths = document.getElementById("printNamesWithLengths");

var namesLengthButton = document.getElementById("names-with-lengths").onclick = displayNamesWithLengths;


function displayNamesWithLengths() {
  document.getElementById('answer-list').innerHTML = null;
  for (var i = 0; i < namesArray.length; i++) {
    var q = document.createElement('li');
    q.innerHTML = document.createElement("li");
    q.innerHTML = u[i];
    // console.log(q);
    namesHandle.appendChild(q);
  }
}

