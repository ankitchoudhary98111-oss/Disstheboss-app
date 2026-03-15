"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVent = async () => {
    try {
      setLoading(true);
      setResponse("");

      const res = await fetch("/api/vent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: input })
      });

      const data = await res.json();

      if (!res.ok) {
        setResponse(data.error || "Something went wrong.");
      } else {
        setResponse(data.reply || "No AI reply returned.");
      }
    } catch (err) {
      setResponse("Request failed. Check deployment logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#0f0f0f",
        color: "white",
        padding: "24px",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        DissTheBoss 🚀
      </h1>

      <textarea
        placeholder="Tell me what your boss did..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "320px",
          height: "120px",
          borderRadius: "12px",
          padding: "12px",
          fontSize: "18px"
        }}
      />

      <button
        onClick={handleVent}
        style={{
          marginTop: "14px",
          padding: "14px 22px",
          borderRadius: "10px",
          background: "#ff3b3b",
          color: "white",
          border: "none",
          fontWeight: "700",
          fontSize: "18px"
        }}
      >
        {loading ? "Thinking..." : "Roast My Boss 🔥"}
      </button>

      {response ? (
        <div
          style={{
            marginTop: "20px",
            maxWidth: "340px",
            background: "#1a1a1a",
            borderRadius: "12px",
            padding: "16px",
            lineHeight: 1.6
          }}
        >
          {response}
        </div>
      ) : null}
    </main>
  );
}
