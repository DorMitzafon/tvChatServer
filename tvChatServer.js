var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

class Server {
    constructor() {
        this.initServer();
    }

    initServer() {
        http.listen(3010, function(){
            console.log('listening on *:3010');
        });

        app.get('/video1', function(req, res){
            res.send({hi: 'hello'});
        });

        io.on('connection', (socket) => {
            socket.on('chat message', (msg) => {
                socket.broadcast.emit('chat message', msg);
            });
        });
    }

    
}

var server = new Server();




