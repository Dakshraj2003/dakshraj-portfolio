
// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};
  console.log("📩 Incoming message:", { name, email, message });

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    TO_EMAIL
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
    console.error("❌ Missing SMTP config", { SMTP_HOST, SMTP_PORT, SMTP_USER, TO_EMAIL });
    return res.status(500).json({ error: "SMTP not configured" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for 465, false for others
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: TO_EMAIL,
      subject: `Portfolio message from ${name} (${email})`,
      text: `You received a message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("❌ contact API error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
