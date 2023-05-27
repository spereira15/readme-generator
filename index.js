const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'Unlicense', 'Mozilla Public License 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Eclipse Public License 1.0', 'GNU FDL', 'ISC', 'Creative Commons Zero v1.0 Universal', 'Other'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`README.md generated successfully as ${fileName}`);
      }
    });
  }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();