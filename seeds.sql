INSERT INTO departments (department_name)
VALUES ("Finance"), ("Engineering"), ("HR");

INSERT INTO roles (title, salary, department_id)
VALUES ('Accountant', 50000, 1), ('Engineer', 100000, 2), ('Specialist', 70000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Jake', 'Long', 3, null), ('Zeke', 'Mitts', 2, null), ('Blake', 'Johns', 3, 1), ('Isaac', 'Perez', 1, null);