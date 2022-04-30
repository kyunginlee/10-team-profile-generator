// Template to create manager class
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNo) {
    super(name, id, email, officeNo);
    this.title = "Manager";
  }
}
module.exports = Manager;
