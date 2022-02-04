const licenseList = [
  { name: 'Apache',
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0'},
  { name: 'Boost',
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    link: 'https://www.boost.org/LICENSE_1_0.txt' },
  { name: 'BSD',
    badge:'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    link: 'https://opensource.org/licenses/BSD-3-Clause'},
  { name: 'GNU',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    link: 'https://www.gnu.org/licenses/gpl-3.0'},
  { name: 'MIT',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT'}]


function renderLicenseBadge(license) {
  
  switch(license) {
    case licenseList[1].name:
      return licenseList[1].badge;      
    case licenseList[2].name:
      return licenseList[2].badge;            
    case licenseList[3].name:
      return licenseList[3].badge;            
    case licenseList[4].name:
      return licenseList[4].badge;      
    case licenseList[5].name:
      return licenseList[5].badge; 
    default:
      console.log(`License ${license} note found`);
  }     
}

function renderLicenseSection(license) {
  switch(license) {
    case licenseList[1].name:
      return `Please visit this link for license details: ${licenseList[1].link}`;      
    case licenseList[2].name:
      return `Please visit this link for license details: ${licenseList[2].link}`;
    case licenseList[3].name:
      return `Please visit this link for license details: ${licenseList[3].link}`;           
    case licenseList[4].name:
      return `Please visit this link for license details: ${licenseList[4].link}`;
    case licenseList[5].name:
      return `Please visit this link for license details: ${licenseList[5].link}`;
    default:
      console.log(`License ${license} note found`);
  }   
}



function renderGitHub(contributor) {
  return `https://github.com/${contributor}`
}


function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

  ## Table of Contents

  ${renderLicenseBadge(data.license)}

  *[Installation](#Installation)  
  *[Usage](#Usage) 
  *[Contributor](#Contributor)
  *[Tests](#Tests)
  *[Questions](#Questions)
  *[License](#License)

  ##Installation

  ${data.installation}

  ##Usage

  ${data.usage}

  ##Contributor

  ${renderGitHub(data.contributor)}

  ##Tests

  ${data.tests}

  ##Questions

  ${data.questions}
  
  ##License

  ${renderLicenseSection(data.license)}
`;
}

module.exports = {generateMarkdown, licenseList};
