const fs = require('fs');
const inquirer = require('inquirer');
let licenseBadge = '';
// Takes all answers from prompt to create README
const generateReadme = ({ Title, Description, Install, Application, Contribution, Test, License, Github, Email }) =>

    `#${Title}   

    ${licenseBadge}
     
##Table of contents

###*[Description](#description)

###*[Installation](#installation)

###*[How to use](#how-to-use)

###*[How to contribute](#how-to-contribute)

###*[Tests](#tests)

###*[Questions](#questions)

-----
###Description 

    ${Description}

###Installation

    ${Install}
-----
###How to use

    ${Application}
-----
###How to contribute

    ${Contribution}
-----
###Tests

    ${Test}
-----
###Questions

    [Github](${Github}) Email: <${Email}>`;

// Displays prompts in terminal
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the your project?',
            name: 'Title',
        },
        {
            type: 'input',
            message: 'What is this project about?',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'Install',
        },
        {
            type: 'input',
            message: 'How do you use the application?',
            name: 'Application',
        },
        {
            type: 'input',
            message: 'What are the rules for contribution?',
            name: 'Contribution',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'Test',
        },
        {
            type: 'list',
            message: 'Any licenses?',
            name: 'License',
            choices: ['BSD', 'MPL', 'AGPL', 'Public domain', 'Unlicensed']
        },
        {
            type: 'input',
            message: 'Enter the url to your Github.',
            name: 'Github',
        },
        {
            type: 'input',
            message: 'Enter your email.',
            name: 'Email',
        },
    ])
    .then((response) => {
        const readmePageContent = generateReadme(response);
        console.log(response);
        console.log(readmePageContent);
        
        switch(response.License) {
            case 'BSD':
             licenseBadge += '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
             break;
             case 'MPL':
                    licenseBadge += '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
                    break;
                    case 'AGPL':
                        licenseBadge += '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
                        break;
                        case 'Public Domain':
                            licenseBadge += '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
                            break;
                            case 'Unlicensed':
                                licenseBadge += 'Unlicensed';
        };

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.error(err) : console.log('✔️ README has been created!')
        );
    });










// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
 
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README