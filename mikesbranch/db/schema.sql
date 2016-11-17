/*

to run this file do this in your Terminal:

1. go to the directory of this sql file.

2. get into your mysql console

3. run source schema.sql

*/

-- CREATE DATABASE burgers_db;
USE k0y92biktu9zn9so;

CREATE TABLE burgers(

id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255),
devoured BOOLEAN NOT NULL,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);
