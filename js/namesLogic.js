
var allNames = document.getElementsByClassName("all-names")[0].value;

var namesArray = [];
namesArray = allNames.split("\n");
namesArray.pop();
var x = namesArray.toString();


// first names  WORKING
var firstNames = [];
var a = [];
var foo = [];

for (var i = 0; i < namesArray.length; i++) {
  var y = namesArray[i].split(" ", 1);
  firstNames.push(y);
  a = firstNames.join("\n");
  // return a;
  foo = a.split("\n");
}

// last names as a string adn first names as an array from this function.
var lastNames = [];
var firstNames = [];
var p = "";
var what = [];

for (var i = 0; i < namesArray.length; i++) {
  var y = namesArray[i].split(" ", 1);
  p += namesArray[i].replace(y, "");
  var t = p.trim();
  var e = t.split(" ")
  var f = e.splice(0, 2)
  var o = f.join(" ");
  e.unshift(o)
  console.log(e);
}

// Names & Length of the Names WORKING
var nameLengthList = "";
var u = [];
for (var i = 0; i < namesArray.length; i++) {
  nameLengthList += "name: " + namesArray[i] + ", length of name is " + namesArray[i].length + " characters.\n";
  u = nameLengthList.split(".");
}
