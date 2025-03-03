import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState, createContext, Dispatch, SetStateAction } from "react";
import Layout from "@/components/common/layout/Layout";

type MenuContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Maison Mine</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content={`width=device-width, initial-scale=1${
            isMenuOpen ? ", maximum-scale=1, user-scalable=no" : ""
          }`}
        />
      </Head>
      <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        <div className={isMenuOpen ? "fixed inset-0 overflow-hidden" : ""}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </MenuContext.Provider>
    </>
  );
}
