import inquirer from 'inquirer';

function askToUser(message, type) {
  inquirer.prompt(message, type)
}

export default askToUser