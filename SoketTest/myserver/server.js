var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
//----------------数据库sql----------------//
function callback(info)
{
	console.log("callback____: "+info);
}
var SqlData = require('./database');
SqlData.route.setCallback(callback);
//----------------绑定的msg----------------//
var msgStr = [];
for(let i = 0; i<10; i++)
{
    var msg = {msg:"info0"+i,data:"message_"+i};
    msgStr.push(msg);
}
//--------------------------------------//
//client connection
io.on("connection",function(socket)
{
	console.log("connected server");
	var data = {info:"connected successful"}
	socket.emit("connected",data);

	socket.on("disconnect", function () 
	{
		console.log("disconnect");
	});

	for(let i = 0; i<msgStr.length;i++)
    {
        socket.on(msgStr[i].msg,function(msg)
        {
            socket.emit(msgStr[i].msg,msg);
        });
    }
    socket.on('insert',function()
	{
		console.log("insertdata");
		SqlData.route.insertData(function(data)
		{
			socket.emit('insert',data);
		});
	});
	socket.on('select',function(id)
	{
		SqlData.route.getDataById(id,function(data)
		{
			socket.emit('select',data);
		});
	});
	socket.on('update',function(id)
	{
		SqlData.route.updateDataById(id,function(data)
		{
			socket.emit('update',data);
		});
	});
	socket.on('delete',function(id)
	{
		SqlData.route.deleteDataById(id,function(data)
		{
			socket.emit('delete',data);
		});
	});
	socket.on('getlist',function()
	{
		SqlData.route.getAllData(function(data)
		{
			console.log("--------list-------");
			console.log(data);
			socket.emit('getlist',data);
		});
	});
});

http.listen(1314,function()
{
	console.log("server start port : 1314");
});

