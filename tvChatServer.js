var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const PORT = process.env.PORT || 5000;

class Server {
    constructor() {
        this.initServer();
    }

    initServer() {
        http.listen(PORT, function(){
            console.log(`listening on *:${ PORT }`);
        });

        io.on('connection', (socket) => {
            socket.on('football', (msg) => {
                socket.broadcast.emit('football', msg);
            });
            socket.on('bigBrother', (msg) => {
                socket.broadcast.emit('bigBrother', msg);
            });
            socket.on('realityShow', (msg) => {
                socket.broadcast.emit('realityShow', msg);
            });
            socket.on('ninja', (msg) => {
                socket.broadcast.emit('ninja', msg);
            });
            socket.on('masterChef', (msg) => {
                socket.broadcast.emit('masterChef', msg);
            });
        });
    }

    
}

var server = new Server();




