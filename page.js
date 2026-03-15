export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#0f0f0f",
        color: "white",
        padding: "24px",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        DissTheBoss 🚀
      </h1>
      <p style={{ opacity: 0.7, marginBottom: "20px" }}>
        Vent. Roast. Heal.
      </p>
      <button
        style={{
          marginTop: "10px",
          padding: "12px 20px",
          borderRadius: "10px",
          background: "#ff3b3b",
          color: "white",
          border: "none",
          fontWeight: "700"
        }}
      >
        Start Venting
      </button>
    </main>
  );
}
