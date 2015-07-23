var options = document.getElementsByTagName("option");

// Sum All kinda working
var sumAllTotal = 0;
var sum = function (options) {
  for (var i = 0; i < options.length; i++) {
    // the plus sign before optinons makes it a number
    // sumAllTotal += +options[i].value;
    sumAllTotal += parseInt(options[i].value);
  }

  return sumAllTotal;
};

// average kinda working
var averageValue = 0;
function average () {
    for (var i = 0; i < options.length; i++) {
    // the plus sign before optinons makes it a number
    averageValue += +options[i].value;
  }
  averageValue = averageValue / options.length;
  return averageValue
}
average();


// count selected
var countSelectedNumbers = 0;
var returnCount = 0;
var count = function () {
    console.log(selectOptions.length);
    returnCount = selectOptions.length;
    return returnCount;
}

//Average selected
var selectNumbersArrays = [];
var finalAnswer = 0;

var returnCountAverage = 0

function countAverage(selectNumbersArrays) {
  for (var i = 0; i < selectNumbersArrays.length; i++) {
    returnCountAverage += Number(selectNumbersArrays[0][i].value);
        console.log("hi" + selectNumbersArrays[0].value);
        // console.log(returnCountAverage);
      }
    finalAnswer = (returnCountAverage / selectNumbersArrays.length);
    // console.log(finalAnswer)
    // debugger;
    return finalAnswer;
}
countAverage(selectNumbersArrays);

var sumSelected = 0;

function addSelected(selectNumbersArrays) {
  for (var i = 0; i < selectNumbersArrays.length; i++) {
    sumSelected += Number(selectNumbersArrays[0][i].value);
  }
    console.log();
    return sumSelected;
}
addSelected(selectNumbersArrays);

var selectElement = document.getElementsByTagName("select")[0];
var selectOptions = selectElement.selectedOptions;
selectNumbersArrays.push(selectOptions)

