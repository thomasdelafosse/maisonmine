export const SANITY_QUERIES = {
  MEUBLE_COLLECTION: `*[_type == "coteMeuble"]{
    _id,
    title,
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
} as const;
