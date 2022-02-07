const inquirer = require('inquirer');
const mysql = require('mysql2');
const { menuQuestion, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./questions');

async function init() {
    const db = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'company_db',
    });

    let quitApp = false;

    while (!quitApp) {
        const additions = await inquirer.prompt(menuQuestion);
        console.log(additions);

        if (additions.task !== 'Quit'){
            if(additions.task === 'View All Departments'){ await viewTables(db, 'departments')};
            if(additions.task === 'View All Roles'){ await viewTables(db, 'roles')};
            if(additions.task === 'View All Employees'){ await viewTables(db, 'employees')};
            if(additions.task === 'Add Department'){ await departmentAdd(db)};
            if(additions.task === 'Add Role'){await roleAdd(db)};
            if(additions.task === 'Add Employee'){ await employeeAdd(db)};
            if(additions.task === 'Update Employee Role'){ await employeeUpdate(db)};
        } else {
            quitApp = true;
        }
        
    };
    
    db.end();
    return;
}

async function viewTables(db, table) {
    const sql = `SELECT * FROM ${table}`;
    
    await db.promise().query(sql).then(result => {
        console.table(result);
    }).catch(err => {
        throw err
    })
}

async function departmentAdd(db) {
    const res = await inquirer.prompt(addDepartment);

    const sql = 'INSERT INTO departments (name) VALUES (?)';
    const params = [res.departmentName];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Added ${res.departmentName} to the database : ${result}`);
    })
}

async function roleAdd(db) {
    const res = await inquirer.prompt(addRole);

    const sql = 'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)';
    const params = [res.roleName, res.roleSalary, res.roleDepartment];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Added ${res.roleName} to the database : ${result}`);
    })
}

async function employeeAdd(db) {
    const res = await inquirer.prompt(addEmployee);

    const sql = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    const params = [res.firstName,  res.lastName, res.employeeRole, res.employeeManager];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Added ${res.firstName} to the database : ${result}`);
    })
}


async function employeeUpdate(db) {
    const res = await inquirer.prompt(updateEmployeeRole);

    const sql = 'UPDATE employees SET role_id = ? WHERE id = ?';
    const params = [res.updateRole, res.updateEmployee];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Updated ${res.updateEmployee}'s role in the database : ${result}`);
    })
}

init();