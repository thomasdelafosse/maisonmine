import { PortableText, PortableTextBlock } from "next-sanity";
import { SiegeDisplayVariant } from "@/components/features/siege/types/siegeType";
import { VARIANT_STYLES } from "@/components/features/siege/constants/siegeConstants";

type HoverContentType = {
  isVisible: boolean;
  content: PortableTextBlock[];
  variant?: SiegeDisplayVariant;
};

export function HoverContent({
  isVisible,
  content,
  variant = "grid",
}: HoverContentType) {
  if (variant !== "grid") return null;

  return (
    <div
      className={`${VARIANT_STYLES.grid.hover} ${
        isVisible ? "opacity-100 md:opacity-0" : "opacity-0"
      } md:group-hover:opacity-100`}
    >
      <div className="mx-4">
        <PortableText value={content} />
      </div>
    </div>
  );
}
