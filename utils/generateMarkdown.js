
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license.

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
  If you have any questions, please contact me at ${answers.email}. You can also visit my [GitHub profile](https://github.com/${answers.name}/).
  `;
}

module.exports = generateMarkdown;
