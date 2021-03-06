const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

// generates the html for the manager card using the employees array from teamData
const generateEmployees = employees => {
    let employeeCardsArr = employees.map(employee => {
        switch (employee.role) {
            case "Engineer":
                let engineerObj = new Engineer(employee.name, employee.id, employee.email, employee.github);
                return `
        <div class="card m-3 p-0 bg-light border" style="min-width: 18rem; max-width: 18rem;">
            <div class="card-body p-0">
                <div class = "text-white bg-dark p-3">
                    <h5 class="card-title">${engineerObj.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${engineerObj.getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">ID: ${engineerObj.getId()}</li>
                    <li class="list-group-item bg-transparent">Email: <a href="mailto:${engineerObj.getEmail()}">${engineerObj.getEmail()}</a></li>
                    <li class="list-group-item bg-transparent">Github: <a href="https://github.com/${engineerObj.getGithub()}" target="_blank">${engineerObj.getGithub()}</a></li>
                </ul>
            </div>
        </div>
                `
            case "Intern":
                let integerObj = new Intern(employee.name, employee.id, employee.email, employee.school);
                return `
        <div class="card m-3 p-0 bg-light border" style="min-width: 18rem; max-width: 18rem;">
            <div class="card-body p-0">
                <div class = "text-white bg-dark p-3">
                    <h5 class="card-title">${integerObj.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${integerObj.getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">ID: ${integerObj.getId()}</li>
                    <li class="list-group-item bg-transparent">Email: <a href="mailto:${integerObj.getEmail()}">${integerObj.getEmail()}</a></li>
                    <li class="list-group-item bg-transparent">School: ${integerObj.getSchool()}</li>
                </ul>
            </div>
        </div>
                `
        }
    });
    return employeeCardsArr.join('');
}

// generates the html for the manager card using the manager data from teamData
const generateManager = manager => {
    let managerObj = new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
    return `
        <div class="card m-3 p-0 bg-light border" style="min-width: 18rem; max-width: 18rem;">
            <div class="card-body p-0">
                <div class = "text-white bg-dark p-3">
                    <h5 class="card-title ">${managerObj.getName()}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${managerObj.getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush bg-transparent">
                    <li class="list-group-item bg-transparent">ID: ${managerObj.getId()}</li>
                    <li class="list-group-item bg-transparent">Email: <a href="mailto:${managerObj.getEmail()}">${managerObj.getEmail()}</a></li>
                    <li class="list-group-item bg-transparent">Office Number: ${managerObj.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `
}

module.exports = teamData => {
    // destructure page data by section
    const { employees, ...manager } = teamData;
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <title>Team Profile Generator</title>
    </head>
  
    <body>
        <header class = "text-center text-white bg-primary p-3 mb-3">
            <h1>My Team</h1>
        </header>

        <main class = "card-group justify-content-around">
            ${generateManager(manager)}
            ${employees? generateEmployees(employees) : ``}
        </main>

        <footer class = "footer fixed-bottom p-3">
            <h3> ${new Date().getFullYear()} by Preston Fassbender</h3>
        </footer>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};