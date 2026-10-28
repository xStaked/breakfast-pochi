import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pochi Desayunos · Desayunos sorpresa y cajas de regalo en Soacha";

export default async function OpengraphImage() {
  const badge = await readFile(join(process.cwd(), "public/images/logo-badge.png"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 34,
          backgroundColor: "#fff9f0",
          fontFamily: "serif",
        }}
      >
        <img
          src={`data:image/png;base64,${badge.toString("base64")}`}
          width={300}
          height={300}
          alt=""
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 68, color: "#30262a" }}>Desayunos sorpresa en Soacha</div>
          <div style={{ fontSize: 34, color: "#c93a5a" }}>
            Cajas de regalo para cumpleaños, aniversarios y ocasiones especiales
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
