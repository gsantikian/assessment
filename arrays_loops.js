var sget = require('sget');

var userTemps = sget('Enter the average temperature for each of the 7 days of the week.\nSeparate numbers with a comma like so: "23, 45, 98, 12, 27, 34, 78"').trim();

function stringToArrayOfNumbers(str) {
  var numbers = [];
  strings = str.split(', ');
  for (var i = 0, len = strings.length; i < len; i++) {
    numbers.push(parseInt(strings[i]), 10);
  }
  return numbers;
}

function calculateAvg(temps) {
  sum = 0;
  for (var i = 0, len = temps.length; i < len; i++) {
    sum += temps[i];
  }
  return sum / temps.length;
}

var temperatures = stringToArrayOfNumbers(userTemps);
var averageTemp = calculateAvg(temperatures).toFixed(2);

console.log("Average temperature for the week is: " + averageTemp);