# creator-socket.io-nodejs-demo
database sql sentence:
------------------------------------------------------------------
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
------------------------------------------------------------------