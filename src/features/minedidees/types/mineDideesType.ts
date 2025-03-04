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

type ImageWithAsset = {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
  legend?: string;
};

type ImageWithLegend = {
  image: ImageWithAsset;
  legend?: string;
};

export type MinedideesDocument = SanityDocument & {
  _id: string;
  title: string;
  slug: { current: string };
  image: ImageWithAsset;
  price?: string;
  bodyOnHover?: string;
  position?: number;
};

export type MinedideesData = MinedideesDocument & {
  imagesWithLegends?: ImageWithLegend[];
  body?: string;
};
