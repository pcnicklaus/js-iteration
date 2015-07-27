var options = document.getElementsByTagName("option");


var selectElement = document.getElementsByTagName("select")[0];
// console.log(selectElement);
var selectOptions = selectElement.selectedOptions;
// console.log(selectOptions);
var selectNumbersArrays = [];
selectNumbersArrays.push(selectOptions);
console.log("selectNumbersArrays" +selectNumbersArrays);


//sum all - WORKING
var sumButton = document.getElementById("sum-all").onclick = displaySum;

function displaySum() {
    document.getElementById("answer").innerHTML = sum(options);
}

//average all
var averageButton = document.getElementById("average-all").onclick = displayAverage;

function displayAverage() {
  document.getElementById("answer").innerHTML = average(options);
}


// count - WORKING
var countButton = document.getElementById("count-selected").onclick = displayCount;

function displayCount() {
  document.getElementById("answer").innerHTML = returnCount;
}



// add selected - WORKING
var sumSelectedButton = document.getElementById("sum-selected").onclick = sumSelectedDisplay;

function sumSelectedDisplay() {
  document.getElementById("answer").innerHTML = addSelected(selectNumbersArrays);
}




// average selected
var averageCountButton = document.getElementById("average-selected").onclick = averageCountDisplay;

function averageCountDisplay() {
  // debugger;
  document.getElementById("answer").innerHTML = countAverage(selectNumbersArrays);
}











