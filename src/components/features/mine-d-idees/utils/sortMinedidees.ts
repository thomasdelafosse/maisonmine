import { MinedideesDocument } from "../types/mine-d-idees-type";

export const sortMinedidees = (minedidees: MinedideesDocument[]) => {
  return [...minedidees].sort((a, b) => {
    const positionA = Number(a.position) || Infinity;
    const positionB = Number(b.position) || Infinity;
    return positionB - positionA;
  });
};
