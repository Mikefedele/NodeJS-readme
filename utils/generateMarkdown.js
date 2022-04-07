


// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge() {
//   const badgeOptions = [
//    '[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)'
//   ,
//   '[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)',
//   '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
//   '![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)',
//     ];

//     const badges = data.badgeBox
//     for (let i = 0; i < badges.length; i++) {
//         badgeOptions[i] = badges[i]        
//     }    
//   }
 


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}





// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# By   ${data.by}

# Description
 ${data.descrip}

# Table of Contents (Optional)

${data.tableOfContents}


# Installation

${data.install}

# Usage

${data.usage}

# Link

<${data.link}>

# Credits

${data.credits}

# Badges
  // ${data.badgeBox}  
`;
}

module.exports = generateMarkdown;
