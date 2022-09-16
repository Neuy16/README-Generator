const fs = require('fs');
const inquirer = require('inquirer');

const generateReadme = ({Title, Description, Install, Application, Contribution, Test, License}) => 
    // # The largest heading
    // ## The second largest heading
    // ###### The smallest heading
    `#${Title} 
     `;


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
            type: 'input',
            message: 'Any licenses?',
            name: 'License',
        },
        {
            type: 'input',
            message: 'Enter your Github.',
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


        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.error(err) : console.log('Niceeeee')
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