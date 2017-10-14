var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'zfsdata',
});
connection.connect();

var SqlData = {};
var table = "user_test";
var index = 0;
SqlData.callback = null;
SqlData.setCallback = function(callback)
{
	console.log("set callback");
	SqlData.callback = callback;
}

SqlData.getAllData = function(callback)
{
	var sql = 'select * from '+table;
	connection.query(sql,function(err,results)
	{
		if(err) throw err;
		callback(results);
	});
}
//查
SqlData.getDataById = function(id,callback)
{
	var sql = "select * from "+table+" where id="+id;
	connection.query(sql,function(err,results)
	{
		if(err) throw err;
		callback(results);
	});
}
//增
SqlData.insertData = function(callback)
{
	var addsql = "INSERT INTO "+table+" (id,name,age,sex) VALUES(0,?,?,?)";
	var addsqlParams = ['么么哒_'+index,index,"女"];
	index++;
	connection.query(addsql,addsqlParams,function(err,results)
	{
		if(err) throw err;
		callback('insert cuccess');
	});
}
//改
SqlData.updateDataById = function(id,callback)
{
	var sql = 'UPDATE '+table+" SET name = ?,sex = ? where id="+id;
	var sqlParams = ['呵呵哒_'+index,'男'];
	connection.query(sql,sqlParams,function(err,results)
	{
		if(err) throw err;
		callback('update cuccess');
	});
}
//删
SqlData.deleteDataById = function(id,callback)
{
	var sql = 'DELETE from '+table+" where id="+id;
	connection.query(sql,function(err,results)
	{
		if(err) throw err;
		callback('delete cuccess');
	});
}

exports.route = SqlData;