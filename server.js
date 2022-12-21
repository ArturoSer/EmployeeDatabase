const inquirer = require ('inquirer');
require = ("console.table");
const db = ('./db');



const startApp = () => {
    clear();
    console.table(tableData);
    prompts();
}

const prompts = () => {
    inquirer
    .prompt([
        {
            type: "list",
            name: "prompt",
            message: "Here are your options 🚀",
            choices: [
                "View all Employees",
                "View all Departments",
                "View all Roles",
                "Add a department",
                "Add a new role",
                "Add a employee",
                "Update employee Role",
                "Quit",
            ],
        },
    ])
    .then((answers) => {
        if (answers) {
            switch (answers.prompt) {
                case "View all Employees":
                    getEmployees();
                    break;
                    case "View all Departments":
                    getDepartments();
                    break;
                    case "View all Roles":
                    getRoles();
                    break;
                    case "Add a department":
                    createDepartment();
                    break;
                    case "Add a role":
                    createRole();
                    break;
                    case "Add a employee":
                    createEmployee();
                    break;
                    case "Quit":
                        process.exit();
            }
        }
    });
};

function viewAllEmployees() {
    db.findAllEmployees()
    .then(([data]) => {
        console.table(data);
    })
    .then(() => prompts());
}

function getDepartments() {
    db.findAllDepartments() 
    .then(([data]) => {
        console.table(data);
    })
    .then(() =>prompts());
}

function getRoles() {
    db.findAllRoles() 
    .then(([data]) => {
        console.table(data);
    })
    .then(() => prompts());
}

function createDepartment() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Name of department?",
        },
    ])
    .then((answers) => {
        let name = answers;
        db.addDepartment(name)
        .then(() => console.log(`Added ${name.name} to the database!`))
        .then(() => prompts());
    });
}

function createRole() {
    db.findAllDepartments().then(([data]) => {
        const deptChoices = data.map(({ id, name }) => ({
            name: name,
            value: id,
        }));
        inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the name of their Role?",
            },
            {
                type: "input",
                name: "salary",
                message: "What is their Salary?",
            },
            {
                type: "list",
                name: "department_id",
                message: "What department is this Role in?",
                choices: deptChoices,
            },
        ])
        .then((answers) => {
            db.addRole(answers)
            .then(() => console.log(`Added ${answers.title} to the database!`))
            .then(() => prompts());
        });
    });
}

function createEmployee() {
    db.findAllRoles().then(([data]) => {
        const roleChoices = data.map(({ id, name }) => ({
            name: name,
            value: id,
        }))
        db.findAllEmployees().then(([data]) => {
            const managerChoices = data
            .map(({ id, name }) => ({
                name: name,
                value: id, 
            }))
            inquirer
            .prompt([
                {
                    type: "input",
                    name: "first_name",
                    message: `What is the Employee's First Name?`,
                },
                {
                    type: "input",
                    name: "last_name",
                    message: `What is the Employee's Last Name?`,
                },
                {
                    type: "list",
                    name: "role_id",
                    message: `What is the Employee's Role?`,
                    choices: roleChoices,
                },
                {
                    type: "list",
                    name: "manager",
                    message: `Who's the Employee's Manager?`,
                    choices: managerChoices,
                },
            ])
            .then((answers) => {
                db.addEmployee(answers)
                .then(() => console.log(`Added ${answers.first_name} to the database!`))
                .then(() => prompts());
            })
        })
    })
};
prompts();