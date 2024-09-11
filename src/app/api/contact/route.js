import { NextResponse, NextRequest } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(request) {
  const formData = await request.formData();
  const token = formData.get('recaptchaToken');
  console.log('this is the backend');

  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const data = await response.json();
  console.log('data: ', data);

  if (data.success && data.score >= 0.5) {
    console.log(data.score);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact form message from ${name}`,
      text: `New message from ${email}: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('success!');
      return NextResponse.json({ message: 'Success: email was sent!' });
    } catch (e) {
      console.log('error sending email: ', e);
      return NextResponse.json({ message: 'Could not send message.' }, { status: 500 })
    }
  } else {
    console.log('error with captcha');
    return NextResponse.json({ error: 'Captcha failed' }, { status: 500 });
  }

}