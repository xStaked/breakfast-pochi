import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { TopBar } from "@/components/top-bar";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { brand, config, isSiteUrlConfigured } from "@/lib/site";
import { jsonLdScript } from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const title = "Desayunos Sorpresa en Soacha | Pochi Desayunos";
const description =
  "Descubre desayunos sorpresa, brunch y cajas de regalo en Soacha. Conoce Mini Box, Brunch Box, Smile Box y Teddy Box. Consulta y pide por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: isSiteUrlConfigured ? new URL(config.siteUrl) : undefined,
  title: {
    default: title,
    template: "%s | Pochi Desayunos",
  },
  description,
  ...(isSiteUrlConfigured ? { alternates: { canonical: "/" } } : {}),
  applicationName: brand.name,
  keywords: [
    "desayunos sorpresa en Soacha",
    "desayunos sorpresa a domicilio Soacha",
    "cajas de regalo Soacha",
    "desayunos sorpresa para cumpleaños",
    "regalos sorpresa Soacha",
    "desayunos románticos Soacha",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: brand.name,
    title,
    description,
    ...(isSiteUrlConfigured ? { url: `${config.siteUrl}/` } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(config.googleSiteVerification
    ? { verification: { google: config.googleSiteVerification } }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${dmSans.variable}`}>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <TopBar />
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <WhatsappFab />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript() }}
        />
      </body>
    </html>
  );
}
