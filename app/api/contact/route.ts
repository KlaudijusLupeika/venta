import nodemailer from "nodemailer";

const recipient = "lupeika.k@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = getText(body.name);
    const contact = getText(body.contact);
    const message = getText(body.message);

    if (!name || !contact || !message) {
      return Response.json({ error: "Name, contact, and message are required." }, { status: 400 });
    }

    if (name.length > 120 || contact.length > 200 || message.length > 5000) {
      return Response.json({ error: "One or more fields are too long." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const password = process.env.SMTP_PASS;
    const port = Number(process.env.SMTP_PORT || 587);

    if (!host || !user || !password || !Number.isInteger(port)) {
      console.error("Contact form email is not configured.");
      return Response.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass: password },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || user,
      to: recipient,
      replyTo: emailPattern.test(contact) ? contact : undefined,
      subject: `New enquiry from ${name}`,
      text: [`Name: ${name}`, `Contact: ${contact}`, "", "Message:", message].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json({ error: "Unable to send the message." }, { status: 500 });
  }
}
