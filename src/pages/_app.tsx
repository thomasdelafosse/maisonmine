import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, createContext, Dispatch, SetStateAction } from "react";
import Layout from "@/components/common/layout/Layout";
import { Analytics } from "@vercel/analytics/react";

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
      <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        <div className={isMenuOpen ? "fixed inset-0 overflow-hidden" : ""}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </MenuContext.Provider>
      <Analytics />
    </>
  );
}
