INSERT INTO department (name)
VALUES 
("Teller"),
("Lead Teller"),
("Personal Banker"),
("Assistant Branch Manager"),
("Branch Manager");

INSERT INTO role
(title, salary, department_id)
VALUES
("Teller", 2300.00, 1),
("Leader Teller", 2700.00, 2),
("Personal Banker", 3500.00, 3),
("Assistant Branch Manager", 5000.00, 4),
("Branch Manager", 6500.00, 5);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
("Virginia", "Crystal", 1, NULL),
("Davien", "Lopez", 2, 2),
("Thomas", "Rodriguez", 3, NULL),
("Olivia", "Rivera", 4, 4),
("Symphony", "Serrato", 5, 5);