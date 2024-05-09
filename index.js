import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        massage: "Enter your firstNumber",
        type: "number",
        name: "firstNumber",
    },
    {
        massage: "Enter your secondNumber",
        type: "number",
        name: "secondNumber",
    },
    {
        massage: "Select any opreter to perform opretion",
        type: "list",
        name: "opreter",
        choices: ["Addition", "Subtarction", "multiplication", "division"],
    },
]);
if (answer.opreter === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.opreter === "Subtarction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opreter === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opreter === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Plese select a valid opreter");
}
