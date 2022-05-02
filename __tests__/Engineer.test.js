const Engineer = require("../lib/Engineer.js");


	// const name = "Winnie the Pooh";
	// const id = "222";
	// const email = "Winnie@milne.com";
	// const officeNo = "2";
	// const position = "Engineer";


it("should return employee's position", () => {
	const position = "Engineer";
	const engineerTest = new Engineer(" ", 1, position);
	expect(engineerTest.position).toBe(position);
});


it("should return engineer's github username", () => {
	const github = "winniethepooh";
	const engineerTest = new Engineer(" ", 1, " ", 1, github);
	expect(engineerTest.github).toBe(github);
});


