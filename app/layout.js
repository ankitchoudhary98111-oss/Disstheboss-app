export const metadata = {
  title: "DissTheBoss",
  description: "Vent. Roast. Heal."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#0f0f0f" }}>
        {children}
      </body>
    </html>
  );
}
