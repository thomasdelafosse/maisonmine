"use client";

import { useState, useEffect, useContext } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { SidebarToggle } from "./sidebar/SidebarToggle";
import { ArticleContent } from "./sidebar/article-content/ArticleContent";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { MenuContext } from "@/app/providers/MenuProvider";
import { MinedechangesDocument } from "../../types/mine-d-echanges-type";

type MineDEchangesDetailsClientProps = {
  minedechange: MinedechangesDocument;
  allMinedechanges: MinedechangesDocument[];
  activeSlug: string;
};

export default function MineDEchangesDetailsClient({
  minedechange,
  allMinedechanges,
  activeSlug,
}: MineDEchangesDetailsClientProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { setIsOverlayOpen } = useContext(MenuContext);

  useBodyScrollLock(isSidebarOpen);

  useEffect(() => {
    setIsOverlayOpen(isSidebarOpen);
    return () => setIsOverlayOpen(false);
  }, [isSidebarOpen, setIsOverlayOpen]);

  return (
    <div className={isSidebarOpen ? "h-screen overflow-hidden z-50" : ""}>
      <div className="mx-4 md:mx-64 flex flex-row">
        <Sidebar
          blogs={allMinedechanges}
          activeSlug={activeSlug}
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="hidden md:block md:border-r-2 md:border-gray-300 md:mx-2" />

        <ArticleContent title={minedechange.title} body={minedechange.body} />
      </div>
      {!isSidebarOpen && (
        <div className="flex justify-center items-center">
          <SidebarToggle
            open={isSidebarOpen}
            onToggle={() => setIsSidebarOpen((v) => !v)}
          />
        </div>
      )}
    </div>
  );
}

