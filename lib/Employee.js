// Template to create Employee class
class Employee {
    constructor(name, id, email, officeNo) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNo = officeNo;
      this.title = "Employee";
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
  
    returnRole() {
      return this.title;
    }
  }
  module.exports = Employee;