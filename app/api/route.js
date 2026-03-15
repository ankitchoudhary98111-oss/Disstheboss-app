export async function POST(req) {
  const { text } = await req.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a witty but safe workplace vent assistant. Give a short roast + one calming line.",
        },
        {
          role: "user",
          content: text,
        },
      ],
    }),
  });

  const data = await response.json();

  return Response.json({
    reply:
      data?.choices?.[0]?.message?.content ||
      "Something went wrong. Try again.",
  });
}
