// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "none") {
      badge = `"![License Badge](https://img.shields.io/badge/License-" + ${response.License} + "-green")`;
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {
      case "Apache":
          licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
          break;
      case "BSD":
          licenseLink = "https://opensource.org/license/bsd-3-clause/";
          break;
      case "Creative":
          licenseLink = "https://creativecommons.org/licenses/";
          break;  
      case "GNU":
          licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
          break;
      case "MIT":
          licenseLink = "https://opensource.org/license/mit/";
          break;
      case "Mozilla":
          licenseLink = "https://www.mozilla.org/en-US/MPL/";
          break;
      default:
          licenseLink = "";
          break;
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "none") {
      licenseSection += '## License\n"'
      licenseSection += "License information for " + renderLicenseSection(license) + "can be found at the included link.\n"
  }

  return licenseSection;
}

module.exports = generateMarkdown;
