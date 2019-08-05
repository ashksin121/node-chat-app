var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New Message:', message);
});

socket.emit('createMessage', {
    from: 'Demo',
    text: 'Demo Hi!!'
}, function (data) {
    console.log(data);
})

jQuery('message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {
        
    })
})