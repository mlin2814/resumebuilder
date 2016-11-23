INSERT INTO jobs(title, jobs.desc, jobZipCode, hours, createdAt,updatedAT, OrganizationId)  
select 'English Tutor','Teaching English to adult immigrants','08820','2 hours a week - Fexible timing', CURDATE(),CURDATE(), organizations.id 
from organizations where id = 1;

INSERT INTO jobs(title, jobs.desc, jobZipCode, hours, createdAt,updatedAT, OrganizationId)  
select 'Intern','Office Duties','08840','20 hours a week', CURDATE(),CURDATE(), organizations.id 
from organizations where id = 2;

INSERT INTO jobs(title, jobs.desc, jobZipCode, hours, createdAt,updatedAT, OrganizationId)  
select 'Office Intern','Various Office Duties','08820','10 hours a week', CURDATE(),CURDATE(), organizations.id 
from organizations where id = 3;

INSERT INTO jobs(title, jobs.desc, jobZipCode, hours, createdAt,updatedAT, OrganizationId)  
select 'Office Assistant','Document Writing','08840','20 hours a week', CURDATE(),CURDATE(), organizations.id 
from organizations where id = 4;

INSERT INTO jobs(title, jobs.desc, jobZipCode, hours, createdAt,updatedAT, OrganizationId)  
select 'Front Desk Assistant','Answering Phones','08820','20 hours a week', CURDATE(),CURDATE(), organizations.id 
from organizations where id = 5;