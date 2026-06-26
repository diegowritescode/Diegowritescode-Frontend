import { NextResponse } from "next/server";

// Siempre dinámico: procesa cada POST en el servidor.
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email = "";
  try {
    const body = await request.json();
    email = String(body?.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Petición inválida." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Ese correo no parece válido." }, { status: 400 });
  }

  const webhook = process.env.N8N_SUBSCRIBE_WEBHOOK_URL;
  if (!webhook) {
    // El sitio funciona aunque aún no hayas configurado el webhook en Dokploy.
    console.warn("[subscribe] N8N_SUBSCRIBE_WEBHOOK_URL no está configurada.");
    return NextResponse.json(
      { error: "Las suscripciones aún no están activas. Vuelve pronto." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        source: "diegowritescode.deviego.xyz",
        userAgent: request.headers.get("user-agent") ?? "",
      }),
      // Evita que un n8n lento bloquee la respuesta indefinidamente.
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) throw new Error(`n8n respondió ${res.status}`);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] Error reenviando a n8n:", err);
    return NextResponse.json(
      { error: "No pudimos registrar tu correo. Inténtalo en un momento." },
      { status: 502 }
    );
  }
}
