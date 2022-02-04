const inquire = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [    {
    type: 'input',
    name: 'title',
    message: 'What is the Application Name'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe the Application'
  },
  {
    type: 'input',
    name: 'contributor',
    message: 'What is the GitHub name of the main contributor?'
  },
  {
    name: "license",
    type: "list",
    message: "Which License do you want to use?",
    choices: [markdown.licenseList[0].name, 
                markdown.licenseList[1].name, 
                markdown.licenseList[2].name, 
                markdown.licenseList[3].name, 
                markdown.licenseList[4].name]
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the Application?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the Application?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Describe Unit Tests'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What are open questions on the Application?'
  }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdown.generateMarkdown(data), function(err) {
        console.log(err);
    });
}

function init() {
    inquire.prompt(questions)
        .then(data =>{
            writeToFile('readme.md', data);
        });
}

// Function call to initialize app
init();
