import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Primitive Labs — Intelligence made simple",
  description: "A research studio seeking the shortest path through complex systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}