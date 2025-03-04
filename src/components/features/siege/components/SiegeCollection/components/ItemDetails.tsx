import { SiegeDisplayVariant } from "../../../types/siegeType";
import {
  VARIANT_STYLES,
  INFORMATIONS,
} from "../../../constants/siegeConstants";

type ItemDetailsProps = {
  title: string;
  price: string | number;
  variant?: SiegeDisplayVariant;
};

export function ItemDetails({
  title,
  price,
  variant = "grid",
}: ItemDetailsProps) {
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
