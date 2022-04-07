// TODO: Include packages needed for this application
const fs = require('fs');
const path = require ('path')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { log } = require('console');
const { type } = require('os');

// TODO: Create an array of questions for user input

//todo how do i get an if statement after confirm for a follow up question?



inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Project Title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your name?',
      name: 'by',
    },
    {
      type: 'input',
      message: 'Write a short description; what, why, how?',
      name: 'descrip',
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
      message: 'Link text here',
      name: 'linkText'
    },
    {
      type: 'input',
      message: 'Past your URL here',
      name: 'link',
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
      name: 'badgeBox',
      message: 'Pick your License.',
      choices: ["Javascript", "Website-up" ,"MIT", "NodeJS"],
    }


  ]).then(response => writeToFile("SampleREADME.md", response));

//todo
  // i know this works to give me the value but i can't transer the data
// .then(response => console.log(response.badgeBox[0]));

  

  

  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 return fs.writeFileSync(path.join(__dirname, fileName), generateMarkdown({...data}))
}
// JSON.stringify(response.baadgeBox)
// // TODO: Create a function to initialize app
// function init() { 

//   // Prompt user to answer user input questions
//   inquirer.prompt(questions)
//   .then((response) => {
//      console.log('Create your readme')
//      console.log(response) }
//   )}

// // // Function call to initialize app
// init();
