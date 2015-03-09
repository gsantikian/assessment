var sget = require('sget');

function randomPoints() {
  return Math.floor(Math.random() * 10 + 1);
}

function clearScreen() {
  console.log('\033[2J');
}

function feedAnimal(name) {
  console.log(name + " was very excited to be fed so " + name + " did a little dance for you!\n");
  return randomPoints();
}

function playWithAnimal(name) {
  console.log("You start playing with " + name + ". " + name + " had so much fun playing but is now very tired.\n");
  return randomPoints();
}

function putAnimalToSleep(name) {
  console.log("You put " + name + " to bed and sing to it. " + name + " quickly falls asleep.\n");
  return randomPoints();
}

function scoldAnimal(name) {
  console.log("You scold " + name + " for being bad. " + name + " looks sorry.\n");
  return randomPoints();
}

var score = 0;

console.log("Welcome to Zoo Keeper!");
var name = sget("A new penguin has arrived at your zoo! What would you like to name it?\n").trim();

var play = true;

while (play) {
  console.log("What would you like to do?\n1 - Feed %s\n2 - Play with %s\n3 - Put %s to sleep\n4 - Scold %s\n5 - Quit game", name, name, name, name);
  var userInput = sget().trim();
  clearScreen();
  switch (userInput) {
    case '1':
      score += feedAnimal(name);
      break;
    case '2':
      score += playWithAnimal(name);
      break;
    case '3':
      score += putAnimalToSleep(name);
      break;
    case '4':
      score -= scoldAnimal(name);
      break;
    case '5':
      console.log("Your final score: " + score);
      play = false;
      break;
  }
}