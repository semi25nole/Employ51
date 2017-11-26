-- drop if exists
DROP DATABASE IF EXISTS db51;

-- db info
CREATE DATABASE db51;
USE db51;

-- table for both job seekers and employer user information
CREATE TABLE users
(
-- Notes:
-- URLs - refer to links to Google Docs, Dropbox, etc, as we are not storing files on our server
-- if_company distinguishes the user type/view/access

	id int NOT NULL AUTO_INCREMENT,
	fname varchar(255) NOT NULL,
    lname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    pass varchar(255) NOT NULL,
    resume_url VARCHAR(255) DEFAULT NULL, 
    doc1_url VARCHAR(255) DEFAULT NULL, 
    doc2_url VARCHAR(255) DEFAULT NULL,
    doc3_url VARCHAR(255) DEFAULT NULL,
    if_company BOOLEAN DEFAULT false,
    
	PRIMARY KEY (id)
);



-- table which holds jobs applied for
CREATE TABLE jobs
(
-- Notes:
-- anything that starts with jobs is specific to the listing
-- anything that starts with hr is specific to the hiring company's actions

  id INT NOT NULL AUTO_INCREMENT,
  company VARCHAR(255) NOT NULL,
  job_salary DECIMAL(10, 2) DEFAULT NULL,
  job_title VARCHAR(255) NOT NULL,
  job_req LONGTEXT DEFAULT NULL,
  job_extras LONGTEXT DEFAULT NULL,
  job_edu LONGTEXT DEFAULT NULL,
  job_loc LONGTEXT DEFAULT NULL,
  job_url VARCHAR(255) DEFAULT NULL,
  job_posted_start DATE DEFAULT NULL,
  job_posted_end DATE DEFAULT NULL,
  hr_feedback LONGTEXT DEFAULT NULL,
   hr_if_hired BOOLEAN DEFAULT false,
  
  PRIMARY KEY (id)
);