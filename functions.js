var sget = require('sget');

function clearScreen() {
  console.log('\033[2J');
}

function feedAnimal(name) {
  console.log(name + " was very excited to be fed so " + name + " did a little dance for you!\n");
}

function playWithAnimal(name) {
  console.log("You start playing with " + name + ". " + name + " had so much fun playing but is now very tired.\n");
}

function putAnimalToSleep(name) {
  console.log("You put " + name + " to bed and sing to it. " + name + " quickly falls asleep.\n");
}

function scoldAnimal(name) {
  console.log("You scold " + name + " for being bad. " + name + " looks sorry.\n");
}

console.log("Welcome to Zoo Keeper!");
var name = sget("A new penguin has arrived at your zoo! What would you like to name it?\n").trim();

var play = true;

while (play) {
  console.log("What would you like to do?\n1 - Feed %s\n2 - Play with %s\n3 - Put %s to sleep\n4 - Scold %s\n5 - Quit game", name, name, name, name);
  var userInput = sget().trim();
  console.log('\033[2J');
  switch (userInput) {
    case '1':
      feedAnimal(name);
      break;
    case '2':
      playWithAnimal(name);
      break;
    case '3':
      putAnimalToSleep(name);
      break;
    case '4':
      scoldAnimal(name);
      break;
    case '5':
      console.log("Bye for now!");
      play = false;
      break;
  }
}