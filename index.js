const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const outputFileName = "./output/README.md";

const licenses = ['None', 'Apache', 'BSD', 'Creative', 'GNU', 'MIT', 'Mozilla'];
const questions = [
    {
        type: 'input',
        message: 'What would you like the TITLE to be?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'What would you like the DESCRIPTION for the application to be?',
        name: 'Desc',
    },
    {
        type: 'input',
        message: 'What are the INSTALLATION INSTRUCTIONS?',
        name: 'Install',
    },
    {
        type: 'input',
        message: 'What is the USAGE INFO?',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'Which LICENSE is the application covered under (use the arrow keys)?',
        name: 'License',
        choices: licenses,
    },
    {
        type: 'input',
        message: 'What are the CONTRIBUTION GUIDELINES for your project?',
        name: 'Contribute',
    },
    {
        type: 'input',
        message: 'What TESTS have been performed on your project?',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'What is your GITHUB USERNAME?',
        name: 'GHun',
    },
    {
        type: 'input',
        message: 'What is your EMAIL?',
        name: 'Email',
    },
  ];
// TODO:  List of options should be presented to choose license, then badge for license is added near the top of the README and a notice is added that explains the license covering

// TODO:  Links in the Table of Contents should go to the corresponding section of the README.

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data has been written to ' + fileName);
        }
        });
  };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (response => {
        const fileTBG = generateMarkdown(response);
        writeToFile(outputFileName, fileTBG);
});
}

// Function call to initialize app
init();