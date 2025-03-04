import Link from "next/link";
import { SanityDocument } from "next-sanity";
import SiegeImage from "@/components/common/reusable-ui/images/SiegeImage";
import { SiegeDisplayVariant } from "@/components/features/siege/types/siegeType";
import { VARIANT_STYLES } from "@/components/features/siege/constants/siegeConstants";
import { InfoButton } from "./components/InfoButton";
import { HoverContent } from "./components/HoverContent";
import { ItemDetails } from "./components/ItemDetails";

type SiegeItemProps = {
  siege: SanityDocument;
  isVisible: boolean;
  onToggleVisibility: () => void;
  variant?: SiegeDisplayVariant;
};

export function SiegeItem({
  siege,
  isVisible,
  onToggleVisibility,
  variant = "grid",
}: SiegeItemProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div className="collection-item relative cursor-pointer">
      {variant === "grid" && <InfoButton onClick={onToggleVisibility} />}
      <Link href={`/siege/${siege.slug.current}`}>
        <div className="relative group">
          <SiegeImage
            image={siege.image}
            title={siege.title}
            className={styles.image}
          />
          <HoverContent
            isVisible={isVisible}
            content={siege.bodyOnHover}
            variant={variant}
          />
        </div>
        <ItemDetails
          title={siege.title}
          price={siege.price}
          variant={variant}
        />
      </Link>
    </div>
  );
}
