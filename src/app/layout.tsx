import type { Metadata } from "next";
import { Press_Start_2P, Space_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CrtOverlay } from "@/components/CrtOverlay";
import { BootScreen } from "@/components/BootScreen";
import { site } from "@/lib/site";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — press start.`,
    template: `%s — ${site.name}`,
  },
  description:
    "JETT is just JETT. A Y2K character from somewhere between the early internet and a forgotten game. Press start.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: site.name,
    title: `${site.name} — press start.`,
    description:
      "JETT is just JETT. A Y2K character from somewhere between the early internet and a forgotten game.",
    url: "/",
    images: ["/images/jett-titlecard.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — press start.`,
    description:
      "JETT is just JETT. A Y2K character from somewhere between the early internet and a forgotten game.",
    images: ["/images/jett-titlecard.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-jett-black text-jett-white">
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-glow" aria-hidden="true" />
        <CrtOverlay />
        <BootScreen />
        <div className="relative z-10 flex flex-col min-h-full">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
