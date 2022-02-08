const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'company_db',
});

async function getEmployees(){
    let employee_obj = await db.promise().query('SELECT first_name, last_name FROM employees');
    employee_obj = employee_obj[0];

    let employees = [];
    for (let i=0; i < employee_obj.length; i++){
        let name = `${employee_obj[i].first_name} ${employee_obj[i].last_name}`;
        employees.push(name);
    }
    return employees;
}

async function getRoles() {
    let roles_obj =  await db.promise().query('SELECT title FROM roles');
    roles_obj = roles_obj[0];

    let roles = [];
    for (let i=0; i<roles_obj.length; i++){
        let role = `${roles_obj[i].title}`;
        roles.push(role);
    }
    return roles;
}

async function getDepartments() {
    let department_obj = await db.promise().query('SELECT department_name FROM departments');
    department_obj = department_obj[0];

    let departments = [];
    for (let i=0; i<department_obj.length; i++){
        let department = `${department_obj[i].department_name}`;
        departments.push(department);
    }
    return departments;
}

const menuQuestion = [
    {
        type: 'list',
        name: 'task',
        message: 'What do you want to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role',  'Quit']
    }
]

const addDepartment = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department?',
    }
]

const addRole = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the name of the role?',
    },
    {
        type: 'number',
        name: 'roleSalary',
        message: 'What is the salary for the role?',
    },
    {
        type: 'list',
        name: 'roleDepartment',
        message: 'Which department does this role belong to?',
        choices: [],
    }
]

const  addEmployee = [
    {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?",
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?",
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: "What is the employee's role?",
        choices: getRoles(),
    },
    {
        type: 'list',
        name: 'employeeManager',
        message: "Who is the employee's manager?",
        choices: getEmployees(),
    }
]

const updateEmployeeRole = [
    {
        type: 'list',
        name: 'updateEmployee',
        message: "Which employee's role do you want to update?",
        choices: getEmployees(),
    },
    {
        type: 'list',
        name: 'updateRole',
        message: "Which role would you like to assign the selected employee?",
        choices: getRoles(),
    }
]

module.exports = {menuQuestion, addDepartment, addRole, addEmployee, updateEmployeeRole};