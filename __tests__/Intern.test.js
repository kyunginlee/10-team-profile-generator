const Intern = require("../lib/Intern.js");


	// const name = "Ted";
	// const id = "333";
	// const email = "ted@wahlberg.com";
	// const officeNo = "3";
	// const position = "Intern";
	// const school = "school";
	
	
it("should return intern's position", () => {
	const position = "Intern";
	const internTest = new Intern(" ", 1, position);
	expect(internTest.position).toBe(position);
});


it("should return school intern attended", () => {
	const school = "school";
	const internTest = new Intern(" ", 1, " ", 1, school);
	expect(internTest.school).toBe(school);
});


