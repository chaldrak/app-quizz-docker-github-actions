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
  metadataBase: new URL("https://quiz-docker.ledevmatheux.me"),
  description:
    "Quiz chronométré sur Docker, GitHub Actions et les pratiques CI/CD. 100 questions pour tester vos compétences.",
  openGraph: {
    title: "Quiz Docker & CI/CD - Testez vos connaissances",
    description:
      "Quiz chronométré sur Docker, GitHub Actions et les pratiques CI/CD. 100 questions pour tester vos compétences.",
    type: "website",
    locale: "fr_FR",
    siteName: "Quiz Docker & CI/CD",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Quiz Docker & CI/CD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiz Docker & CI/CD - Testez vos connaissances",
    description:
      "Quiz chronométré sur Docker, GitHub Actions et les pratiques CI/CD. 100 questions pour tester vos compétences.",
    images: ["/cover.png"],
  },
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
