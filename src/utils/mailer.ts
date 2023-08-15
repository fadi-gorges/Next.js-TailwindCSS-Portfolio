import nodemailer from 'nodemailer'
import {Options} from "nodemailer/lib/mailer";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
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
        to: "fadi.gorges.03@gmail.com",
        ...options
    }

    return await transporter.sendMail(options)
}

export default sendMail