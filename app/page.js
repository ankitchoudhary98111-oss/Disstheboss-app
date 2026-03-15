"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleVent = async () => {
    const res = await fetch("/api/vent", {
      method: "POST",
      body: JSON.stringify({ text: input }),
    });

    const data = await res.json();
    setResponse(data.reply);
  };

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
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "40px" }}>DissTheBoss 🚀</h1>

      <textarea
        placeholder="Tell me what your boss did..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          marginTop: "20px",
          padding: "10px",
          width: "300px",
          height: "100px",
          borderRadius: "10px",
        }}
      />

      <button
        onClick={handleVent}
        style={{
          marginTop: "10px",
          padding: "12px 20px",
          borderRadius: "10px",
          background: "#ff3b3b",
          color: "white",
          border: "none",
          fontWeight: "700",
        }}
      >
        Roast My Boss 🔥
      </button>

      {response && (
        <p style={{ marginTop: "20px", opacity: 0.8 }}>{response}</p>
      )}
    </main>
  );
}
