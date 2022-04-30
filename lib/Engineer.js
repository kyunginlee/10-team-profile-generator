// Template to create engineer class
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, officeNo) {
    super(name, id, email, officeNo);
    this.title = "Engineer";
  }
  returnGithub() {
    return this.github;
  }
}
module.exports = Engineer;