import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { GeistSans } from "geist/font/sans";
import Providers from "@/components/Providers";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const SITE_URL = "https://diegowritescode.deviego.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Diegowritescode — Programación sin pelos en la lengua",
    template: "%s · Diegowritescode",
  },
  description:
    "Retos de programación, tips reales para juniors y las verdades que necesitas escuchar para no ahogarte en el mar de tecnologías. Sin filtros.",
  keywords: [
    "Diegowritescode",
    "programación",
    "retos de programación",
    "tips para juniors",
    "desarrollo de software",
    "entrevistas técnicas",
  ],
  authors: [{ name: "Diego Andrés Ramírez Mejía" }],
  creator: "Diego Andrés Ramírez Mejía",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Diegowritescode — Programación sin pelos en la lengua",
    description:
      "Retos de programación, tips reales para juniors y las verdades que necesitas escuchar. Sin filtros.",
    siteName: "Diegowritescode",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diegowritescode",
    description:
      "Retos de programación y tips reales para juniors. Sin pelos en la lengua.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={GeistSans.className}>
      <body>
        <AppRouterCacheProvider options={{ key: "mui" }}>
          <Providers>
            {children}
            <CookieBanner />
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
