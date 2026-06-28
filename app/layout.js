import "./globals.css";

export const metadata = {
  title: "Market",
  description: "Online Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
