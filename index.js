const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// default is manager
const promptManager = () => {
    return inquirer.prompt([
        {
            //when(answers){ return answers.role = "intern" }
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is your office number? (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add other employees?',
            default: false
        }
    ])
}

const promptEmployee = (teamData) => {
    if (!teamData.employees) {
        teamData.employees = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter their name!');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is their id? (Required)'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter their email!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee is this?',
            choices: ["Engineer", "Intern"],
            default: "Engineer"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github? (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter their github!');
                    return false;
                }
            },
            when: (employeeData) => employeeData.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school? (Required)",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter their school!');
                    return false;
                }
            },
            when: (employeeData) => employeeData.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddAnother',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
        .then(employeeData => {
            teamData.employees.push(employeeData);
            if (employeeData.confirmAddAnother) {
                return promptEmployee(teamData);
            }
            else {
                return teamData;
            }
        })
}

promptManager()
    .then((managerData) => {
        if (managerData.confirmAddEmployee) {
            promptEmployee(managerData)
                .then((teamData) => {
                    console.log(teamData)
                }) // return generatePage(teamData)
        }
    })
    .catch(err => {
        console.log(err);
    });