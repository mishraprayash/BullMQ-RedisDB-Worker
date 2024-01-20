const { Worker } = require("bullmq");
const  createTransporter  = require("../mailservice/transporter");


const emailWorker = new Worker('email-queue', async (job) => {
    const transporter = createTransporter();
    console.log('Email Sending for job id:', job.id)
    await transporter.sendMail(job.data)
},
    {
        connection: {
            host: process.env.REDIS_HOST,
            port: 12057,
            username: process.env.REDIS_USERNAME,
            password: process.env.REDIS_PASSWORD
        }
    });

emailWorker.on('completed', job => {
    console.log(`${job.id} has completed!`);
});

emailWorker.on('failed', (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
});

module.exports = emailWorker