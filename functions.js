var sget = require('sget');

function feedAnimal(name) {

}

function putAnimalToSleep(name) {

}

function playWithAnimal(name) {

}

function scoldAnimal(name) {

}

console.log("Welcome to Zoo Keeper!");
var name = sget("A new penguin has arrived at your zoo! What would you like to name it?").trim();

console.log("What would you like to do?\n1 - Feed %s\n2 - Play with %s\n3 - Put %s to sleep\n4 - Scold %s\n5 - Quit game", name, name, name, name);
var userInput = sget().trim();

