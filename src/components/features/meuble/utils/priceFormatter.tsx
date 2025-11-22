export const formatPrice = (price?: string | number) => {
  if (!price || Number(price) === 0 || price === "0") {
    return <i>NON DISPONIBLE</i>;
  }
  return `${price}€`;
};
