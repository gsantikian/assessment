var sget = require('sget');

function getUserInput() {
  return parseInt(sget("Please enter a number:"), 10);
}

function orderNumbers(num1, num2, num3) {
  var numbers = [num1, num2, num3];
  var sortedNumbers = numbers.sort(function(a, b){
    return b - a;
  });
  return sortedNumbers;
}

var num1 = getUserInput();
var num2 = getUserInput();
var num3 = getUserInput();
console.log(orderNumbers(num1, num2, num3).join(', '));