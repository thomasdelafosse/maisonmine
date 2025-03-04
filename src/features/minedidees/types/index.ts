import { ReactElement } from "react";
import { SanityDocument } from "next-sanity";

export type MinedideesCollectionProps = {
  className?: string;
  nameClassName?: string;
  innerDivClassName?: string;
  imageClassName?: string;
  showInnerText?: boolean;
  svgElement?: ReactElement;
  priceClassName?: string;
  slug?: string;
};

export type MineDetailsContentProps = {
  slug: string;
};

export type MinedideesDocument = SanityDocument & {
  _id: string;
  title: string;
  slug: { current: string };
  image: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  price?: string;
  bodyOnHover?: any[];
  body?: any[];
  position?: number;
};
