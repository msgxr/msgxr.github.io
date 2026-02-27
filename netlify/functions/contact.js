const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    // Only allow POST
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };

    try {
        const { name, email, message } = JSON.parse(event.body);

        if (!name || !email || !message) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Tüm alanlar zorunludur.' }),
            };
        }

        // Outlook SMTP transporter
        const transporter = nodemailer.createTransporter({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: { ciphers: 'SSLv3' },
        });

        // ─── 1. Sana gelen bildirim e-postası ──────────────────────────────────
        const notificationHtml = `
<!DOCTYPE html>
<html lang="tr">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:40px 20px;background:#0f0f1a;font-family:Inter,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#1a1a2e;border-radius:16px;overflow:hidden;border:1px solid #2a2a4a;">
    <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:28px 32px;">
      <p style="color:rgba(255,255,255,0.75);margin:0 0 4px;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Portföy Sitesi</p>
      <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;">📬 Yeni Mesaj Geldi</h1>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #2a2a4a;color:#8a8aaa;font-size:13px;width:80px;">Ad Soyad</td>
          <td style="padding:12px 0;border-bottom:1px solid #2a2a4a;color:#e2e2f0;font-weight:600;">${name}</td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #2a2a4a;color:#8a8aaa;font-size:13px;">E-posta</td>
          <td style="padding:12px 0;border-bottom:1px solid #2a2a4a;">
            <a href="mailto:${email}" style="color:#818cf8;text-decoration:none;">${email}</a>
          </td>
        </tr>
      </table>
      <div style="margin-top:24px;">
        <p style="color:#8a8aaa;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 10px;">Mesaj</p>
        <div style="background:#12122a;border-left:3px solid #6366f1;border-radius:0 8px 8px 0;padding:16px 20px;">
          <p style="color:#e2e2f0;line-height:1.8;margin:0;white-space:pre-wrap;">${message}</p>
        </div>
      </div>
      <a href="mailto:${email}?subject=Re: Portföy Sitesi Mesajınız"
         style="display:inline-block;margin-top:24px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:600;font-size:14px;">
        ↩ Yanıtla
      </a>
    </div>
    <div style="padding:16px 32px;border-top:1px solid #2a2a4a;text-align:center;">
      <p style="color:#4a4a6a;font-size:12px;margin:0;">msgxr.github.io · astounding-stardust-def7f4.netlify.app</p>
    </div>
  </div>
</body>
</html>`;

        // ─── 2. Mesaj gönderene profesyonel otomatik yanıt ─────────────────────
        const autoReplyHtml = `
<!DOCTYPE html>
<html lang="tr">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:40px 20px;background:#f5f5fa;font-family:Inter,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:36px 32px;text-align:center;">
      <div style="width:56px;height:56px;background:rgba(255,255,255,0.15);border-radius:14px;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
        <span style="color:#fff;font-size:22px;font-weight:800;letter-spacing:-1px;">&lt;MSG/&gt;</span>
      </div>
      <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700;">Muhammed Sina Gün</h1>
      <p style="color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:13px;">Bilgisayar Mühendisi · Backend & AI Developer</p>
    </div>

    <div style="padding:36px 32px;">
      <h2 style="color:#0f0f1a;font-size:18px;font-weight:600;margin:0 0 16px;">Merhaba ${name},</h2>
      <p style="color:#4a4a6a;line-height:1.75;margin:0 0 8px;">
        Mesajınız başarıyla alındı. En kısa sürede sizinle iletişime geçeceğim.
      </p>
      <p style="color:#4a4a6a;line-height:1.75;margin:0 0 24px;">
        İş birliği teklifleriniz ve sorularınız her zaman değerlidir.
      </p>

      <div style="background:#f8f8ff;border:1px solid #e5e5f0;border-radius:12px;padding:20px 24px;margin:0 0 28px;">
        <p style="color:#8a8aaa;font-size:11px;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 10px;font-weight:600;">Gönderdiğiniz Mesaj</p>
        <p style="color:#2a2a4a;line-height:1.7;margin:0;font-size:14px;white-space:pre-wrap;">${message}</p>
      </div>

      <div style="border-top:1px solid #e5e5f0;padding-top:24px;">
        <p style="color:#0f0f1a;font-weight:700;margin:0 0 4px;">Muhammed Sina Gün</p>
        <p style="color:#6366f1;font-size:13px;margin:0 0 12px;">Bilgisayar Mühendisi · Backend & AI Developer</p>
        <table style="border-collapse:collapse;">
          <tr>
            <td style="padding:3px 12px 3px 0;color:#8a8aaa;font-size:13px;">✉</td>
            <td style="padding:3px 0;"><a href="mailto:muhammedsina47@outlook.com" style="color:#6366f1;text-decoration:none;font-size:13px;">muhammedsina47@outlook.com</a></td>
          </tr>
          <tr>
            <td style="padding:3px 12px 3px 0;color:#8a8aaa;font-size:13px;">🔗</td>
            <td style="padding:3px 0;"><a href="https://www.linkedin.com/in/muhammed-sina-gun" style="color:#6366f1;text-decoration:none;font-size:13px;">linkedin.com/in/muhammed-sina-gun</a></td>
          </tr>
          <tr>
            <td style="padding:3px 12px 3px 0;color:#8a8aaa;font-size:13px;">📍</td>
            <td style="padding:3px 0;color:#4a4a6a;font-size:13px;">İstanbul, Türkiye</td>
          </tr>
        </table>
      </div>
    </div>

    <div style="background:#f8f8ff;padding:16px 32px;text-align:center;border-top:1px solid #e5e5f0;">
      <p style="color:#aaaacc;font-size:11px;margin:0;">
        Bu e-posta otomatik olarak oluşturulmuştur · İstanbul Arel Üniversitesi · Bilgisayar Mühendisliği
      </p>
    </div>
  </div>
</body>
</html>`;

        // ─── E-postaları gönder ─────────────────────────────────────────────────

        // 1. Sana bildirim
        await transporter.sendMail({
            from: `"Portföy Sitesi" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `📬 Yeni Mesaj: ${name} — Portföy Sitesi`,
            html: notificationHtml,
        });

        // 2. Gönderene otomatik yanıt
        await transporter.sendMail({
            from: `"Muhammed Sina Gün" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Mesajınız Alındı — Muhammed Sina Gün`,
            html: autoReplyHtml,
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true, message: 'Mesajınız başarıyla gönderildi.' }),
        };
    } catch (err) {
        console.error('Mail error:', err);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'E-posta gönderilemedi. Lütfen tekrar deneyin.' }),
        };
    }
};
