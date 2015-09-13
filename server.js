/**
 * Created by dbreuer83 on 12/09/15.
 */
var server = require('http').createServer()
    , url = require('url')
    , WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({ server: server })
    , express = require('express')
    , app = express()
    , port = 4080;

app.use(function (req, res) {
    res.send({ msg: "hello" });
});

wss.on('connection', function connection(ws) {
    var location = url.parse(ws.upgradeReq.url, true);
    // you might use location.query.access_token to authenticate or share sessions
    // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
    ws.on('open', function open() {
        console.log('connected');
        ws.send(Date.now().toString(), {mask: true});
    });

    ws.on('close', function close() {
        console.log('disconnected');
    });

    ws.on('message', function message(data, flags) {
        console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);

        setTimeout(function timeout() {
            ws.send(Date.now().toString(), {mask: true});
        }, 500);
    });
    ws.on('error', function(a,b) {
        console.error('[WebSocket Error!]',a,b)
    });
    ws.send('something');
});

server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });