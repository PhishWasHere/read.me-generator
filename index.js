// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input

const init = () => {

    const licenseList = [
        {
        name: 'MIT',
        text: 'MIT license (pretend the entire license is here, thanks)',
        },
        {
        name: 'Apache',
        text: 'Apache license (pretend the entire license is here, thanks)',
        },
        {
        name: 'GPL',
        text: 'GPL license (pretend the entire license is here, thanks)',
        },
    ];

    inquirer
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
                choices: licenseList.map((license) => license.name),
                default: licenseList[0],
            },

        ])
        .then((answers) => {
            const selectedLicense = licenseList.find(
                (license) => license.name === answers.license
            ); 

            const readMe = `
            # ${answers.title}

                ## Table of Contents

                - [Installation](#installation)
                - [Usage](#usage)
                - [License](#license)
                - [Contributing](#contributing)
                - [Tests](#tests)
                - [Questions](#questions)

                ## License

                ${selectedLicense.text}

                ## Description

                ${answers.desc}


                ## Installation

                ${answers.installationInstructions}

                ## Usage

                ${answers.usageInformation}


                ## Contributing

                ${answers.contributionGuidelines}

                ## Tests

                ${answers.testInstructions}

                ## Questions
                ${answers.email}
            `
            console.log(readMe);
        fs.writeFile('README.md', readMe, (err) =>
        err ? console.log(err) : console.log('README.md did a thing')
        );
    });

};



// TODO: Create a function to initialize app,
//Do you mean this mr/mrs instructor
init();



