const inquirer = require('inquirer');
const fs = require('fs');

const licenses = ['None', 'Apache', 'BSD', 'Creative', 'GNU', 'MIT', 'Mozilla'];

inquirer
  .Prompt([
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
        message: 'What instructionsdo you want to provide for QUESTIONS (other than Github Username and Email)?',
        name: 'Questions',
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
  ])
//   .then((response) => { needs creation
`
# ${response.Title}\n
${response.Desc} <a name="description"></a>\n
\n
This application is covered by the ${response.License} License.  More information can be found in the License Information section.\n\n
## Table of Contents:\n
1.  [Description](#description)\n
2.  [Installation Instructions](#install)\n
3.  [Usage Infromation](#usage)\n
4.  [License Infromation](#license)\n
5.  [Contribution Guidelines](#contribute)\n
6.  [Tests](#tests)\n
7.  [Questions](#questions)\n\n
## Installation Instructions:\n
${response.Install} <a name="install"></a>\n\n
## Usage Information:\n
${response.Usage} <a name="usage"></a>\n\n
## License Information:\n
${response.License} <a name="license"></a>\n\n
## Contribution Guidelines:\n
${response.Contribute} <a name="contribute"></a>\n\n
## Tests:<a name="tests"></a>\n
${response.Tests}\n\n
## Questions <a name="questions"></a>:\n
You can find my Github at:  <https://github.com/${response.Ghun}>\n
Alternatively, you can reach me by email at:  <${response.Email}>\n
${response.Questions}\n
`
// TODO:  List of options should be presented to choose license, then badge for license is added near the top of the README and a notice is added that explains the license covering

// TODO:  Links in the Table of Contents should go to the corresponding section of the README.

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = "/output/README.md";

    fs.writeFile(fileName, dataXForm, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data has been written to README.md');
        }
        });
  };

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


