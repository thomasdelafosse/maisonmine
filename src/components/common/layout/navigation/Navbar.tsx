import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import { MenuContext } from "@/pages/_app";
import { Button } from "@/components/common/reusable-ui/buttons";

type NavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: "CÔTÉ SIÈGE", href: "/cotesiege" },
  { name: "CÔTÉ MEUBLE", href: "/cotemeuble" },
  { name: "UNE MINE D'IDÉES", href: "/uneminedidees" },
  { name: "UNE MINE D'ÉCHANGES", href: "/uneminedechanges" },
  { name: "UNE MINE DE SAVOIR-FAIRE", href: "/techniqueetsavoirfaire" },
  { name: "TARIFS", href: "/tarifs" },
  { name: "CONTACT", href: "/contact" },
];

const Logo = () => (
  <Link href="/" aria-label="go to the home page">
    <Image
      alt="Logo Maison Mine"
      src="/images/Logomaisonmine.png"
      width={250}
      height={250}
      style={{
        width: "auto",
        height: "auto",
      }}
      priority
    />
  </Link>
);

const DesktopNav = () => {
  const router = useRouter();

  return (
    <div className="hidden md:flex md:items-center md:justify-center md:gap-x-8 md:mt-6">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`font-medium text-gray-600 hover:text-black transition-colors  ${
            router.pathname === item.href ? "underline underline-offset-4" : ""
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
    </div>
  );
};

const MobileNav = () => {
  const router = useRouter();
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const MenuIcon = !isMenuOpen ? (
    <Image
      src="/svg/hamburgermenu.svg"
      alt=""
      width={30}
      height={30}
      aria-hidden="true"
    />
  ) : null;

  const CloseIcon = (
    <Image
      src="/svg/delete.svg"
      alt=""
      width={25}
      height={25}
      aria-hidden="true"
    />
  );

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        leftIcon={MenuIcon}
        className="absolute right-4 top-6 md:hidden z-50 p-0"
        aria-label={isMenuOpen ? "close menu" : "open menu"}
      />
      <div
        className={`fixed inset-0 bg-white transition-transform duration-700 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 40 }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        <div className="flex flex-col items-center justify-center w-full px-4 pt-4">
          <Logo />
        </div>
        <Button
          variant="ghost"
          onClick={() => setIsMenuOpen(false)}
          leftIcon={CloseIcon}
          className="absolute right-4 top-6 z-60 p-0"
          aria-label="close menu"
        />

        <nav className="flex flex-col items-center mt-8">
          <div className="flex flex-col items-center justify-start gap-6 text-2xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium text-gray-600 hover:text-black transition-colors ${
                  router.pathname === item.href
                    ? "underline underline-offset-4"
                    : ""
                }`}
                onClick={(e) => {
                  if (router.pathname === item.href) {
                    e.preventDefault();
                    router.reload();
                  }
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-8">
            <a
              href="https://www.instagram.com/maison_mine_/"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={30}
                height={30}
                aria-hidden="true"
                className="fill-current text-gray-600 hover:text-black transition-colors"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

function NavBar() {
  return (
    <header className="relative z-50 mb-4 md:mb-8 pt-4">
      <div className="flex flex-col items-center justify-center w-full px-4 py-1">
        <Logo />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}

export default NavBar;
