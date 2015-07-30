// //print all names
var namesHandle = document.getElementById("answer-list");
var printAllNamesButton = document.getElementById("all-names").onclick = displayAllNames;

function displayAllNames() {
  for (var i = 0; i < namesArray.length; i++) {
    var q = document.createElement("li");
    q.innerHTML = namesArray[i];
    console.log(p);
    namesHandle.appendChild(q);
  }
}

// print First Names - not working
var firstNamesButton = document.getElementById("first-names").onclick = displayFirstNames;

function displayFirstNames() {
  for (var i = 0; i < namesArray.length; i++) {
    var q = document.createElement('li');
    q.innerHTML = document.createElement("li");
    q.innerHTML = foo[i];
    console.log(p);
    namesHandle.appendChild(q);
  }
}

// Last Names
var lastNamesButton = document.getElementById("last-names").onclick = displayLastNames;


function displayLastNames() {
  for (var i = 0; i < namesArray.length; i++) {
    var q = document.createElement('li');
    q.innerHTML = document.createElement("li");
    q.innerHTML = e[i];
    console.log(q);
    namesHandle.appendChild(q);
  }
}


// Names with lengths
var namesLengthButton = document.getElementById("names-with-lengths").onclick = displayNamesWithLengths;

function displayNamesWithLengths() {
  for (var i = 0; i < namesArray.length; i++) {
    var q = document.createElement('li');
    q.innerHTML = document.createElement("li");
    q.innerHTML = u[i];
    console.log(q);
    namesHandle.appendChild(q);
  }
}

