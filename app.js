
const http = require('node:http')
require('dotenv').config()

//create a server object:
http.createServer(function (req, res) {
    const emailWorker = require('./queues/emailQueue');
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080