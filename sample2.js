var http = require('http');
var server = http.createServer(function (req, res) {
    res.write("Hello world!\n");
    console.log('お腹すいた');
    res.end();
}).listen(8080);
