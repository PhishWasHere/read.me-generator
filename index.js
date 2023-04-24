//required files
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')


const Init = () => {

    inquirer //questions
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'provide your github name'
            },
            {
                type: 'input',
                name: 'email',
                message: 'provide your github email'
            },
            {
                type: 'input',
                name: 'title',
                message: 'provide your project title'
            },
            {
                type: 'input',
                name: 'desc',
                message: 'provide your project description'
            },
            {
                type: 'input',
                name: 'installationInstructions',
                message: 'provide your project installation instructions'
            },
            {
                type: 'input',
                name: 'usageInformation',
                message: 'provide your project usage information'
            },
            {
                type: 'input',
                name: 'contributionGuidelines',
                message: 'provide your contribution guidelines'
            },
            {
                type: 'input',
                name: 'testInstructions',
                message: 'provide your project test instructions'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which license would you like to use?',
                choices: ['MIT', 'Apache', 'GPL',],
            },
  ])
  .then((answers) => { //uses promises to generate file using the template
    const markdown = generateMarkdown(answers);
    fs.writeFile('./gen/README.md', markdown, (err) => {
      if (err) throw err; //catches errors
      console.log('README.md successfully created'); //makes a log if there is no error
    });
  })
};

Init()