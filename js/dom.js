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


var options = document.getElementsByTagName("option");
var selectElement = document.getElementsByTagName("select")[0];
var selectOptions = selectElement.selectedOptions;
selectNumbersArrays.push(selectOptions)

// add selected
var sumSelectedButton = document.getElementById("sum-selected").onclick = sumSelectedDisplay;

function sumSelectedDisplay() {
  document.getElementById("answer").innerHTML = addSelected(selectNumbersArrays);
}

// average count
var averageCountButton = document.getElementById("average-selected").onclick = averageCountDisplay;

function averageCountDisplay() {
  // debugger;
  document.getElementById("answer").innerHTML = countAverage(selectNumbersArrays);
}

//sum
var sumButton = document.getElementById("sum-all").onclick = displaySum;

function displaySum() {
    document.getElementById("answer").innerHTML = sum(options);
}

//average
var averageButton = document.getElementById("average-all").onclick = displayAverage;

function displayAverage() {
  document.getElementById("answer").innerHTML = averageValue;
}

// count
var countButton = document.getElementById("count-selected").onclick = displayCount;

function displayCount() {
  document.getElementById("answer").innerHTML = returnCount;
}



// var countSelected = document.getElementsByTagName("option").selected = true;
// console.log(countSelected)

// document.getElementById("answer").innerHTML = sumAllTotal;

// var selectElement = document.getElementsByTagName("select")[0];
// var selectOptions = selectElement.selectedOptions;
// selectNumbersArrays.push(selectOptions)
// console.log(selectNumbersArrays)


// var averageSelected = document.getElementsByTagName("option")value.selected = true;


// document.getElementById("answer").innerHTML = countSelectedNumbers;

// //sum answer

// //count answer
// function displayCount() {
//     document.getElementById("answer").innerHTML = countSelected();
// }

// // all in one - target, event handler
// document.getElementById("sum-all").addEventListener("click", function(){
//   document.getElementById("answer").innerHTML = sum(options);
// });
