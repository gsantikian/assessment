var sget = require('sget');

function hasExclamation(str) {
  return str.indexOf("!") >= 0;
}

function hasCapitalLetter(str) {
  str = str.replace(/[^a-zA-Z]/g, '');
  for (var i = 0, len = str.length; i < len; i++) {
    if(str[i] === str[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}

while (true) {
  var userInput = sget("Please create a password:").trim();
  if (userInput.length > 9 && (hasExclamation(userInput) || hasCapitalLetter(userInput))) {
    console.log("\nYour password has been created.");
    break;
  } else {
    console.log("\nError. Your password must be at least 10 characters long AND contain at least 1 capital letter OR an exclamation point.\n");
    continue;
  }
}