import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0A0F",
          color: "#F1F5F9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#4ADE80",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 28, color: "#94A3B8", display: "flex" }}>
            Disponible pour missions freelance
          </div>
        </div>

        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            display: "flex",
            background: "linear-gradient(135deg, #F59E0B 0%, #F97316 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Riadh MNASRI
        </div>

        <div style={{ fontSize: 40, color: "#F1F5F9", marginTop: 12, display: "flex" }}>
          Senior Tech Lead &amp; Architect
        </div>

        <div style={{ fontSize: 28, color: "#94A3B8", marginTop: 20, display: "flex" }}>
          20+ ans Java/Kotlin · Cloud Native · AI Integration · Paris
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
          }}
        >
          {["Executive MBA Polytechnique", "780€/j · Freelance"].map((badge) => (
            <div
              key={badge}
              style={{
                display: "flex",
                fontSize: 24,
                padding: "10px 24px",
                borderRadius: 999,
                border: "1px solid rgba(245,158,11,0.35)",
                color: "#F59E0B",
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
