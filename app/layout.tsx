import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const roboto = localFont({
  src: "../assets/fonts/roboto.ttf",
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Quiz Docker & CI/CD - Testez vos connaissances",
  description:
    "Quiz chronométré sur Docker, GitHub Actions et les pratiques CI/CD. 100 questions pour tester vos compétences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
