"use client";
import { useState, useEffect, useContext } from "react";

import LoadingSpinner from "@/components/common/reusable-ui/loaders/LoadingSpinner";
import { useMinedechangesDetails } from "../../hooks/useMinedechangesDetails";
import { Sidebar } from "./sidebar/Sidebar";
import { SidebarToggle } from "./sidebar/SidebarToggle";
import { ArticleContent } from "./sidebar/article-content/ArticleContent";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { MenuContext } from "@/app/providers/MenuProvider";

export default function MineDEchangesDetails({ slug }: { slug: string }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { minedechange, allMinedechanges, loading } =
    useMinedechangesDetails(slug);
  const { setIsOverlayOpen } = useContext(MenuContext);

  useBodyScrollLock(isSidebarOpen);

  useEffect(() => {
    setIsOverlayOpen(isSidebarOpen);
    return () => setIsOverlayOpen(false);
  }, [isSidebarOpen, setIsOverlayOpen]);

  if (loading || !minedechange) {
    return <LoadingSpinner />;
  }

  return (
    <div className={isSidebarOpen ? "h-screen overflow-hidden z-50" : ""}>
      <div className="mx-4 md:mx-64 flex flex-row">
        <Sidebar
          blogs={allMinedechanges}
          activeSlug={slug}
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
