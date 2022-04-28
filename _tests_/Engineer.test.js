const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
	it("should return the engineers details when requested)
	const name = "Winnie the Pooh";
	const empId = "222";
	const email = "Winnie@milne.com";
	const officeNo = "2";
	const position = "Engineer";
	
	const engineerTest = new Engineer(name, empId, email. officeNo, position);
	it("should return engineer's name", () => {
		expect(engineerTest.getName()).toBe(name);
	});
	
	it("should return engineer's employee ID", () => {
		expect(engineerTest.getId()).toBe(empId);
	});

	it("should return engineer's email", () => {
		expect(engineerTest.getEmail()).toBe(email);
	});	

	it("should return engineer's office number", () => {
		expect(engineerTest.getOffice()).toBe(officeNo);
	});
	
	it("should return employee's position", () => {
		expect(engineerTest.getPosition()).toBe(position);
	});
});


