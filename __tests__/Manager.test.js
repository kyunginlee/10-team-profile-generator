const Manager = require("../lib/Manager.js");


	// const name = "Yogi Bear";
	// const id = "444";
	// const email = "yogi@boo-boo.com";
	// const officeNo = "4";
	// const position = "Manager";
	
	
it("should return manager's position", () => {
	const position = "Manager";
	const managerTest = new Manager(" ", 1, position);
	expect(managerTest.position).toBe(position);
});