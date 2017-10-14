var mysql      = require('mysql');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'zfsdata',
});
var selectSQL = 'select * from runoob_tbl'

pool.getConnection(function(err,conn)
{
	if(err)
	{
		console.log('pool ==> '+err);
		return;
	}
	conn.query(selectSQL,function(err,rows)
	{
		if(err)
		{
			console.log('conn ==> '+err);
			return;
		}
		console.log("select------------");
		for (var i in rows)
		{
			console.log(rows[i].runoob_title);
		}
	});
});