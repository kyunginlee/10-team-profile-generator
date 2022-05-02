const Employee = require("../lib/Employee.js");

describe("ProfileInfo", () => {
	it("should return the employee details when requested")
	const name = "Paddington Bear";
	const id = "111";
	const email = "paddington@bond.com";
	const officeNo = "1";
	const position = "Employee";
	
	const employeeTest = new Employee(name, id, email, officeNo, position);
	it("should return employee's name", () => {
		expect(employeeTest.getName()).toBe(name);
	});
	
	it("should return employee's employee ID", () => {
		expect(employeeTest.getId()).toBe(id);
	});

	it("should return employee's email", () => {
		expect(employeeTest.getEmail()).toBe(email);
	});	

	it("should return employee's office number", () => {
		expect(employeeTest.getOfficeNo()).toBe(officeNo);
	});
	
	it("should return employee's position", () => {
		expect(employeeTest.getPosition()).toBe(position);
	});
});




