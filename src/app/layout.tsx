import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import Layout from "@/components/common/layout/Layout";
import { Analytics } from "@vercel/analytics/react";
import { MenuProvider } from "./providers/MenuProvider";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Maison Mine",
  description: "Maison Mine, restauration de sièges",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className="antialiased overflow-x-hidden font-sans">
        <MenuProvider>
          <Layout>{children}</Layout>
        </MenuProvider>
        <Analytics />
      </body>
    </html>
  );
}
