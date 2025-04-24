import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DUCK",
  description: "DUCK Studios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
