// Template to create Employee class
class Employee {
    constructor(name, id, email, officeNo) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNo = officeNo;
      this.position = "Employee";
    }
  
    returnName() {
      return this.name;
    }
  
    returnId() {
      return this.id;
    }
  
    returnEmail() {
      return this.email;
    }

    returnOfficeNo() {
      return this.officeNo;
    }
  
    returnPosition() {
      return this.position;
    }
  }
  module.exports = Employee;