var sget = require('sget');

var tempString = sget('Please enter the avg. temperature for 7 days\nPlease enter data like so: 23, 45, 98, 12, 27, 34, 78').trim();

var tempArray = tempString.split(', ');

var temps = [];
for (var i = 0, len = tempArray.length; i < len; i++) {
  temps.push(parseInt(tempArray[i], 10));
}

function calculateAvg(temps) {
  sum = 0;
  for (var i = 0, len = temps.length; i < len; i++) {
    sum += temps[i];
  }
  return sum / temps.length;
}

console.log(calculateAvg(temps));