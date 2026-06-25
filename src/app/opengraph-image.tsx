import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Diegowritescode — Programación sin pelos en la lengua";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Las fuentes viven en public/og (que el Dockerfile copia al runtime), por lo
// que están disponibles tanto en el build como en el contenedor standalone.
const fontsDir = join(process.cwd(), "public", "og");
const geistBold = readFileSync(join(fontsDir, "Geist-Bold.ttf"));
const geistRegular = readFileSync(join(fontsDir, "Geist-Regular.ttf"));

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "#0d1117",
          backgroundImage:
            "radial-gradient(circle at 75% 15%, rgba(137,87,229,0.45), transparent 45%), radial-gradient(circle at 10% 90%, rgba(88,101,242,0.25), transparent 40%)",
          fontFamily: "Geist",
        }}
      >
        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#161b22",
              border: "2px solid #a371f7",
              color: "#c8a2ff",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            {"</>"}
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#e6edf3" }}>
            diego<span style={{ color: "#a371f7" }}>writescode</span>
          </div>
        </div>

        {/* Titular */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#e6edf3",
              maxWidth: 1000,
            }}
          >
            Programación&nbsp;
            <span style={{ color: "#a371f7" }}>sin pelos en la lengua</span>
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#8b949e", maxWidth: 900 }}>
            Retos diarios · Tips reales para juniors · Las verdades que necesitas escuchar
          </div>
        </div>

        {/* Pie */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#c8a2ff", fontWeight: 700 }}>
            Backend Engineer en fintech · 3+ años en producción
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#8b949e" }}>
            diegowritescode.deviego.xyz
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
      ],
    }
  );
}
