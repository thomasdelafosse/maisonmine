import { Button } from "@/components/common/reusable-ui/buttons";
import { MouseEventHandler } from "react";

export function SidebarToggle({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button
      variant="primary"
      size="md"
      className="mt-10 z-50 md:hidden"
      onClick={onToggle}
      aria-expanded={open}
      aria-label={open ? "Close posts list" : "Open posts list"}
    >
      <span className="text-sm font-medium text-gray-500 ">
        {open ? "Retourner à l'article" : "Voir d'autres articles"}
      </span>
    </Button>
  );
}
