// Template to create engineer class
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, officeNo, github) {
    super(name, id, email, officeNo);
    this.github = github;
    this.position = "Engineer";
  }
  returnGithub() {
    return this.github;
  }
}
module.exports = Engineer;