
const http = require('node:http')
require('dotenv').config()
const { Worker } = require("bullmq");
const createTransporter = require("./mailservice/transporter");

const emailWorker = new Worker('email-queue', async (job) => {
    const transporter = createTransporter();
    console.log('Email Sending for job id:', job.id)
    await transporter.sendMail(job.data)
},
    {
        connection: {
            host: process.env.REDIS_HOST,
            port: 12058,
            username: process.env.REDIS_USERNAME,
            password: process.env.REDIS_PASSWORD,
            tls: true,
            enableTLSForSentinelMode: false

        }
    });

emailWorker.on('completed', job => {
    console.log(`${job.id} has completed!`);
});

emailWorker.on('failed', (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
});

//create a server object:
http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080