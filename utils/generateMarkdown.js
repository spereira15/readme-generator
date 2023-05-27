// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache-2.0":
      return "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL-3.0":
      return "[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD-3-Clause":
      return "[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "GNU AGPLv3":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU LGPLv3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    case "Eclipse Public License 1.0":
      return "[![License: EPL 1.0](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://www.eclipse.org/legal/epl-v10.html)";
    case "GNU FDL":
      return "[![License: FDL](https://img.shields.io/badge/License-FDL-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache-2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL-3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD-3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'Unlicense':
      return 'http://unlicense.org/';
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'GNU AGPLv3':
      return 'https://www.gnu.org/licenses/agpl-3.0';
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'GNU LGPLv3':
      return 'https://www.gnu.org/licenses/lgpl-3.0';
    case 'Eclipse Public License 1.0':
      return 'https://www.eclipse.org/legal/epl-v10.html';
    case 'GNU FDL':
      return 'https://www.gnu.org/licenses/fdl-1.3';
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
    case 'Creative Commons Zero v1.0 Universal':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
    default:
      return '';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink
};
