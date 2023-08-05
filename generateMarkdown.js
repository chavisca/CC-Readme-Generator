// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
    let badge = "";
  
    if(License != "none") {
        badge = "![License Badge](https://img.shields.io/badge/License-" + License + "-green)";
    }
  
    return badge;
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(License) {
    let licenseLink;
  
  // Switch to populate appropriate link based on license selected  
    switch(License) {
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
  function renderLicenseSection(License) {
    let licenseSection = "";
  
    if (License != "none") {
        licenseSection += '## License\n"'
        licenseSection += "License information for " + renderLicenseLink(License) + "can be found at the included link.\n"
    }
  
    return licenseSection;
  }
  
  // Generates markdown sections and appends them to the markdown object as it flows through the code by pulling answers from the inquirer prompts and grabbing section titles from the array
  function generateMarkdown(data) {
    const sections = ["Description", "Installation Instructions", "Usage Information", "License Information", "Contribution Guidelines", "Tests", "Questions"];
 
    let markdown = "# " + data.Title + "\n";
  
    markdown += renderLicenseBadge(data.License) + "\n";
  
    markdown += "## Table of Contents \n";
    for (let i=0; i<sections.length; i++) {
        // Line below removes License section if license is none
      if(! (sections[i] === "License" && data.License === "none")) {
        // Line below creates a numbered list of clickable links by making anchor links
        markdown += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
      }
    }
    markdown += "\n";
  
    markdown += "## "+ sections[0] + "\n";
    markdown += data.Desc + "\n";
  
    markdown += "## " + sections[1] + "\n";
    markdown += data.Install + "\n";
  
    markdown += "## " + sections[2] + "\n";
    markdown += data.Usage + "\n";
  
    markdown += "## " + sections[3] + "\n";
    markdown += renderLicenseSection(data.License) + "\n";
  
    markdown += "## " + sections[4] + "\n";
    markdown += data.Contribute + "\n";
  
    markdown += "## " + sections[5] + "\n";
    markdown += data.Tests + "\n";
  
    markdown += "## + sections[6]" + "\n";
    markdown += "You can find me on GitHub [HERE](https://github.com/" + data.Ghun + ") \n";
    markdown += "You can reach me by email at " + data.Email + "\n";
  
    return markdown;
  }
  
  module.exports = generateMarkdown;
  