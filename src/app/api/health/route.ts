import { NextResponse } from "next/server";

// Endpoint de salud para Dokploy / monitoreo. Responde rápido y sin caché.
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(
    { status: "ok", service: "diegowritescode-frontend" },
    { headers: { "Cache-Control": "no-store" } }
  );
}
