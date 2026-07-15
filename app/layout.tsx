import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bourbon-website.vercel.app"),
  title: {
    default: "Bourbon Energy Services | Marine & Offshore Support",
    template: "%s | Bourbon Energy Services",
  },
  description:
    "Marine operations support, project logistics, and technical services for offshore and industrial requirements.",
  openGraph: {
    title: "Bourbon Energy Services | Marine & Offshore Support",
    description:
      "Coordinated marine operations, project logistics, and technical support from shorebase to offshore location.",
    type: "website",
    images: ["/images/marine-hero-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <body
        className="bg-surface font-body text-on-surface antialiased"
      >
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 bg-secondary px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
