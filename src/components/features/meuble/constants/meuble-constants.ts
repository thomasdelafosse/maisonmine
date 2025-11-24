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

export const PAGE_CONTENT = {
  DESCRIPTION_1:
    "L'atelier vous propose de sublimer vos meubles anciens grâce à notre expertise en restauration. Nous redonnons vie à vos pièces avec des patines soigneusement sélectionnées, respectant l'âme et l'histoire de chaque meuble. De la simple retouche à la transformation complète, nous mettons notre savoir-faire au service de vos trésors familiaux pour leur offrir une seconde jeunesse.",
  DESCRIPTION_2:
    "Disponibles à la vente, des pièces uniques dont certaines n'attendent que de trouver leur place dans votre intérieur.",
} as const;
