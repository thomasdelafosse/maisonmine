import { SiegeDisplayVariant } from "@/components/features/siege/types/siegeType";
import {
  VARIANT_STYLES,
  INFORMATIONS,
} from "@/components/features/siege/constants/siegeConstants";

type ItemDetailsType = {
  title: string;
  price: string | number;
  variant?: SiegeDisplayVariant;
};

export function ItemDetails({
  title,
  price,
  variant = "grid",
}: ItemDetailsType) {
  const styles = VARIANT_STYLES[variant];

  return (
    <>
      <p className={styles.title}>{title}</p>
      {variant === "grid" && (
        <p className={styles.price}>
          {!price || price === 0 || price === "0" ? (
            <i>{INFORMATIONS.NOT_AVAILABLE}</i>
          ) : (
            `${price}€`
          )}
        </p>
      )}
    </>
  );
}
