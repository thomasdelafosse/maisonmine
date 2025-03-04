import { PortableText, PortableTextBlock } from "next-sanity";
import { SiegeDisplayVariant } from "../../../types/siegeType";
import { VARIANT_STYLES } from "../../../constants/siegeConstants";

type HoverContentProps = {
  isVisible: boolean;
  content: PortableTextBlock[];
  variant?: SiegeDisplayVariant;
};

export function HoverContent({
  isVisible,
  content,
  variant = "grid",
}: HoverContentProps) {
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
