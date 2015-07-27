
// var allNames = document.getElementsByClassName("all-names")[0].value;


// var allNamesButton = document.getElementById("all-names").onclick = displayFirstNames;

// function displayFirstNames() {
//   var firstNameAnswer = document.createElement("li");
//   firstNameAnswer.innerHTML = a;
//   document.getElementById("printFirstNames").appendChild(firstNameAnswer);
// }



// var allNames = document.getElementsByClassName("all-names")[0].value;
// console.log(allNames);
var namesArray = [];
var namesArray = allNames.split("\n");
namesArray.pop();
var x = namesArray.toString();
// console.log(namesArray);

// count characters and print with name
//  working
var nameLengthList = "";
for (var i = 0; i < namesArray.length; i++) {
  nameLengthList += "name: " + namesArray[i] + ", length of name is " + namesArray[i].length + " characters.\n";
};
console.log(nameLengthList);



// first names
// working
var firstNames = [];
for (var i = 0; i < namesArray.length; i++) {
  var y = namesArray[i].split(" ", 1);
  firstNames.push(y);
}
var a = firstNames.join("\n");
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





// var a = firstNames.toString();
// console.log(a);

// console.log(namesArray);
// var b = " ";

// var lastNames = [];
// for (var i = 0; i < allNames.length; i++) {
//   var c = namesArray[0][i].indexOf(" ");
//   var d = namesArray[0][i].indexOf("\n")
//   // var d = namesArray[i]
//   console.log(c);
//   console.log(d)
//   var y = namesArray[0][i].slice(c, 0);
//   lastNames.push(y);
//   console.log(lastNames);
//   // console.log(y);
//   // console.log(lastNames);
//   // console.log(namesArray[i]);
// }



// console.log(namesArray);


// for (var i = 0; i < namesArray.length; i++) {
//   if (namesArray[i].indexnamesArray[i]);
// };

// function namesToArray(allNames) {
//   namesArray = allNames.split("\n");
//   return namesArray;
// }
// namesToArray();



// namesArray.split(",");
// // var individualNames = namesArray.toString();
// console.log(namesArray);


// var options = document.getElementsByTagName("option");

// var allNames2 = document.getElementsByClassName("all-names")[0].value;

// var selectElement = document.getElementsByTagName("select")[0];
// var selectOptions = selectElement.selectedOptions;
// selectNumbersArrays.push(selectOptions);

// var b = "";
// for (var i = 0; i < a.length; i++) {
//       b += a.replace(",", "\n");
//     }
// console.log(b);

// console.log(namesArray);
// var b = " ";

// var namesString = "";

// function namesToString(allNames) {
//   namesString = allNames.toString();
//   console.log(namesString);
// }
// namesToString();

// var allNames = document.getElementsByClassName("all-names")[0].value;
// console.log(allNames);


// last names
// var m = allNames.split();
// console.log(m);

// var lastNames = [];
// for (var i = 0; i < allNames.length; i++) {
//   // var c = m[i].indexOf(" ");
//   // var d = m[i].indexOf("\n")
//   // var d = namesArray[i]
//   // console.log(c);
//   // console.log(d);
//   var y = m[i].slice(" ","/n");
//   lastNames.push(y);
//   console.log(lastNames);
//   // console.log(y);
//   // console.log(lastNames);
//   console.log(m[i]);
// }

// // Names
// var allNames = document.getElementsByClassName("all-names")[0].value;


//Names




// var selectNamesElement = document.getElementsByTagName("select")[0];
// var selectNamesOptions = selectNamesElement.selectedOptions;
// selectNamesArray.push(selectNamesOptions);


/*  Hints for the first problem:
  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page
*/

// function clearAnswer() {
//   document.getElementById("answer").innerHTML = ""
// }

// var allNames = document.getElementsByClassName("all-names")[0].value;
// var options = document.getElementsByTagName("option");



// var selectElement = document.getElementsByTagName("select")[0];
// var selectOptions = selectElement.selectedOptions;
// selectNumbersArrays.push(selectOptions);


//Names




// var selectNamesElement = document.getElementsByTagName("select")[0];
// var selectNamesOptions = selectNamesElement.selectedOptions;
// selectNamesArray.push(selectNamesOptions);


/*  Hints for the first problem:
  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page
*/

// function clearAnswer() {
//   document.getElementById("answer").innerHTML = ""
// }

// var allNames = document.getElementsByClassName("all-names")[0].value;
// var options = document.getElementsByTagName("option");



// var selectElement = document.getElementsByTagName("select")[0];
// var selectOptions = selectElement.selectedOptions;
// selectNumbersArrays.push(selectOptions);
