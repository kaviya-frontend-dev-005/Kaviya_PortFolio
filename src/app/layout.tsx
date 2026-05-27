import type { Metadata } from "next";
import "./globals.css";
import Header from "@/Components/HeaderHome";

export const metadata: Metadata = {
  title: "Kaviya M — Frontend React Developer",
  description:
    "Frontend React Developer with 2+ years building production-ready web apps with React.js, Next.js & TypeScript. Based in Chennai, India.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}