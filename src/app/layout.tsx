import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import Layout from "@/components/common/layout/Layout";
import { Analytics } from "@vercel/analytics/react";
import { MenuProvider } from "./providers/MenuProvider";

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
  "use cache";
  return (
    <html lang="fr">
      <body className="antialiased overflow-x-hidden">
        <MenuProvider>
          <Layout>{children}</Layout>
        </MenuProvider>
        <Analytics />
      </body>
    </html>
  );
}
