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
  return `# ${data.title}

  ${data.description}

  ## Table of Contents

  ${renderLicenseBadge(data.license)}

  [Installation](http://www.google.fr/ "Installation Section")
  [Usage](http://www.google.fr/ "Usage Section")
  [License](http://www.google.fr/ "License Section")
  [Contributor](http://www.google.fr/ "Contributor Section")
  [Tests](http://www.google.fr/ "Tests Section")
  [Questions](http://www.google.fr/ "Questions Section")

  ## Installation

  ## Usage

  ## License

  ## Contributor

  ## Tests

  ## Questions

`;
}

module.exports = generateMarkdown;
