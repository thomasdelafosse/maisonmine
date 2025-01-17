import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState, createContext } from "react";

export const MenuContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: (value: boolean) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content={`width=device-width, initial-scale=1${
            isMenuOpen ? ", maximum-scale=1, user-scalable=no" : ""
          }`}
        />
      </Head>
      <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        <div className={isMenuOpen ? "fixed inset-0 overflow-hidden" : ""}>
          <Component {...pageProps} />
        </div>
      </MenuContext.Provider>
    </>
  );
}
