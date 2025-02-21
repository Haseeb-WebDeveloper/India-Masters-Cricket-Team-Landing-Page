import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const data: FormData = await req.json();
    console.log(data);
    // Validate required  fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

   
    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to company
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.COMPANY_EMAIL,
      subject: "New contact request",
      html: `
        <h1>New contact request</h1>
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Message: ${data.message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send auto-reply to customer
    const autoReplyOptions = {
      from: process.env.SENDER_EMAIL,
      to: data.email,
      subject: "Thanks for your request",
      html: `
        <h1>Thanks for your request</h1>
        <p>We will contact you soon</p>
        <p>Best regards</p>
        <p>India Masters</p>
      `
    };

    // Send auto-reply
    await transporter.sendMail(autoReplyOptions);

    console.log("Email sent successfully", mailOptions, autoReplyOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
} 