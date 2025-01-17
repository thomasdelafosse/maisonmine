import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: "COTÉ SIÈGE", href: "/cotesiege" },
    { name: "COTÉ MEUBLE", href: "/cotemeuble" },
    { name: "UNE MINE D'IDÉES", href: "/uneminedidees" },
    { name: "UNE MINE D'ÉCHANGES", href: "/uneminedechanges" },
    { name: "UNE MINE DE SAVOIR-FAIRE", href: "/techniqueetsavoirfaire" },
    { name: "TARIFS", href: "/tarifs" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="absolute left-0 right-0 top-0 z-50">
      <div
        className={`flex flex-col items-center justify-center ${
          isMenuOpen
            ? "fixed inset-0 z-20 flex flex-col bg-white overflow-y-auto h-full" // burger menu open style
            : ""
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <Link href="/" aria-label="logo">
            <Image
              alt="logomaisonmine"
              src="/images/maisonminelogo.png"
              width={250}
              height={250}
              style={{
                width: "auto",
                height: "auto",
              }}
              priority
            />
          </Link>
          <div className="md:hidden absolute top-6 right-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M 20.248047 2.984375 A 0.750075 0.750075 0 0 0 19.724609 3.2148438 L 12 10.939453 L 4.2753906 3.2148438 A 0.750075 0.750075 0 0 0 3.7363281 2.9882812 A 0.750075 0.750075 0 0 0 3.2148438 4.2753906 L 10.939453 12 L 3.2246094 19.714844 A 0.75130096 0.75130096 0 1 0 4.2851562 20.775391 L 12 13.060547 L 19.716797 20.779297 A 0.75130096 0.75130096 0 1 0 20.779297 19.716797 L 13.060547 12 L 20.785156 4.2753906 A 0.750075 0.750075 0 0 0 20.248047 2.984375 z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="grow">
          <div
            className={`md:mr-6 md:flex md:items-center md:justify-end md:gap-x-8 ${
              isMenuOpen
                ? " flex  h-full flex-col items-center justify-start gap-3 text-2xl" // burger menu open style
                : "hidden"
            }`}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold text-gray-600 hover:text-black ${
                  router.pathname === item.href
                    ? "underline underline-offset-4"
                    : ""
                }`}
                onClick={(e) => {
                  if (router.pathname === item.href) {
                    e.preventDefault();
                    router.reload();
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            {isMenuOpen ? (
              <div className="absolute bottom-0 mb-4 flex items-center justify-center w-full px-4 ">
                <a
                  href="https://www.instagram.com/maison_mine_/"
                  aria-label="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width={30}
                    height={30}
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
