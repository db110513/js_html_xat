const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Usuari en linia');

    socket.on('disconnect', () => {
        console.log('Usuari desconnectat');
    });

    socket.on('chat message', (data) => {
        io.emit('chat message', data);
    });
});

server.listen(PORT, () => {
    console.log(`Servidor actiu al port ${PORT}`);
});
