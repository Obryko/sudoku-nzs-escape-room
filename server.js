var express = require('express'),
    socketIO = require('socket.io'),
    path = require('path'),
    fs = require('fs'),
    ip = require('ip'),
    port = 80,
    app = express(),
    server = require('http').Server(app),
    io = socketIO(server);


io.on('connection', function (socket) {
    // console.log('User connected');
    socket.on('changePop', function (val) {
        io.emit('showPop', {
            pop: val
        });
    });
    socket.on('refreshPage', function () {
        // console.log("refresh");
        io.emit('refreshPageEvent');
    });
    socket.on('disconnect', function () {
        // console.log('user disconnected');
    });
});

app.use('/static', express.static(path.join(__dirname, './client/build//static')));
app.get('*', function (req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, './client/build/')
    });
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/api/data', function (req, res) {
    var obj;
    fs.readFile('./data.json', function (err, data) {
        if (err) console.log("error", err);
        obj = JSON.parse(data);
        console.log(obj);
        res.send(obj);
    });
});

server.listen(port, function () {
    console.log('Listening on port ' + port);
    console.log(ip.address());
});