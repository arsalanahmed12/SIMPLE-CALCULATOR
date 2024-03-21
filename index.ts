#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Plaese Enter The First value", type: "number", name: "FirstNumber" },
  { message: "Please Enter The Second value", type: "number", name: "SecondNumber" },
  {
    message: "Which Opeartion Do You Want To Perfom",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.operator === "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber)
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber)
  }
  else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber)
  }
  else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber)
  }

  else console.log("Please Select Valid Operator")
