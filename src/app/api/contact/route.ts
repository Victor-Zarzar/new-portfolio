import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, subject, message } = await request.json();

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465, 
            secure: true,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });            

        const mailOptions = {
            from: email,
            to: 'victorzarzardev@gmail.com',
            subject: `Contato: ${subject}`,
            text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email enviado com sucesso!' }, { status: 200 });
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
        return NextResponse.json({ message: 'Falha ao enviar o e-mail' }, { status: 500 });
    }
}
