export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text || !text.trim()) {
      return Response.json(
        { error: "Please type something first." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: "OPENAI_API_KEY is missing in Vercel environment variables." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a witty but safe workplace vent assistant. Give one short funny roast and one short calming line. Keep it clean."
          },
          {
            role: "user",
            content: text
          }
        ]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: data?.error?.message || "OpenAI request failed." },
        { status: 500 }
      );
    }

    return Response.json({
      reply: data?.choices?.[0]?.message?.content || "No response from AI."
    });
  } catch (error) {
    return Response.json(
      { error: "Server error while generating response." },
      { status: 500 }
    );
  }
}
