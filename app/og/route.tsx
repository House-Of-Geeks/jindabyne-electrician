import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Licensed Electrician — Snowy Mountains";
  const description =
    searchParams.get("description") ||
    "Residential, commercial, solar and emergency electrical services";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "4px",
              background: "#0EA5E9",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              color: "#0EA5E9",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Jindabyne Electrician
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              color: "#111827",
              fontSize: title.length > 40 ? 52 : 64,
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#374151",
              fontSize: 28,
              lineHeight: 1.5,
              maxWidth: "800px",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            color: "#6B7280",
            fontSize: 20,
            fontWeight: 500,
            opacity: 0.7,
          }}
        >
          jindabyneelectrician.com.au
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
