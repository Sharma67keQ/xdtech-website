import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 600
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0B0F1A",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          color: "white",
          fontFamily: "Poppins, sans-serif"
        }}
      >
        <div>
          <p
            style={{
              fontSize: 16,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#60A5FA",
              margin: 0
            }}
          >
            XD TECH
          </p>
          <h1 style={{ fontSize: 54, fontWeight: 600, margin: "16px 0" }}>
            Investor-grade innovation
          </h1>
          <p style={{ fontSize: 20, color: "#CBD5F5", margin: 0 }}>
            Xalinta Dhibaatoyinka
          </p>
        </div>
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: 999,
            border: "1px solid rgba(59, 130, 246, 0.6)",
            boxShadow: "0 0 60px rgba(59, 130, 246, 0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#60A5FA",
            fontSize: 24,
            letterSpacing: "0.2em"
          }}
        >
          XD TECH
        </div>
      </div>
    ),
    size
  );
}
