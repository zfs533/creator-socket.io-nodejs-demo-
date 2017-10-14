this deme include the forllowing contents
1:cocoscreator client connect to server
2:create node.js server
3:create database by mysql
4:the client will show that send and recieve message to server
5:include insert,select,update and delete data from database;if you not have database,then you can use any message string as the key to connect server and client.

-----------------------1-----------------------
the detail information please goto the following files.
creator-socket.io-nodejs-demo-\SoketTest\assets\Script\HelloWorld.js
creator-socket.io-nodejs-demo-\SoketTest\assets\Script\net\Net.js
-----------------------2-----------------------
1:download and install nodejs. https://nodejs.org/zh-cn/download/
2:download and install mysql.  https://www.mysql.com/downloads/
3:about files link:
http://www.runoob.com/nodejs/nodejs-mysql.html
http://www.runoob.com/mysql/mysql-insert-query.html
-----------------------3-----------------------
use zfsdata;
CREATE TABLE IF NOT EXISTS `user_test`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `age` INT UNSIGNED,
   `sex` VARCHAR(100) NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET NAMES utf8;

INSERT INTO user_test (name,age,sex) VALUES ('么么哒',1,'女');
-----------------------4-----------------------
server code:
creator-socket.io-nodejs-demo-\SoketTest\myserver\server.js
creator-socket.io-nodejs-demo-\SoketTest\myserver\database.js
