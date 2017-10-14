var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'zfsdata',
});
 
connection.connect();

var sql = "SELECT * FROM user_test";
//results is list for database and that item type is {}(object)
connection.query(sql, function (error, results) {
  	if (error) throw error;
  	console.log("---------------------------");
  	console.log(results[0]);
  	console.log("---------------------------");
});

// var addSql = "INSERT INTO runoob_tbl(runoob_id,runoob_title,runoob_author,submission_date) VALUES(0,?,?,?)";
// var addSqlParams = ['菜鸟工具', 'https://c.runoob.com',new Date()];
// connection.query(addSql,addSqlParams, function (error, results) {
//   	if (error) throw error;
//   	console.log("---------------------------");
//   	console.log(results);
//   	console.log("---------------------------");
// });