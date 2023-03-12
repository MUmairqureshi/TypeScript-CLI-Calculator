import chalk from "chalk";
import inquirer from "inquirer";

async function askQuestion() {
    const questions = await inquirer
    .prompt([
            {
                type: "list",
                name: "operator",
                message: "which opt do you want to enter / n  ",
                choices: ["add", "sub", "mul", "divid"]
            },
            {
                type: "number",
                name: "num1",
                message: "Enter 1 :  ",
            }, {
                type: "number",
                name: "num2",
                message: "Enter 2 :  ",
            }
        ]);
        if (questions.operator == "add") {
            console.log(chalk.cyanBright(`${questions.num1} + ${questions.num2} = ${questions.num1 + questions.num2}`));
        }
        else if (questions.operator == "sub") {
            console.log(chalk.cyanBright(`${questions.num1} - ${questions.num2} = ${questions.num1 - questions.num2}`));
        }
        else if (questions.operator == "mul") {
            console.log(chalk.cyanBright(`${questions.num1} * ${questions.num2} = ${questions.num1 * questions.num2}`));
        }
        else if (questions.operator == "divid") {
            console.log(chalk.cyanBright(`${questions.num1} / ${questions.num2} = ${questions.num1 / questions.num2}`));
        }
    } 
async function askAgain() { 
        do {
            await askQuestion();
            var again = await inquirer 
                .prompt([
                {
                    type: "input",
                    name: "restart",
                    message: "Do you want to continue? Press y or n  "
                }
            ]);
        } while (again.restart === "y" || again.restart === "yes" || again.restart === "YES");
    } 
askAgain();
