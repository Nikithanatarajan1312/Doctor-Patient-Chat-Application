var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/app/index.html', (req, res) => {
    res.sendFile(__dirname + '/app/index.html');
});
app.get('/app/index_patient.html', (req, res) => {
    res.sendFile(__dirname + '/app/index_patient.html');
});
app.get('/login/login.html', (req, res) => {
    res.sendFile(__dirname + '/login/login.html');
});
app.get('/login/signup.html', (req, res) => {
    res.sendFile(__dirname + '/login/signup.html');
});
app.get('/login/login.css', (req, res) => {
    res.sendFile(__dirname + '/login/login.css');
});
app.get('/DocChat/index.html', (req, res) => {
    res.sendFile(__dirname + '/DocChat/index.html');
});
app.get('/DocChat/forgot.html', (req, res) => {
    res.sendFile(__dirname + '/DocChat/forgot.html');
});
app.get('/DocChat/reset.html', (req, res) => {
    res.sendFile(__dirname + '/DocChat/reset.html');
});
app.get('/DocChat/register.html', (req, res) => {
    res.sendFile(__dirname + '/DocChat/register.html');
});
app.get('/DocChat/css/my-login.css', (req, res) => {
    res.sendFile(__dirname + '/DocChat/css/my-login.css');
});
app.get('/DocChat/js/my-login.js', (req, res) => {
    res.sendFile(__dirname + '/DocChat/js/my-login.js');
});
app.get('/DocChat/background.png', (req, res) => {
    res.sendFile(__dirname + '/DocChat/background.png');
});
app.get('/app/logo.jpeg', (req, res) => {
    res.sendFile(__dirname + '/app/logo.jpeg');
});
app.get('/window/Welcome_Page.html', (req, res) => {
    res.sendFile(__dirname + '/window/Welcome_Page.html');
});
app.get('/window/style.css', (req, res) => {
    res.sendFile(__dirname + '/window/style.css');
});

io.on('connection', (socket) => {
    console.log('User Online');

    socket.on('codeboard-message', (msg) => {
        console.log('message: ' + msg);
        socket.broadcast.emit('message-from-others', msg);
    });

});

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
http.listen(server_port, () => {
    console.log('listening on *:' + server_port);
});