import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, subject, message } = body;

        // Validation
        if (!name?.trim()) return NextResponse.json({ error: "Name is required" }, { status: 400 });
        if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
        }
        if (!message?.trim()) return NextResponse.json({ error: "Message is required" }, { status: 400 });

        // Log submission (email sending requires SMTP credentials configured in .env.local)
        console.log("📧 Contact form submission:", { name, email, phone, subject, message });

        // Optional: Send email if SMTP is configured
        const smtpHost = process.env.SMTP_HOST;
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const toEmail = process.env.CONTACT_EMAIL;

        if (smtpHost && smtpUser && smtpPass && toEmail) {
            try {
                const nodemailer = await import("nodemailer");
                const transporter = nodemailer.default.createTransport({
                    host: smtpHost,
                    port: Number(process.env.SMTP_PORT || 587),
                    secure: false,
                    auth: { user: smtpUser, pass: smtpPass },
                });

                await transporter.sendMail({
                    from: `"${name}" <${smtpUser}>`,
                    to: toEmail,
                    replyTo: email,
                    subject: subject || `New Enquiry from ${name} — Fortune Technosys Website`,
                    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nMessage:\n${message}`,
                    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
              <h2 style="color: #8A3E8A; border-bottom: 2px solid #8A3E8A; padding-bottom: 10px;">
                New Website Enquiry — Fortune Technosys
              </h2>
              <table style="width:100%; border-collapse:collapse; margin-top:16px;">
                <tr><td style="padding:8px; font-weight:bold; color:#555;">Name</td><td style="padding:8px;">${name}</td></tr>
                <tr style="background:#f9f0f9;"><td style="padding:8px; font-weight:bold; color:#555;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px; font-weight:bold; color:#555;">Phone</td><td style="padding:8px;">${phone || "Not provided"}</td></tr>
                <tr style="background:#f9f0f9;"><td style="padding:8px; font-weight:bold; color:#555;">Subject</td><td style="padding:8px;">${subject || "General Enquiry"}</td></tr>
              </table>
              <div style="margin-top:20px; padding:16px; background:#f9f0f9; border-left:4px solid #8A3E8A; border-radius:0 8px 8px 0;">
                <strong style="color:#5C2560;">Message:</strong>
                <p style="margin-top:8px; line-height:1.6;">${message.replace(/\n/g, "<br/>")}</p>
              </div>
              <p style="margin-top:24px; font-size:12px; color:#999;">Sent from the Fortune Technosys website contact form.</p>
            </div>
          `,
                });
            } catch (emailErr) {
                console.error("Email sending failed:", emailErr);
                // Still return success — form was received
            }
        }

        return NextResponse.json({ success: true, message: "Your message has been received. We will get back to you soon!" });
    } catch (err) {
        console.error("Contact API error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
