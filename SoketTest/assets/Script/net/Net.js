var Message = cc.Class(
{
    ctor:function()
    {
        this.initProperty();
        this.registerMsg();
    },
    initProperty:function()
    {
        //127.0.0.1
        this.socket = io.connect("192.168.51.159:1314");//port 自定义
        this.msgStr = [];
        for(let i = 0; i<10; i++)
        {
            var msg = {msg:"info0"+i,data:"message_"+i};
            this.msgStr.push(msg);
        }
        this.list = [];
    },
    setParentt:function(parentt)
    {
        this.parentt = parentt;
    },
    registerMsg:function()
    {
        for(let i = 0; i<this.msgStr.length;i++)
        {
            this.socket.on(this.msgStr[i].msg,function(msg)
            {
                this.parentt.recieveMsg(msg);
            }.bind(this));
        }
        this.socket.on("connected",function(msg){
            cc.log("---------------connected server");
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
    sendMsg:function(parentt)
    {
        this.parentt = parentt;
        let msg = this.msgStr[Math.floor(Math.random()*this.msgStr.length)];
        this.socket.emit(msg.msg,msg.data);
    }
});
var msg = msg || new Message();
module.exports = msg;