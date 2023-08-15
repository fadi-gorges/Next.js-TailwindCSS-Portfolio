import {NextRequest, NextResponse} from 'next/server'
import sendMail from "@utils/mailer";

export async function POST(request: NextRequest) {
    const data: ContactFormData = await request.json()

    if (data.name && data.email && data.subject && data.message) {
        await sendMail({
            subject: `PORTFOLIO MESSAGE FROM ${data.email}`,
            text: (
                `Name: ${data.name}\n` +
                `Email: ${data.email}\n\n` +
                `Subject: ${data.subject}\n\n` +
                `Message: ${data.message}`).trim()
        })

        return NextResponse.json({success: true})
    }

    return NextResponse.json({error: "Invalid data"}, {status: 400})
}