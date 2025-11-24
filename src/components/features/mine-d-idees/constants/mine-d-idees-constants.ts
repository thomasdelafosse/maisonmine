export const VARIANT_STYLES = {
  grid: {
    container:
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-36 mb-12",
    image:
      "rounded-lg shadow-lg object-cover transition-all duration-500 group-hover:scale-[1.02]",
    title: "text-1xl font-light text-gray-500 text-center mt-2",
    price: "text-1xl font-light text-gray-500 text-center mt-2",
    hover:
      "absolute inset-0 bg-white/80 text-black text-1xl text-center font-medium flex flex-col justify-center items-center transition-all duration-500 rounded-lg",
  },
  footer: {
    container: "grid grid-cols-2 gap-4 mx-4 md:grid-cols-6 md:mx-28",
    image: "w-full rounded-lg",
    title: "font-light text-xs text-center",
    price: "hidden",
    hover: "hidden",
  },
} as const;

export const INFORMATIONS = {
  NOT_AVAILABLE: "NON DISPONIBLE",
} as const;

export const PAGE_CONTENT = {
  DESCRIPTION_1:
    "Nos sièges sont présentés dans leur jus ou avec leur structure mise à nue. Chaque carcasse peut être retapissée et personnalisée selon vos goûts pour correspondre parfaitement à vos préférences et à votre intérieur.",
  DESCRIPTION_2:
    "D'autres sièges attendent leur rénovation selon mes inspirations... ou les vôtres. Un projet vous tente ?",
} as const;

export const SANITY_QUERIES = {
  MINEDIDEES_COLLECTION: `*[_type == "minedidees" && defined(slug.current)] {
    _id,
    title,
    slug,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    price,
    bodyOnHover,
    position
  }`,

  MINEDIDEES_DETAILS: `*[_type == "minedidees" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    price,
    bodyOnHover,
    body,
    position
  }`,

  MINEDIDEES_SLUGS: `*[_type == "minedidees" && defined(slug.current)][].slug.current`,
} as const;
