var Msg = require("Net");
cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        disLabel:cc.Label,
        btn01:cc.Button,
        btn02:cc.Button,
        btn03:cc.Button,
        btn04:cc.Button,
        btn05:cc.Button,
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    }, 

    // use this for initialization 
    onLoad: function () 
    {
        this.list = [];
        Msg.setParentt(this);
        this.btn01.node.on(cc.Node.EventType.TOUCH_END,this.insertData.bind(this));
        this.btn02.node.on(cc.Node.EventType.TOUCH_END,this.getDataById.bind(this));
        this.btn03.node.on(cc.Node.EventType.TOUCH_END,this.updateDataById.bind(this));
        this.btn04.node.on(cc.Node.EventType.TOUCH_END,this.deleteDataById.bind(this));
        this.btn05.node.on(cc.Node.EventType.TOUCH_END,this.getList.bind(this));
    },
    //get alldata list;
    getList:function()
    {
        //send order 'getlist' for server
        Msg.socket.emit("getlist","");
    },
    //alldata list from server
    recieveList:function(list)
    {
        list = JSON.parse(list);
        this.label.string = list.length;
        this.list = list;
        //show data list to client
        let str = "";
        for (let i = 0; i <list.length;i++)
        {
            str += JSON.stringify(list[i]) +"\n";
        }
        this.disLabel.string = str;
    },
    //add,insert one row item into database table
    insertData:function()
    {
        Msg.socket.emit("insert","");
    },
    //search data by id
    getDataById:function()
    {
        var len = this.list.length;
        var id = Math.floor(Math.random()*len);
        Msg.socket.emit("select",this.list[id].id);
    },
    //change data by id
    updateDataById:function()
    {
        var len = this.list.length;
        var id = Math.floor(Math.random()*len);
        Msg.socket.emit("update",this.list[id].id);
    },
    //delete data by id
    deleteDataById:function()
    {
        var len = this.list.length;
        var id = Math.floor(Math.random()*len);
        Msg.socket.emit("delete",this.list[id].id);
    },
    //show information from server 
    recieveMsg:function(msg)
    {
        this.label.string = msg;
    },
    // called every frame
    update: function (dt) {

    },
});
