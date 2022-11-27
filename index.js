const fs = require("fs");
const inquirer = require("inquirer");
let licenseBadge = "";
// Takes all answers from prompt to create README
const generateReadme = ({
  Title,
  Description,
  Install,
  Application,
  Contribution,
  Test,
  License,
  Github,
  Email,
}) =>
  `#${Title}   

    ${License}
     
##Table of contents

* [Description](#Description)
* [Installation](#Installation)
* [How to use](#How-to-use)
* [How to contribute](#How-to-contribute)
* [Tests](#Tests)
* [Questions](#Questions)

-----
## Description 

    ${Description}

## Installation

    ${Install}

-----
## How to use

    ${Application}

-----
## How to contribute

    ${Contribution}

-----
## Tests

    ${Test}

-----
## Questions

    [Github](${Github}) Email: <${Email}>`;

// Displays prompts in terminal
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of the your project?",
      name: "Title",
    },
    {
      type: "input",
      message: "What is this project about?",
      name: "Description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "Install",
    },
    {
      type: "input",
      message: "How do you use the application?",
      name: "Application",
    },
    {
      type: "input",
      message: "What are the rules for contribution?",
      name: "Contribution",
    },
    {
      type: "input",
      message: "What are the test instructions?",
      name: "Test",
    },
    {
      type: "list",
      message: "Any licenses?",
      name: "License",
      choices: ["BSD", "MPL", "AGPL", "Public domain", "Unlicensed"],
    },
    {
      type: "input",
      message: "Enter the url to your Github.",
      name: "Github",
    },
    {
      type: "input",
      message: "Enter your email.",
      name: "Email",
    },
  ])
  .then((response) => {
    const readmePageContent = generateReadme(response);
    console.log(response);
    console.log(readmePageContent);
    let licenseBadge;
    switch (response.License) {
      case "BSD":
        licenseBadge =
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "MPL":
        licenseBadge =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
      case "AGPL":
        licenseBadge =
          "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;
      case "Public Domain":
        licenseBadge =
          "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
        break;
      case "Unlicensed":
        licenseBadge = "Unlicensed";
    }
    
    fs.writeFile("README.md", readmePageContent, (err) =>
      err ? console.error(err) : console.log("✔️ README has been created!")
    );
  });
