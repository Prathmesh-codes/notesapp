create database express_db;
use express_db;

create table User(
    id integer primary key auto_increment,
    firstName varchar(20),
    lastName varchar (20),
    email varchar(20),
    password archar(100)

);