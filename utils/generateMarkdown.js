// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.projectname}

# Contact
${data.username}
${data.email}

## Description
${data.projectdescription}

## Table of Contents
- [Usage](#Usage)
- [Installation](#Dependancies)
- [Testing](#Testing)
- [Credits](#Credits)
- [License](#License)
- [Contributing](#Contributing)
- [Screenshot](#Screenshot)

## Usage
${data.projectrepo}

## Dependancies
${data.projectdependencies}

## Testing
${data.projecttest}

## Credits
${data.credits}

## License
${data.projectlicense}

## Contributing
${data.projectcontribute}

## Screenshot
![Screenshot](./assets/img/screenshot.png)
`;
}

module.exports = generateMarkdown;
