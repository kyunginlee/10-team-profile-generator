const Engineer = require("../lib/Employee.js");

describe("Engineer", () => {
	it("should return the engineers details when requested)
	const name = "Winnie the Pooh";
	const empId = "222";
	const email = "Winnie@milne.com";
	const officeNo = "2";
	const role = "Engineer";
	
	const engineerTest = new Engineer(name, empId, email. officeNo, role);
	it("should return engineer's name", () => {
		expect(engineerTest.getName()).toBe(name);
	});
	
	it("should return employee's employee ID", () => {
		expect(engineerTest.getId()).toBe(empId);
	});

	it("should return employee's email", () => {
		expect(engineerTest.getEmail()).toBe(email);
	});	

		it("should return employee's office number", () => {
		expect(engineerTest.getOffice()).toBe(officeNo);
	});
});


