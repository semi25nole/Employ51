-- drop if exists
DROP DATABASE IF EXISTS db51;

-- db info
CREATE DATABASE db51;
USE db51;

-- table for both job seekers and employer user information

-- Notes:
-- URLs - refer to links to Google Docs, Dropbox, etc, as we are not storing files on our server
-- if_company distinguishes the user type/view/access

create table users (
	uid INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	email VARCHAR(255),
	password VARCHAR(255),
  if_company BOOLEAN DEFAULT false,
	comp_name VARCHAR(255),
	street VARCHAR(255),
	city VARCHAR(255),
	state VARCHAR(255),
	zip VARCHAR(255),
	resume LONGTEXT,
	doc1 LONGTEXT,
	doc2 LONGTEXT,
	doc3 LONGTEXT,
  PRIMARY KEY (uid)
);

-- table which holds jobs applied for
CREATE TABLE jobs
(
-- Notes:
-- Anything that starts with hr is specific to the hiring company's actions
-- Field Mapping: To the right is the JSON object fields, the first array element results (with 0 showing), and the data types  in parentheses.
-- db table created in same order of JSON responce (see test.json)

  jid INT NOT NULL AUTO_INCREMENT,  
  job_title VARCHAR(255) NOT NULL, -- listings.listing[0].title (string)
  job_desc LONGTEXT DEFAULT NULL, -- listings.listing[0].description (string - HTML)
  job_posted VARCHAR(255) DEFAULT NULL, -- listings.listing[0].post_date (string - Date/Time)
  if_remote INT DEFAULT 0, -- listings.listing[0].telecommuting (int - boolean)
  job_type_id VARCHAR(10), -- listings.listing[0].category.id (int)
  job_type_name VARCHAR(255), -- listings.listing[0].category.name (string)
  if_ft INT DEFAULT 1, -- listings.listing[0].type.id (boolean int)
  comp_name VARCHAR(255), -- listings.listing[0].comp.name (string)
  comp_url VARCHAR(255), -- listings.listing[0].comp.url (string - HTML)
  comp_loc VARCHAR(255), -- listings.listing[0].comp.location.name
  comp_logo VARCHAR(255), -- listings.listing[0].company.logo (string - HTML)
  apply_url VARCHAR(255), -- listings.listing[0].apply_url (string - HTML)
  job_url VARCHAR(255), -- listings.listing[0].url (string - HTML)
  hr_feedback LONGTEXT DEFAULT NULL,
  hr_if_hired BOOLEAN DEFAULT false,
  uid int, -- foreign key pointing to user ID
  PRIMARY KEY (jid),
  FOREIGN KEY (uid) REFERENCES users(uid)
);


-- api call example: see test.json