import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, company, type, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Use Resend if RESEND_API_KEY is set, otherwise log and succeed (dev mode)
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Portfolio Contact <contact@riadh-mnasri.com>",
        to: ["riadh.mnasri@gmail.com"],
        subject: `[Portfolio] Nouveau message de ${name}`,
        html: `
          <h2>Nouveau message depuis le portfolio</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ""}
          ${type ? `<p><strong>Type de mission :</strong> ${type}</p>` : ""}
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });
    if (!res.ok) return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  } else {
    console.log("Contact form submission:", { name, email, company, type, message });
  }

  return NextResponse.json({ ok: true });
}
