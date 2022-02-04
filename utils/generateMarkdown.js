// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  switch(license) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      console.log(`License ${license} note found`);
  }
  
  
  
  return `![${license}](${licenseImage})](${renderLicenseLink(license)})`  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderGitHub(contributor) {
  return 'Hi Mom'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

  ## Table of Contents

  ${renderLicenseBadge(data.license)}

  *[Installation](#Installation)  
  *[Usage](#Usage)
  *[License](#License)
  *[Contributor](#Contributor)
  *[Tests](#Tests)
  *[Questions](#Questions)

  ##Installation

  ${data.installation}

  ##Usage

  ${data.Usage}

  ##License

  ${renderLicenseSection(data.license)}

  ##Contributor

  ${renderGitHub(data.contributor)}

  ##Tests

  ##Questions
`;
}

module.exports = generateMarkdown;
