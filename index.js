// TODO: Include packages needed for this application
const fs = require('fs');
const path = require ('path')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { log } = require('console');

// TODO: Create an array of questions for user input
// const questions = [  ``
// ];


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a short description; what, why, how?',
      name: 'descrip',
    },
    {
      type: 'confirm',
      message: 'table of Contents',
      name: 'tableOfContents',
    },
    {
      type: 'input',
      message: 'what is required to install your project?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Provide instructions & examples for use.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'what is required to install your project?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'List any credits or collaborators',
      name: 'credits',
    },
    {
      type: 'input',
      message: 'Are there any Licenses?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'List any credits or collaborators',
      name: 'credits',
    },
    {
      type: 'checkbox', 
      name: 'BadgeBox',
      message: 'Pick your License.',
      choices: ["Javascript", "MIT", "NodeJS"],
    }


  ]).then(response => writeToFile("SampleREADME.md", response));


 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 return fs.writeFileSync(path.join(__dirname, fileName), generateMarkdown({...data}))
}



// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
