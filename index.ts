import chalk from "chalk";
import inquirer from "inquirer";
async function askQuestion() {
    const answers = await inquirer
    .prompt([
        {
            type : "list",
            name : "operator",
            message : "which opt do you want to perform ? / n  " ,
            choices : [ "Addition" , "Subtraction " , "Multiplication" , "Division"]

        },
        {
            type : "number",
            name : "num1",
            message : "Enter 1 :  " ,


        }, {
            type : "number",
            name : "num2",
            message : "Enter 2 " ,

        }

    ])
    if (answers.operator == "Addition") {
        console.log(chalk.cyanBright(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.cyanBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.cyanBright(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.cyanBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    
}


async function askAgain( ) {
do{
    await askQuestion();
    var again = await inquirer
    .prompt([
        {
    type  : "input",
    name : "restart",
    message : "Do you want to continue? Press y or n  "

    }
]) 
} while( again.restart === "y" || again.restart === "yes" ||  again.restart === "YES" )   
}
askAgain()