const path = require('path');
const fs = require('fs');

const styleDir = path.resolve(__dirname, "../style");

// Read file content and map to corresponding employee type/object
const generate = (employees) => {
    
    const card = [];
  
    card.push(
      employees
        .filter((employee) => employee.returnPosition() === "Manager")
        .map((manager) => generateManager(manager))
    );

    card.push(
      employees
        .filter((employee) => employee.returnPosition() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
    );

    card.push(
      employees
        .filter((employee) => employee.returnPosition() === "Intern")
        .map((intern) => generateIntern(intern))
    );
  
    return generatePage(card.join(" "));
};
  
const generateManager = (manager) => {
    let template = fs.readFileSync (
      path.resolve(styleDir, "card.html"),
      "utf8"
    );
    template = populate(template, "name", manager.returnName());
    template = populate(template, "id", manager.returnId());
    template = populate(template, "email", manager.returnEmail());
    template = populate(template, "officeNo", manager.returnOfficeNo());
    template = populate(template, "position", manager.returnPosition());

    return template;
};
  
const generateEngineer = (engineer) => {
    let template = fs.readFileSync(
      path.resolve(styleDir, "engineer-card.html"),
      "utf8"
    );

    template = populate(template, "name", engineer.returnName());
    template = populate(template, "id", engineer.returnId());
    template = populate(template, "email", engineer.returnEmail());
    template = populate(template, "officeNo", engineer.returnOfficeNo());
    template = populate(template, "position", engineer.returnPosition());
    template = populate(template, "github", engineer.returnGithub());
    
    return template;
};
  
  const generateIntern = (intern) => {
    let template = fs.readFileSync(
      path.resolve(styleDir, "intern-card.html"),
      "utf8"
    );

    template = populate(template, "name", intern.returnName());
    template = populate(template, "id", intern.returnId());
    template = populate(template, "email", intern.returnEmail());
    template = populate(template, "officeNo", intern.returnOfficeNo());
    template = populate(template, "position", intern.returnPosition());
    template = populate(template, "school", intern.returnSchool());
    
    return template;
  };
  
  const generatePage = (card) => {
    const template = fs.readFileSync(
      path.resolve(styleDir, "page.html"),
      "utf8"
    );
    return populate(template, "team", card);
  };
  
  const populate = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };
  
  module.exports = generate;
  