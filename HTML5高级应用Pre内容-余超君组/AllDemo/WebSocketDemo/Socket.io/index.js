var app = require('express')();
var httpServer = require('http').Server(app);
var io = require('socket.io')(httpServer);
//监听3000端口
httpServer.listen(3000, function(){
    console.log('listening on *:3000');
});



//将html页面发送到服务端
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    //res.send("Hello World");
});



//连接，传递信息
io.on('connection', function(socket){
    var server_msg;
    socket.on('client message', function(msg){
        server_msg=msg;
        console.log('Client: ' + msg);
    });
    socket.on('client message', function(msg){
        server_msg=server_msg.split("").reverse().join("");
        io.emit('server message', server_msg);
    });

    socket.on('client message', function(msg){
        server_msg+="Hello";
        io.emit('server message', server_msg);
    });
});





