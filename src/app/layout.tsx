import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Seraj Eldeen",
  description: "This is Portfolio for Seraj Eldeen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
