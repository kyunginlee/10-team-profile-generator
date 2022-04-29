// Packages required for application
const inquirer = require('inquirer');
const generateReadme = require('./dist/generatePage');
const Engineer = require("lib/Engineer.js")
const Intern = require("lib/Intern.js")
const Manager = require("lib/Manager.js")
const axios = require('axios');
const fs = require('fs');

let employees = [];

const Employee = {
    Intern: "Intern",
    Engineer: "Engineer",
    Manager: "Manager",
};

const Answer = {
    y: "yes",
    n: "no",
};

// prompts requiring manager details
const managerQuestions = [
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
        name: 'managerId',
        validate: managerIdInput => {
            if (managerIdInput) {
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
    { 
        type: 'confirm', 
        message: "Add additional team members",
        name: 'addmember',
        default: true
    },
  
    {
        type: 'list',
        message: "Choose employee type",
        choices: [new inquirer.Separator(), Employee.Intern, Employee.Engineer],
        name: 'employeeType',
        when: ({ addmember}) => {
            if (addmember) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Intern school name",
        name: "school",
        when: (answers) => answers.employeeType === Employee.Intern,
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('*Intern school required')
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Engineer github username",
        name: "github",
        when: (answers) => answers.employeeType === Employee.Engineer,
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('*Engineer github username required')
                return false;
            }
        }
    },
// ];
// // prompts requiring employee details
// const employeeQuestions = [
    { 
        type: 'input', 
        message: "Employee name",
        name: 'employeeName',
        validate: empNameInput => {
            if (empNameInput) {
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
        name: 'empId',
        validate: empIdInput => {
            if (empIdInput) {
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
        name: 'empEmail',
        validate: empEmailInput => {
            if (empEmailInput) {
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
        name: 'empOfficeNo',
        validate: empOfficeNoInput => {
            if (empOfficeNoInput) {
                return true;
            } else {
                console.log('*Employee office number required')
                return false;
            }
        }
    }
];
//Present manager question array and store user input
const init = () => {
    return inquirer.prompt(managerQuestions)
    .then(managerInput => {
        return managerInput;
    })
}


//Startup application 
init()