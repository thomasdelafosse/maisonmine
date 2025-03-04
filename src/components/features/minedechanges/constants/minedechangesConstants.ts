export const SANITY_QUERIES = {
  MINEDECHANGES_COLLECTION: `*[_type == "blogs" && defined(slug.current)]|order(publishedAt desc){
    _id, 
    title, 
    slug, 
    publishedAt,
    blogSummaryBody,
    body,
    position
  }`,

  MINEDECHANGES_DETAILS: `*[_type == "blogs" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    body,
    position
  }`,
} as const;
