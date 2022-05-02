const Intern = require("../lib/Intern.js");

describe("Intern", () => {
	it("should return the interns details when requested")
	const name = "Ted";
	const id = "333";
	const email = "ted@wahlberg.com";
	const officeNo = "3";
	const position = "Intern";
	const school = "school";
	
	const internTest = new Intern(name, id, email, officeNo, position);
	it("should return intern's name", () => {
		expect(internTest.getName()).toBe(name);
	});
	
	it("should return intern's employee ID", () => {
		expect(internTest.getId()).toBe(id);
	});

	it("should return intern's email", () => {
		expect(internTest.getEmail()).toBe(email);
	});	

	it("should return intern's office number", () => {
		expect(internTest.getOfficeNo()).toBe(officeNo);
	});
	
	it("should return intern's position", () => {
		expect(internTest.getPosition()).toBe(position);
	});

	it("should return school intern attended", () => {
		expect(internTest.getSchool()).toBe(school);
	});
});


