import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          overflow: auto;
        }
        body.menu-open {
          overflow: hidden;
          position: fixed;
          width: 100%;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
