const Intern = require("../lib/Intern.js");

describe("Intern", () => {
	it("should return the interns details when requested)
	const name = "Ted";
	const empId = "333";
	const email = "ted@wahlberg.com";
	const officeNo = "3";
	const position = "Intern";
	
	const internTest = new Intern(name, empId, email. officeNo, position);
	it("should return intern's name", () => {
		expect(internTest.getName()).toBe(name);
	});
	
	it("should return intern's employee ID", () => {
		expect(internTest.getId()).toBe(empId);
	});

	it("should return intern's email", () => {
		expect(internTest.getEmail()).toBe(email);
	});	

	it("should return intern's office number", () => {
		expect(internTest.getOffice()).toBe(officeNo);
	});
	
	it("should return intern's position", () => {
		expect(internTest.getPosition()).toBe(position);
	});
});


