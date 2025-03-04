export const VARIANT_STYLES = {
  grid: {
    container:
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-36 mb-12",
    image:
      "rounded-lg shadow-lg object-cover w-full h-full transition-all duration-500 group-hover:scale-[1.02]",
    title: "text-1xl font-light text-gray-500 text-center mt-2",
    price: "text-1xl font-light text-gray-500 text-center mt-2",
    hover:
      "absolute inset-0 bg-white/80 text-black text-1xl text-center font-medium flex flex-col justify-center items-center transition-all duration-500 rounded-lg",
  },
  footer: {
    container: "mt-16 grid grid-cols-2 gap-4 mx-4 md:grid-cols-6 md:mx-28",
    image: "w-full rounded-lg",
    title: "font-light text-xs text-center mt-1",
    price: "hidden",
    hover: "",
  },
} as const;

export const INFORMATIONS = {
  NOT_AVAILABLE: "NON DISPONIBLE",
  ZOOM_INSTRUCTIONS: "Double-cliquez pour zoomer & slide pour naviguer",
} as const;

export const SANITY_QUERIES = {
  SIEGE_COLLECTION: `*[_type == "coteSiege" && defined(slug.current)]{
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

  SIEGE_DETAILS: `*[_type == "coteSiege" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    image {
      asset->{
        _id,
        url
      },
      alt,
      legend
    },
    imagesWithLegends[]{
      image {
        asset->{
          _id,
          url
        },
        alt
      },
      legend
    },
    price,
    bodyOnHover,
    body,
    position
  }`,
} as const;
