-- drop if exists
DROP DATABASE IF EXISTS db51;

-- db info
CREATE DATABASE db51;
USE db51;

-- table for both job seekers and employer user information
CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	fname varchar(255) NOT NULL,
    lname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    pass varchar(255) NOT NULL,
    company BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

-- table which holds jobs applied for
CREATE TABLE jobs
(
  id INT NOT NULL AUTO_INCREMENT,
  company VARCHAR(255) NOT NULL,
  job_salary DECIMAL(10, 2) DEFAULT NULL,
  job_title VARCHAR(255) NOT NULL,
  job_req LONGTEXT DEFAULT NULL,
  job_extras LONGTEXT DEFAULT NULL,
  job_edu LONGTEXT DEFAULT NULL,
  job_loc LONGTEXT DEFAULT NULL,
  end_date DATE DEFAULT NULL,
  start_date DATE DEFAULT NULL,
  PRIMARY KEY (id)
);