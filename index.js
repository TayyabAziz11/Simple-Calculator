#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "Enter first number",
        type: "number",
        name: "firstnumber" },
    { message: "Enter second number",
        type: "number",
        name: "secondnumber", },
    { message: "Select one of the operator to  perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "Multiplication", "division"],
    }
]);
// conditional statment
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please select valid Operator");
}
