
var allNames = document.getElementsByClassName("all-names")[0].value;

var namesArray = [];
namesArray = allNames.split("\n");
namesArray.pop();
var x = namesArray.toString();


// first names  WORKING
var firstNames = [];

for (var i = 0; i < namesArray.length; i++) {
  var a = [];
  var y = namesArray[i].split(" ", 1);
  firstNames.push(y);
  a = firstNames.join("\n");
  // console.log(a);
  // return a;
}
console.log(a);

// Names & Length of the Names WORKING
var nameLengthList = "";
for (var i = 0; i < namesArray.length; i++) {
  nameLengthList += "name: " + namesArray[i] + ", length of name is " + namesArray[i].length + " characters.\n";
};
console.log(nameLengthList);


// last names as a string adn first names as an array from this function.
var lastNames = [];
var firstNames = [];
var p = "";

for (var i = 0; i < namesArray.length; i++) {
  var y = namesArray[i].split(" ", 1);
  p += namesArray[i].replace(y, "");
  // firstNames.push(y);
  // console.log(namesArray[i]);
  // console.log(lastNames);
}
console.log(p);


p.trim();
var t = p.trim();
var h = t.split(" ");
h.reverse();

var re = [];
var io = ""
for (var i = 0; i < x.length; i++) {
  var io = re.shift();
  console.log(io);
  // return io;
};
// console.log(firstNames);
// console.log(lastNames);
// console.log(p);


