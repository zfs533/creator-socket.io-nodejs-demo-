//socket.io net class
var Message = cc.Class(
{
    ctor:function()
    {
        this.initProperty();
        this.registerMsg();
    },
    //init socket.io
    initProperty:function()
    {
        //127.0.0.1 connect local server by port 1314
        //192.168.51.159 is local ip
        this.socket = io.connect("192.168.51.159:1314");//port 自定义
    },
    //use HellowWorld script
    setParentt:function(parentt)
    {
        this.parentt = parentt;
    },
    //register(recieve) message , server send to client
    registerMsg:function()
    {
        this.socket.on("connected",function(msg){
            cc.log("---------------connected server---------------");
        });
        this.socket.on('insert',function(msg)
        {
            this.parentt.recieveMsg(msg);
        }.bind(this));
        this.socket.on('select',function(msg)
        {
            this.parentt.recieveMsg(msg);
        }.bind(this));
        this.socket.on('update',function(msg)
        {
            this.parentt.recieveMsg(msg);
        }.bind(this));
        this.socket.on('delete',function(msg)
        {
            this.parentt.recieveMsg(msg);
        }.bind(this));
        this.socket.on('getlist',function(msg)
        {
            this.parentt.recieveList(msg);
        }.bind(this));
    },
});
var msg = msg || new Message();
module.exports = msg;