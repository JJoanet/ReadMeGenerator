// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github Username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectname',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'projectdescription',
        message: 'Enter a short description of your project?'
    },
    {
        type: 'checkbox',
        name: 'projectlicense',
        message: 'What licenses does your project have?',
        choices: [
            'Apache',
            'Boost',
            'BSD',
            'Creative Commons',
            'Eclipse',
            'GNU',
            'IBM',
            'ISC',
            'MIT',
            'Mozilla',
            'Open Data Commons',
            'Perl',
            'SIL',
            'Unlicense',
            'WTFPL',
            'Zlib'
        ]
    },
    {
        type: 'input',
        name: 'projectdependancies',
        message: 'What commands should be run to install dependancies?'
    },
    {
        type: 'input',
        name: 'projecttest',
        message: 'What commands should be run to run tests?'
    },
    {
        type: 'input',
        name: 'projectrepo',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'projectcontribute',
        message: 'What does the user need to know about contributing to the repo?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Would you like to credit anyone with helping to create this project?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log('Success!')
)}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((questions) => {
            writeToFile('README.md', generateMarkdown(questions));
        });
}

// Function call to initialize app
init();
