const Manager = require("../lib/Manager.js");

describe("Manager", () => {
	it("should return the managers details when requested")
	const name = "Yogi Bear";
	const id = "444";
	const email = "yogi@boo-boo.com";
	const officeNo = "4";
	const position = "Manager";
	
	const managerTest = new Manager(name, id, email, officeNo, position);
	it("should return manager's name", () => {
		expect(managerTest.getName()).toBe(name);
	});
	
	it("should return manager's employee ID", () => {
		expect(managerTest.getId()).toBe(id);
	});

	it("should return manager's email", () => {
		expect(managerTest.getEmail()).toBe(email);
	});	

	it("should return manager's office number", () => {
		expect(managerTest.getOffice()).toBe(officeNo);
	});
	
	it("should return manager's position", () => {
		expect(managerTest.getPosition()).toBe(position);
	});
});


