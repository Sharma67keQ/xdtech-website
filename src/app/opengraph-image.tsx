import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0B0F1A 0%, #0F172A 55%, #111827 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "Poppins, sans-serif",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.35), transparent 50%), radial-gradient(circle at 80% 0%, rgba(14, 165, 233, 0.2), transparent 45%)"
          }}
        />
        <div style={{ position: "relative", textAlign: "center" }}>
          <p
            style={{
              fontSize: 18,
              letterSpacing: "0.6em",
              textTransform: "uppercase",
              color: "#60A5FA",
              margin: 0
            }}
          >
            XD TECH
          </p>
          <h1 style={{ fontSize: 64, fontWeight: 600, margin: "16px 0" }}>
            Xalinta Dhibaatoyinka
          </h1>
          <p style={{ fontSize: 22, color: "#CBD5F5", margin: 0 }}>
            Premium software, hardware, and smart devices for the world.
          </p>
        </div>
      </div>
    ),
    size
  );
}
