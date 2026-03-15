export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>
        DissTheBoss 🚀
      </h1>

      <p style={{ opacity: 0.75, marginBottom: "28px", maxWidth: "420px", lineHeight: 1.6 }}>
        Vent. Roast. Heal. Your AI-powered workplace frustration platform is coming alive.
      </p>

      <button
        style={{
          padding: "14px 22px",
          background: "#ff3b3b",
          border: "none",
          borderRadius: "10px",
          color: "white",
          fontSize: "16px",
          fontWeight: "700"
        }}
      >
        Start Venting
      </button>
    </main>
  );
}
