
const nodemailer = require("nodemailer");

const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 2525,
        auth: {
            user: process.env.AUTH_USER,
            pass: process.env.AUTH_PASSWORD,
        },
    });
}

module.exports = createTransporter