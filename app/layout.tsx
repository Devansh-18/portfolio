import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devansh Dubey | Software Developer Portfolio",
  description:
    "Portfolio of Devansh Dubey — Full Stack Developer skilled in Next.js, React, Node.js, WebRTC, AI/ML and scalable system design.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Devansh Dubey | Software Developer",
    description: "Next.js · React · Node.js · AI · WebRTC",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
