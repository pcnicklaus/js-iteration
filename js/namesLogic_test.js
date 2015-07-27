
// console.log(namesArray);

// count characters and print with name
//  working


var allNames = document.getElementsByClassName("all-names")[0].value;

var namesArray = [];
var namesArray = allNames.split("\n");
namesArray.pop();
var x = namesArray.toString();

var nameLengthList = "";
for (var i = 0; i < namesArray.length; i++) {
  nameLengthList += "name: " + namesArray[i] + ", length of name is " + namesArray[i].length + " characters.\n";
};
console.log(nameLengthList);



// first names
// working
var firstNames = [];
var a = [];
for (var i = 0; i < namesArray.length; i++) {
  var y = namesArray[i].split(" ", 1);
  firstNames.push(y);
  a = firstNames.join("\n");
  return a;
}

console.log(a);



// last names as a string adn first names as an array from this function.
var lastNames = [];
var firstNames = [];
var p = "";

for (var i = 0; i < namesArray.length; i++) {
  var y = namesArray[i].split(" ", 1);
  p += namesArray[i].replace(y, "");
  firstNames.push(y);
  // console.log(namesArray[i]);
  // console.log(lastNames);
}
p.trim();
var t = p.trim();
var x = t.split(" ");
x.reverse();

var re = [];
for (var i = 0; i < x.length; i++) {
  var io = re.shift();
  console.log(io);
};
// console.log(firstNames);
// console.log(lastNames);
// console.log(p);
