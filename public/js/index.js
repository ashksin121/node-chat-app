var socket = io();

socket.on('connect', function () {
    socket.emit('createMessage', {
        from: 'demo',
        to: 'test',
        text: 'TUTTURU'
    })
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New Message:', message);
})