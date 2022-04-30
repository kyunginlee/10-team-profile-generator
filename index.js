// Packages required for application
const inquirer = require('inquirer');
const path = require("path")
const fs = require('fs');
const render = require("./lib/generatePage")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const output_dir = path.resolve(__dirname, "dist")
const outputFile = path.join(output_dir, "index.html")

// converts employee expression to string objects 
let employees = [];

function start() {
    managerQuestions();
}

// prompts requiring manager details
function managerQuestions() {
    inquirer.prompt([
        { 
            type: 'input', 
            message: "Team manager name",
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('*Team manager name required')
                    return false;
                }
            }
        },
        { 
            type: 'input', 
            message: "Team manager's employee ID",
            name: 'id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('*Team manager ID required')
                    return false;
                }
            }
        },
        { 
            type: 'input', 
            message: "Team manager's email address",
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('*Team manager email required')
                    return false;
                }
            }
        },
        { 
            type: 'input', 
            message: "Team manager's office number",
            name: 'officeNo',
            validate: officeNoInput => {
                if (officeNoInput) {
                    return true;
                } else {
                    console.log('*Manager office number required')
                    return false;
                }
            }
        },
    ])

    .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNo
        );
        employees.push(manager);
        employeeQuestions();
    });
}

function employeeQuestions() {
    inquirer.prompt([ {
        type: 'list',
        name: 'addmember',
        message: "Add team members",
        choices: ['intern', 'engineer', 'none']
    },
    ])
    .then((answers) => {
        if(answers.addmember === 'intern') {
            internQuestions();
        } else if (answers.addmember === 'engineer') {
            engineerQuestions();
        } else {
            generateFile();
        }
    });
}

function internQuestions() {
    inquirer.prompt ([
        { 
            type: 'input', 
            message: "Employee name",
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('*Employee name required')
                    return false;
                }
            }
        },
        { 
            type: 'input', 
            message: "Employee ID",
            name: 'id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('*Employee ID required')
                    return false;
                }
            }
        },
        { 
            type: 'input', 
            message: "Employee email address",
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('*Employee email required')
                    return false;
                }
            }
        },
        { 
            type: 'input', 
            message: "Employee office number",
            name: 'officeNo',
            validate: officeNoInput => {
                if (officeNoInput) {
                    return true;
                } else {
                    console.log('*Employee office number required')
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Name of school which intern attends",
            name: "school",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('*Intern school required')
                    return false;
                }
            }
        }
    ])
    .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNo,
          answers.school
        );
        employees.push(intern);
        employeeQuestions();
    });
}

function engineerQuestions() {
    inquirer.prompt ([
        { 
            type: 'input', 
            message: "Employee name",
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('*Employee name required')
                    return false;
                }
            }
        },
        { 
            type: 'input', 
            message: "Employee ID",
            name: 'id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('*Employee ID required')
                    return false;
                }
            }
        },
        { 
            type: 'input', 
            message: "Employee email address",
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('*Employee email required')
                    return false;
                }
            }
        },
        { 
            type: 'input', 
            message: "Employee office number",
            name: 'officeNo',
            validate: officeNoInput => {
                if (officeNoInput) {
                    return true;
                } else {
                    console.log('*Employee office number required')
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Engineer github username",
            name: "github",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('*Engineer github username required')
                    return false;
                }
            }
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNo,
          answers.github
        );
        employees.push(engineer);
        employeeQuestions();
    });
}

function generateFile() {
    if (!fs.existsSync(output_dir)) {
        fs.mkdirSync(output_dir);
    } else {
        fs.writeFileSync(outputFile, render(employees), "UTF-8");
        console.log("Team page created!")
    }
}

//Startup application 
start();