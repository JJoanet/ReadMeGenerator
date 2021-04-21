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
        type: 'list',
        name: 'projectlicense',
        message: 'What licenses does your project have?',
        choices: ["Apache 2.0", 
            "Boost Software 1.0", 
            "BSD 3-Clause", 
            "BSD 2-Clause", 
            "CC 0", 
            "CC Attribution 4.0 International",
            "CC Attribution-ShareAlike 4.0 International", 
            "CC Attribution-NonCommercial 4.0 International", 
            "CC Attribution-NoDerivates 4.0 International", 
            "CC Attribution-NonCommmercial-ShareAlike 4.0 International", 
            "CC Attribution-NonCommercial-NoDerivatives 4.0 International", 
            "Eclipse Public License 1.0", 
            "GNU GPL v3", 
            "GNU GPL v2", 
            "GNU AGPL v3", 
            "GNU LGPL v3", 
            "GNU FDL v1.3", 
            "IBM Public License Version 1.0",
            "ISC License", 
            "The MIT License", 
            "Mozilla Public License 2.0", 
            "ODP BY", 
            "ODP ODbL", 
            "ODP PDDL", 
            "The Perl License", 
            "The Artistic License 2.0", 
            "SIL Open Font License 1.1", 
            "The Unlicense", 
            "The Do What the Fuck You Want to Public License", 
            "zlib/libpng"
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
