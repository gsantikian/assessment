var sget = require('sget');

function sortNumbers(num1, num2, num3) {
  var sortedNumbers = [num1, num2, num3].sort(function(a, b) {
    return b - a;
  });
  return sortedNumbers;
}

console.log("Please enter 3 numbers.");
var num1 = parseInt(sget("Enter first number:"), 10);
var num2 = parseInt(sget("Enter second number:"), 10);
var num3 = parseInt(sget("Enter third number:"), 10);
console.log("Your numbers in decending order: " + sortNumbers(num1, num2, num3).join(', '));