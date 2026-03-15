"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/vent", {
      method: "POST",
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div style={{ padding: 20, color: "white", background: "black", minHeight: "100vh" }}>
      <h1>DissTheBoss 🚀</h1>

      <textarea
        placeholder="Vent here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", height: 100 }}
      />

      <button onClick={handleSubmit} style={{ marginTop: 10 }}>
        Submit
      </button>

      {response && (
        <div style={{ marginTop: 20 }}>
          <h3>AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
