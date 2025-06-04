import { ReactNode } from "react";
import Navbar from "./navigation/Navbar";
import Footer from "./footer/Footer";

type LayoutType = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutType) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
}
