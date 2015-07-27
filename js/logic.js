// Sum all - WORKS

var sum = function (options) {
  var sumAllTotal = 0;
  for (var i = 0; i < options.length; i++) {
    // the plus sign before optinons makes it a number
    // sumAllTotal += +options[i].value;
    sumAllTotal += parseInt(options[i].value);
  }
  return sumAllTotal;
};

function average (options) {
  var averageValue = 0;
  var averageValue2 = 0;
    for (var i = 0; i < options.length; i++) {
    // the plus sign before optinons makes it a number
    averageValue += parseInt(options[i].value);
  }
  averageValue2 = averageValue / options.length;
  return averageValue2;
}


// count selected - WORKS
var countSelectedNumbers = 0;
var returnCount = 0;
var count = function () {
    // console.log(selectOptions.length);
    returnCount = selectOptions.length;
    return returnCount;
}

// Sum selected - WORKING
function addSelected(selectNumbersArrays) {
  var sumSelected = 0;
  for (var i = 0; i < selectNumbersArrays[0].length; i++) {
    console.log(selectNumbersArrays);
    sumSelected += parseInt(selectNumbersArrays[0][i].value);
    console.log(sumSelected);
  }
    return sumSelected;
}

//Average selected
var selectNumbersArrays = [];
function countAverage(selectNumbersArrays) {
var finalAnswer = 0;
var returnCountAverage = 0;
  for (var i = 0; i < selectNumbersArrays[0].length; i++) {
    returnCountAverage += Number(selectNumbersArrays[0][i].value);
        console.log("hi" + selectNumbersArrays[0].value);
        // console.log(returnCountAverage);
      }
    finalAnswer = (returnCountAverage / selectNumbersArrays[0].length);
    // console.log(finalAnswer)
    return finalAnswer;
}





