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
        message: 'What is the salaray for the role?',
    },
    {
        type: 'input',
        name: 'roleDepartment',
        message: 'Which department does this role belong to?',
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
        type: 'input',
        name: 'employeeRole',
        message: "What is the employee's role?",
    },
    {
        type: 'list',
        name: 'employeeManager',
        message: "Who is the employee's manager?",
        choices: [],
    }
]

const updateEmployeeRole = [
    {
        type: 'list',
        name: 'updateEmployee',
        message: "Which employee's role do you want to update?",
        choices: [],
    },
    {
        type: 'list',
        name: 'updateRole',
        message: "Which role would you like to assign the selected employee?",
        choices: [],
    }
]

module.exports = {menuQuestion, addDepartment, addRole, addEmployee, updateEmployeeRole};