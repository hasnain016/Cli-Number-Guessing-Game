#! usr/bin/env node

import inquirer from "inquirer";
 
const randomNumber = Math.floor(Math.random() * 10 + 1);


const answers = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please Guess a Number between 1-10: ",
  },
]);
if (answers.userGuessNumber === randomNumber) {
  console.log("Congratulation! you guessed right number🤯😎.");
} else {
  console.log("you guessed wrong number😮😣.");
}
