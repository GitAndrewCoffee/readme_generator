const inquire = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(, markdown.generateMarkdown(data), function(err) {
        console.log(err);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions)
        .then(data =>{
            writeToFile('readme.md', data);
        });
}

// Function call to initialize app
init();
