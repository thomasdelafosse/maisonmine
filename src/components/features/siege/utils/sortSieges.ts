import { SanityDocument } from "next-sanity";

export const sortSieges = (sieges: SanityDocument[]) => {
  return [...sieges].sort((a, b) => {
    const positionA = Number(a.position) || Infinity;
    const positionB = Number(b.position) || Infinity;
    return positionB - positionA;
  });
};
