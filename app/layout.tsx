import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NZEUTEM DOMMOE Eunice Felixtine — Portfolio | Software Engineering, AI & DevOps",
  description:
    "Portfolio de NZEUTEM DOMMOE Eunice Felixtine, étudiante ingénieure en Génie Logiciel (ENSPD), major de promotion. Full Stack, IA, DevOps & Cloud.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="gradient-bg min-h-screen">{children}</body>
    </html>
  );
}
