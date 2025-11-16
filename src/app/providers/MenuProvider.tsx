"use client";
import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from "react";

export type MenuContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  // Indicates any overlay (e.g., blog sidebar) that should force the navbar to be fixed
  isOverlayOpen: boolean;
  setIsOverlayOpen: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  isOverlayOpen: false,
  setIsOverlayOpen: () => {},
});

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  return (
    <MenuContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, isOverlayOpen, setIsOverlayOpen }}
    >
      {children}
    </MenuContext.Provider>
  );
}
