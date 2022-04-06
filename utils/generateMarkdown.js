// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}
//todo for of & switch maybe
// const badgeOptions = [
//   ['javascript', '[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)'
// ],
// ['MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
// ['NodeJS', '![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)']
// ]

// for (const song of badgeOptions ) {
//   console.log(song);
// }


// switch(badges){
// case add:
//   sum (a.b)
//   break;
//  case subtract: 
//   difference (a,b)
//   break;
//   case multipy:
//   product (a,b)
//   break;
//   case divide:
//   quotient
// }

//todo filter might be better



// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# By   

# Description
 ${data.descrip}

# Table of Contents (Optional)

${data.tableOfContents}


# Installation

${data.install}

# Usage

${data.usage}

# Installation

${data.install}

# Credits

${data.credits}
`;
}

module.exports = generateMarkdown;
