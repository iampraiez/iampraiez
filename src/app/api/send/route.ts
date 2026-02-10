import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 3;
const WINDOW = 30 * 60 * 1000;

function sanitize(str: string): string {
  if (!str) return "";
  return str
    .trim()
    .replace(/[<>]/g, (tag) => {
      const map: Record<string, string> = { "<": "&lt;", ">": "&gt;" };
      return map[tag] || tag;
    })
    .slice(0, 2000); 
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    console.log("Received contact form submission");
    const ip = req.headers.get("x-forwarded-for") || "anonymous";
    const now = Date.now();
    const rateData = rateLimitMap.get(ip);

    if (rateData) {
      if (now - rateData.lastReset < WINDOW) {
        if (rateData.count >= LIMIT) {
          return NextResponse.json(
            { message: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
        rateData.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    }

    const { name, email, message } = await req.json();

    const sanitizedName = sanitize(name);
    const sanitizedEmail = email?.trim().toLowerCase();
    const sanitizedMessage = sanitize(message);

    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${sanitizedName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${sanitizedName}`,
      text: `You have received a new message from ${sanitizedName} (${sanitizedEmail}):\n\n${sanitizedMessage}`,
      replyTo: sanitizedEmail,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
