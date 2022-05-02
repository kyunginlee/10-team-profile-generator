// Template to create intern class
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, officeNo, school) {
    super(name, id, email, officeNo);
    this.title = "Intern";
    this.school = school;
  }
  returnSchool() {
    return this.school;
  }
}
module.exports = Intern;