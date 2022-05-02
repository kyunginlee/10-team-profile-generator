const Employee = require("../lib/Employee.js");

it("should return Employee object", () => {
	const employeeTest = new Employee();
	expect(typeof(employeeTest)).toBe("object");
  });


it("should return employee's name", () => {
	const name = "Paddington Bear";
	const employeeTest = new Employee(name);
	expect(employeeTest.name).toBe(name);
});

it("should return employee's employee ID", () => {
	const id = 111;
	const employeeTest = new Employee(" ",id);
	expect(employeeTest.id).toBe(id);
});

it("should return employee's email", () => {
	const email = "paddington@bond.com";
	const employeeTest = new Employee(" ", 1, email);
	expect(employeeTest.email).toBe(email);
});	

it("should return employee's office number", () => {
	const officeNo = 101;
	const employeeTest = new Employee(" ", 1, " ", officeNo);
	expect(employeeTest.officeNo).toBe(officeNo);
});

it("should return employee's position", () => {
	const position = "Employee";
	const employeeTest = new Employee(" ", 1, position);
	expect(employeeTest.position).toBe(position);
});





