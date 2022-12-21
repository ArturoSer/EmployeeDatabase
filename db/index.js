const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection;
    }
    findAllEmployees(){
        return this.connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, department.name AS department, role.salary AS salary, concat(maager.first_name, '', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id LEFT JOIN department ON role.department_id = department_id = deparment.id LEFT JOIN employee manager ON employee.manager_id = manager.id;");
    }
    findAllDepartments() {
        return this.connection.promise().query("SELECT * FROM department;")
    }
    addDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
    }
    addRole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role);
    }
    addEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    }
    updateEmployeeRole (roleid, employeeid) {
        return this.connection.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [roleid, employeeid]);
    }
}

modeule.exports = new DB(connection)