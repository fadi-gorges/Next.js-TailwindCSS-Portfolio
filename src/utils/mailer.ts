import nodemailer from 'nodemailer'
import {Options} from "nodemailer/lib/mailer";

export const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
})

const sendMail = async (options: Options) => {
    options = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        ...options
    }

    return await transporter.sendMail(options)
}

export default sendMail