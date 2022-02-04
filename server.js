const inquirer = require('inquirer');
const mysql = require('mysql2');
const { menuQuestion, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./questions');



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db',
});