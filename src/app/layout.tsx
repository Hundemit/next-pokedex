import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pokédex | Jan Hindemit",
    template: "%s | Pokédex",
  },
  description: "Ein moderner Pokédex gebaut mit Next.js. Entdecke Details zu allen Pokémon, ihre Typen, Fähigkeiten und Statistiken. Eine interaktive App für Pokémon-Fans.",
  keywords: [
    "Pokédex",
    "Pokemon",
    "Next.js Pokedex",
    "Pokemon Datenbank",
    "Pokemon Statistiken",
    "Pokemon Typen",
    "Pokemon Fähigkeiten",
    "Pokemon Informationen",
    "Pokemon Liste",
    "Pokemon Suche",
    "Pokemon Details",
    "Pokemon Generation",
    "Pokemon Evolution",
    "Pokemon Moves",
    "Pokemon Attacken",
    "Pokemon Spielguide",
    "Switch Pokemon Guide",
    "Nintendo RPG Lexikon",
    "Monster sammeln App",
    "Taschenmonster Info",
    "Anime Monster Lexikon",
    "Gameboy Klassiker Hacks",
    "Kanto Region Guide",
    "Johto Abenteuer Tipps",
    "Hoenn Pokedex online",
    "Sinnoh Strategie App",
    "Unova Trainingsplan",
    "Kalos Pokedex Update",
    "Alola Pokemon Übersicht",
    "Galar Region Datenbank",
    "Pokemon Schwert Schild Cheats",
    "Pokemon Karten Scanner",
    "Trading Card Preischeck",
    "Shiny Hunter Toolkit",
    "Pokedoku Rätsel",
    "IV EV Rechner",
    "Team Builder Pokemon",
    "Pokemon Go Begleiter",
    "AR Monster Finder",
    "Legendäre Pokemon Tracker",
    "Raid Boss Counters",
    "Pokemon Typenschwächen",
    "Zuchtrechner Pokemon",
    "Competitive Meta Analyse",
    "Fanart Galerie Pokemon",
    "Cosplay Ideen Pokemon",
    "Anime Soundtrack Playlist",
    "Game Walkthrough Komplettlösung",
    "Easter Eggs Pokemon Spiele",
    "Pokemon Quiz Fragen",
  ],
  authors: [{ name: "Jan Hindemit" }],
  creator: "Jan Hindemit",
  publisher: "Jan Hindemit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://next-pokedex-jan.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://next-pokedex-jan.vercel.app",
    title: "Pokédex - Deine Pokémon-Datenbank",
    description: "Entdecke die Welt der Pokémon mit unserem modernen Pokédex. Alle Pokémon, ihre Typen, Fähigkeiten und Statistiken in einer übersichtlichen Web-App.",
    siteName: "Pokédex",
    images: [
      {
        url: "/public/img/pokeball.png",
        width: 1200,
        height: 630,
        alt: "Next.js Pokédex - Moderne Pokémon-Datenbank",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokédex - Deine Pokémon-Datenbank",
    description: "Entdecke alle Pokémon, ihre Typen, Fähigkeiten und Statistiken in unserem modernen Pokédex.",
    images: ["/public/img/pokeball.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html className="dark" lang="en" suppressHydrationWarning>
        <head />
        <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </>
  );
}
