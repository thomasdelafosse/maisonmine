import { BlogList } from "../BlogList";
import { MinedechangesDocument } from "../../../types/mine-d-echanges-type";
import { SidebarToggle } from "./SidebarToggle";

export function Sidebar({
  blogs,
  activeSlug,
  open,
  onClose,
}: {
  blogs: MinedechangesDocument[];
  activeSlug?: string;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-white transform transition-transform duration-700 ease-in-out md:hidden overflow-y-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="pt-24 px-4 h-full">
          <BlogList
            blogs={blogs}
            activeSlug={activeSlug}
            onItemClick={onClose}
            className="flex flex-col gap-6 mt-32"
          />
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 md:hidden">
            <SidebarToggle open={open} onToggle={onClose} />
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-6 w-1/5">
        <BlogList blogs={blogs} activeSlug={activeSlug} />
      </div>
    </>
  );
}
